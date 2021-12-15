import {BrowserRouter , Route, Routes, Link} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService"

// const AuthenticatedRoute = ({returnComponent})=>{
const AuthenticatedRoute = (props)=>{
const loggedIn = AuthenticationService.IsUserLoggedIn();
const ComponentName = props.returnComponent;
console.log(".....................");
    return <>
    {/* <Routes>
                {true && <Route returnComponent />}  
                </Routes> */}
                {loggedIn? <props.returnComponent/> : <div>you are logged out, first login into the application</div>}     
    </>

}

export default AuthenticatedRoute