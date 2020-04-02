import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'
import config from '../config'
import axios from 'axios'


export default function CreateAnAccount() {
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const [matchpassword, setMatchpassword] = useState([]);
    // const [errors, SetErrors] = useState([]);

        // useEffect(()=> {
        //     axios
        //   .get(`${config.API_ENDPOINT}/names`)
        //   .then(res => {
        //       console.log(res)
        //       setName(res.data)
        //   })
        //   .catch(err => {
        //       console.log(err)
        //   })
        // },[])


     useEffect(()=> {
         Promise.all([
             fetch(`${config.API_ENDPOINT}/names`, {
                 method: 'GET',
                 headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${config.API_TOKEN}`,
                    'Access-Control-Allow-Origin': 'no-cors'
                 }
             })
         ])
         .then(([res]) => {
             if(!res.ok)
             return res.json().then(e => Promise.reject(e));

             return Promise.all([res.json()]);
            })
            .then(([name]) => {
                setName({name})
            })
            .catch(error => {
                console.error({error});
            })
         
     })


    return (
        <div>
            <form>
            
                <h2> Create An Account</h2>

                <div>
                    <input 
                    placeholder="User" 
                    className="user-box" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                    ></input>
                </div>

                <div>
                    <input 
                    placeholder="Password" 
                    className="password-box" 
                    type="password" 
                    onChange={(event) => setPassword(event.target.value)} >
                    </input> 
                    </div>

                <div>
                    <input 
                    placeholder="Match Password" 
                    className="password-repeat" 
                    type="password" 
                    onChange={(event) => setMatchpassword(event.target.value)} >
                    </input>
                 </div>



                <Link onClick={event => (!name || !password) ? event.preventDefault() : null} to='/SignInPage'>
                <button disabled={!name || !password || password !== matchpassword}>
                 Create Account
                </button>
                </Link>

            
            </form>
        </div>
    )}

