import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom";
// Fragments


export class LandingPage extends Component {
    render() {
        return (
    <div className='LandingContainer'>
      <div className='landing-page'>
       <h2 className='intro-to-app'> Welcome to "Chat-App"... This is a cool little full-stack app built with react, node/express & postgreSQL. This app allows you to chat with other users in realtime!</h2>

    <button className='LandingPage-button'>
    <Link to="/SignInPage">Log In</Link>
    </button>

    <button className='LandingPage-button'>
    <Link to="/CreateAnAccount">Create An Account</Link>
    </button>

    <button className='LandingPage-button'>
    <Link to='/ManageAccount'>Manage Account</Link>
    </button>
    </div>

      </div>

        )
    }
}

export default LandingPage;
