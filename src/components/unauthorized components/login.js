import React, { useState , useEffect} from "react";
import '../../Styles/login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AuthErrorCodes, signInWithEmailAndPassword} from 'firebase/auth';
import { Navigate } from "react-router-dom";
import { auth } from '../../firebase'


export default function Login({ setShowLogin }) {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, seterrors] = useState("")


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  function handleLoginClick() {
    setShowLogin(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary input validation here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setFormSubmitted(true)
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        seterrors("The email address or password is incorrect");
      } else {
        console.log(err.code);
        alert(err.code);
      }
      });

  };

  useEffect(() => {
    if (errors) {
      alert(errors)
    }
  }, [errors])


  if (formSubmitted) {
    return <Navigate to="/dashboard" />;
  }



  return (
    <div className="loginbackground">
      <div className="logincontainter">
        <h4>Login</h4>
        <FontAwesomeIcon icon={faTimes} className="x" onClick={handleLoginClick} />
        <form className="loginform" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
