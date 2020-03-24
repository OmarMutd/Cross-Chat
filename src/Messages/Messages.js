import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css'
import Message from '../Message/Message.js'

function Messages({ name, messages }) {
    return (
        <ScrollToBottom>
        {messages.map((message, index) =>
         <div key={index}>
            <Message names={name} message={message}/>
         </div>
         )}
        </ScrollToBottom>
    )
}

export default Messages;
