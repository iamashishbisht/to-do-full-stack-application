import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Todo from './Components/Todo';
import ErrorPage from './Components/ErrorPage';
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Logout from './Components/Logout';
import Home from './Components/Home';
import AuthenticatedRoute from './Components/AuthenticatedRoute';

function App() {

  //const [state , setState] = useState('false') 

  useEffect(() => {
    // Update the document title using the browser API
    console.log('upadated');
    document.title = `updated the component`;
  });

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/'  element={<Home/>}/>
        <Route path = '/login'  element={<Login/>}/>
        <Route path = '/welcome/:name' element={<AuthenticatedRoute returnComponent={Welcome}/>}/>
        <Route path = '/todo' element={<AuthenticatedRoute returnComponent={Todo}/>}/> 
        <Route path = '*' element={<AuthenticatedRoute returnComponent={ErrorPage}/>}/> 
        <Route path = '/logout' element={<AuthenticatedRoute returnComponent={Logout}/>}/>
        {/* <Route path = '/'  element={<Home/>}/>
        <Route path = '/login'  element={<Login/>}/>
        <Route path = '/welcome/:name' element={<Welcome/>}/>
        <Route path = '/todo' element={<Todo/>}/> 
        <Route path = '*' element={<ErrorPage/>}/> 
        <Route path = '/logout' element={<Logout/>}/> */}
      </Routes>
      </BrowserRouter>


      <Footer/>

    </div>
    
  );
}

export default App;
