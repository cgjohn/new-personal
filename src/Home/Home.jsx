import React, { Component } from 'react';
import classes from './Home.css';

import Projects from '../Projects/Projects'

class Home extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1>Connor Johnston</h1>
        <Projects />
      </div>
    );
  }
}

export default Home;
