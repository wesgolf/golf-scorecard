import React, { useState } from "react";
import '../../Styles/login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Login( { setShowLogin } ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  function handleLoginClick() {
    setShowLogin(false)
  }


  return (
    <div className="loginbackground">
      <div className="logincontainter">
        <h4>Login</h4>
        <FontAwesomeIcon icon={faTimes} className="x" onClick={handleLoginClick}/>
        <form className="loginform">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
