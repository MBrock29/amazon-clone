import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8C5nzAywT2ZYOzuSwzxzTyoQC5A-vjVY",
  authDomain: "clone-8f96a.firebaseapp.com",
  databaseURL: "https://clone-8f96a.firebaseio.com",
  projectId: "clone-8f96a",
  storageBucket: "clone-8f96a.appspot.com",
  messagingSenderId: "27704487266",
  appId: "1:27704487266:web:bc0705cce997eddb3f503b",
  measurementId: "G-9SXF6XXCVY"
})

const auth = firebase.auth()

export { auth }