import Circle from '../Uicomponents/Circle'

export default function Game({ score, circles, stopHandler, circleClickHandler, current, audioHandler }) {
    audioHandler();

    return (
        <div>
            <p>{score}</p>

            <div className='circles'>
                {circles.map((_, i) => 
                    <Circle key={i} id={i} circleClickHandler={circleClickHandler}
                        current={current === i} />)}

            </div>
            <button className="stopBtn" onClick={stopHandler}>Stop game</button>
        </div >
    )
}