import logo from './logo.svg';
import './App.css';
import Register from './Pages/SignUp/Register';
import Register_copy from './Pages/SignUp/Register_copy';
import Loginpage_copy from './Pages/Login/Loginpage_copy';
import Header from './Components/Header';
import Takenote1 from './Components/Takenote1';
import Takenote2 from './Components/Takenote2';
import Takenote3 from './Components/Takenote3';
import Dashboard from './Pages/Dashboard/dashboard';
import store from './Components/Redux/Store';
import {Provider} from 'react-redux'
import Routerone from './Pages/Router/Router';



function App() {
  return (
    <>
    
      <div className='App'>
        {/*<Loginpage/>*/}
          {/* <Loginpage_copy/>  */}
         {/* { <Register_copy/> }  */}
      </div>

      <Provider store={store}>
         {/* <Dashboard/> */}
         <Routerone/>
      </Provider>
      
      
    </>


  );
}

export default App;
