import React, { Component } from 'react';
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import heroes from "./heroes.json";
import "./App.css";
  
  class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      message: "Click on an image to begin!",
      heroes,
      score: 0,
      highScore: 0,
      unselectedHeroes: heroes
    };

    endGame = () => {
      //if current score is greater than the high score replace it with current score
      if (this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score}, function() {
          // console.log(this.state.highScore);
        });
      }
    //setting each hero count to 0 for the hero click
      this.state.heroes.forEach(hero => {
        hero.count = 0;
      });
      // this.setState({
      //          message: "You guessed incorrectly!",
      //          score: 0,
      //          heroes,
      //          unselectedHeroes: heroes
      alert(`You Lose : ${this.state.score}`);
      this.setState({score: 0});
      return true;
      //win game if at 12 wins 
    }

    
    
    heroClick = id => {

      this.state.heroes.find((name, i) => {
       if (name.id === id) {
          if(heroes[i].count === 0) {
            heroes[i].count = heroes[i].count + 1;
            //this.setState({
              //        message: "You guessed correctly!",
              //        score: this.state.score +1,
              //        heroes, 
              //        unselectedHeroes: newHeroes
            this.setState({score : this.state.score +1}, function() {
            console.log(this.state.score);
          });
          this.state.heroes.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.endGame();
      
  //      this.setState({
  //        message: "You guessed incorrectly!",
  //        score: 0,
  //        heroes,
  //        unselectedHeroes: heroes
        }
      }
      });

  }
  
  // Map over this.state.heroes and render a HeroCard component for each hero object
    render() {
      return (
        <Wrapper>
          <Navbar
            message={this.state.message}
            score={this.state.score}
            highScore={this.state.highScore}
            /> 
          <Title></Title>
          <h2> Click on each of the 12 cards once without clicking the same card twice and you win! Click on the same card twice before you select all 12 and you lose!  </h2>
          {this.state.heroes.map(hero => (
            <HeroCard
              heroClick={this.heroClick}
              id={hero.id}
              key={hero.id}
              name={hero.name}
              image={hero.image}
            />
          ))}
        </Wrapper>
      );
    }
  } 
  
export default App;
  

