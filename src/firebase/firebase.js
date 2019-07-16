import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqT0QowP0oQsSH4RhlKs7_UJEu9C-jtnc",
    authDomain: "expensify-app-c3d80.firebaseapp.com",
    databaseURL: "https://expensify-app-c3d80.firebaseio.com",
    projectId: "expensify-app-c3d80",
    storageBucket: "expensify-app-c3d80.appspot.com",
    messagingSenderId: "137813381761",
    appId: "1:137813381761:web:b630067ce1a719d3"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  database.ref().set({
      name: 'Gennaro Oriolo',
      age: 31,
      friendly: true,
      location: {
          city: 'Brisbane',
          country: 'Australia'
      }
  }).then(() => {
      console.log('Saved data to database')
  }).catch((e) => {
    console.log('This failed', e)
  })

database.ref('friendly').set(null)

// database.ref('friendly')
//     .remove()
//     .then(() => {
//         console.log('Removed friendly from database')
//     })
//     .catch((e) => {
//         console.log('Failed to remove friendly from database', e)
//     })