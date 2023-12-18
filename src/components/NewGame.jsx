import { useState } from "react";

function NewGame({ onclick }) { // props from App(parent)

    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h2>Start a game by writing your name and choosing a level</h2>
            <input type="text" onChange={inputHandler} />
            <div>

                <button onClick={() => // now it takes 2 parametrs onclick('easy', name)
                    onclick('easy', name)}>Easy</button>

                <button onClick={() => onclick('medium', name)}>Medium</button>
                <button onClick={() => onclick('hard', name)}>Hard</button>
            </div>
        </div>
    )
}
export default NewGame;