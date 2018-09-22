import React, { Component } from 'react';
import classes from './Open.css'

import Home from "../Home/Home"

class Open extends Component {
  state = {
  	covered: true
  }

  openApp = () => {
    this.setState({covered: false})
    setTimeout(() => {
      this.setState({fadeIn: true})
    }, 4000)
  }

  render() {  
    let backgroundClasses = [classes.background].join(' ')  
    let topCoverClasses = [classes.topCover].join(' ') 
    let btnClasses = [classes.btn].join(' ') 
    let topClasses = [classes.coverTop].join(' ')
    let rightClasses = [classes.coverRight].join(' ')
    let bottomClasses = [classes.coverBottom].join(' ')
    let leftClasses = [classes.coverLeft].join(' ')
    if(!this.state.covered){
      backgroundClasses = [classes.background, classes.showBackground].join(' ') 
      topCoverClasses = [classes.topCover, classes.hideTopCover].join(' ')
      btnClasses = [classes.btn, classes.btnFade].join(' ')  
      topClasses = [classes.coverTop, classes.removeTop].join(' ')
      rightClasses = [classes.coverRight, classes.removeRight].join(' ')
      bottomClasses = [classes.coverBottom, classes.removeBottom].join(' ')
      leftClasses = [classes.coverLeft, classes.removeLeft].join(' ')
    }

    let homeScreen= null
    if(this.state.fadeIn){
      topCoverClasses = [classes.topCover].join(' ')
      homeScreen = (<Home />)
    }

    return (
        <div className={topCoverClasses}>

          <button onClick={this.openApp} className={btnClasses}>Click to open</button>

          <div className={leftClasses}></div>
          <div className={bottomClasses}></div>
          <div className={rightClasses}></div>
          <div className={topClasses}></div>
          <div className={backgroundClasses}></div>
          {homeScreen}
        </div>
    );
  }
}

export default Open;
