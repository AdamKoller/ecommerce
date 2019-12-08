import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import Header from './Header.js';
import '../css/Header.css';
import Home from './Home.js';
import '../css/Home.css';
import Items from './Items.js';
import '../css/Items.css';
import Cart from './Cart.js';
import '../css/Cart.css';
import About from './About.js';
import '../css/About.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/about' component = {About} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
