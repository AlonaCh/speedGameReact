import Circle from '../Uicomponents/Circle'

export default function Game({ score, circles, stopHandler, circleClickHandler }) {
    return (
        <div>
            <p>{score}</p>

            <div className='circles'>
                {circles.map((_, i) => // a variable is required by the syntax (e.g., in a map function where both the current element and index are expected), but the variable is not needed, using an underscore maintains consistency and clarity in the code.
                    <Circle key={i} id={i} circleClickHandler={circleClickHandler} />)}

            </div>
            <button onClick={stopHandler}>Stop game</button>
        </div >
    )
}