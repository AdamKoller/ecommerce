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
    <header>
      <div className='store-title'>
        Philo
      </div>
        <nav>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Cart</a>
        </nav>
        
        <section className="search-area">
          <input type='text' name="search" placeholder="Search"/>
        </section>
    </header>
  );
}
}

export default Header;
