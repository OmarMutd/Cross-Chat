import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateAnAccount.css'
import config from '../config'
import { useForm } from "react-hook-form";
import axios from 'axios'


export default function CreateAnAccount(props) {
    // const { register, handleSubmit } = useForm()
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const [matchpassword, setMatchpassword] = useState([]);
    // const onSubmit = (data, e) => {
    //     console.log('Submit event', e)
    //     alert(JSON.stringify(data))}

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


        // handleSubmit = (onSubmit) => {
        //     onSubmit.preventDefault()
        //     const name = onSubmit.target[0].value
        //     const bodyName = JSON.stringify({name})
        //     fetch(`${config.API_ENDPOINT}/names`, {
        //       method: 'POST',
        //       headers: {
        //         'content-type': 'application/json',
        //         'Authorization': `Bearer ${config.API_TOKEN}`,
        //         'Access-Control-Allow-Origin': 'no-cors'

        //       },
        //       body: bodyName,
        //     })
        //     .then(res => {
        //       if (!res.ok)
        //         return res.json().then(e => Promise.reject(e))
        //         return res.json()
        //     })
        //     .then((data) => {
        //     //   this.context.addFolder(data)
        //       props.history.push(`/names/${data.id}`)
        //     })
        //     .catch(error => {
        //       console.error({error})
        //     })
        //   }


    return (
        <div className="joinOuterContainer">
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <div className="joinInnerContainer">
            <form >   
            
                <h2 className='header'> Create An Account</h2>

                <div>
                    <input
                    // ref={register}
                    placeholder="User" 
                    className="joinInput" 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                    ></input>
                </div>

                <div>
                    <input
                    // ref={register}
                    placeholder="Password" 
                    className="joinInput" 
                    type="password" 
                    onChange={(event) => setPassword(event.target.value)} >
                    </input> 
                    </div>

                <div>
                    <input
                    // ref={register}
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

