import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJz4EFS51ndMKSqxmcaBoDEoD9vAxhPT0",
  authDomain: "c60-p-f670a.firebaseapp.com",
  databaseURL: "https://c60-p-f670a-default-rtdb.firebaseio.com",
  projectId: "c60-p-f670a",
  storageBucket: "c60-p-f670a.appspot.com",
  messagingSenderId: "713008432414",
  appId: "1:713008432414:web:9a8e1f2b5bf75bea98350f"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();