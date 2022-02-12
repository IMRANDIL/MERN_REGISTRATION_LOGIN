import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'

const Login = ({ setLoginUser }) => {

    let navigate = useNavigate();

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



    const handleLogin = async () => {
        const { email, password } = user;

        if (email && password) {
            const data = await axios.post('https://form-backend-phi.vercel.app/login', user);

            alert(data.data.msg);
            setLoginUser(data.data.user);
            navigate('/')
        } else {
            alert('All fields required!')
        }


    }


    return (
        <div className='login'>

            <h1>Login</h1>
            <label htmlFor="email">Enter Your Email:
                <input type="text" placeholder='Email' name='email' value={user.email} onChange={handleChange} />
            </label>
            <label htmlFor="password">Enter Your Password:
                <input type="text" placeholder='Password' name='password' value={user.password} onChange={handleChange} />
            </label>

            <div className="button" onClick={handleLogin}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login