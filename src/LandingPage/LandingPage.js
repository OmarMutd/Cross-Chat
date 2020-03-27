import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom";
// Fragments


export class LandingPage extends Component {
    render() {
        return (
            <div>
                 <nav >
        <ul className='navbar'>
          <li className='landing'>Sign Up</li>
          </ul>
      </nav>

      <div className='landing-page'>
       <p > Welcome to "Chat-App"... This is a cool little full-stack app built with react, node/express & postgreSQL. This app allows you to chat with other users in realtime!</p>

    <button className='go-to-sign-in'>
    <Link to="/SignInPage">Log In</Link>
    </button>

    <button className='create-account'>
    <Link to="/CreateAnAccount">Create An Account</Link>
    </button>

            <button className='manage-account'>
            <Link to='/ManageAccount'>Manage Account</Link>
            </button>

      </div>
      </div>

        )
    }
}

export default LandingPage;
