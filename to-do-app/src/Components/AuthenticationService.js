class AuthenticationService{

    registerSucessInSessionStorage(userName) {
        sessionStorage.setItem('userLoggedIn', userName);
    }

    logout(){
        sessionStorage.removeItem('userLoggedIn');
    }
    
    IsUserLoggedIn(){
        let user = sessionStorage.getItem('userLoggedIn')
        if (user === 'ashish')
            return true
        else 
            return false
    }
}

export default new AuthenticationService