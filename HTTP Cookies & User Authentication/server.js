const express = require('express');
const PORT = 8080;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Middleware
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

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

let key = 4;

app.get('/', (req, res) => {
  res.send('Welcome to the LHL Food Truck');
});

// Page that shows all of my menu
// Browse
app.get('/menu', (req, res) => {
  const templateVars = { combos }
  res.render('menu', templateVars);
});

// Add
app.get('/menu/add', (req, res) => {
  res.render('add');
});

app.post('/menu/add', (req, res) => {
  const { main, side, drink } = req.body;
  // const main = req.body.main;
  // const side = req.body.side;
  // const drink = req.body.drink;
  combos[key] = {
    main,
    side,
    drink
  };
  key++
  console.log(combos);
  res.redirect('/menu');
});

// Edit
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
    const templateVars = {
      combo: combos[comboId],
      comboNumber: comboId
    };
    return res.render('combo', templateVars);
  }
  res.send('This is not the menu.');
});



app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});