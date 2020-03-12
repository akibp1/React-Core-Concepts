import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'ata bata', price:'$6.99'},
    {name: 'sdkfhkbata', price:'$6.99'},
  ]
  const friends = ['rakib', 'hossin', 'sahadat', 'mostafiz', 'sihab']
  const friendsName = friends.map( friend => friend);
  console.log(friendsName);
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
          products.map(pd => <Product product={pd}></Product>)
          }
      <Person name=' Shahadat' job="student"></Person>

      </header>
    </div>
  );
}


function Users (){
  const [users, setUsers] = useState([])
  useEffect (()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (res =>res.json())
  .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product (props){
  const ProductStyle = {
    border:'1 solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
  const {name, price} = props.product;
  return ( 
    <div style={ProductStyle}>
      <h3>{name}</h3>
   <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props){
  const personStyle = {
    border:'5px solid cyan',
    width:'80%',
    marginTop:'20px'
  }
  return (
    <div style={personStyle}>
      <h3>My name:{props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>
  )
}

export default App;
