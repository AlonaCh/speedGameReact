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
            id={`circle${id + 1}`}
            onClick={() => { circleClickHandler(id); }}>
        </div >
    )
}