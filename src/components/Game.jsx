import Circle from '../Uicomponents/Circle'

export default function Game({ score, circles, stopHandler }) {
    return (
        <div>
            <p>{score}</p>
            <div className='circles'>
                <div>{circles.map((element, i) =>
                    <Circle key={i} id={i} />)}
                </div>
            </div>
            <button onClick={stopHandler}>Stop game</button>
        </div>
    )
}