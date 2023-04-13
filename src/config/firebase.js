
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyAACRBu6jS-7IuoyOw3lSdCDdzkQ8c7Xf0",
  authDomain: "projetoapp-clone-tiktok.firebaseapp.com",
  projectId: "projetoapp-clone-tiktok",
  storageBucket: "projetoapp-clone-tiktok.appspot.com",
  messagingSenderId: "579364522169",
  appId: "1:579364522169:web:7486a8468a3fe31e5bf368"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
