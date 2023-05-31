// Review

// variables

// let fruit = 'apple';
// const PI = 3.14;
// console.log(fruit);
// fruit = 'orange';
// console.log(fruit);

// const arr = [1,2,3,4, 'five', 'six', 7.5, false, true, [1,2,3], null, undefined];
//   //indexing 0,1,2,3   ,4     ,5    ,6.....7,    8,     9
// console.log(arr[4]);
// console.log(arr[9][2]);
// arr[4] = 5;
// console.log(arr[4]);

// Issue, No context

const firstCar = ['Toyota', 'Corolla', 2000, 'auto', '4 Doors', true, 'fabric', true];

const secondCar = ['Honda', 'Civic', 2010, 'manual', true, '2 Doors', true, 'Leather'];

// const printCarDetail = function(carArr) {
//   console.log(`The car has ${carArr[4]}`)
// }

// printCarDetail(firstCar);
// printCarDetail(secondCar);

const firstCarObj = {
  model:'Corolla', 
  make: 'Toyota', 
  year: 2000, 
  doors: '4 Doors'
};
const secondCarObj = {
  year: 2010, 
  doors: '2 Doors', 
  make: 'Honda', 
  "model": 'Civic',
  "1a": 100
};

// const printCarDetail = function (carObj) {
//   console.log(`The car has ${carObj.doors}`)
// }

// // printCarDetail(firstCarObj);
// // printCarDetail(secondCarObj);

// console.log(secondCarObj);
// secondCarObj.make = 'Mazda';
// console.log(secondCarObj);
// secondCarObj.isWorking = true;
// console.log(secondCarObj);

const me = {
  myName: 'Alvin',
  isSleepy: true,
  favColors: ['red', 'green', 'yellow'],
  moreDetail: {
    height: 'unknown',
    favFood: 'Sleeping',
    sum: function() {
      console.log(this);
      // return me.number1 + me.number2;
      return this.number1 + this.number2;
    }
  },
  number1: 12,
  number2: 20,
}

// console.log(console);

// console.log(me.sum());
console.log(me.moreDetail.sum());
// console.log(undefined + undefined)
console.log(me.myNameeeeee);