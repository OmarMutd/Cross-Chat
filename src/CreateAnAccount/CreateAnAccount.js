import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css';
import AuthApiService from '../services/auth-api-services';

export default function CreateAnAccount(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        AuthApiService.postUser(name, password)
        props.history.push('/SignInPage')
    }

    return (
        <div className='joinOuterContainer'>

            <div className='joinInnerContainer'>
                <form onSubmit={(onSubmit)}>

                    <h2 className='header'> Create An Account</h2>

                    <div>
                        <input
                            name='user'
                            placeholder='Username'
                            className='joinInput'
                            type='text'
                            onChange={(event) => setName(event.target.value)}
                        ></input>
                    </div>

                    <div>
                        <input
                            name='password'
                            placeholder='Password'
                            className='joinInput'
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        ></input>
                    </div>


                    <button type='submit' className='return-button'
                    >
                        Create Account
                </button>


                    <Link to='/'>
                        <button className='return-button'>
                            Go Back to Landing Page
                </button>
                    </Link>

                </form>
            </div>
        </div>
    );
}