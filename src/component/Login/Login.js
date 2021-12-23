import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




const Login = () => {

    const { signInUsingGoogle, signInUsingGithub}=useAuth();
    return (
        <div>
            <h1> please Login</h1>
            <button onClick={ signInUsingGoogle}>Google Sign In</button> 
            <br />
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <Link to="register">New User?</Link>
        </div>
    );
};

export default Login;