import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'

function CreateAnAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <h1>
                <h2> Create An Account</h2>
                <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
                {/* <Link onClick={event => (!name || !password) ? event.preventDefault() : null} to='/SignInPage'> */}
                <button>
                 Create Account
                </button>
                {/* </Link> */}

            </h1>
        </div>
    )}

export default CreateAnAccount
