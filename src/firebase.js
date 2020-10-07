import * as firebase from "firebase";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkK2jVyYWoyPbGoXx8GE6aTJ4Mp2mDPkA",
  authDomain: "react-crud-87845.firebaseapp.com",
  databaseURL: "https://react-crud-87845.firebaseio.com",
  projectId: "react-crud-87845",
  storageBucket: "react-crud-87845.appspot.com",
  messagingSenderId: "114710939774",
  appId: "1:114710939774:web:e15cab6dc0b37180b0702f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
