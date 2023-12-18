

export default function GameOver({ name, level, closeHandler, score, audioHandler }) {

    audioHandler();


    return (
        <div className="overlayModal">
            <div className="modal">
                <p>Hi {name}!</p>
                <h1>GAME OVER</h1>
                <div className="gameInfo">
                    <p>Your score is:  {score <= 40
                        ? `${score}🐇 Hares are faster than you!`

                        : score >= 50 && score < 70
                            ? `${score}🐰 Speed up next time!`
                            : score >= 70 && score < 100
                                ? `${score}🐇 You are super fast!`
                                : ` ${score}🐰 You are a rocket!`}</p>

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