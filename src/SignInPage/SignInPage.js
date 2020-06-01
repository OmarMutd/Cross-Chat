import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';
import AuthApiService from '../services/auth-api-services';

export default function SignInPage(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        AuthApiService.postLogin(name, password, room)
        // props.history.push(`/ChatPage/${props.match.params.name / props.match.params.room}`)
        props.history.push(`/ChatPage/${props.match.params.room}`)

    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h2 className='signintalk'>Enter username, password, and chatroom to connect with other users!</h2>

                <div className='demo-user'>
                    <p> Demo account:</p>
                    <p> Username: demo</p>
                    <p> Password: #Aa12345 </p>
                </div>
                <br />
                <form onSubmit={(onSubmit)}>

                    <input name='username' placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input>

                    <input name='password' placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input>


                    <input name='room' placeholder="Room Name" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} ></input>


                    <button type='submit' className='button'>
                        Chat!
                    </button>


                </form>
                <Link to='/'><button className='manage-button'> Go Back </button></Link>
            </div>
        </div>
    )
}
