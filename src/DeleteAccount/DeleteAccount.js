import React, { useState } from 'react';
import './DeleteAccount.css';
import config from '../config';
import { Link } from 'react-router-dom';
// import ChatService from '../services/chat-service';


function DeleteAccount(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  

    const onSubmit = () => {

        const bodyName = JSON.stringify({ name, password })
        fetch(`${config.API_ENDPOINT}/api/names/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyName,

        })
            .then((res) => {
                if (!res.ok)
                return res.json().then((e) => Promise.reject(e));
                console.log(res.message)
                props.history.push('/')
            })
            .catch((error) => {
                console.error({ error });

            });
    };


    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h4 className='header'>Delete Account</h4>
                <form onSubmit={(onSubmit)}>
                    <input
                        name='user'
                        placeholder="User"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    ></input>

                    <input
                        name='password'
                        placeholder="Password"
                        className="joinInput"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)} ></input>

                    <button type='submit' className='delete-account-button'>
                        Confirm Delete Account
            </button>
                </form>
                <Link to='/ManageAccount'>
                    <button className='manage-button'> Go Back </button>
                </Link>
            </div>
        </div>

    );
}

export default DeleteAccount;
