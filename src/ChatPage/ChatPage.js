import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import  './ChatPage.css'
import ChatBar from '../ChatBar/ChatBar'
import Input from '../Input/Input'

let socket = ""
//Change all io.emite to io.sockets.emite -> its a bit more discriptive
//Add is loading to client side  webdv

export default function ChatPage({ location }) {
    const CONNECTION = 'localhost:5000';
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name, room } = queryString.parse(location.search);

        socket = io(CONNECTION);

        setName(name);
        setRoom(room);

        socket.emit('join', {name: name, room: room}, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }


        // console.log(socket);
        // console.log(data)
        // console.log(location.search)
    }, [CONNECTION, location.search]);

     useEffect(() =>  {
         socket.on('message', (message) => {
             setMessages([...messages, message])

         })
     }, [messages])


    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);
    return (
        <div>
            <div>
                <ChatBar room={room}/>
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
            </div>
        </div>
    )
}