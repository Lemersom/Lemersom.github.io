import '../App.css'

function ListComponent(props) {
    return(
        <>
            <h3 className='topic'>{props.topic}</h3>
            <ul>
                {
                props.list.map((item) => (
                    <li>{item}</li>
                ))
                }
            </ul>
        </>
    )
}

export default ListComponent