const bcrypt = require('bcryptjs');
const password = 'yoloswag420';

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(password, salt);
// const results = bcrypt.compareSync(password, hash);

// console.log(results)

// const salt = bcrypt.genSalt(10);


// console.log(salt);
// console.log(salt)
// console.log(hash)

const arr = [];

for(let i = 0; i < 51; i++) {
  const salt = bcrypt.genSaltSync(9);
  const hash = bcrypt.hashSync(password, salt)
  arr.push(hash)
  console.log(salt);
  console.log(hash);
}

console.log(arr);
console.log(bcrypt.compareSync(password, arr[2]));
console.log(bcrypt.compareSync(password, arr[11]));
console.log(bcrypt.compareSync(password, arr[5]));
console.log(bcrypt.compareSync(password, arr[32]));
console.log(bcrypt.compareSync(password, arr[22]));
console.log(bcrypt.compareSync(password, arr[26]));
console.log(bcrypt.compareSync(password, arr[21]));
console.log(bcrypt.compareSync(password, arr[19]));
console.log(bcrypt.compareSync(password, arr[1]));
console.log(bcrypt.compareSync(password, arr[45]));
console.log(bcrypt.compareSync(password, arr[48]));