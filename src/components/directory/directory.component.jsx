import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Batman",
    imageUrl: "/products/batman-gotham-night.webp",
    route: "shop/Batman",
  },
  {
    id: 2,
    title: "Superman",
    imageUrl: "/products/kryptonian-sweatshirt.webp",
    route: "shop/Superman",
  },
  {
    id: 3,
    title: "Wonder Woman",
    imageUrl: "/products/wonder-woman-warrior.webp",
    route: "shop/Wonder Woman",
  },
  {
    id: 4,
    title: "The Flash",
    imageUrl: "/products/flash-runner.webp",
    route: "shop/The Flash",
  },
  {
    id: 5,
    title: "Aquaman",
    imageUrl: "/products/ocean-guardian.webp",
    route: "shop/Aquaman",
  },
  {
    id: 6,
    title: "Green Lantern",
    imageUrl: "/products/lantern-corps.webp",
    route: "shop/Green Lantern",
  },
  {
    id: 7,
    title: "Justice League",
    imageUrl: "/products/justice-varsity.webp",
    route: "shop/Justice League",
  },
  {
    id: 8,
    title: "DC Comics",
    imageUrl: "/products/comic-panel.webp",
    route: "shop/DC Comics",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
