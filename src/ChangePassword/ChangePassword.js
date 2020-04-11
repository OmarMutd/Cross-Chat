import React, { useState } from 'react';
import './ChangePassword.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import config from '../config'



function ChangePassword() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = () => {
        const bodyName = JSON.stringify({ name, password })
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
                console.error({ error })
            })
    }


    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input 
                    ref={register({required: true})} 
                    name='name' 
                    placeholder="User" 
                    className="joinInput" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                    />
                    {errors.name && <p className='create-err'>Username is required.</p>}

                    <input 
                    ref={register({required: true})} 
                    name='password' 
                    placeholder="Current Password" 
                    className="joinInput" 
                    type="password" 
                    onChange={(event) => setPassword(event.target.value)} 
                    />
                    {errors.password && <p className='create-err'>Must enter your current password.</p>}

                    <input 
                    ref={register({required: true, minLength: 8})}
                    name='newpass' 
                    placeholder="New Password" 
                    className="joinInput" 
                    type="password" 
                    onChange={(event) => setNewPassword(event.target.value)} 
                    />
                    {errors.newpass && <p className='create-err'>Password must be at least 8 charecters, contain one uppercase and one lower case charecter, and contain one special charecter. </p>}


                    <button type='submit' className='delete-account-button'>
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
