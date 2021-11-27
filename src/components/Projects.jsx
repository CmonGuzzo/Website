import Project from "./Project"
import {Carousel} from '3d-react-carousal';
import Tetris from "./images/projects/Tetris.PNG"
import Soon from "./images/projects/soon.jpg"

function Projects() {
    const slides = [
    <Project name="Tetris" 
        desc="Standard JS Tetris Game with storable high scores. Game display done through HTML and CSS. Implementation of CRUD functions through AJAX and JSON. 
                Commuication between database and client through SQL and HTTP Request. " 
        img={Tetris} link="http://303.itpwebdev.com/~kyledinh/final_project/main_menu.html"/>,
    <Project name="Coming Soon" desc="Coming Soon" img={Soon} link=""/>,
    <Project name="Coming Soon" desc="Coming Soon" img={Soon} link=""/>];
    return (
        <div id ="projects">
            <h1>Projects</h1>
            <Carousel slides={slides}/>
        </div>
    )
}

export default Projects
