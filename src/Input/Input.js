import React from 'react'
import './Input.css';

function Input({ message, sendMessage, setMessage }) {
    return (
       <form>
           <input 
           value={message} 
           onChange={(event) => setMessage(event.target.value)}
           onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
           />
           
        <button> </button>
       </form>
    ) 
}

export default Input
