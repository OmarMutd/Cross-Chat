import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'
import config from '../config'
import { useForm } from "react-hook-form";


export default function CreateAnAccount(props) {
    const { register, handleSubmit } = useForm()
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const [matchpassword, setMatchpassword] = useState([]);
 


    const onSubmit = () => {
        fetch(`${config.API_ENDPOINT}/names/${name}`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
        'Authoirization': `Bearer ${config.API_ENDPOINT}`,
        'Access-Control-Allow-Origin': 'no-cors'
        }
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
              return res.json()
            })
        .catch(error => {
              console.error({error})
            })
          }


    return (
        <div className="joinOuterContainer">

            <div className="joinInnerContainer">
            <form onSubmit={handleSubmit(onSubmit)}>   
            
                <h2 className='header'> Create An Account</h2>

                <div>
                    <input
                    ref={register}
                    name='new-user'
                    placeholder="User" 
                    className="joinInput" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                    ></input>
                </div>

                <div>
                    <input
                    name='new-password'
                    ref={register}
                    placeholder="Password" 
                    className="joinInput" 
                    type="password" 
                    onChange={(event) => setPassword(event.target.value)} >
                    </input> 
                    </div>

                <div>
                    <input
                    name='match-new-password'
                    ref={register}
                    placeholder="Match Password" 
                    className="joinInput" 
                    type="password" 
                    onChange={(event) => setMatchpassword(event.target.value)} >
                    </input>
                 </div>



                <Link onClick={event => (!name || !password) ? event.preventDefault() : null} to='/SignInPage'>
                <button className='return-button' disabled={!name || !password || password !== matchpassword}>
                 Create Account
                </button>
                </Link>

                <Link to='/'>
                <button className='return-button'>
                 Go Back to Landing Page
                </button>
                </Link>

            
            </form>
            </div>
        </div>
    )}

