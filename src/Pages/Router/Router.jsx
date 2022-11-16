import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from '../Dashboard/dashboard'
import Loginpage_copy from '../Login/Loginpage_copy'
import Register_copy from '../SignUp/Register_copy'

export default function Routerone() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Loginpage_copy/>}/>
                <Route  path='/signup' element={<Register_copy/>}/>
                <Route  path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </div>
  )
}
