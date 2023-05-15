const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

// EJS we do not require
app.set('view engine', 'ejs');

// We need to have our USE body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Database
// Arrays and Objects
const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

let key = 5;

app.get('/', (req, res) => {
  console.log('Someone has connected');
  res.render('home');
});

// Our page can only render HTML, CSS and JS
app.get('/cats', (req, res) => {
  console.log('someone is trying to visit my cats page');
  const templateVars = {
    catsDatabase
  }
  // const obj = {
  //   a: [1,2,3,4],
  //   b: 'Hello everyone!',
  //   c: true,
  //   d: undefined,
  //   e: {
  //     str: 'Steve'
  //   }
  // };
  // console.log(obj.e.str);
  res.render('cats', templateVars);
});

app.get('/cats/new', (req, res) => {
  res.render('catsnew')
})

app.post('/cats', (req, res) => {
  console.log('fired!');
  console.log(req.body.cats);
  const userInput = req.body.cats;
  catsDatabase[key] = userInput;
  key++;
  res.redirect(`/cats`);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});