import React from 'react'
import './Loginpage.css';
export default function Loginpage() {
  return (
    <>
      <div className='Container'>

        <center><h3>Fundoo</h3></center>
        <center><h2>Sign in</h2></center>

        <div className='inputlabel'>
          <input value={"Email"} className='input'></input>
        </div>

        <br></br><br></br>

        <div className='inputlabel'>
          <input type={" "} value="Password" className='input'></input>
        </div>

        <br></br><br></br><br></br>

        <div className='lastlabel'>
          <button className='btn1 success'>Create account</button>
          <button className='btn2'>Next</button>
        </div>

      </div>
    </>

  )
}
