import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANJinpyJDEEBz20UzNCSm_M8U9V2HDztE",
  authDomain: "instagram-clone-ba8bc.firebaseapp.com",
  databaseURL: "https://instagram-clone-ba8bc-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-ba8bc",
  storageBucket: "instagram-clone-ba8bc.appspot.com",
  messagingSenderId: "19672470616",
  appId: "1:19672470616:web:35f8d34baffbc89170e62d",
  measurementId: "G-G6K3VBN62Y",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;
