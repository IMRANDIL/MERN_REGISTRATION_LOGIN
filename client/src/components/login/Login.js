import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [user, setUser] = useState({

        email: '',
        password: ''

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    return (
        <div className='login'>
            {console.log('User', user)}
            <h1>Login</h1>
            <label htmlFor="email">Enter Your Email:
                <input type="text" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
            </label>
            <label htmlFor="password">Enter Your Password:
                <input type="text" placeholder='Password' name='password' value={user.password} onChange={handleChange} />
            </label>

            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login