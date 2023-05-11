const axios = require('axios');

axios.get('https://catfact.ninja/fact')
  .then((res) => {
    console.log(res.data.fact);
    //  do something
  })
  .catch(err => {
    console.log(err.data);
    throw err
  })

async function getData (){
  const fact = await axios.get('https://catfact.ninja/fact');

  console.log(fact.data.fact);
}

getData()