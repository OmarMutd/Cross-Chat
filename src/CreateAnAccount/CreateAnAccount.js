import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css';
import config from '../config';
import { useForm } from 'react-hook-form';


export default function CreateAnAccount(props) {
    const { register, handleSubmit, errors } = useForm();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // const [matchpassword, setMatchpassword] = useState('');
 


    const onSubmit = () => {
        const newUser = JSON.stringify({name, password})

        fetch(`${config.API_ENDPOINT}/api/names`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_TOKEN}`
        },
        body: newUser,

        })
        .then((res) => {
            if (!res.ok)
              return res.json().then((e) => Promise.reject(e));
            })
        .catch((error) => {
              console.error({ error });
            });
          };


    return (
        <div className='joinOuterContainer'>

            <div className='joinInnerContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>   
            
                <h2 className='header'> Create An Account</h2>

                <div>
                    <input
                    ref={register({required: true})}
                    name='user'
                    placeholder='User' 
                    className='joinInput' 
                    type='text' 
                    onChange={(event) => setName(event.target.value)} 
                    ></input>
                </div>
                {errors.user && <p className='create-err'>Username is required.</p>}


                <div>
                    <input
                    name='password'
                    ref={register({required: true, minLength: 8})}
                    placeholder='Password' 
                    className='joinInput' 
                    type='password' 
                    onChange={(event) => setPassword(event.target.value)} 
                    ></input> 
                    </div>
                    {errors.password && <p className='create-err'>Password must be at least 8 charecters, contain one uppercase and one lower case charecter, and contain one special charecter. </p>}

                {/* <div>
                    <input
                    name='match-new-password'
                    ref={register}
                    placeholder='Match Password' 
                    className='joinInput' 
                    type='password' 
                    onChange={(event) => setMatchpassword(event.target.value)} 
                    ></input>
                 </div> */}


                {/* //fix this line */}
                {/* <Link 
                onClick={(event) => 
                (!name || !password) ? event.preventDefault() : null} 
                to='/SignInPage'> */}
                <button className='return-button' 
                >
                 Create Account
                </button>
                {/* </Link> */}

                <Link to='/'>
                <button className='return-button'>
                 Go Back to Landing Page
                </button>
                </Link>

            
            </form>
            </div>
        </div>
    );
}