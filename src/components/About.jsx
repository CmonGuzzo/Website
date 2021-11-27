import {useState} from 'react'
import Letter from "./Letter"

const statement = "My goal as a software engineer revolves around two principles: discovery and creativity. I love starting a project from scratch, figuring out innovative ways to reach its full potential, and watching my work make a difference in other's lives. As I work on these projects, I am constantly adding new skills under my belt since my mind seeks the thrill of new challenges along the way. With an endless pool of concepts in the virtual world of software developement, I want to discover and master as many as I can."
const letters = [];
for (var i in statement){
    letters.push([statement[i],i]);
}

function About() {
    const [active,setActive] = useState();
    return (
        <div id = "about">
            <h1>About Me</h1>
            {letters.map(letter=>{
                const handleMouse = ()=>{
                    setActive(letter[1]);
                }
                if (letter[0]!==" " && active!==letter[1]){
                    return <Letter key={letter[1]} letter={letter[0]} name="" handleMouse={handleMouse}></Letter>
                }
                else if (letter[0]!==" " && active===letter[1]){
                    return <Letter key={letter[1]} letter={letter[0]} name="letter" handleMouse={handleMouse}></Letter>
                }
                else{
                    return letter[0];
                }
            })}
        </div>
    )
}

export default About
