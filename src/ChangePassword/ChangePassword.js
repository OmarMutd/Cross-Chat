import React, { useState } from 'react';
import './ChangePassword.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import config from '../config'



function ChangePassword() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const {register, handleSubmit} = useForm();

    const onSubmit = () => {
        const bodyName = JSON.stringify({name, password})
        fetch(`${config.API_ENDPOINT}/names/${name}`, {
        method: 'PATCH',
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
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div><input ref={register} name='user-name' placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
            <div><input ref={register} name='old-password' placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
            <div><input ref={register} name='new-password' placeholder="New Password" className="joinInput" type="password" onChange={(event) => setNewPassword(event.target.value)} ></input> </div>

            <button type='submit' className='delete-account-button' disabled={!name || !password || !newpassword}>
            Confirm Change password
            </button>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>
            </form>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>
            </div>
        </div>
       
    )
}

export default ChangePassword;
