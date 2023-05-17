const express = require('express');
const PORT = 8080;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const langauges = require('./language.json'); // JSON.parse
// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Burger Fries Beer
// Cheese Burger Poutine Milk Shake
// Chicken Strips Onion Rings Smoothie

const combos = {
  1: {
    main: 'Burger',
    side: 'Fries',
    drink: 'Beer'
  },
  2: {
    main: 'Cheese Burger',
    side: 'Poutine',
    drink: 'Milk shake'
  },
  3: {
    main: 'Chicken Strip',
    side: 'Onion Rings',
    drink: 'Smoothie'
  }
}

const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1111",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "2222",
  },
};

let key = 4;

app.get('/', (req, res) => {
  // setting the variable for the language
  const languageChoice = req.cookies.languageChoice || 'en';
  const user = req.cookies.userId;
  console.log(user);
  // console.log(langauges.homeHeadings[languageChoice]);
  const templateVars = {
    user: users[user],
    heading: langauges.homeHeadings[languageChoice],
    body: langauges.homeBodies[languageChoice],
    addNew: langauges.addNew[languageChoice],
    menu: langauges.menu[languageChoice]
  }
  res.render('home', templateVars);
});

// Page that shows all of my menu
// Browse
app.get('/menu', (req, res) => {
  const languageChoice = req.cookies.languageChoice || 'en';
  const user = req.cookies.userId;
  const templateVars = { 
    user: users[user],
    combos,
    addNew: langauges.addNew[languageChoice],
    menu: langauges.menu[languageChoice]
  }
  res.render('menu', templateVars);
});

// Add
app.get('/menu/add', (req, res) => {
  const languageChoice = req.cookies.languageChoice || 'en';
  const user = req.cookies.userId;
  const templateVars = {
    user: users[user],
    addNew: langauges.addNew[languageChoice],
    menu: langauges.menu[languageChoice]
  }
  res.render('add', templateVars);
});

app.post('/menu/add', (req, res) => {
  const { main, side, drink } = req.body;
  combos[key] = {
    main,
    side,
    drink
  };
  key++
  console.log(combos);
  res.redirect('/menu');
});

//  -----------------------Edit ---------------------------
app.post('/menu/edit/:comboId', (req, res) => {
  const comboId = req.params.comboId;
  if(combos[comboId]) {
    const { main, side, drink } = req.body;
    combos[comboId] = {
      main,
      side,
      drink
    }
    return res.redirect('/menu');
  }
  res.send('You have the wrong combo id');
});

// Delete
app.post('/menu/:comboId/delete', (req, res) => {
  const comboId = req.params.comboId;
  if(combos[comboId]) {
    delete combos[comboId];
    return res.redirect('/menu');
  }
  res.send('The item was already deleted');
})

// Read
app.get('/menu/:comboId', (req, res) => {
  const comboId = req.params.comboId;
  if(combos[comboId]) {
    const languageChoice = req.cookies.languageChoice || 'en';
    const user = req.cookies.userId;
    const templateVars = {
      user: users[user],
      combo: combos[comboId],
      comboNumber: comboId, 
      addNew: langauges.addNew[languageChoice],
      menu: langauges.menu[languageChoice]
    };
    return res.render('combo', templateVars);
  }
  res.send('This is not the menu.');
});

app.get('/langauges/:langId', (req, res) => {
  // check for id
  // console.log(req.params.langId);
  const langId = req.params.langId;

  res.cookie('languageChoice', langId);
  res.redirect('/');
});

// Login
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if(!email || !password) {
    res.send('Please provide an email AND a password');
  }

  let foundUser = null;
  // looking for an email to match the email a user has typed in
  for(const user in users) {
    if(users[user].email === email) {
      foundUser = users[user]
    }
  }
  if(!foundUser) {
    return res.status(401).send('No user with this email');
  }

  if(foundUser.password !== password) {
    return res.status(401).send('Passwords do not match');
  }

  res.cookie('userId', foundUser.id)
  res.redirect('/')
});

app.get('/protected', (req, res) => {
  console.log(req.cookies.userId);
  if(req.cookies.userId) {
    return res.render('protected');
  }

  res.send('You have to be login to see the page');
});

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.clearCookie('languageChoice');
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});