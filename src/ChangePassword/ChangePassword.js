import React, { useState } from 'react';
import './ChangePassword.css'
import { Link } from 'react-router-dom';
import { config } from '../config'



function ChangePassword(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const onSubmit = () => {
        const bodyName = JSON.stringify({ name, password, newpassword })
        fetch(`${config.API_ENDPOINT}/names/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyName,
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                props.history.push('/SignInPage')
            })
            .catch(error => {
                console.error({ error })
            })
    }


    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <form onSubmit={(onSubmit)}>

                    <input

                        name='name'
                        placeholder="Username"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />


                    <input

                        name='password'
                        placeholder="Current Password"
                        className="joinInput"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <input
                        name='newpass'
                        placeholder="New Password"
                        className="joinInput"
                        type="password"
                        onChange={(event) => setNewPassword(event.target.value)}
                    />


                    <button type='submit' className='delete-account-button'>
                        Confirm Change password
            </button>
                    <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>
                </form>
            </div>
        </div>

    )
}

export default ChangePassword;
