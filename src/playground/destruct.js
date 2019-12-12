// OBject Destructoring

// const person = {
//     location:{

//     }
// }
// let {name = 'Celty', age= 'unknown'} = person
// let {city = 'The World', temp="Cold As Fuck"} = person.location
// console.log(`${name} is ${age}.`)
// console.log(`${name} is from ${city} and it is ${temp} degrees outside`)


// const Book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: undefined
//     }
// }

// let {name:publisherName = 'Self Published'} = Book.publisher

// console.log(publisherName)

// const address = ['1299 Waffles Street', 'Memphis', 'TN', '38134']

// const [, city='Greenvilee', state='SC'] = address

// console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (ice)', '$2.00', '$3.00','$4.00']
const [beverage,,medCost] = item

console.log(`A medium ${beverage} costs ${medCost}`)