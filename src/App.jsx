import { useState } from 'react'
import { levels } from './levels'
import './index.css'
import NewGame from "./components/NewGame"
import Game from './components/Game'
import GameOver from './components/GameOver'

// have a condition -> by default show NewGame and after getting data for Game, hide NewGame and display Game
// new component gameover (by default hidden) wiil hide Game

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]) // it is empty array because map method looking for array
  const [score, setScore] = useState(10);
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1) //0 is a first element. we need to compare so we need some number

  let timer;
  let pace = 1000;


  const gameSetHandler = (level, name) => {
    // it is from onclick('easy')
    // based on level, we find the matching object from levels array, and then make a array for the circles, with amount in the object.
    const levelIndex = levels.findIndex(element =>  // go through untill you find it
      element.name === level);

    const levelAmountCircles = levels[levelIndex].amount //index of levels and adressing object
    const circlesArray = Array.from({ length: levelAmountCircles }, (x, i) => i);

    setCircles(circlesArray);
    console.log('circlesArray', circlesArray);
    setPlayer(
      {
        level: level,
        name: name
      }
    )
    setGameLaunch(!gameLaunch)
    setGameStart(!gameStart)
    randomNumber()
  }

  const stopHandler = () => {
    setGameStart(!gameStart)
    setGameOver(!gameOver)
    clearTimeout(timer)

  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
  }

  const circleClickHandler = (id) => {
    console.log('circle was clicked:', id) // it takes some data from event
    setScore(score + 10);
  };

  // after gameLaunch it starts
  const randomNumber = () => {
    let nextActive;

    do {
      nextActive = getRandomNumber(0, circles.length) // it has to compare nextActive is same as current do it again
    } while (nextActive === current);

    setCurrent(nextActive)
    console.log(nextActive)

    timer = setTimeout(randomNumber, pace) // we will triger 
  }


  return (
    <>
      <h1>Try to catch me!</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameStart && <Game
        score={score}
        circles={circles}
        stopHandler={stopHandler}
        circleClickHandler={circleClickHandler} />}
      {gameOver && <GameOver {...player} closeHandler={closeHandler} score={score} />}
    </>
  )
}

export default App
