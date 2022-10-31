import React from 'react'
import TextField from '@mui/material/TextField';
import Style from './Register.module.css'
import Button from '@mui/material/Button';

export default function Register_copy() {
    return (
        <>
            <div className={Style.Container}>
                <div className={Style.Column1}>
                    <div className={Style.Box1}>
                        <br></br>
                        <img className={Style.imageset} src='/logo2.png'></img>
                        <h3>Create Your Google Account</h3>
                    </div>

                    <div className={Style.Box2}>
                        <TextField type={'text'} sx={{ marginRight: 2, width: 0.40 }} label="First Name" variant="outlined" />
                        <TextField type={'text'} sx={{ width: 0.40 }} label="Last Name" variant="outlined" />
                        <div className={Style.Column2}>
                            <img className={Style.img} src='/logo1.png'></img>
                            <h5> One Account.All of Google<bR></bR> working for you.</h5>
                        </div>
                    </div>
                    <br></br>
                    <div className={Style.Box3}>
                        <TextField type={'email'} sx={{ width: 1 }} label="username" variant="outlined" />
                    </div>

                    <br></br><br></br><br></br>

                    <div className={Style.Box4}>
                        <TextField type={'password'} sx={{ width: 0.46 }} label="Password" variant="outlined" />
                        <TextField type={'password'} sx={{ width: 0.46 }} label="Confirm Password" variant="outlined" />

                    </div>

                    <br></br>

                    <div className={Style.Checkbox}>
                        <input type="checkbox"></input>
                        <label>Show Password</label>
                    </div>

                    <br></br>

                    <div className={Style.lastlabel}>
                        <Button sx={{ marginLeft:2,marginRight: 8}} variant="text">Sign In instead</Button>
                        <Button sx={{ marginLeft:7,width: 0.31 }} variant="contained">NEXT</Button>
                    </div>


                </div>
            </div>
        </>

    )
}
