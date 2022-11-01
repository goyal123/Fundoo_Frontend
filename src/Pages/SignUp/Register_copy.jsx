import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Style from './Register.module.css'
import Button from '@mui/material/Button';
import { registerapi } from '../../services/registerService';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


export default function Register_copy() {
    const [signupobj, setsignupobj] = useState({ firstName: "", lastName: "", service: "advance", email: "", password: "" })
    const [regexobj, setregexobj] = useState({ fnameBorder: false, fnameHelper: "", lnameBorder: false, lnameHelper: "", emailBorder: false, emailHelper: "", passswordBorder: false, passwordHelper: "" });

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setsignupobj(prevstate => ({ ...prevstate, [name]: value }))

    }



    const submit = () => {
        let fnameTest = fnameRegex.test(signupobj.firstName);
        let lnameTest = lnameRegex.test(signupobj.lastName);
        let emailTest = emailRegex.test(signupobj.email);
        let passwordTest = passwordRegex.test(signupobj.password);

        if (fnameTest === false) {
            setregexobj(prevstate => ({ ...prevstate, fnameBorder: true, fnameHelper: "Enter valid firstname" }));
        }
        else if (fnameTest === true) {
            setregexobj(prevstate => ({ ...prevstate, fnameBorder: false, fnameHelper: "" }));
        }

        if (lnameTest === false) {
            setregexobj(prevstate => ({ ...prevstate, lnameBorder: true, lnameHelper: "Enter valid firstname" }));
        }
        else if (lnameTest === true) {
            setregexobj(prevstate => ({ ...prevstate, lnameBorder: false, lnameHelper: "" }));
        }

        if (emailTest === false) {
            setregexobj((prevstate) => ({
                ...prevstate,
                emailBorder: true,
                emailHelper: "Enter valid email"
            }));
        }
        else if (emailTest === true) {
            setregexobj((prevstate) => ({
                ...prevstate,
                emailBorder: false,
                emailHelper: ""
            }));

        }

        if (passwordTest === false) {
            setregexobj((prevstate) => ({
                ...prevstate,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }));
        }
        else if (passwordTest === true) {
            setregexobj((prevstate) => ({
                ...prevstate,
                passwordBorder: false,
                passwordHelper: ""
            }));

        }


        if (fnameTest === true && lnameTest === true && emailTest === true && passwordTest === true) {

            registerapi(signupobj).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })

        }
        console.log(signupobj);

    }

    return (
        <>
            <div className={Style.Container}>
                <div className={Style.Column1}>
                    <div className={Style.Box1}>
                        <br></br>
                        <img className={Style.imageset} src='/logo2.png'></img>
                        <h2>Create Your Google Account</h2>
                        <h3>to continue to Fundoo</h3>
                    </div>

                    <div className={Style.Box2}>
                        <TextField type={'text'} sx={{ marginRight: 2, width: 0.40 }} name='firstName' label="First Name" variant="outlined" size='small' onChange={handlechange}
                            error={regexobj.fnameBorder} helperText={regexobj.fnameHelper} />

                        <TextField type={'text'} sx={{ width: 0.40 }} name='lastName' label="Last Name" variant="outlined" size='small' onChange={handlechange}
                            error={regexobj.lnameBorder} helperText={regexobj.lnameHelper} />
                        <div className={Style.Column2}>
                            <img className={Style.img} src='/logo1.png'></img>
                            One Account. All of Google working for you.
                        </div>

                    </div>

                    <div className={Style.Box3}>
                        <TextField type={'email'} sx={{ width: 1 }} name='email' label="username" variant="outlined" size='small' onChange={handlechange}
                            error={regexobj.emailBorder} helperText={regexobj.emailHelper} />
                    </div>
                    <div className={Style.textset}>
                        You can use letters,numbers & specials
                    </div>


                    <br></br>

                    <div className={Style.Box4}>
                        <TextField type={'password'} sx={{ width: 0.46 }} name='password' label="Password" variant="outlined" size='small' onChange={handlechange}
                            error={regexobj.passwordBorder} helperText={regexobj.passwordHelper} />
                        <TextField type={'password'} sx={{ width: 0.46 }} label="Confirm Password" variant="outlined" size='small' onChange={handlechange}
                            error={regexobj.passwordBorder} helperText={regexobj.passwordHelper} />
                    </div>
                    <div className={Style.textset1}>
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </div>



                    <div className={Style.Checkbox}>
                        <input type="checkbox"></input>
                        <label>Show Password</label>
                    </div>

                    <br></br>

                    <div className={Style.lastlabel}>
                        <Button sx={{ marginLeft:-2, marginRight: 6 }} variant="text">Sign In instead</Button>
                        <Button sx={{ marginLeft: 19, width: 0.20 }} variant="contained" onClick={submit}>NEXT</Button>
                    </div>


                </div>
            </div>
        </>

    )
}
