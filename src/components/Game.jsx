export default function Game({ score, circles, stopHandler }) {
    return (
        <div>
            <p>{score}</p>
            <div>{circles.map((element, i) =>
                <Circle key={i} />)}
            </div>
            <button onClick={stopHandler}>Stop game</button>
        </div>
    )
}