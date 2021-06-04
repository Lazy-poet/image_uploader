const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCgZXg7m9MjyAby2x4aMsmnNmNriAAYf_A",
    authDomain: "uno-lodging.firebaseapp.com",
    projectId: "uno-lodging",
    storageBucket: "uno-lodging.appspot.com",
    messagingSenderId: "955167042644",
    appId: "1:955167042644:web:0f8cf004f6d1c9e71591c1",
    measurementId: "G-TMEQ0CM6T4"
  };

 const db = firebase.initializeApp(firebaseConfig).firestore();
 
 module.exports = db;