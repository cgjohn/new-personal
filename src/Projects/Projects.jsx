import React, { Component } from 'react';
import classes from './Projects.css';

import Card from '../Card/Card'

class Projects extends Component {
  state = {
	projects: [
		{
			title: 'Desktop Score Keeper',
			description: 'I created this project using vanilla javascript as an easy way for someone to keep score of table tennis games, I chose to have input solely from the keyboard as it would be the quickest interaction and is meant to act as a display so the app would never be used on mobile.',
			link: "https://scorekeeper-connor.structure.sh",
			id: 0
		},
		{
			title: "RGB Color Game",
			description: "This game was created with the help of a Udemy course that is linked to on the project. It was my first introduction to javascript.",
			link: "https://color-connor.structure.sh",
			id: 1
		},
		{
			title: "Flip game",
			description: "This is an old mental game that I play with my family at our cottage. The directions can be found within the game.",
			link: "https://flip-connor.structure.sh",
			id: 2
		},
		{
			title: "Timer",
			description: "I created this when I couldn't find a simple web timer that was both visually pleasing and extremely minimal.",
			link: "https://timer-connor.structure.sh",
			id: 3
		},
	]
  }

  render() {
    return (
      <div className={classes.projectContainer}>
        {
        	this.state.projects.map(proj => {
        		console.log(proj)
        		return <Card key={proj.id} project={proj} />
        	})
        }
      </div>
    );
  }
}

export default Projects;
