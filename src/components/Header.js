import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
            <Link to = '/'>
              Home
            </Link>
            <Link to = '/products'>
              Products
            </Link>
            <Link to = '/about'>
              About
            </Link>
            <a href = "#" className='cart'><i className="fa fa-shopping-cart"></i><span className='cart-item-selected'>2</span></a>
          </div>
        </header>

        <div className='spacer'></div>

        <div className='free-shipping'>
          Free Shipping On All Orders <span className='line'>|</span> Buy Now Pay Later With <span className='klarna'>Klarna</span>
        </div>

      </div>
  );
}
}

export default Header;
