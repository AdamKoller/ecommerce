import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Header from './Header.js';
import '../Header.css';
import Items from './Items.js';
import '../Items.css';
import Cart from './Cart.js';
import '../Cart.css';


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
