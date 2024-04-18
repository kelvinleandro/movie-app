// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence  } from "firebase/auth/"
import { getFirestore } from 'firebase/firestore/lite'
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2shtoS6LcKywy1lvqrgzGRFxCeJxgTt4",
  authDomain: "react-native-course-bc569.firebaseapp.com",
  databaseURL: "https://react-native-course-bc569-default-rtdb.firebaseio.com",
  projectId: "react-native-course-bc569",
  storageBucket: "react-native-course-bc569.appspot.com",
  messagingSenderId: "448735929798",
  appId: "1:448735929798:web:d0d54d647ce9a05751bec7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FIRESTORE = getFirestore(FIREBASE_APP);
