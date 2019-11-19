import React, {Component} from 'react';

class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
  return (
    <div>
      <header>
        <div className='store-title'>
          Blast Beats
        </div>
        <div className='menu'>
          <a href="#">About</a>
          <a href="#">New Arrivals</a>
          <a href="#">Cart</a>
        </div>
      </header>
      <section className="content-area-product">
        <div className="top-section">
          <div className="product">
            <div className="product-bubble">
              <img src="https://media.sweetwater.com/api/i/q-82__ha-aaeb7f95b0a4bd7d__hmac-ccba3150b7aee323aa2c895b182d7f99b98a5925/images/items/750/AR529S-UMG-large.jpg"/>
            </div>
          </div>
        </div>
      </section>
      <div className="product-title">
        <h3> Tama </h3>
        <h1> Starclassic </h1>
      </div>
    </div>
  );
}
}

export default Header;
