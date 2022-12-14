import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD0Wi0q6l6pg3D8jX2QK57MLKHx3QgJUrY",
  authDomain: "mealstogo-f8deb.firebaseapp.com",
  projectId: "mealstogo-f8deb",
  storageBucket: "mealstogo-f8deb.appspot.com",
  messagingSenderId: "848012696618",
  appId: "1:848012696618:web:d8c3d2249d56572dbbf753",
};

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
};

export const firebaseApp = createFirebaseApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

//const db = getFirestore(firebaseApp);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
