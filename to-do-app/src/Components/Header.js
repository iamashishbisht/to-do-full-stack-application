import { Link } from "react-router-dom"
import "../Styling/Style.css"
import AuthenticationService from "./AuthenticationService"

const Header =()=>{
       
   let isLoggedIn = AuthenticationService.IsUserLoggedIn();
                    return <>
                            {/* <div className='Header-style'>
                            <span className="left">Home</span>
                            <span className="right">
                            <span>Login</span>
                            <span>Logout</span>
                            </span>
                            </div> */}
                             <div className='Header-style'>
                                <div className="left">
                                    <div><Link to='/'>Home  </Link></div>
                                    <div> <Link to='/todo'> todo</Link></div>
                                 </div>

                                <div className="right">
                                    <div><Link to='/login'>Login  </Link></div>  
                                    {isLoggedIn && <div><Link to='/logout' >Logout</Link></div>}
                                </div>
                             </div> 
                            </>

                    

}

export default Header