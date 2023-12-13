import Circle from '../Uicomponents/Circle'
import soundGame from "../assets/running.mp3"

export default function Game({ score, circles, stopHandler, circleClickHandler, current }) {
    const soundGameStart = new Audio(soundGame);
    console.log(soundGameStart)
    soundGameStart.play();
    return (
        <div>
            <p>{score}</p>

            <div className='circles'>
                {circles.map((_, i) => // a variable is required by the syntax (e.g., in a map function where both the current element and index are expected), but the variable is not needed, using an underscore maintains consistency and clarity in the code.
                    <Circle key={i} id={i} circleClickHandler={circleClickHandler}
                        //// compare if it is yes it gets the statuse
                        current={current === i} />)}

            </div>
            <button onClick={stopHandler}>Stop game</button>
        </div >
    )
}