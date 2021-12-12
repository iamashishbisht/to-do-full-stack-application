import React , {Component} from "react"
import { Route, withRouter, useHistory } from 'react-router-dom'
import "../Styling/Style.css"
import { createBrowserHistory } from "history";

class Login extends Component{

    LoginButtonAction(){
        //alert("login clicked");
        const history = createBrowserHistory();
        //this.props.history.push('/welcome');
        history.push("/welcome");
        
        
                 //this.Route.history.push('/welcome');
       }

    render(){
        return( 
            <div className='Login-style'>
                <div>
                    <span>Username : </span>
                    <input type='text' name='Username'/>
                </div>
                <div>
                    <span>Password : </span>
                    <input type='password' name='Password'/>
                </div>
                <div className='Login-button'>
                    <button onClick={this.LoginButtonAction}>
                    Login    {React.version}
                    </button>
                 </div>
             </div>
        )

    }
}

export default (Login);