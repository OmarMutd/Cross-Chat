import React from 'react'
import './Messages.css'

function Message({ name, message: { text, user } }) {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim.toLowerCase();

    if(user === trimmedName) {
      isSentByCurrentUser = true;

    }
    return (
        isSentByCurrentUser ? (
            <div className="current-user">
                <p>{trimmedName}</p>
                <div>
                    <p> {text}</p>
                </div>
            </div>
        )
        : (
            <div className="not-current">
            
            <div>
                <p>{text}</p>
            </div>
            <p>{user}</p>
        </div>

        )
    )
}

export default Message;
