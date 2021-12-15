import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

// const Welcome=()=>{
//     return(
//         <>
//         {console.log(this.props.match.param.name)}
//         Hi  you are sucessfully logged in 
//         <Link to ="/todo"> click here to go to todo list app </Link>
//         </>
//     )
// }

// class Welcome extends Component{
//     render(){
//         return <>
//         {console.log(this.props.match.param.name)}
//         Hi  you are sucessfully logged in 
//         <Link to ="/todo"> click here to go to todo list app </Link>
//         </>

//     }
// }

const Welcome=()=>{
    
    const {name} = useParams();
        return <>
    
        Hi <b> {name} </b>you are sucessfully logged in 
        <div><Link to ="/todo"> click here to go to todo list app </Link></div>
        </>

    

}

export default Welcome