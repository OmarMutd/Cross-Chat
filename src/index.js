import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from "react-router";
import history from './history';



ReactDOM.render(
<Router history={history}>
<App/>
</Router>,
document.getElementById('root'));



