const {returnRejectedPromise, returnPromise} = require('./promise-generator');

const promise = returnPromise('Cheese Burger', 2000);
const promise1 = returnPromise('Chicken Sandwich', 1000);
const promise2 = returnPromise('Bacon... all the bacon', 2000);
const promise3 = returnPromise('Salad', 500);
const promise4 = returnRejectedPromise('Shoe', 3000).catch(err => {
  console.log(err);
  throw err
});

const orders = [promise, promise1, promise2, promise3, promise4];

Promise.all(orders)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
