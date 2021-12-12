import {Link} from 'react-router-dom'

const Welcome=()=>{
    return(
        <>
        Hi you are sucessfully logged in 
        <Link to ="/todo"> click here to go to todo list app </Link>
        </>
    )
}

export default Welcome