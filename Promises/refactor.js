const message = "Hello everyone! How are you?"

// const strCount = (str) =>{
//   const arr = str.toLowerCase().replace(/\s/g, '').split('');
//   // let obj = {};

//   // arr.map()
//   // arr.forEach()
//   const final = arr.reduce((obj, char) => {
//     obj[char] ? obj[char] += 1 : obj[char] = 1;
//     return obj
//   }, {})
  
//   // for(let char of arr) {
//   //     obj[char] ? obj[char] += 1 : obj[char] = 1;
//   // }
//   // console.log(obj);
// }

const strCount = (str) =>{
  const arr = str.toLowerCase().replace(/\s/g, '').split('');
  return arr.reduce((obj, char) => {
    obj[char] ? obj[char] += 1 : obj[char] = 1;
    return obj
  }, {});
}

strCount(message);

const newArr = [1,2,10,29,2934];

const newNum = newArr.reduce((startingNum, char) => {
  return startingNum += char
}, 0)

console.log(newNum);


// {h: 2, e: 3, l:2, o: 3}