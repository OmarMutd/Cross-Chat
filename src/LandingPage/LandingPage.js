import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom";
// Fragments


export class LandingPage extends Component {
    render() {
        return (
    <div className='LandingContainer'>
      <div className='landing-page'>
       <h2 className='intro-to-app'> Realtime Chat application built with React, node/express, postgres and socket.io.</h2>
       
    <Link to="/SignInPage" className='lp-text'>
    <button className='LandingPage-button'>
    Join a Chat Room!
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
