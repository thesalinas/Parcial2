const admin = require("firebase-admin");
const firebase = require("firebase");

const serviceAccount = require("./parcial2-7f122-firebase-adminsdk-kjhtt-7d6e287c0a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-7f122.firebaseio.com",
});

var firebaseConfig = {
  apiKey: "AIzaSyAjUMo1nd_BbLuvZU3Qe8wKS68_x4XWWzc",
  authDomain: "parcial2-7f122.firebaseapp.com",
  databaseURL: "https://parcial2-7f122.firebaseio.com",
  projectId: "parcial2-7f122",
  storageBucket: "parcial2-7f122.appspot.com",
  messagingSenderId: "268452423009",
  appId: "1:268452423009:web:8c68b76e24bbf14a6fd120",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };
