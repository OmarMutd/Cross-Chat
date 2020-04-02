import React, { useState } from 'react';
import './ChangePassword.css'
import { Link } from 'react-router-dom';


function ChangePassword() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
            <form>

            <div><input placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
            <div><input placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
            <div><input placeholder="New Password" className="joinInput" type="password" onChange={(event) => setNewPassword(event.target.value)} ></input> </div>

            <button className='delete-account-button' disabled={!name || !password || !newpassword}>
            Confirm Change password
            </button>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>


            </form>
            </div>
        </div>
       
    )
}

export default ChangePassword;
