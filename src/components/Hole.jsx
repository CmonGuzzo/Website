import HoleImage from './images/skills/Hole.png'
import {useState, useEffect} from "react"
import Star from "./Star"



function Hole({image, alt, stars}) {
    const [animation, setAnimation] = useState("skillContainer rise");

    useEffect(()=>{
        setAnimation("skillContainer rise");
    },[animation])

    const handleClick = () => {
        setAnimation("skillContainer");
    }

    return (
        <div className = "hole">
            <div className={animation}>
                <img className = "skillIcon floating" src={image} alt ={alt} onClick={handleClick}/>
            </div>
            <img className = "holeIcon" src={HoleImage} alt ="Hole"/>
            <Star numStars={stars}/>
        </div>
    )
}

export default Hole
