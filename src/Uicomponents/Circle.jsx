export default function Circle({ id, circleClickHandler, current }) {
    let circleImage;
    if (id === 0) {
        circleImage = "circle1"
    }
    else if (id === 1) {
        circleImage = "circle2"
    }
    else if (id === 2) {
        circleImage = "circle3"
    }
    else if (id === 3) {
        circleImage = "circle4"
    }
    else if (id === 4) {
        circleImage = "circle5"
    }
    else if (id === 5) {
        circleImage = "circle6"
    }
    else if (id === 6) {
        circleImage = "circle7"
    }

    return (

        <div className={`circle ${circleImage} ${current ? 'active' : ''}`}
            /*id={id === current ? circleImage : undefined}*/
            id={`circle${id + 1}`}
            onClick={() => { circleClickHandler(id) }}> {/* id in a Game component, we have index(i) so it is acctualy i that we pass from the key. we pass circleClickHandler from App to Game to Circle. clickHndler in App recives the id from here. event send data up! clickhandlar will modify score that is in App. So state is there clickHandlar has to be there*/}

            <p>{id}</p>
        </div >
    )
}