const {returnRejectedPromise, returnPromise} = require('./promise-generator');

const promise = returnPromise('This is good', 500)

promise.then((data3) => {
  returnPromise('This is also good', 500)
  .then((data1) => {
    console.log(data1);
    returnPromise('This is even better', 500)
    .then((data2) => {
      console.log(data2);
    })
  })
})