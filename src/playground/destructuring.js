// Object Destructuring

// const person = {
//     name: 'Gennaro',
//     age: 30,
//     location: {
//         city: 'Brisbane',
//         temp: 10
//     }
// }

// const {name: firstName = 'Anonymous', age} = person

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}.`)