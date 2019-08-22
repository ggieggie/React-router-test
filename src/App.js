import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar /><hr/>
            <Route path='/Home' render={ () => <Home name={'Veggie'}/> }/>
            <Route path='/About' render={ () => <About name={'Tommy'}/> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;