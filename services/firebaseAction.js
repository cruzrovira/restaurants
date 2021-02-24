import firebase from "./firebase";

const db = firebase.firestore();
const auth = firebase.auth();

export const isUserLogged = () => {
  let isLogged = false;
  auth.onAuthStateChanged((user) => {
    user !== null && (isLogged = true);
  });
  return isLogged;
};
