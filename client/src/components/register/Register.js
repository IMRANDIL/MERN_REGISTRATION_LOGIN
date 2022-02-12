import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';





const Register = () => {

    const [user, setUser] = useState({
        Name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }



    const handleRegister = async () => {
        const { Name, email, password, confirmPassword } = user;

        if (Name && email && password && (password === confirmPassword)) {
            alert('posted')
            const data = await axios.post('http://localhost:5000/register', user);

            console.log(data)
        } else {
            alert('invalid input')
        }





    }


    return (
        <div className='register'>

            <h1>Register</h1>
            <label htmlFor="Name">Enter Your Name:
                <input type="text" placeholder='Name' name='Name' value={user.Name} onChange={handleChange} />
            </label>


            <label htmlFor="email">Enter Your Email:
                <input type="text" placeholder='email' name='email' value={user.email} onChange={handleChange} />
            </label>

            <label htmlFor="password">Enter Your Password:
                <input type="text" placeholder='password' name='password' value={user.password} onChange={handleChange} />
            </label>

            <label htmlFor="confirmPassword">Confirm Your Password:
                <input type="text" placeholder='confirm password' name='confirmPassword' value={user.confirmPassword} onChange={handleChange} />
            </label>

            <div className="button" onClick={handleRegister}>Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register