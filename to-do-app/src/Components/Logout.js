import AuthenticationService from "./AuthenticationService"

const Logout =()=>{
    AuthenticationService.logout();
    return <div>
    you have sucessfully logged out    
        </div>
}

export default Logout