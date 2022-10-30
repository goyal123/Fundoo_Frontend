import React from 'react'
import Style from './Register.module.css'

export default function Register() {
    return (
        <>
            <div className={Style.Container}>
                <div className={Style.Column1}>
                    <div className={Style.Box1}>
                        <br></br>
                        <img className={Style.imageset} src='/logo2.png'></img>
                        <h3>Create Your Google Account</h3>
                    </div>
                    <br></br>
                    <div className={Style.Box2}>
                        <input type="Text" placeholder='First Name'></input>
                        <input className={Style.inputtext} type="Text" placeholder='Last Name'></input>
                        <div className={Style.Column2}>
                            <img className={Style.img} src='/logo1.png'></img>
                            <div className={Style.labeltext}>
                                <h5>One Account.All of Google<br></br> working for you.</h5>
                            </div>
                        </div>

                    </div>

                    <br></br>
                    <div className={Style.Box3}>
                        <input className={Style.input} type="Email" placeholder='username'></input>
                    </div>

                    <br></br><br></br><br></br>

                    <div className={Style.Box2}>
                        <input type="Password" placeholder='Password'></input>
                        <input type="Password" placeholder='Confirm Password'></input>
                    </div>

                    <br></br><br></br>

                    <div className={Style.lastlabel}>
                        <button className={Style.btn1}>SignIn instead</button>
                        <button className={Style.btn2}>Next</button>
                    </div>

                </div>













            </div>



        </>

    )
}
