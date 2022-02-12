import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <h1>Login</h1>
            <label htmlFor="email">Enter Your Email:
                <input type="text" placeholder='Email' />
            </label>
            <label htmlFor="password">Enter Your Password:
                <input type="password" placeholder='Password' />
            </label>

            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login