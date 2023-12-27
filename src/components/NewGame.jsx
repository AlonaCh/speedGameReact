import { useState } from "react";

function NewGame({ onclick }) { // props from App(parent)

    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h2>To start your game write your name and choose a level</h2>
            <input type="text" onChange={inputHandler} />
            <div>

                <button className="levelBtn" onClick={() => // now it takes 2 parametrs onclick('easy', name)
                    onclick('easy', name)}>Easy</button>

                <button className="levelBtn" onClick={() => onclick('medium', name)}>Medium</button>
                <button className="levelBtn" onClick={() => onclick('hard', name)}>Hard</button>
            </div>
        </div>
    )
}
export default NewGame;