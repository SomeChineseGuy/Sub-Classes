const {returnRejectedPromise, returnPromise} = require('./promise-generator');

const promise = returnPromise('this is correct', 500);

promise.then((data) => {
  console.log(data);
  // return returnRejectedPromise('this failed!', 500)
  return data;
}).then((data1) => {
  console.log(data1);
  return data1;
}).then((data1) => {
  console.log(data1);
  return returnRejectedPromise('this failed!', 500)
}).catch((err) => {
  console.log('Failed at Facebook fetch, err message:', err );
  throw err
}).then((data1) => {
  console.log(data1);
  return returnRejectedPromise('this failed!', 500)
}).then((data1) => {
  console.log(data1);
  return data1;
}).then((data1) => {
  console.log(data1);
  return data1;
}).then((data1) => {
  console.log(data1);
  return data1;
}).catch((err) => {
  console.log('Failed at google fetch, err message:', err );
  throw err;
});