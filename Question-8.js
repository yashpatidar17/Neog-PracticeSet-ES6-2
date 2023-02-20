// function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }

const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
const {name, address:{city}} = person

const getData = (person) =>{
  console.log(name); // John Doe
    console.log(city); // New York
}

getData(person);