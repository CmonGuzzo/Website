import StarIcon from "./images/skills/Star.png"

function Star({numStars}) {
    if (numStars===3){
        return (
            <div className="starContainer">
                <img className="firstStar" src={StarIcon} alt="Star"/>
                <img className="secondStar" src={StarIcon} alt="Star"/>
                <img className="thirdStar" src={StarIcon} alt="Star"/>
            </div>
        )
    }
    else if(numStars===2){
        return (
            <div className="starContainer">
                <img className="firstStar" src={StarIcon} alt="Star"/>
                <img className="secondStar" src={StarIcon} alt="Star"/>
            </div>
        )
    }
    else{
        return (
            <div className="starContainer">
                <img className="firstStar" src={StarIcon} alt="Star"/>
            </div>
        )
    }
}

export default Star
