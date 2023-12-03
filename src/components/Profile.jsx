import '../App.css'

function Profile(props) {
    return(
        <div id='profile-div'>
            <img id='profile-picture' src={props.image}/>
            <div className='name-div'>
              <h1>{props.name}</h1>
              <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Profile