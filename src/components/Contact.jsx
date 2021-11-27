import emailjs from "emailjs-com"

function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_bdecwah', 'template_t7gy68t', e.target, 'user_9wCmbSdsqmR0VVyqhhK1X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div id = "contact">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input type='text' className="formName" name="name" placeholder="Name" required></input>
                <label htmlFor="email">Email:</label>
                <input type='email' className="formEmail" name="email" placeholder="Email" required></input>
                <label htmlFor="message">Message:</label>
                <textarea className="formMessage" type='text' name="message" placeholder="Message" required></textarea>
                <br/>
                <input className="submit" type="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default Contact
