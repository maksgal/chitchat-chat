import {
  collection,
  getDocs,
  setDoc,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const API_KEY = process.env.API_KEY;
// const APP_ID = process.env.APP_ID;
const firebaseConfig = {
  apiKey: "AIzaSyBwJkIPFS2zb9aJMPlPTahXyQtNlEbfb9o",
  authDomain: "chitchat-30475.firebaseapp.com",
  projectId: "chitchat-30475",
  storageBucket: "chitchat-30475.appspot.com",
  messagingSenderId: "494648655623",
  appId: "1:494648655623:web:87820ec51398f038ab4fa2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();

export const getCurrentUser = () => {
  return auth.currentUser;
};

//Auth - related functions

export const signInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
  }
};

export const createUserWithEmail = (email, password, setError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      setError(error.message);
    });
};

export const signInWithEmail = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      if (userCredential.user) console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      setError(error.message);
    });
};

// User info updating

export const editProfile = (newName, avatarURL) => {
  const updateObj = {
    displayName: newName,
    photoURL: avatarURL,
  };
  updateProfile(auth.currentUser, updateObj)
    .then((response) => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateAvatar = (newName) => {
  if (newName !== "") {
    updateProfile(auth.currentUser, {
      displayName: newName,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
};

export const UploadAvatar = () => {};

//Message - related

const messagesRef = collection(db, "messages");

export const getMessagesFromDBOnStart = async () => {
  const q = await getDocs(query(messagesRef, orderBy("time"), limit(2000)));
  const messagesArr = [];
  await q.forEach((doc) => {
    messagesArr.push(doc.data());
  });
  return messagesArr;
};

export const updateMessagesOnChange = (setMessages) => {
  onSnapshot(
    query(messagesRef, orderBy("time"), limit(2000)),
    (querySnapshot) => {
      let updatedList = [];
      querySnapshot.forEach((doc) => {
        updatedList.push(doc.data());
      });
      setMessages(updatedList);
    }
  );
};

export const sendMessage = async (user, text) => {
  await setDoc(doc(messagesRef), {
    userID: user.uid,
    userName: user.displayName,
    avatar: user.photoURL,
    text: text,
    time: serverTimestamp(),
  });
  return;
};
