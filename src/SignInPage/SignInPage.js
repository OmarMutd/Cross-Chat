import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'

export class SignInPage extends Component {
    render() {
        return (
     <div>

    <nav >
        <ul className='navbar'>
        <li className='demo'> Demo</li> <br/>
        <li className='landing'>Landing-Page</li>
        </ul>
    </nav>

    <form>
        <div className='sign-in-box'>
        <input type="text" placeholder="Enter Username" name="user" required />
        <label for="pass"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pass" required />

        <button  className='sign-in' type="submit">
        <Link to="/ChatPage">Sign In</Link>
        </button>

        <p className='google-sign-in'>Click here to sign in with google</p>
        </div>
    </form>

    </div>
        )
    }
}

export default SignInPage;
