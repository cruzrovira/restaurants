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

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const registerUser = async (email, password) => {
  const resut = { statusReponse: true, error: null };
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log(getCurrentUser());
  } catch (error) {
    resut.statusReponse = false;
    resut.error = "Este correo ya ha sido reguistrado";
  }
  return resut;
};

export const closeSession = async () => {
  await auth.signOut();
};
