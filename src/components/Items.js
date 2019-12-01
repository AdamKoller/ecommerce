import React, {Component} from 'react';

class Items extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
  return (
    <div>
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
    </div>
  );
}
}

export default Items;
