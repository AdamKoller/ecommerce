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
    <div className="content-area-homepage">
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
              <img src=""/>
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
