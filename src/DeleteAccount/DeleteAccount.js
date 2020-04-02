import React, {useState, useEffect} from 'react'
import './DeleteAccount.css'
import config from '../config'



function DeleteAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {
        fetch(`${config.API_ENDPOINT}/names/${name}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authoirization': `Bearer ${config.API_ENDPOINT}`
            }
        })
    })

    return (
        <div>
            <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
            <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>

            <button disabled={!name || !password}> Confirm Delete Account </button>
        </div>
    )
}

export default DeleteAccount;
