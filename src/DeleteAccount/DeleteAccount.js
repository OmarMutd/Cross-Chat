import React, { useState } from 'react';
import './DeleteAccount.css';
import config from '../config';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function DeleteAccount(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, errors } = useForm();

    // const demoAsUserName =  () => {
    //     if (name === 'demo' ) return errors.user && <p className='create-err'>Can not delete demo account, trying deleted a different username.</p>
    // };

    const onSubmit = () => {

        const bodyName = JSON.stringify({ name, password })
        fetch(`${config.API_ENDPOINT}/api/names/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyName,

        })
            .then((res) => {
                if (!res.ok)
                    return res.json().then((e) => Promise.reject(e));
                console.log(res.message)
                // add a message when delete works
                // add a message when the delete fails -> 'username & password do not match'
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
                {/* validate: demoAsUserName } */}
                    <input
                        ref={register({ required: true,})}
                        name='user'
                        placeholder="User"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                    {errors.user && <p className='create-err'>Username is required.</p>}


                    <input
                        ref={register({ required: true, maxLength: 71, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/ })}
                        name='password'
                        placeholder="Password"
                        className="joinInput"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)} ></input>
                    {errors.password && errors.password.type === "required" && (
                        <li className='create-err'> Password is required.
                        </li>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <li className='create-err'> Password must be a least 8 charecters.
                        </li>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                        <li className='create-err'> Password must contain 1 upper case, lower case, number and special character.
                        </li>
                    )}
                    {errors.password && errors.password.type === "maxLength" && (
                        <li className='create-err'> Password must be less than 72 characters.
                        </li>
                    )}

                    <button type='submit' className='delete-account-button'>
                        Confirm Delete Account
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
