import logo from './logo.svg';
import './App.css';
import Loginpage from './Pages/Login/Loginpage';
import Register from './Pages/SignUp/Register';

function App() {
  return (
    <div className='App'>
       <Register/>
       <Loginpage/>
    </div>
  );
}

export default App;
