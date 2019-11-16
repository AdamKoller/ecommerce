import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Header from './Header.js';
import '../Header.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

  render () {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
