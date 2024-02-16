import { useRef, useState } from 'react'
import { levels } from './levels'
import './index.css'
import NewGame from "./components/NewGame"
import Game from './components/Game'
import GameOver from './components/GameOver'
import gameOverSound from "./assets/gameOver.mp3"
import soundGame from "./assets/running.mp3"



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [current, setCurrent] = useState(-1)

  const timeoutIdRef = useRef(null); 
  const rounds = useRef(0);
  const currentInst = useRef(0); 

  const gameOverAudio = useRef(new Audio(gameOverSound));
  const gameStartAudio = useRef(new Audio(soundGame));


  let pace = 1000;
  let levelAmountCircles;

  const gameSetHandler = (level, name) => {
   
    const levelIndex = levels.findIndex(element =>
      element.name === level);

    levelAmountCircles = levels[levelIndex].amount 

    const circlesArray = Array.from({ length: levelAmountCircles }, (_, i) => i); 
    setCircles(circlesArray);
    setPlayer(
      {
        level: level,
        name: name
      }
    )

    setGameLaunch((prevState) => !prevState) 
    setGameStart(!gameStart)
    randomNumber()
  }

  const stopHandler = () => {
    setGameStart((prevState) => !prevState);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;

  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)

  }

  const circleClickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return; 
    }
    setScore(score + 10);
    rounds.current--;
  };

  const randomNumber = () => {
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRandomNumber(0, levelAmountCircles)
    } while (nextActive === currentInst.current);//

    setCurrent(nextActive)
    currentInst.current = nextActive;
    rounds.current++;
    timeoutIdRef.current = setTimeout(randomNumber, pace) 
    pace *= 0.95;
  }

  //Audio handler
  function audioHandler() {
    if (gameStart) {
      gameStartAudio.current.play();
    } else if (gameOver) {
      gameStartAudio.current.pause();
      gameOverAudio.current.play();
    } else {
      gameStartAudio.current.pause();
    }
  }
  const homeHandler = () => {
    window.location.reload();
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
        current={current}
        audioHandler={audioHandler} />}
      {gameOver && <GameOver {...player} closeHandler={closeHandler} score={score} audioHandler={audioHandler} homeHandler={homeHandler} />}
    </>
  )
}

export default App
