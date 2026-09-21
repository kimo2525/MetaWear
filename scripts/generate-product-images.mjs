import Replicate from "replicate";
import sharp from "sharp";
import dotenv from "dotenv";

import { readFile, writeFile, mkdir, access } from "node:fs/promises";

import path from "node:path";

dotenv.config();

if (!process.env.REPLICATE_API_TOKEN) {
  throw new Error("Missing REPLICATE_API_TOKEN. Add it to your .env file.");
}

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const DATA_FILE = "./spliceIntoSmallerArray.json";
const OUTPUT_DIR = "./public/products";

const MODEL = "black-forest-labs/flux-dev";

// -------------------------------
// Read products
// -------------------------------

const raw = await readFile(DATA_FILE, "utf8");
const shopData = JSON.parse(raw);

// Your JSON is:
// {
//   "batman": [...],
//   "superman": [...],
//   ...
// }

const products = Object.values(shopData).flat();
// const products = Object.values(shopData).flat().slice(0, 3);

console.log(`Found ${products.length} products.`);

await mkdir(OUTPUT_DIR, {
  recursive: true,
});

// -------------------------------
// Prompt generator
// -------------------------------

function createPrompt(product) {
  const colors = product.colors?.join(", ") || "appropriate colors";

  const features = product.features?.join(", ") || "";

  return `
Premium realistic e-commerce product photography.

Product:
${product.title}

Garment type:
${product.category}

Visual inspiration:
${product.character}

Product description:
${product.description}

Primary colors:
${colors}

Garment details:
${features}

Create a realistic physical clothing product based on this description.

IMPORTANT COMPOSITION:
- exactly one garment
- front-facing product view
- entire garment visible
- garment centered in the frame
- generous empty space around the garment
- clean neutral light-gray studio background
- subtle realistic shadow underneath
- realistic fabric texture
- realistic stitching and folds
- premium online fashion-store photography
- symmetrical professional composition
- no human model
- no mannequin
- no hanger
- no packaging
- no props
- no price tags
- no floating objects
- no watermark
- no text outside the garment
- square 1:1 composition

DESIGN DIRECTION:
Create an original superhero-inspired graphic appropriate for
"${product.character}".

Capture the visual mood, colors and themes associated with the
description, while keeping the clothing design original and suitable
for a fictional fashion brand called MetaWear.

Do not reproduce an existing commercial product photograph.

The final result should look like a real product photograph from a
premium e-commerce clothing catalog.
`.trim();
}

// -------------------------------
// Filename helper
// -------------------------------

function getOutputFilename(product) {
  const originalName = path.basename(product.image);

  const nameWithoutExtension = path.parse(originalName).name;

  return `${nameWithoutExtension}.webp`;
}

// -------------------------------
// Check whether file exists
// -------------------------------

async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

// -------------------------------
// Generate one product
// -------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function generateProduct(product, index) {
  const filename = getOutputFilename(product);

  const outputPath = path.join(OUTPUT_DIR, filename);

  console.log(`\n[${index + 1}/${products.length}] ${product.title}`);

  // Don't pay twice if we've already generated it.
  if (await fileExists(outputPath)) {
    console.log(`✓ Already exists — skipping ${filename}`);
    return;
  }

  const prompt = createPrompt(product);

  console.log("Generating...");

  // const output = await replicate.run(MODEL, {
  //   input: {
  //     prompt,

  //     aspect_ratio: "1:1",

  //     num_outputs: 1,

  //     output_format: "webp",

  //     output_quality: 90,

  //     guidance: 3.5,

  //     num_inference_steps: 28,

  //     go_fast: true,
  //   },
  // });
  let output;

  const MAX_RETRIES = 5;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      output = await replicate.run(MODEL, {
        input: {
          prompt,
          aspect_ratio: "1:1",
          num_outputs: 1,
          output_format: "webp",
          output_quality: 90,
          guidance: 3.5,
          num_inference_steps: 28,
          go_fast: true,
        },
      });

      break;
    } catch (error) {
      if (error.response?.status === 429) {
        const retryAfter =
          Number(error.response.headers.get("retry-after")) || 10;

        // Give Replicate a little extra breathing room.
        const waitSeconds = retryAfter + 2;

        console.log(
          `⏳ Rate limited. Waiting ${waitSeconds}s before retrying...`,
        );

        await sleep(waitSeconds * 1000);

        continue;
      }

      throw error;
    }
  }

  if (!output) {
    throw new Error(
      `Failed to generate ${product.title} after ${MAX_RETRIES} attempts.`,
    );
  }

  if (!output?.[0]) {
    throw new Error(`Replicate returned no image for ${product.title}`);
  }

  // Replicate returns a FileOutput / ReadableStream.
  const blob = await output[0].blob();

  const inputBuffer = Buffer.from(await blob.arrayBuffer());

  // Resize the generated source to exactly 600 × 600.
  const finalImage = await sharp(inputBuffer)
    .resize(600, 600, {
      fit: "contain",
      background: {
        r: 245,
        g: 245,
        b: 245,
      },
    })
    .webp({
      quality: 88,
    })
    .toBuffer();

  await writeFile(outputPath, finalImage);

  console.log(`✓ Saved: ${outputPath}`);
}

// -------------------------------
// Generate catalog sequentially
// -------------------------------

console.log("\nStarting MetaWear image generation...");

for (let i = 0; i < products.length; i++) {
  try {
    await generateProduct(products[i], i);
  } catch (error) {
    console.error(`✗ Failed: ${products[i].title}`);

    console.error(error);

    // STOP rather than continuing to spend money
    // if something unexpected happens.
    break;
  }
}
for (let i = 0; i < products.length; i++) {
  try {
    await generateProduct(products[i], i);

    // Stay comfortably below Replicate's current
    // unauthenticated-payment rate limit.
    if (i < products.length - 1) {
      console.log("⏳ Waiting before next product...");
      await sleep(12_000);
    }
  } catch (error) {
    console.error(`✗ Failed: ${products[i].title}`);

    console.error(error);

    break;
  }
}
console.log("\nGeneration process finished.");
