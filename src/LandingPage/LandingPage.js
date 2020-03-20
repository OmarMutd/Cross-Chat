import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom";
// Fragments


export class LandingPage extends Component {
    render() {
        return (
            <div>
                 <nav >
        <ul class='navbar'>
          <li class='landing'>Sign Up</li>
          </ul>
      </nav>

      <div class='landing-page'>
       <p > Welcome to "Chat-App"... This is a cool little full-stack app built with react, node/express & postgreSQL. This app allows you to chat with other users in realtime!</p>

    <button class='go-to-sign-in'>
    <Link to="/SignInPage">Go to Sign-in page</Link>
    </button>

    <button class='create-account'>
    <Link to="/CreateAnAccount">Create An Account</Link>
    </button>

      </div>
      </div>

        )
    }
}

export default LandingPage;
