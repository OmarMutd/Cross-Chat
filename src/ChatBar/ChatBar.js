import React from 'react'
import './ChatBar.css'
import { Link } from 'react-router-dom';


function ChatBar( { room, name }) {
    room = room.trim().toLowerCase();
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
        <h2 className='roomname'>{room}</h2>
        <div className='sign-out'><button><Link to="/">Log out</Link></button></div>
        {/* <h4>Chatting as: {name}</h4> */}
        </div>
        </div>
    )
}

export default ChatBar;

