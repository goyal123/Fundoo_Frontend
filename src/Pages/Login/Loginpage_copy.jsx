import React from 'react'
import Style from './Loginpage.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Loginpage_copy() {
    return (
        <>
            <div className={Style.Container}>
                <div>
                    <img className={Style.imageset} src="./logo2.png"></img>
                </div>
                <br></br>
                <center><h2>Sign in</h2></center>
                <div className={Style.inputlabel}>
                    <TextField type={'email'} sx={{ width: 1 }} label="Email" variant="outlined" />
                </div>
                <br></br><br></br>
                <div className={Style.inputlabel}>
                    <TextField type={'password'} sx={{ width: 1 }} label="Password" variant="outlined" />
                </div>
                <br></br><br></br><br></br>
                <div className={Style.lastlabel}>
                    <Button sx={{ marginLeft: 4, marginRight: 1 }} variant="text">create account</Button>
                    <Button sx={{ marginLeft: 6, width: 0.31 }} variant="contained">NEXT</Button>
                </div>
            </div>
        </>
    )
}
