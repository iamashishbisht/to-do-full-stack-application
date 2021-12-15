import React , {Component} from "react"
import "../Styling/Style.css"
import { createBrowserHistory } from "history";
import AuthenticationService from "./AuthenticationService";

class Login extends Component{

    constructor(props){
        super(props);
    this.state={
       userName: '',
       password : '',
       loginFailed: false
       
    }
}
    GetEnteredText(e){
    //    const userName1 = e.target.userName;
    //     this.setState({
    //         userName1 : e.target.value,
    //         password1 :
    //    }
    if(e.target.name === 'userName')
        this.setState({
            [e.target.name]: e.target.value,

        });

    if(e.target.name === 'password'){
        this.setState({
            [e.target.name]: e.target.value,

        });
    }
       

       console.log("hey bro"+ this.state.userName);
    }

    LoginButtonAction(){
        //const history = useHistory();
        //alert("login clicked");
        
        const history = createBrowserHistory();
        //this.props.history.push('/welcome');
        console.log(this.state.userName);
     
        if(this.state.userName === 'ashish' && this.state.password === 'bisht'){
            AuthenticationService.registerSucessInSessionStorage(this.state.userName);
            console.log("if");

            // history.push(`/welcome/${this.state.userName}`);
        history.push(("/welcome/"+ this.state.userName));
        // push was appending the /welcome at the end but not triggering the url therefore i used reload function to make it work
        window.location.reload(true);

        // this.state.loginFailed = false;
        this.setState(
            {
                loginFailed : false
            }
        );
     }
     else{
         
        // this.state.loginFailed = true;
        this.setState(
            {
                loginFailed : true
            }
        );
         console.log("else " +this.state.loginFailed);
     }

       
     
    }
       

    render(){
        return(
            <> 
            {/* {
            this.state.loginFailed === true?
            <div>
                Login Failed
            </div>: <div>null</div>
            } */}
            {
                
                console.log("loginFailed "+ this.state.loginFailed),
                console.log("state "+ this.state.userName + " " + this.state.password)
            }
            {
                
                this.state.loginFailed && <div style={{color: 'red', marginTop: 10}}> Login Failed </div>
            }
            <div className='Login-style'>
                <div>
                    <span>Username : </span>
                    <input type='text' name='userName' onChange={this.GetEnteredText.bind(this)}/>
                </div>
                <div>
                    <span>Password : </span>
                    <input type='password' name='password' onChange={this.GetEnteredText.bind(this)}/>
                </div>
                <div className='Login-button'>
                    <button onClick={this.LoginButtonAction.bind(this)}>
                    Login    {React.version}
                    </button>
                 </div>
             </div>
             </>
        )

    }
}


export default (Login);