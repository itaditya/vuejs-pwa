import firebase from 'firebase'
var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}
firebase.initializeApp(config)
export default {
  database: firebase.database()
}
