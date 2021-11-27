import Hole from "./Hole"
import HTML from './images/skills/HTML.png'
import CSS from './images/skills/CSS.png'
import JS from './images/skills/JS.jpg'
import SQL from './images/skills/SQL.jpg'
import PHP from './images/skills/PHP.png'
import C from './images/skills/C++.png'
import Python from './images/skills/Python.png'
import Java from './images/skills/Java.png'
import Matlab from './images/skills/Matlab.png'
import Microsoft from './images/skills/Microsoft.png'

const skillImages = [{image: HTML, src: "HTML", stars:3}, 
{image: CSS, src: "CSS", stars:3},
{image: JS, src: "JS", stars:2},
{image: SQL, src: "SQL", stars:2},
{image: PHP, src: "PHP", stars:2},
{image: Java, src: "Java", stars:3},
{image: Python, src: "Python",stars:2},
{image: C, src: "C++", stars:2},
{image: Matlab, src: "Matlab", stars:3},
{image: Microsoft, src: "Microsoft", stars:3}];

function Skills() {

    return (
        <div id ="skills">
            <h1>Skills</h1>
            <div className ="skillsGrid">
                {skillImages.map(single => {
                    return <Hole key = {single.src} image={single.image} alt={single.src} stars={single.stars}></Hole>;
                })}
            </div>
        </div>
    )
}

export default Skills
