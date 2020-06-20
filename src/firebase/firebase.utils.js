import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDZ3xTE5LdS5JnRlaqbv-h_7fpSR7ckjns",
    authDomain: "stocks-db-cf94e.firebaseapp.com",
    databaseURL: "https://stocks-db-cf94e.firebaseio.com",
    projectId: "stocks-db-cf94e",
    storageBucket: "stocks-db-cf94e.appspot.com",
    messagingSenderId: "382635554204",
    appId: "1:382635554204:web:839b2f9dd2572b6f4ac459",
    measurementId: "G-T44MRMH5Y0"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth()
  export const db=firebase.firestore()

  export default firebase




