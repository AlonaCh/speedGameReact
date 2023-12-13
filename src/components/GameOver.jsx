import gameOverSound from "../assets/gameOver.mp3"

export default function GameOver({ name, level, closeHandler, score }) {
    const gameOverSoundlose = new Audio(gameOverSound);

    gameOverSoundlose.play();
    return (
        <div className="overlayModal">
            <div className="modal">
                <p>Hi {name}!</p>
                <h1>GAME OVER</h1>
                <div className="gameInfo">
                    <p>Your score is: {score}</p>
                    <p>Your level is: {level}</p>
                </div>
                <p>Will be here gameovere</p>
                <button className="close" onClick={closeHandler}>
                    <span className="material-symbols-outlined"> X </span>
                </button>
            </div>
        </div>
    )
}