import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const names = ["Promise", "ovi", "Tonmoy", "Rajon", "Priyom"];
  const products = [
    {
      name: "Photoshop",
      price: "$90.99",
    },
    {
      name: "Illustrator",
      price: "$96.99",
    },
    {
      name: "Premire Pro",
      price: "$100",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello there! this is my first paragraph in REACT.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Product product={product[0]]></Product>
        <Product product={product[0]}></Product> */}
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
        <Person name={names[0]} job="Web Developer"></Person>
        <Person name={names[1]} job="Web Developer"></Person>
        <Person name={names[2]} job="Web Developer"></Person>
        <Person name={names[3]} job="Web Developer"></Person>
        <Users></Users>
      </header>
    </div>
  );
}

const Count = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>Addition</button>
      <button onClick={() => setcount(count - 1)}>Substract</button>
    </div>
  );
};

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h3>How many users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.id}</li>
        ))}
      </ul>
    </div>
  );
};

function Product(props) {
  const productStyle = {
    color: "black",
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <h3>My Name: {props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>
  );
}

export default App;
