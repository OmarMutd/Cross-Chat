import React from 'react';
import { Link } from 'react-router-dom';
import './ManageAccount.css'
function ManageAccount() {
    return (
        <div className='Manage-form'>
            <div className='Manage-inside-form'>
            <form >
           <button className='manage-button'> 
               <Link to="/DeleteAccount">
                Delete Account
                </Link> 
               </button>

               <button className='manage-button'> 
               <Link to="/ChangePassword">
                Change Password
                </Link> 
               </button>
               </form>
               </div>
        </div>
    )
}

export default ManageAccount;
