// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');
console.log('Top of file');

fs.readFile('./data1.txt', 'utf8', (err, data) => {
  console.log('data', data);
})

fs.readFile('./data2.txt', 'utf8', (err, data) => {
  console.log('data', data);
})

fs.readFile('./data3.txt', 'utf8', (err, data) => {
  console.log('data', data);
})

console.log('Bottom Of file');