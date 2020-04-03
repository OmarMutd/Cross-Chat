import React, {useState} from 'react';
import './DeleteAccount.css';
import config from '../config';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function DeleteAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {register, handleSubmit, errors} = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    // }

    const onSubmit = () => {
        fetch(`${config.API_ENDPOINT}/api/names/${name}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },

        })
        .then((res) => {
            if (!res.ok)
              return res.json().then((e) => Promise.reject(e));
              return res.json();
            })
        .catch((error) => {
              console.error({ error });
            });
          };


    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h4 className='header'>Delete Account</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                
            <input 
            ref={register({required: true})}
             name='user' 
             placeholder="User" 
             className="joinInput" 
             type="text" 
             onChange={(event) => setName(event.target.value)} 
             ></input>

            <input 
            ref={register({required: 'Password Required.', minLength: {value: 8, message: 'Password must be 8 or more characters',
            },
            })} 
            name='pass' 
            placeholder="Password" 
            className="joinInput" 
            type="password" 
            onChange={(event) => setPassword(event.target.value)} ></input>
            {errors.password && <p className='password-error'>{errors.password.message}</p>}

            <button type='submit' className='delete-account-button'> 
            {' '}
            Confirm Delete Account{' '}
            </button>
            </form>
            <Link to='/ManageAccount'>
                <button className='manage-button'> Go Back </button>
                </Link>
           </div>
        </div>

    );
}

export default DeleteAccount;
