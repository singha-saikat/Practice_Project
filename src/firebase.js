// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYUuaXJLvSe2DmWoEYpqkE2_PYatzZqYc",
  authDomain: "uestbook-84b6c.firebaseapp.com",
  projectId: "uestbook-84b6c",
  storageBucket: "uestbook-84b6c.firebasestorage.app",
  messagingSenderId: "555255988650",
  appId: "1:555255988650:web:1c3d178117a9b833e36bd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email,password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    return user;
  }catch(err){
    console.log(err.message);
    throw (err)
  }
}

const loginWIthEmailAndPassword = async (email,password) => {
  try{
    const res = await signInWithEmailAndPassword(auth,email,password);
    return res.user;
  }catch(err){
    console.log(err.message);
    throw (err)
  }
}

const passwordReset = async (email) => {
  try{
    await sendPasswordResetEmail(auth,email);
    alert("Password reset link sent!");
  }catch(err){
    console.log(err.message);
    throw (err)
  }
}

export {registerWithEmailAndPassword , loginWIthEmailAndPassword,passwordReset };