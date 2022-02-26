import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAr4FCdAFrfH2aisma7Fu4LKP757on_Vc4",
    authDomain: "facebook-cl-43504.firebaseapp.com",
    projectId: "facebook-cl-43504",
    storageBucket: "facebook-cl-43504.appspot.com",
    messagingSenderId: "802108335813",
    appId: "1:802108335813:web:44c6a8465df7274b4d32ac"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(); 
const provider = new FacebookAuthProvider();

export { auth, db, provider };
