import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import Header from './Header.js';
import '../css/Header.css';
import Items from './Items.js';
import '../css/Items.css';
import Cart from './Cart.js';
import '../css/Cart.css';


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

  render () {
    return (
      <div>
        <Header/>
        <Items/>
        <Cart/>
      </div>
    );
  }
}

export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
