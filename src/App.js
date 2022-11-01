import logo from './logo.svg';
import './App.css';
import Loginpage from './Pages/Login/Loginpage';
import Register from './Pages/SignUp/Register';
import Register_copy from './Pages/SignUp/Register_copy';
import Loginpage_copy from './Pages/Login/Loginpage_copy';

function App() {
  return (
    <div className='App'>
       {/*<Loginpage/>*/}
       {<Loginpage_copy/>}
       {<Register_copy/>}
    </div>
  );
}

export default App;
