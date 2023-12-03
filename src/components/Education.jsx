import '../App.css'

function Education(props) {
    return(
        <div className='education-div'>
            <p>{props.period}</p>
            <h4>{props.institution}</h4>
            <p>{props.course}</p>
        </div>
    )
}

export default Education