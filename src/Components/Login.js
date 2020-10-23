import React, {useState} from "react";
import "../Stylesheets/Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from "../firebase";
const Login = () =>
{
    const history = useHistory();
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(Email,Password)
            .then(auth=>
                {
                    history.push("/")
                })
                .catch(error=>alert(error.message))
    };
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(Email, Password)
            .then((auth) =>{
                    if(auth)
                    {
                        history.push("/")
                    }
            })
            .catch(error => alert(error.message))
    };
    return(
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signinButton" onClick={signIn} type="submit">Sign-in</button>
                </form>
                <p>By sigining in you agree to  Amazon Clone's condition of Use & Sale. For this please check our privacy policy, Cookie policy and Personalized  ADs agreement.</p>
                <button className="login__registerButton" onClick={register}>Create Amazon Account</button>
            </div>
        </div>
    );
}
 export default Login;