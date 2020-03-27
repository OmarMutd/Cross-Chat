import React from 'react'

// Add date account was created? C [R] UD
function ManageAccount() {
    return (
        <div>
           <button to="/DeleteAccount"> Delete Account</button>
           <button to="/ChangePassword"> Change Password</button>
        </div>
    )
}

export default ManageAccount;
