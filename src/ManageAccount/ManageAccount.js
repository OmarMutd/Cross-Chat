import React from 'react';
import { Link } from 'react-router-dom';

// Add date account was created? C [R] UD
function ManageAccount() {
    return (
        <div>
           <button> 
               <Link to="/DeleteAccount">
                Delete Account
                </Link> 
               </button>

               <button> 
               <Link to="/ChangePassword">
                Change Password
                </Link> 
               </button>
        </div>
    )
}

export default ManageAccount;
