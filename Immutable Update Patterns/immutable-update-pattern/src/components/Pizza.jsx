import { useState } from "react";

const Pizza = () => {
  const [toppingValue, setToppingValue] = useState('');
  // const [toppings, setToppings] = useState([]);
  // const [size, setSize] = useState('');
  // const [crust, setCrust] = useState('');
  const [pizza, setPizza] = useState({
    topping: [],
    size: '',
    crust: ''
  })
  const toppingValueChange = (e) => {
    setToppingValue(e.target.value);
  }
  const addTopping = () => {
    setToppingValue("");
    // setToppings((prev) => {
    //   // let newArr = []
    //   // prev.forEach((ele) =>{
    //   //   newArr.push(ele)
    //   // })

    //   return [...prev, toppingValue];
    // });
    setPizza((prev) => {
      console.log('pizza state', prev);
      let newPizza = {
        ...prev,
        topping: [...prev.topping, toppingValue]
      }
      console.log(newPizza);
      return newPizza
    })
  }

  const changeSize = (e) => {
    setPizza((prev) => {
      console.log(prev);
      let newPizza = {
        ...prev,
        size: e.target.value
      }
      console.log(newPizza);
      return newPizza
    })
  }

  const changeCrust = (e) => {
    // setCrust(e.target.value);
    setPizza((prev) => {
      console.log(prev);
      let newPizza = {
        ...prev,
        crust: e.target.value
      }
      console.log(newPizza);
      return newPizza
    })
  }

  const order = () => {
    console.log(pizza);
  }
  
  return (
    <div>
      <h1>Pizza Place (Not Hut)</h1>

      <div>
        <h2>Create your own pizza!</h2>
        <input type="text" value={toppingValue} onChange={toppingValueChange}/>
        <button onClick={addTopping}>Add Topping</button>
      </div>
      <div>
        <h4>Toppings</h4>
        {pizza.topping.map((ele, idx) => {
          return <p key={idx}>{ele}</p>
        })}
      </div>
      <div>
        <h2>Size: {pizza.size}</h2>
        <select value={pizza.size} onChange={changeSize}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
      </div>
      <div>
        <h2>Crust: {pizza.crust}</h2>
        <select value={pizza.crust} onChange={changeCrust}>
          <option value="thin">Thin</option>
          <option value="normal">Normal</option>
          <option value="stuffed">Stuffed</option>
        </select>
      </div>
      <div>
        <button onClick={order}>Order Now!</button>
      </div>
    </div>
  )
}

export default Pizza;