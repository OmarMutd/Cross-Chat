import React from 'react'
import './Input.css';

//enter vs return

function Input({ message, sendMessage, setMessage }) {
    return (
       <form className="form">
           <input className='input'
           value={message} 
           onChange={(event) => setMessage(event.target.value)}
           onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
           />
           
        <button onClick={(event) => sendMessage(event)} className='sendButton'> Chat </button>
       </form>
    ) 
}

export default Input
