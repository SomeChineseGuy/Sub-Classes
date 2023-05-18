let obj = {
  username: 'joe',
  num: 20,
  isCool: true,
  favFoods: ['pizza', 'burgers']
}

console.log(obj);

let obj2 = {
  // username: obj.username,
  // num: obj.num,
  // isCool: obj.isCool,
  // favFoods: obj.favFoods
  
  ...obj,
  num: 30,
}

console.log(obj2);

obj2.num = 30

console.log(obj2);

// let obj3 = {
//   num: 20,
//   username: 'steve',
//   num: 40,
//   num: 60
// }

// console.log(obj3);

// obj2.num = 30;

// console.log(obj);
// console.log(obj2);


// let myName = 'joe'

// let myName2 = myName;

// myName2 = 'ryan'
// console.log(myName);
// console.log(myName2);


let arr = [true, 'Cheese Burger', 'Burger'];
console.log(arr);
let arr2 = [...arr];

arr2[0] = false
console.log(arr2);