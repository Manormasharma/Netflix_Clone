import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8DlcBiHYPbp4LfYD69BwUHlQKB1QsJd8",
  authDomain: "netflix-clone-bef0e.firebaseapp.com",
  projectId: "netflix-clone-bef0e",
  storageBucket: "netflix-clone-bef0e.appspot.com",
  messagingSenderId: "983456668546",
  appId: "1:983456668546:web:51c11006b09bfb57db4d9b",
  measurementId: "G-9LW0ZCXR6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();