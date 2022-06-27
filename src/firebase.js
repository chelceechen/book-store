import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import "dotenv/config";
console.log("process.env.API_KEY", process.env);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCRZFzJGewjOj0JfpRW_GiwPdZfOfsYWMs",
  authDomain: "book-store-6280a.firebaseapp.com",
  projectId: "book-store-6280a",
  storageBucket: "book-store-6280a.appspot.com",
  messagingSenderId: "238994175581",
  appId: "book-store-6280a.firebaseapp.com",
  measurementId: "G-ZL27KSGH05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
