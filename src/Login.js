import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"
function Login() {
    const history = useHistory() ;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault() ;
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault() ;

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth) ;
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message)) 
    }
    return (
        <div className ="login">
            <Link to="/" className = "login_logo">
            <p className = "login_logo" >
                CITYDEALS
            </p>
            </Link>

            <div className = "login_container">
                <h1> Sign-in </h1>
                <form>
                    <h5>Email </h5>
                    <input type ="text" value = {email} onChange = {e => setEmail(e.target.value)}></input>

                    <h5>Password </h5>
                    <input type ="password" value = {password} onChange = {e => setPassword(e.target.value)}></input>
                
                    <button type = 'submit' onClick = {signIn} className = "login_signInButton">SIGN-IN</button>

                    <button onClick = {register} className = "login_registerButton">Create Account</button>

                </form>
            </div>

        </div>
    )
}

export default Login
