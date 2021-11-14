import Profile from "./images/Profile.png"
function Introduction() {
    return (
        <div className ="introduction">
            <div class="grid">
                <div class="welcome">
                    <h3>Welcome to my website! My name is</h3><span>Kyle Dinh</span>
                </div>
                <div class="headshot">
                    <img src = {Profile} alt = "Profile"/>
                </div>
            </div>
        </div>
    )
}

export default Introduction
