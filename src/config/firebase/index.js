import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAD7m4D5mGaU2k_x7NwE7L5on9OH0aNVDk",
    authDomain: "ecommerce-30c19.firebaseapp.com",
    projectId: "ecommerce-30c19",
    storageBucket: "ecommerce-30c19.appspot.com",
    messagingSenderId: "721570068095",
    appId: "1:721570068095:web:31f001ab281ec9871fb14a",
    measurementId: "G-E468F47Z51"
}

  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const database = firebase.database()

export default firebase