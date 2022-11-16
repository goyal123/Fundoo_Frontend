import React, { useState } from 'react'
import Style from './Loginpage.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginapi } from '../../services/userService';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function Loginpage_copy() {

    const navigate=useNavigate()

    const [signinobj, setsigninobj] = useState({ email: '', password: '' })
    const [regexobj, setregexobj] = useState({ emailBorder: false, emailHelper: "", passswordBorder: false, passwordHelper: "" });

    const takeemail = (e) => {
        setsigninobj(prevstate => ({ ...prevstate, email: e.target.value }));
        console.log(e.target.value);
    }
    const takepass = (e) => {
        setsigninobj(prevstate => ({ ...prevstate, password: e.target.value }));
        //console.log(signinobj);
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinobj.email);
        let passwordTest = passwordRegex.test(signinobj.password);

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
                passwordHelper: "Enter correct password"
            }));
        }
        else if (passwordTest === true) {
            setregexobj((prevstate) => ({
                ...prevstate,
                passwordBorder: false,
                passwordHelper: ""
            }));

        }

        if (emailTest === true && passwordTest === true) {
            loginapi(signinobj).then((response) => {
                console.log(response)
                localStorage.setItem("token",response.data.id)
                navigate('/dashboard')
            }).catch((error) => {
                console.log(error)
            })
        }

        console.log(signinobj);
    }

    return (
        <>
            <div className={Style.Container}>
                <div className='imgset'>
                    <img className={Style.imageset} src="./logo2.png"></img>
                </div>
                <center><h2>Sign In</h2>to continue to Fundoo</center>
                <br></br>

                <div className={Style.inputlabel}>
                    <TextField type={'email'} sx={{ width: 1 }} label="Email" variant="outlined" onChange={takeemail}
                        error={regexobj.emailBorder} helperText={regexobj.emailHelper}
                    />
                </div>
                
                <div className={Style.leftside1}>
                    <Link href="#" underline="none" fontSize="small">
                        {'Forgot Email?'}
                    </Link>
                </div>
                <br></br><br></br>
                <div className={Style.inputlabel}>
                    <TextField type={'password'} sx={{ width: 1 }} label="Password" variant="outlined" onChange={takepass}
                        error={regexobj.passwordBorder} helperText={regexobj.passwordHelper}
                    />
                </div>
                <div className={Style.leftside2}>
                    <Link href="#" underline="none" fontSize="small">
                        {'Forgot Password?'}
                    </Link>
                </div>
                <br></br><br></br><br></br>
                <div className={Style.lastlabel}>
                    <Button sx={{ marginLeft: 4, marginRight: 1 }} variant="text">create account</Button>
                    <Button sx={{ marginLeft: 14, width: 0.20 }} variant="contained" onClick={submit}>NEXT</Button>
                </div>
            </div>
        </>
    )
}
