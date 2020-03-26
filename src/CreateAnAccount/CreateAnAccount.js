import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'

export default function CreateAnAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [matchpassword, setMatchpassword] = useState('');
    const [errors, SetErrors] = useState([]);

// ADD CRUD -> Profiles, admin can delete user
// Name must be 3 or more charecters otherwise return an error
// Passwords must match otherwise return an error
// Password <6 = error, password >20 = error
// (!password.match(/[0-9]/)) -> or return an error

    return (
        <div>
            <form>
            
                <h2> Create An Account</h2>

                <div>
                    <input 
                    placeholder="User" 
                    className="user-box" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                    ></input>
                </div>

                <div>
                    <input 
                    placeholder="Password" 
                    className="password-box" 
                    type="password" 
                    onChange={(event) => setPassword(event.target.value)} >
                    </input> 
                    </div>

                <div>
                    <input 
                    placeholder="Match Password" 
                    className="password-repeat" 
                    type="password" 
                    onChange={(event) => setMatchpassword(event.target.value)} >
                    </input>
                 </div>



                <Link onClick={event => (!name || !password) ? event.preventDefault() : null} to='/SignInPage'>
                <button disabled={!name || !password}>
                 Create Account
                </button>
                </Link>

            
            </form>
        </div>
    )}

