import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'

function CreateAnAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [matchpassword, setMatchpassword] = useState('');

    if(name.length > 5) {
        console.log('Name Must be less than 5 Chars')
    }
    // Disable or return error if name is too short
    //Match passwords!

    return (
        <div>
            <form>
            <h1>
                <h2> Create An Account</h2>
                <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
                <div><input placeholder="Match Password" className="password-repeat" type="password" onChange={(event) => setMatchpassword(event.target.value)} ></input></div>
                <Link onClick={event => (!name || !password) ? event.preventDefault() : null} to='/SignInPage'>
                <button disabled={!name || !password || password !== matchpassword }>
                 Create Account
                </button>
                </Link>

            </h1>
            </form>
        </div>
    )}

export default CreateAnAccount
