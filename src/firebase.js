import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD-nl_UdGcJBmzXUX7bQBweRFNk19QoSOY",
    authDomain: "just-clock-it-ae8ea.firebaseapp.com",
    databaseURL: "https://just-clock-it-ae8ea.firebaseio.com",
    projectId: "just-clock-it-ae8ea",
    storageBucket: "just-clock-it-ae8ea.appspot.com",
    messagingSenderId: "386187971684",
    appId: "1:386187971684:web:56fe53f236d9a5ee862371",
    measurementId: "G-8MR3CM05LJ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase