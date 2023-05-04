import '../../Styles/navbar.css'

import React, { useState } from 'react'
import Login from './login'
import Register from './register'

export default function Navbar() {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    function handleRegisterClick() {
        if (showRegister === false) {
            setShowRegister(true)
            setShowLogin(false)
        } else {
            setShowRegister(false)
        }
    }

    function handleLoginClick() {
        if (showLogin === false ) {
            setShowLogin(true)
            setShowRegister(false)
        } else {
            setShowLogin(false)
        }
    }

    return (
        <div>
            {showLogin &&<Login setShowLogin={setShowLogin}/>}
            {showRegister && <Register setShowRegister={setShowRegister} />}
            <div className='navbar'>
                <a onClick={handleLoginClick}>Login</a>
                <a onClick={handleRegisterClick}>Register</a>
            </div>
        </div>

    )
}