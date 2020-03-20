import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  './ChatPage.css'

export class ChatPage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className='navbar'>
                        <li className='log-out'>
                        <Link to="/SignInPage">Log Out</Link> 
                             </li>
                        <li class='dark-mode'> Enable Dark Mode</li>
                    </ul>
                </nav>

                <div className='chat-box'>
                    <div>
                    <p> Chatter1: Whats the weather like today? </p>
                    </div>

                    <div>
                    <p> Chatter2: Its warm and sunny. But I would stay inside, you might catch coronavirus. </p>
                    </div>

                    <div>
                    <p> Chatter1: Yeah that sounds like a good idea. </p>
                    </div>

                    <form>
                    <button  class='chat' type="submit">Chat</button>
                    <label for="message">Enter message here:</label><br/>
                    <input type="text" id="message" name="message"/><br/>

                    </form>
                </div>
            </div>
        )
    }
}

export default ChatPage;
