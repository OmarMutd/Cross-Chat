import React, { useState } from 'react';
import './ChangePassword.css'

function ChangePassword() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');

    return (
        <div>
            <form>

            <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
            <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
            <div><input placeholder="New Password" className="new-password-box" type="password" onChange={(event) => setNewPassword(event.target.value)} ></input> </div>

            <button disabled={!name || !password || !newpassword}>
            Confirm Change password
            </button>

            </form>
        </div>
    )
}

export default ChangePassword;
