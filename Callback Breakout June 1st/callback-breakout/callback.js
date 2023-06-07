// const myName = 'Alvin';

// // console.log(myName + ', how are you?');

// const four = 4;

// // console.log(four - 10);
// // console.log(four * 10);

// const sum = function (num1, num2) {
//   return num1 + num2;
// }

// // const six = sum(3, 3);
// // console.log(six + 10);
// // console.log(six - 1000);

// const ten = sum(6, 4);

// const something = sum;
// // console.log(something(10, 10));
// const five = something(3, 2);
// console.log(five + 10)

// const myName = 'alvin'

// const sum = function (num1, num2) {
//   return num1 + num2;
// }

// const minus = function (num1, num2) {
//   return num1 - num2;
// }

const addTwoNumbers = function(num1, callback) {
  return num1 + callback()
}

const num = addTwoNumbers(30, function() {
  return 100 * 100;
});
// 30 + (100 * 100)

const num2 = addTwoNumbers(100, function() {
  return 100 - 50;
});
// 100 (100 - 50)

// console.log(num);




const myMap = function(arr, callback) {
  // cStyle Loop
  // for(let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }
  
  // for in Loop
  // for(let i in arr) {
  //   console.log(arr[i])
  // }

  const newArr = [];
  // for of Loop
  for(let i of arr) {
    console.log('each item in the loop', i)
    console.log('after the item comes back from the call back', callback(i)); 
    newArr.push(callback(i));
  }
  return newArr;
}

// const newStuff = myMap(arr, (i) => {
//   console.log('each item in the callback', i + 100);
//   return i + 100;
// });

// console.log(newStuff)

// Array helpers
// arr.forEach
// arr.map
// arr.reduce
// arr.find
// arr.some

const arr = [100, 80, 77, 12, 44];
const newArr = [];
arr.forEach((eachItem) => {
  console.log(eachItem);
  // newArr.push(eachItem + 10);
});
// console.log(newArr);

const newArr2 = arr.map((eachItem) => {
  console.log(eachItem)
  return eachItem + 10;
});
console.log(newArr2);




