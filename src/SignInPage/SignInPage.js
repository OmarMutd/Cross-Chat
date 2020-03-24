import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'



export default function SignInPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>
                <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
                <div><input placeholder="Room Name" className="room-box" type="text" onChange={(event) => setRoom(event.target.value)} ></input> </div>
                <Link onClick={event => (!name || !room || !password) ? event.preventDefault() : null} to={`ChatPage?name=${name}&room=${room}`}>
                <button>
                 Sign In
                </button>
                </Link>
            </h1>
        </div>
    )
}
