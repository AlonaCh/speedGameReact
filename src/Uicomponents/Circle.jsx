export default function Circle({ id, circleClickHandler }) {
    return (

        <div className="circle" onClick=
            {() => { circleClickHandler(id) }}> {/* id in a Game component, we have index(i) so it is acctualy i that we pass from the key. we pass circleClickHandler from App to Game to Circle. clickHndler in App recives the id from here. event send data up! clickhandlar will modify score that is in App. So state is there clickHandlar has to be there*/}

            <p>{id}</p>
        </div >
    )
}