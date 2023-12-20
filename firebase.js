// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyfb4oveX2Zgea0dyKeF3qQIMTNFzGEqs",
  authDomain: "portfolio-db-392d1.firebaseapp.com",
  projectId: "portfolio-db-392d1",
  storageBucket: "portfolio-db-392d1.appspot.com",
  messagingSenderId: "509602650600",
  appId: "1:509602650600:web:258db4d5801cd81ca82c5d",
  measurementId: "G-ZJCZXZWFXW",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
