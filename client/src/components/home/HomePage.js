import React from 'react';
import './HomePage.css';

const HomePage = ({ setLoginUser, user }) => {



    return (
        <div className='homepage'>
            <h1>Hello {user.Name}</h1>
            <div className="button" onClick={() => setLoginUser({})}>
                Logout
            </div>
        </div>
    )
}

export default HomePage