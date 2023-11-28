import { useState } from 'react'
import { levels } from './levels'
import Circle from './Uicomponents/Circle'
import './index.css'
import NewGame from "./components/NewGame"
import Game from './components/Game'
import GameOver from './components/GameOver'

// have a condition -> by default show NewGame and after getting data for Game, hide NewGame and display Game
// new component gameover (by default hidden) wiil hide Game

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]) // it is empty array because map method looking for array
  const [score, setScore] = useState(10);
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)


  const gameSetHandler = (level, name) => {
    // it is from onclick('easy')
    // based on level, we find the matching object from levels array, and then make a array for the circles, with amount in the object.
    const levelIndex = levels.findIndex(element =>  // go through untill you find it
      element.name === level);

    const levelAmount = levels[levelIndex].amount //index of levels and adressing object

    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    setCircles(circlesArray)
    console.log('circlesArray', circlesArray);
    setPlayer(
      {
        level: level,
        name: name
      }
    )
    setGameLaunch(!gameLaunch)
    setGameStart(!gameStart)
  }

  const stopHandler = () => {
    setGameStart(!gameStart)
    setGameOver(!gameOver)
  }

  return (
    <>
      <p>Catch me!</p>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameStart && <Game score={score} circles={circles} stopHandler={stopHandler} />}
      {gameOver && <GameOver />}
    </>
  )
}

export default App
