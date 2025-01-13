import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider, 
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log("==========result=========: ", result.user)
  const user = result.user;

  // add user to firestore
};

export const doSignInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Facebook sign-in result: ", result.user);
    const user = result.user;

    // Add user to Firestore or perform additional logic if needed
  } catch (error) {
    console.error("Error during Facebook sign-in: ", error);
    throw error; // Optionally propagate the error for the caller to handle
  }
};

export const doSignInWithApple = async () => {
  const provider = new OAuthProvider("apple.com"); 
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Apple sign-in result: ", result.user);
    const user = result.user;

    // Thêm logic xử lý người dùng hoặc lưu vào Firestore
  } catch (error) {
    console.error("Error during Apple sign-in: ", error);
    throw error;
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
