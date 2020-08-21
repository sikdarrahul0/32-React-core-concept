import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const favPlayers = ['Cristiano Ronaldo','Sergio Ramos','Casemiro','Marcelo'];
  const products = [{name: 'Oneplus Nord', price: '$399'},{name: 'Google Pixel 4a', price: '$350'},
                   {name: 'Iphone SE', price: '$430'}];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {favPlayers.map(player => <li>{player}</li>)}
        </ul>
        {
        products.map(pd => <Product product={pd}></Product>)
        } 
      </header>
    </div>
    //  <Product product={products[0]}></Product>
    //  <Product product={products[1]}></Product>
    //  <Product product={products[2]}></Product>
  );
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <h2>Dynamic data : {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>

  )
}
function Counter(){
  const [count, setCount] = useState(0);
  // const IncreaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h3>Count : {count}</h3>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Product(props){
  // const {name, price} = props.name;
  // console.log(name, price);
  const design = {
    border: '1px solid cyan',
    backgroundColor: '#0f4c75',
    height: '250px',
    width: '200px',
    padding: '15px',
    margin: '10px'
  }
  return (
  <div style={design}>
    <h2>{props.product.name}</h2>
    <h1>{props.product.price}</h1>
  </div>
  )
}
export default App;
