import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Todo from './Components/Todo';
import ErrorPage from './Components/ErrorPage';
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <Header/>
    
      <BrowserRouter>
      <Routes>
        <Route path = '/'  element={<Login/>}/>
        <Route path = '/welcome' element={<Welcome/>}/>
        <Route path = '/todo' element={<Todo/>}/> 
        <Route path = '*' element={<ErrorPage/>}/> 
      </Routes>
      </BrowserRouter>


      <Footer/>

    </div>
    
  );
}

export default App;
