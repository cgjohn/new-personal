import React, { Component } from 'react';
import classes from './Card.css';
import score from '../Images/scorekeeper.png'
import colorGame from '../Images/colorGame.png'
import flipGame from '../Images/flipGame.png'
import timer from '../Images/timer.png'

class Card extends Component {
  renderImg = (imgURL) => {
  	return <img alt="app image" src={imgURL} />
  }

  render() {
  	const imgs = [score, colorGame, flipGame, timer]

    return (
      <div className={classes.card}>
        <div className={[classes.cardFront, classes.cardSide].join(' ')}>
        	<img alt="app image" src={imgs[this.props.project.id]}  />
        	<h4>{this.props.project.title}</h4>
        </div>
        <div className={[classes.cardBack, classes.cardSide].join(' ')}>
        	<p>{this.props.project.description}</p>
        	<a targe="_blank" href={this.props.project.link}>
        		<div className={classes.btn}>
        			Check it out
        		</div>
        	</a>
        </div>
      </div>
    );
  }
}

export default Card;
