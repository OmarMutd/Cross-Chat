import React from 'react'
import './ChatBar.css'


function ChatBar( { room }) {
    room = room.trim().toLowerCase();
    return (
        <div>
            <h2>{room}</h2>
        </div>
    )
}

export default ChatBar;

