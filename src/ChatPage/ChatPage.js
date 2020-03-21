import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import  './ChatPage.css'



let socket = ";"

export default function ChatPage({ location }) {
    const CONNECTION = 'localhost:5000';
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        const {name, room } = queryString.parse(location.search);

        socket = io(CONNECTION);

        setName(name);
        setRoom(room);

        console.log(socket);
        // console.log(data)
        // console.log(location.search)
    }, [CONNECTION, location.search]);
    return (
        <div>
            <h1> Chat box</h1>
        </div>
    )
}






















// export class ChatPage extends Component {
//     render() {
//         return (
//             <div>
//                 <nav>
//                     <ul className='navbar'>
//                         <li className='log-out'>
//                         <Link to="/SignInPage">Log Out</Link> 
//                              </li>
//                         <li class='dark-mode'> Enable Dark Mode</li>
//                     </ul>
//                 </nav>

//                 <div className='chat-box'>
//                     <div>
//                     <p> Chatter1: Whats the weather like today? </p>
//                     </div>

//                     <div>
//                     <p> Chatter2: Its warm and sunny. But I would stay inside, you might catch coronavirus. </p>
//                     </div>

//                     <div>
//                     <p> Chatter1: Yeah that sounds like a good idea. </p>
//                     </div>

//                     <form>
//                     <button  class='chat' type="submit">Chat</button>
//                     <label for="message">Enter message here:</label><br/>
//                     <input type="text" id="message" name="message"/><br/>

//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ChatPage;
