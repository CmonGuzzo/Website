import Profile from "./images/Profile1.png"
import Ring from "./Ring"
function Introduction() {
    return (
        <div id ="introduction">
            <div className="welcome">
                <div className="welcomeMessage">
                    <Ring name="ring1" offset="0deg"/>
                    <Ring name="ring2" offset="5deg"/>
                    <Ring name="ring3" offset="10deg"/>
                    <h3>Welcome to my website! My name is</h3><span>Kyle Dinh</span>
                </div>
                <div className="headshot">
                    <img src = {Profile} alt = "Profile"/>
                </div>
            </div>
        </div>
    )
}

export default Introduction
