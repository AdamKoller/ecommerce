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
        <section className='products-page-wrapper'>{/*content area*/}
          <div className='products-filter'>
            filter
          </div>

          <div className='products-grid'> {/*top section*/}
            <div className='products-wrapper'>
              <div className="products-image">
                <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
              </div>
              <div className="title">
                <h3> Tama Imperialstar</h3>
              </div>
              <div className="price">
                <h3>$899</h3>
              </div>
            </div>
            <div className='products-wrapper'>
              <div className="products-image">
                <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
              </div>
              <div className="title">
                <h3> Tama Imperialstar</h3>
              </div>
              <div className="price">
                <h3>$899</h3>
              </div>
            </div>
            <div className='products-wrapper'>
              <div className="products-image">
                <img src="https://www.grahamrusselldrums.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/a/tama_star_bubinga_smokey_black_set.png" alt='drums'/>
              </div>
              <div className="title">
                <h3> Tama Imperialstar</h3>
              </div>
              <div className="price">
                <h3>$899</h3>
              </div>
            </div>
            
          </div>
        </section>
      </div>
  );
}
}

export default Products;
