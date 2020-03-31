import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'



export default function SignInPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h2 className='header'>Sign in to Chat</h2>
            <form>

                <div><input placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
                <div><input placeholder="Room Name" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} ></input> </div>
                <Link onClick={event => (!name || !room || !password) ? event.preventDefault() : null} to={`ChatPage?name=${name}&room=${room}`}>
                <button disabled={!name || !password || !room} className='button'>
                 Sign In
                </button>
                </Link>

            </form>
        </div>
        </div>
    )
}
