const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// console.log(string[1])


// Count how many letter "A" or "a" is in this string.
// Write a function that tracks all of the "A" and returns a number

const countA = function(str) {
  // loop over my str
  // cStyle for loop
  // for(let i = 0; i < str.length; i++) {
  //   console.log('i ===', str[i])
  // }

  // // for in
  // for(let i in str) {
  //   console.log(str[i])
  // }

  const newStr = str.toLowerCase();  
  let counter = 0;

  for(let i of newStr) {
    // console.log(i);
    if(i === "a") {
      counter ++
    }
  }

  console.log(counter);
  // return counter;

}

// console.log(countA(string));

// const four = 4;

// console.log(four + 10);

// const sum = function(num1, num2) {
//   console.log(num1 + num2);
//   // return num1 + num2;
// };

// const ten = sum(5, 5);

// console.log(ten + 20);

const countVowels = function (str) {
  console.log(str)
  const newStr = str.toLowerCase()
  // let letterA = 0;
  // let letterE = 0;
  // let letterI = 0;
  // let letterO = 0;
  // let letterU = 0;
  let vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }

  for(let i of newStr) {
    if(i === "a") {
      vowels.a ++
    } else if(i === "e") {
      vowels.e ++
    } else if(i === "i") {
      vowels.i ++
    } else if(i === "o") {
      vowels.o ++
    } else if(i === "u") {
      vowels.u ++
    } else if(i === "y") {
      vowels.y ++
    }
  }
  
  console.log(vowels)
  return vowels
  
}


const letterCounter = function(str) {
  const newStr = str.toLowerCase();
  
  let letter = {}
  for(let i of newStr) {
    // console.log(i);
    // letter[i] = 0
    // console.log(letter["1238971289379812"])
    if(letter[i] !== undefined) {
      letter[i] ++ 
    } else {
      letter[i] = 1
    }
    // for(char in letter) {
    //   if(i === char[i]) {
    //     char++ 
    //   } else {
    //     char = 1
    //   }
    // }
  }
  console.log(letter)
}

letterCounter(string)

// const obj = {
//   myName: 'alvin',
//   num: 10
// }

// // const word = "myName";
// // const word2 = "newName"

// // obj.newName = "Steve"
// // obj[word2] = "Steve"
// // console.log(obj.myName)
// // console.log(obj.word)
// // console.log(obj[word])