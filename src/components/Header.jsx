import Home from "./images/header/Home.png"
import About from "./images/header/About Me.png"
import Skills from "./images/header/Skills.png"
import Projects from "./images/header/Projects.png"
import Contact from "./images/header/Contact Me.png"
import {useState} from "react"
import {Link} from 'react-scroll'


const listImages = [{image: Home, src: "Home", id:"home"}, 
{image: About, src: "About", id:"about"},
{image: Skills, src: "Skills", id:"skills"},
{image: Projects, src: "Projects", id:"projects"},
{image: Contact, src: "Contact", id:"contact"}];

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
                        return <Link activeClass="active" to={single.id} spy={true} smooth={true}><button key={single.src} onClick = {onClick} className = "active"><img src={single.image} alt={single.src}/></button></Link>
                    }
                    else{
                        return <Link activeClass="active" to={single.id} spy={true} smooth={true}><button key={single.src} onClick = {onClick}><img src={single.image} alt={single.src}/></button></Link>
                    }
                    
                })}
            </div> 
        </div>
    )
}

export default Header
