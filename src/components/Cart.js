import React, {Component} from 'react';

class Cart extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
    return (
      <div>
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
            <div className='cart-product-title'>Items</div>
            <div className='cart-product-number'>4</div>
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

export default Cart;
