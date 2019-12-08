import React, {Component} from 'react';


class About extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

render () {
  return (
      <div className='wrapper'>
        <div className='about-content'>
          <p><span className='blast'>Blas<span className='t'>t</span></span><span className='beats'>Beats</span> sells top brand percussion gear less than all other competitors by selling directly to the consumer. Established in 2005, our mission is to reformulate the buying experience and eliminate less than ideal conditions you would experience at a local shop, filled with sales associates only focused on making a commission.</p>
        </div>
      </div>
  );
}
}

export default About;
