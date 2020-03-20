import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'

export class SignInPage extends Component {
    state = {
      name: "",
      password: "",
      room: ""
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }

    handlePassword(event) {
        this.setState({passowrd: event.target.value})
    }

    handleRoom(event) {
        this.setState({room: event.target.value})
    }


    render() {
        return (
     <div>

    <nav >
        <ul className='navbar'>

        <li className='demo'> Demo</li> <br/>

        <li className='landing'>
        <Link to="/">Landing Page</Link>
        </li>

        </ul>
    </nav>

    <form>
        <div className='sign-in-box'>
            
        <input value={this.state.value} onChange={this.handleName} type="text" placeholder="Enter Username" name="user" required />
        <br/>
        <input value={this.state.value} onChange={this.handlePassword} type="password" placeholder="Enter Password" name="pass" required />
        <br/>
        <input value={this.state.value} onChange={this.handleRoom} type="text" placeholder="Room Name" name="room" required />

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
