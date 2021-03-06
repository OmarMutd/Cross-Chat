import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './ChatPage.css';
import Messages from '../Messages/Messages';
import ChatBar from '../ChatBar/ChatBar';
import Input from '../Input/Input';
import { config } from '../config'
import { Link } from 'react-router-dom';

let socket = ""

export default function ChatPage({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    useEffect(() => {

        const { name, room } = queryString.parse(location.search);

        socket = io(config.API_ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name: name, room: room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [location.search]);

    // [name,room]

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])

        })
    }, [messages])


    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);
    return (
        <div className='outerContainer'>
            <div className='container'>
                <ChatBar room={room} name={name} />
                <Messages messages={messages} name={name} />
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage} room={room} name={name} />
                {/* <Link to='/ManageAccount' className='lp-text'>
                    <button className='LandingPage-button'>
                        Manage Account
                    </button>
                </Link> */}
            </div>
        </div>
    )
}