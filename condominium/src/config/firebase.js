import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxm2gamBQ0zDuguqa5adUVrMVjtrZhjCA",
  authDomain: "condominium-c00bf.firebaseapp.com",
  projectId: "condominium-c00bf",
  storageBucket: "condominium-c00bf.appspot.com",
  messagingSenderId: "146612262701",
  appId: "1:146612262701:web:0a023684291f2211c4a5a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db