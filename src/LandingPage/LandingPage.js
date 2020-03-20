import React, { Component } from 'react'
// Fragments
import './LandingPage.css'

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
    <button class='go-to-sign-in'> Go to Sign-in page</button>    
      </div>
      </div>
        )
    }
}

export default LandingPage;
