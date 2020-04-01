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
       
    <Link to="/SignInPage" className='lp-text'>
    <button className='LandingPage-button'>
    Log In
    </button>
    </Link>

    <Link to="/CreateAnAccount" className='lp-text'>
    <button className='LandingPage-button'>
    Create An Account
    </button>
    </Link>

    <Link to='/ManageAccount' className='lp-text'>
    <button className='LandingPage-button'>
    Manage Account
    </button>
    </Link>
    </div>

      </div>

        )
    }
}

export default LandingPage;
