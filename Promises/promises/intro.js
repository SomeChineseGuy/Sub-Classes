const { returnPromise } = require('./promise-generator');

console.log('top of file');

const promise = returnPromise('return me!', 500);

const promise2 = returnPromise('return me!', 2000);


// setTimeout(() => {
//   console.log(promise);
//   console.log(promise1);
//   console.log(promise2);
// }, 5000);

// "hello".then(() => {

// })

promise.then((data) => {
  console.log(data);
  return {
    data,
    isCompleted: true
  }
}).then((data1) => {
  console.log(data1.isCompleted);
  return data1
}).then((data2) => {
  console.log(data2);
})

const promise1 = returnPromise('return me!', 1000).then((data) => {
  console.log(data);
  return data
})

console.log(promise1);

console.log('bottom of file');