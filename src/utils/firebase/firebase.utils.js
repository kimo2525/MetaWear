import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  verifyBeforeUpdateEmail,
  applyActionCode,
  reload,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9PwfuqVp_de0MQsy-METNOq-zmD28Ws4",
  authDomain: "crwn-clothing-db-fea6b.firebaseapp.com",
  projectId: "crwn-clothing-db-fea6b",
  storageBucket: "crwn-clothing-db-fea6b.firebasestorage.app",
  messagingSenderId: "1095232412314",
  appId: "1:1095232412314:web:113baafae18e1d56ef5d23",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field,
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const updateUserDocument = async (uid, data) => {
  const userDocRef = doc(db, "users", uid);

  await updateDoc(userDocRef, data);

  const userSnapshot = await getDoc(userDocRef);

  return {
    uid,
    ...userSnapshot.data(),
  };
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "metas");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {},
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log("error creating the user", error.message);
//     }
//   }

//   return userDocRef;
// };
// export const changeUserEmail = async (newEmail) => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if (!user) return;

//   await verifyBeforeUpdateEmail(user, newEmail);
// };

export const requestEmailChange = async (newEmail) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No authenticated user.");
  }

  const actionCodeSettings = {
    url: "http://localhost:3000/youraccount",
  };

  await verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        mobileNumber: "",
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // const userSnapshot = await getDoc(userDocRef, "userDocRef");

  console.log(userSnapshot.data(), "userSnapshot.data()");
  return userDocRef;
};
// const userDocRef = await createUserDocumentFromAuth(user);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
