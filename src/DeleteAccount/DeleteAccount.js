import React, {useState, useEffect} from 'react'
import './DeleteAccount.css'
import config from '../config'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function DeleteAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    // useEffect(()=> {
    //     fetch(`${config.API_ENDPOINT}/names/${name}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authoirization': `Bearer ${config.API_ENDPOINT}`,
    //             'Access-Control-Allow-Origin': 'no-cors'
    //         }
    //     })
    // },)

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h4 className='header'>Delete Account</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                
            <input ref={register} name='user' placeholder="User" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input>
            <input ref={register} name='pass' placeholder="Password" className="joinInput" type="password" onChange={(event) => setPassword(event.target.value)} ></input>

            <button type='submit' className='delete-account-button' disabled={!name || !password}> Confirm Delete Account </button>
            </form>
            <Link to='/ManageAccount'><button className='manage-button'> Go Back </button></Link>
       </div>
        </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type='text' placeholder='Email' name='email' ref={register} ></input>
    //     <input type='password' placeholder='Password' name='password' ref={register} ></input>

    //     <input type='submit'></input>

    // </form>
    );
}

export default DeleteAccount;
