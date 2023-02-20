const isSportsCar = (obj) => {
  if (obj.horsepower >= 300) {
    return true;
  } return false;
}

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false