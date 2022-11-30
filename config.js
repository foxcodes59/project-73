import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDDbu-gxwogUdvemumSFhiKDOswVoeUhBQ",
  authDomain: "project-71-8f421.firebaseapp.com",
  projectId: "project-71-8f421",
  storageBucket: "project-71-8f421.appspot.com",
  messagingSenderId: "147526777106",
  appId: "1:147526777106:web:2d568beef97905242d5bcb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
