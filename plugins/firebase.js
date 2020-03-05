import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyAlsXdcCJeQksSQSysugDj4bhHTvb0YyP0",
   authDomain: "chat-9a8f5.firebaseapp.com",
   databaseURL: "https://chat-9a8f5.firebaseio.com",
   projectId: "chat-9a8f5",
   storageBucket: "chat-9a8f5.appspot.com",
   messagingSenderId: "1036455581584"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}