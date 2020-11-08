import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA5-M3MuzV1ozqEp7WBOZIbtMZvqgqOXcE',
  authDomain: 'ekirana-0611.firebaseapp.com',
  databaseURL: 'https://ekirana-0611.firebaseio.com',
  projectId: 'ekirana-0611',
  storageBucket: 'ekirana-0611.appspot.com',
  messagingSenderId: '756519387715',
  appId: '1:756519387715:web:143834c5e55bd713508af6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
