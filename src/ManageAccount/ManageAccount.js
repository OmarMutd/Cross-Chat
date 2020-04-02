import React from 'react';
import { Link } from 'react-router-dom';
import './ManageAccount.css'
function ManageAccount() {
    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
            <form >
                <h3 className='header'> Manage Account</h3>

          <Link to="/DeleteAccount"> <button className='manage-button'> 
               
                Delete Account
                
               </button></Link> 

               <Link to="/ChangePassword"><button className='manage-button'> 
               
                Change Password
                
               </button></Link> 

                <Link to="/"><button className='manage-button'> 
              
                Go Back
               
               </button> </Link> 

               </form>

               </div>
        </div>
    )
}

export default ManageAccount;
