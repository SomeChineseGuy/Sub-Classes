const {returnRejectedPromise, returnPromise} = require('./promise-generator');

const randomDelay = () => Math.floor(Math.random() * 2000);
const promise = returnPromise('Cheese Burger', randomDelay());
const promise1 = returnPromise('Chicken Sandwich', randomDelay());
const promise2 = returnPromise('Bacon... all the bacon', randomDelay());
const promise3 = returnPromise('Salad', randomDelay());

const promiseArr = [promise, promise1, promise2, promise3];

Promise.race(promiseArr)
  .then((data) => {
    console.log(data);
  })