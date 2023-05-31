const obj = {
  myName: 'Alvin',
  yourName: "Joe",
  num1: 10,
  num2: 20
}

for(let key in obj) {
  console.log(key, obj[key]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
