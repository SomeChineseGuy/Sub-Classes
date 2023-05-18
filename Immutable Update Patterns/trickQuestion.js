// Given a str "Hello world" create a function that returns an obj to count each letter
// {h: 1, e:1, l:2, o:2.....}
// we don't count spaces
// we don't worry about uppercase or lowercase

const countLetters = (str) => {
  const newStr = str.toLowerCase();
  const newArr = newStr.split('');
  return newArr.reduce((letterContainer, letter) => {
    if(letter !== ' ') {
      !letterContainer[letter] ? letterContainer[letter] = 1 : letterContainer[letter] += 1
    }
    return letterContainer
  }, {})
}


