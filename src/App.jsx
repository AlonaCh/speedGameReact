import { useRef, useState } from 'react'
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

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0); // highliter

  let pace = 1000;
  let levelAmountCircles;

  const gameSetHandler = (level, name) => {
    // it is from onclick('easy')
    // based on level, we find the matching object from levels array, and then make a array for the circles, with amount in the object.
    const levelIndex = levels.findIndex(element =>  // go through untill you find it. It renders index
      element.name === level);

    levelAmountCircles = levels[levelIndex].amount //index of levels and adressing object. 

    //const {amount} = levels.find((element) => element.name === level);
    const circlesArray = Array.from({ length: levelAmountCircles }, (_, i) => i); //how many elements has to be there. put index inside. (_, i) => i) reserve place for element but we do not use it
    setCircles(circlesArray);
    setPlayer(
      {
        level: level,
        name: name
      }
    )
    setGameLaunch((prevState) => !prevState) // To be sure it goes and check the current state. (previousState + 1). !gameLaunch
    setGameStart(!gameStart)
    randomNumber()
  }

  const stopHandler = () => {
    setGameStart((prevState) => !prevState);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
  }

  const circleClickHandler = (id) => {
    console.log('circle was clicked:', id) // it takes some data from event
    if (current !== id) {
      stopHandler();
      return; // it is like break here
    }
    setScore(score + 10);
    rounds.current--;
  };

  // after gameLaunch it starts
  const randomNumber = () => {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRandomNumber(0, levelAmountCircles) // it has to compare //(0, circles.length) nextActive is same as current do it again
    } while (nextActive === currentInst.current);//

    setCurrent(nextActive)
    currentInst.current = nextActive;
    rounds.current++;
    timeoutIdRef.current = setTimeout(randomNumber, pace) // we will triger 
    pace *= 0.95;
    console.log(nextActive);
  }


  return (
    <>
      <h1>Try to catch me!</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameStart && <Game
        score={score}
        circles={circles}
        stopHandler={stopHandler}
        circleClickHandler={circleClickHandler}
        current={current} />}
      {gameOver && <GameOver {...player} closeHandler={closeHandler} score={score} />}
    </>
  )
}

export default App
