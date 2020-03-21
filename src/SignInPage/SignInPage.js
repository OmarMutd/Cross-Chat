import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignInPage.css'
// import auth from '../auth';



export default function SignInPage() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>
                <div><input placeholder="User" className="user-box" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="Password" className="password-box" type="password" onChange={(event) => setPassword(event.target.value)} ></input> </div>
                <div><input placeholder="Room Name" className="room-box" type="text" onChange={(event) => setRoom(event.target.value)} ></input> </div>
                <Link onClick={event => (!name || !room || !password) ? event.preventDefault() : null} to={`ChatPage?name=${name}&room=${room}`}>
                <button>
                 Sign In
                </button>
                </Link>
            </h1>
        </div>
    )
}








// export class SignInPage extends Component {
//         constructor(props){
//         super(props)
//         this.state = {
//         name: "",
//         password: "",
//         room: "",
//         errors: {
//         nameError: "",
//         passwordError: "",
//         roomError: "",
//     }
//     };
//     }


//     // handleName = (event) => {
//     //     this.setState({name: event.target.value})
//     //     console.log(this.state.name)
//     // }

//     // handlePassword = (event) => {
//     //     this.setState({passowrd: event.target.value})
//     // }

//     // handleRoom = (event) => {
//     //     this.setState({room: event.target.value})
//     // }

//     render() {
//         return (
//      <div>

//     <nav >
//         <ul className='navbar'>

//         <li className='demo'> Demo</li> <br/>

//         <li className='landing'>
//         <Link to="/">Landing Page</Link>
//         </li>

//         </ul>
//     </nav>

//     <form>
//         <div className='sign-in-box'>

//         <div className="name-box">
//         <label htmlFor='user'></label>
//         <input
//             value={this.state.name}
//             onChange={this.handleName}
//             type="text"
//             placeholder="Enter Username"
//             name="user" 
//             // noValidate 
//          />
//          {/* <div style={{ fontSize: 12, color: 'red'}}>
//              {this.state.nameError}
//          </div> */}
//           </div>
//         <br/>
//         <div name='password-box'>
//         <label htmlFor='pass'></label>
//         <input 
//             // value={this.state.password} 
//             // onChange={this.handlePassword}
//             type="password" 
//             placeholder="Enter Password" 
//             name="pass" 
//             // noValidate 
//         />
//         </div>
//         <br/>

//         <input 
//             value={this.state.room} 
//             onChange={this.handleRoom} 
//             ype="text" 
//             placeholder="Room Name"
//             name="room"
//             // required 
//           />

//         <button
//         // Do onSubmit on form
//             // onClick={() => { auth.login(() => this.props.history.push("/ChatPage"))}} 
//             className='sign-in' 
//             type="submit">
//             <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/ChatPage?name=${name}`}>Sign In</Link>
//             Sign in :)
//         </button>

//         <p className='google-sign-in'>Click here to sign in with google</p>
//         </div>
//     </form>

//     </div>
//         )
//     }
// }

// export default SignInPage;
