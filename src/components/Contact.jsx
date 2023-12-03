import '../App.css'

function Contact(props) {
    return(
        <div id='contact-div'>
            <p>Email: <span id='email'>{props.email}</span></p>
            <p>Linkedin: <a href={props.linkedinLink}>{props.linkedinTxt}</a></p>
            <p>GitHub: <a href={props.githubLink}>{props.githubTxt}</a></p>
        </div>
    )
}

export default Contact