import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import  './ChatPage.css'

let socket = ""

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

         })
     })





    return (
        <div>
            <h1> Chat box </h1>
        </div>
    )
}