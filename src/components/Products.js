import React, {Component} from 'react';


class Products extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
  return (
      <div>
        <section className='products-page-wrapper'>
          <div className='products-filter'>
            filter
          </div>
          <div className='products-grid'>
            <div className="products-wrapper">
              <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
            </div>
            <div className="products-title">
              <h3> Tama </h3>
              <h1> Imperialstar </h1>
            </div>
            <div className="products-wrapper">
              <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
            </div>
            <div className="products-title">
              <h3> Tama </h3>
              <h1> Imperialstar </h1>
            </div>
            <div className="products-wrapper">
              <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
            </div>
            <div className="products-title">
              <h3> Tama </h3>
              <h1> Imperialstar </h1>
            </div>
          </div>
        </section>
      </div>
  );
}
}

export default Products;
