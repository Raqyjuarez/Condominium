import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC4Lp1ne8EmiqiHqEuFV-yMTENMQPQGO54",
    authDomain: "proyecto-web-30710.firebaseapp.com",
    projectId: "proyecto-web-30710",
    storageBucket: "proyecto-web-30710.appspot.com",
    messagingSenderId: "811617231711",
    appId: "1:811617231711:web:d2d0d5ce2f062d2b160cea"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

