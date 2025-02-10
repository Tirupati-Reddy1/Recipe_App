
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAKE5HtnUo22g-dwvzX8s5VoEIDnb49Mj4",
    authDomain: "js-project-c49ba.firebaseapp.com",
    projectId: "js-project-c49ba",
    storageBucket: "js-project-c49ba.firebasestorage.app",
    messagingSenderId: "399564416036",
    appId: "1:399564416036:web:64da4272c7cbb57ad1a4b1",
    measurementId: "G-1ZT8Q1RY89"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};