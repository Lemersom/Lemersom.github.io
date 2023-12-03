import '../App.css'

function Experience(props) {
    return(
        <div className='experience-div'>
            <h4>{props.title}</h4>
            <p>Tecnologias: {props.techs}.</p>
            <p>{props.about}.</p>
            {
                props.link ?
                    <a href={props.link}>Mais Sobre</a>
                : null
            }
        </div>
    )
}

export default Experience