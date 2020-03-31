import React from 'react'
import './ChatBar.css'


function ChatBar( { room }) {
    room = room.trim().toLowerCase();
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
            <h2>{room}</h2>
        </div>
        </div>
    )
}

export default ChatBar;

