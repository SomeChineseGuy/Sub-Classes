// // const arr = [1,1,2,2,3,3,3,3,4];

// const newNum = arr.reduce((acc, num ) => {
//   acc += num;
//   console.log(acc);
//   return acc;
// }, 0)

// // console.log(newNum);

// /*
// {
//   1:2,
//   2:2,
//   3:3,
//   4:1
// }
// */

// // const newObj = arr.reduce((acc, num ) => {
// //   console.log(acc);
// //   if(acc[num]) {
// //     acc[num] += 1
// //   } else {
// //     acc[num] = 1
// //   }
// //   console.log(acc);
// //   return acc;
// // }, {})

// // console.log(newObj);


// // const newArr = arr.map(num => num * 2);

// // console.log(newArr);

// // const filterArr = arr.filter(num => { 
// //   if(num % 2 === 0) {
// //     return num
// //   }
// // })

// // console.log(filterArr)


// const user = {
//   username: "Alvin",
//   num: 10,
//   isSleepy: true,
//   username: "Joe",
//   something : {
//     username: "Steve",
//     something: {
//       username: "Sarah"
//     }
//   }
// }


// const arr = [1,2,3,4]

// const user2 = {
//   ...user,
//   something: {
//     ...user.something,
//     username: "Hannah"
//   },
//   // username: "Alvin",
//   // num: 10,
//   // isSleepy: true
//   username: "Steve"
// };

// // user2.username = "Steve";

// console.log(user);


// console.log(user2);


const initialState = {
  counter: 0,
  username: "Alvin",
  userData: ["Something cool here!", "Second message", "Third Message"]
}

const copy = {
  ...initialState,
  counter: initialState.counter + 1
}

const copy2 = {
  ...initialState,
  counter: initialState.counter - 1
}

console.log(copy);
console.log(copy2);

const arr = [1,2,3,4];
const arr2 = [...arr, 5];

console.log(arr);
console.log(arr2);