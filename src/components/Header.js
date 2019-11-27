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
          <a href="#" className='cart'><i className="fa fa-shopping-cart"></i><span className='cart-item-selected'>2</span></a>
        </div>
      </header>

      <div className='spacer'></div>

      <div className='free-shipping'>
        Free Shipping On All Orders <span className='line'>|</span> Buy Now Pay Later With <span className='klarna'>Klarna</span>
      </div>

      <section className="content-area-product popup-cart-active">
        <div className="top-section">
          <div className="product-wrapper">
            <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png"/>
          </div>
          <div className="product-title">
            <h3> Tama </h3>
            <h1> Imperialstar </h1>
          </div>
        </div>
      </section>

      <section id='cart-popup' className='active'>
        <div>
          <div className='cart-title-wrapper'>
            <div className='cart-title'>My Cart</div>
          </div>
        </div>
        <div className='cart-items'>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
          <div className='item-wrapper'>
            <div className='item'>
              <img src='https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png'/>
              <div className='item-delete'>
                <div className='delete-button'>
                  X
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='cart-product-total'>
          <div className='cart-product-title'>Total</div>
          <div className='cart-product-number'>x4</div>
        </div>

        <div className='cart-price-total'>
          <div className='cart-price-total-title'>Total</div>
          <div className='cart-price-total-price'>$750</div>
        </div>

        <div className='cart-checkout'>
          Checkout
        </div>
        
      </section>
    </div>
  );
}
}

export default Header;
