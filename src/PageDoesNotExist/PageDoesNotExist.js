import React from 'react'
import './PageDoesNotExist.css'
import { Link } from 'react-router-dom';

export default function PageDoesNotExist() {
    return (
        <div>
            <div id="notfound">
				<h1>404</h1>
			</div>
             <p>Oops!</p>
			<h5>This page or link does not exist.</h5>
           
            <button class='exit-error-page'>
            <Link to="/SignInPage">Back to Sign in Page</Link>
            </button>
        </div>
    )
}



