import React from 'react'
//import './Loginpage.css';
import Style from './Loginpage.module.css'
import TextField from '@mui/material/TextField';

export default function Loginpage() {
  return (
    <>
      <div className={Style.Container}>
        <img  className={Style.imageset} src="./logo2.png"></img>
        <center><h2>Sign in</h2></center>

        <div className={Style.inputlabel}>
          <input type="Email" placeholder='Email' className={Style.input}></input>
        </div>

        <br></br><br></br>

        <div className={Style.inputlabel}>
          <input type="Password" placeholder='Password' className={Style.input}></input>
        </div>

        <br></br><br></br><br></br>

        <div className={Style.lastlabel}>
          <button className={Style.btn1} success>Create account</button>
          <button className={Style.btn2}>Next</button>
        </div>

      </div>
    </>

  )
}
