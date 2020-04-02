import React, {useState, useEffect} from 'react'
import './DeleteAccount.css'
import config from '../config'
import { Link } from 'react-router-dom';



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
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <form>
                <h4 className='header'>Delete Account</h4>
            <div><input placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
            <div><input placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>

            <button className='delete-account-button' disabled={!name || !password}> Confirm Delete Account </button>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>

            </form>
       </div>
        </div>
    )
}

export default DeleteAccount;
