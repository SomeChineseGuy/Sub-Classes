const bcrypt = require('bcryptjs');
const password = 'yoloswag420';

// const salt = bcrypt.genSalt(10);
// console.log(salt)
// salt.then(data => {
//   console.log(data);
// })

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(password, salt)
// console.log(salt);
// console.log(hash);

// const results = bcrypt.compareSync(password, hash)

// const results2 = bcrypt.compareSync('password', hash)
// console.log(results)
// console.log(results2)

const arr = [];

for(let i = 0; i < 50; i++) {
  const salt = bcrypt.genSaltSync(6);
  const hash = bcrypt.hashSync(password, salt)
  console.log(salt);
  console.log(hash);
  arr.push(hash)
}

console.log(arr);

// console.log(bcrypt.compareSync(password, arr[2]));
// console.log(bcrypt.compareSync(password, arr[12]));
// console.log(bcrypt.compareSync(password, arr[32]));
// console.log(bcrypt.compareSync(password, arr[44]));
// console.log(bcrypt.compareSync(password, arr[23]));
// console.log(bcrypt.compareSync(password, arr[5]));
// console.log(bcrypt.compareSync(password, arr[19]));
// console.log(bcrypt.compareSync(password, arr[48]));
// console.log(bcrypt.compareSync(password, arr[39]));

for(let i = 0; i < 50; i++) {
  console.log(bcrypt.compareSync(password, arr[i]));
}