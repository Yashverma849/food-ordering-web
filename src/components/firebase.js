// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXvNyXjYfj4Pt4t4syjhyRqj0p1MPemRg",
  authDomain: "food-ordering-web-e1cb7.firebaseapp.com",
  projectId: "food-ordering-web-e1cb7",
  storageBucket: "food-ordering-web-e1cb7.appspot.com",
  messagingSenderId: "387014493645",
  appId: "1:387014493645:web:94d64c6c21b89c435a3084",
  measurementId: "G-C54QV226LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional, if you use analytics

// Initialize Firebase Authentication and Google Auth provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export auth and provider so that they can be imported elsewhere
export { auth, provider };
