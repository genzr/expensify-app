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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})


// database.ref('expenses').on('value', (snapshot) => {
//   const expensesArray = []
  
//   snapshot.forEach((childSnapshot) => {
//     expensesArray.push({
//       id: childSnapshot.id,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expensesArray)
// })