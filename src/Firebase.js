import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByd-O4vrZZfsTKDgizf9FRpmLMaLD_aVY",
    authDomain: "whatsapp-clone-75e60.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-75e60.firebaseio.com",
    projectId: "whatsapp-clone-75e60",
    storageBucket: "whatsapp-clone-75e60.appspot.com",
    messagingSenderId: "361768427164",
    appId: "1:361768427164:web:72f42f58555e2682ca5759",
    measurementId: "G-RCGQ6ZN5PZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
