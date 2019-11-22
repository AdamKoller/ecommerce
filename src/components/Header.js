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
          <span className='blast'>Blas<span className='t'>t</span></span> <span className='beats'>Beats</span>
        </div>
        <div className='menu'>
          <a href="#">About</a>
          <a href="#">New Arrivals</a>
          <a href="#" className='cart'><i className="fa fa-shopping-cart"></i>2</a>
        </div>
      </header>

      <div className='spacer'></div>

      <div className='free-shipping'>
        Free Shipping On All Orders <span className='line'>|</span> Buy Now Pay Later With <span className='klarna'>Klarna</span>
      </div>

      <section className="content-area-product">
        <div className="top-section">
          <div className="product-wrapper">
            <img src="https://www.kickstartyourdrumming.com/wp-content/uploads/2017/10/51t5fnYm88L.jpg"/>
          </div>
          <div className="product-title">
            <h3> Tama </h3>
            <h1> Imperialstar </h1>
          </div>
        </div>

      </section>
    </div>
  );
}
}

export default Header;
