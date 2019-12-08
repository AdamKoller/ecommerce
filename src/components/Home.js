import React, {Component} from 'react';
import Items from './Items.js';
import Cart from './Cart.js';

class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
  return (
    <div>
      <Items/>
      <Cart/>
    </div>
  );
}
}

export default Home;
