import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfMAc30VTp8t8MVBYb0FZyqfTwDLmxFL8",
    authDomain: "crud-firestore-7d7b2.firebaseapp.com",
    projectId: "crud-firestore-7d7b2",
    storageBucket: "crud-firestore-7d7b2.appspot.com",
    messagingSenderId: "180732263700",
    appId: "1:180732263700:web:624866fe0cb6d4ac719601"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}