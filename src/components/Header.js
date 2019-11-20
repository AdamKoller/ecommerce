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
          <a href="#">Cart</a>
        </div>
      </header>
      <div className='spacer'></div>
      <div className='free-shipping'>
        Free Shipping On All Orders <span className='line'>|</span> Buy Now Pay Later With <span className='klarna'>Klarna</span>
      </div>
      <section className="content-area-product">
        <div className="top-section">
          <div className="product-wrapper">
            <div className="product-bubble">
              <img src="https://drummersonly.co.uk/wp-content/uploads/2018/10/yf96S1Ug-800x800.jpeg"/>
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
