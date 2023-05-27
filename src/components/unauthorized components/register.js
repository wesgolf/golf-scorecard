import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';
import '../../Styles/register.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { auth, db } from '../../firebase'
import { getDatabase, ref, get } from 'firebase/database';

import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'
import { addDoc, collection } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


export default function Register({ setShowRegister }) {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [handicapGoal, setHandicapGoal] = useState(0)
  const [error, setError] = useState("")


  function handleFirstnameChange(event) {
    setFirstname(event.target.value)
  }
  function handleLastnameChange(event) {
    setLastname(event.target.value)
  }

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

  const checkUsernameExists = async (username) => {
    try {
      const database = getDatabase();
      const usernameRef = ref(database, `user/${username}`); // Specify the path to the username in the database
      const snapshot = await get(usernameRef);
  
      if (snapshot.exists()) {
        return true; // Username exists in the database
      } else {
        return false; // Username does not exist in the database
      }
    } catch (error) {
      console.error('Error checking username:', error);
      return true; // Error occurred while checking username
    }
  };
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameexists = await checkUsernameExists(username)
    if (firstname.length === 0) {
      setError("Please enter a valid first name")
    }
    else if (lastname.length === 0) {
      setError("Please enter a valid last name")
    }
    else if (username.length === 0) {
      setError("Please enter a valid username");
    }
    else if (email.length === 0) {
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
      try {
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        if (signInMethods.length > 0) {
          setError("Email is already registered");
        } else {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const userId = res.user.uid;
          const userdata = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            handicapGoal: handicapGoal
          };
          await setDoc(doc(db, "user", userId), userdata);
          setFormSubmitted(true);
        }
      } catch (err) {
        setError(err.message);
      }
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
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="First Name" value={firstname} onChange={handleFirstnameChange} />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="Last Name" value={lastname} onChange={handleLastnameChange} />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="email">Email</label>
          <input onChange={handleEmailChange} id="email" name="email" value={email} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="retypepassword">Retype Password</label>
          <input onChange={handleRetypePasswordChange} id="retypepassword" name="retypepassword" type="password" value={retypePassword} />
          <label htmlFor="handicapgoal">Handicap Goal</label>
          <input onChange={handleHandicapGoalChange} id="handicapgoal" name="handicapgoal" value={handicapGoal} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}