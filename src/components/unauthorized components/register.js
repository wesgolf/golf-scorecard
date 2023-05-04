import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';
import '../../Styles/register.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { auth } from '../../firebase'

import { createUserWithEmailAndPassword , fetchSignInMethodsForEmail } from 'firebase/auth'


export default function Register({ setShowRegister }) {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [handicapGoal, setHandicapGoal] = useState(0)
  const [error, setError] = useState("")


  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleRetypePasswordChange(event) {
    setRetypePassword(event.target.value)
  }

  function handleHandicapGoalChange(event) {
    setHandicapGoal(event.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.length === 0) {
      setError("Please enter a valid username");
    } else if (email.length === 0) {
      setError("Please enter a valid email");
    } else if (password.length === 0) {
      setError("Please provide a password");
    } else if (password.length < 8) {
      setError("Please enter a password that is greater than 8 characters long");
    } else if (retypePassword.length === 0) {
      setError("Please retype your password");
    } else if (retypePassword !== password) {
      setError("Passwords do not match");
    } else if (emailRegex.test(email) === false) {
      setError("Please enter a valid email");
    } else {
      // Check if email is already registered
      fetchSignInMethodsForEmail(auth, email)
        .then((signInMethods) => {
          if (signInMethods.length > 0) {
            setError("Email is already registered");
          } else {
            createUserWithEmailAndPassword(auth, email, password)
              .then((res) => {
                console.log(res.user);
              })
              .catch((err) => setError(err.message));
            setFormSubmitted(true);
          }
        })
        .catch((err) => setError(err.message));
    }
  };
  

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  if (formSubmitted) {
    return <Navigate to="/dashboard" />;
  }

  function handleRegisterClick() {
    setShowRegister(false)
  }


  return (
    <div className="registerbackground">
      <div className="registercontainer">
        <h4>Register</h4>
        <FontAwesomeIcon icon={faTimes} className="x" onClick={handleRegisterClick} />
        <form className="loginform" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="email">Email</label>
          <input onChange={handleEmailChange} id="email" name="email" value={email} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="retypepassword">Retype Password</label>
          <input onChange={handleRetypePasswordChange} id="retypepassword" name="retypepassword" type="password" value={retypePassword} />
          <label htmlFor="handicapgoal">Handicap Goal</label>
          <input onChange={handleHandicapGoalChange} id="handicapgoal" name="handicapgoal"  value={handicapGoal} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}