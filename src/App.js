import React, { Component } from 'react';
import classes from './App.scss';

import Open from './Open/Open'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Open />
      </div>
    );
  }
}

export default App;
