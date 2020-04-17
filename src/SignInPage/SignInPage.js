import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'
import { useForm } from "react-hook-form";
import config from '../config'
import AuthApiService from '../services/auth-api-services';





export default function SignInPage(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, errors } = useForm()


    // const onSubmit = () => {
    //     const userLogin = JSON.stringify({ name, password })
    //     fetch(`${config.API_ENDPOINT}/names/${name}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: userLogin,
    //     })
    //         .then(res => {
    //             if (!res.ok)
    //                 return res.json().then(e => Promise.reject(e))
    //         })
    //         .catch(error => {
    //             console.error({ error })
    //         })
    // }
       
    const onSubmit = () => {
        AuthApiService.userLogin( name, password )
        props.history.push('/ChatPage')
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
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input ref={register({required: true })} name='username' placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input>
                    
                    {errors.username && errors.username.type === "required" && (
                     <li className='create-err'> Username is required.
                     </li>
                    )}

                    <input ref={register({required: true})} name='password' placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input>

                    {errors.password && errors.password.type === "required" && (
                     <li className='create-err'> Password is required.
                     </li>
                    )}

                    <input ref={register({required: true })} name='room' placeholder="Room Name" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} ></input>

                    {errors.room && errors.room.type === "required" && (
                     <li className='create-err'> Room name is required.
                     </li>
                    )}

                    <Link onClick={event => (!name || !room || !password) ? event.preventDefault() : null} to={`ChatPage?name=${name}&room=${room}`}>
                        <button type='submit' className='button'>
                            Chat!
                    </button>
                    </Link>
           
                </form>
                <Link to='/'><button className='manage-button'> Go Back </button></Link>
            </div>
        </div>
    )
}
