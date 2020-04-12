import React from 'react'
import './Input.css';



function Input({ message, sendMessage, setMessage, room, name }) {
    return (
       <form className="form">
           <input className='input'
           placeholder={`Hey ${name}! Type here to send a message in ${room}.`}
           value={message} 
           onChange={(event) => setMessage(event.target.value)}
           onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
           />
           
        <button onClick={(event) => sendMessage(event)} className='sendButton'> Chat </button>
       </form>
    ) 
}

export default Input;
