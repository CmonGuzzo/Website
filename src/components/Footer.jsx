import Linkedin from "./images/footer/Linkedin.png"
import Insta from "./images/footer/Insta.png"
import Facebook from "./images/footer/Facebook.png"
function Footer() {
    return (
        <div className ="footer">
            <a href="https://www.linkedin.com/in/kyle-dinh-433533195/" target="_blank" rel="noreferrer noopener"><img src={Linkedin} alt="linkedin"/></a>
            <a href="https://www.instagram.com/kiehlsforrealz/" target="_blank" rel="noreferrer noopener"><img src={Insta} alt="insta"/></a>
            <a href="https://www.facebook.com/kyle.dinh.378/" target="_blank" rel="noreferrer noopener"><img src={Facebook} alt="facebook"/></a>
        </div>
    )
}

export default Footer
