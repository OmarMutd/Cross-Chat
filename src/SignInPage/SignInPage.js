import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'
import { useForm } from "react-hook-form";
import config from '../config'





export default function SignInPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit } = useForm()


    const onSubmit = () => {
        const bodyName = JSON.stringify({name, password})
        fetch(`${config.API_ENDPOINT}/names/${name}`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        },
        body: bodyName,
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            })
        .catch(error => {
              console.error({error})
            })
          }
          
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h2 className='header'>Sign in to Chat</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input ref={register} name='username' placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input>

                <input ref={register} name='password' placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input>

                <input ref={register} name='room-name' placeholder="Room Name" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} ></input>

                <Link onClick={event => (!name || !room || !password) ? event.preventDefault() : null} to={`ChatPage?name=${name}&room=${room}`}>
                <button disabled={!name || !password || !room} className='button'>
                 Sign In
                </button>
                </Link>
            </form>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>
        </div>
        </div>
    )
}
