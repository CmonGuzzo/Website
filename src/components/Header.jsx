import Home from "./images/Home.png"
import About from "./images/About Me.png"
import Skills from "./images/Skills.png"
import Projects from "./images/Projects.png"
import Contact from "./images/Contact Me.png"
import Button from "./Button"
import {useState} from "react"


const listImages = [{image: Home, src: "Home"}, 
{image: About, src: "About"},
{image: Skills, src: "Skills"},
{image: Projects, src: "Projects"},
{image: Contact, src: "Contact"}];

function Header() {
    const [active, setActive] = useState(listImages[1])
    return (
        <div className ="header">
             <div className="buttons">
                {listImages.map(single => {
                    const onClick = () => {
                        setActive(single);
                    }
                    if (active === single){
                        return <Button parentClass = "active" onClick = {onClick} image={single.image} alt={single.src}></Button>
                    }
                    else{
                        return <Button onClick = {onClick} image={single.image} alt={single.src}></Button>
                    }
                    
                })}
            </div> 
        </div>
    )
}

export default Header
