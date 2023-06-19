import { useState } from "react"
import "../Styles/loginnew.css"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({})

    const [loginSuccess, setLoginSuccess] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission
        const newErrors = {}
        if (email.length < 1) {
            newErrors.email = "Please enter a valid email"
        }
        if (password.length < 1) {
            newErrors.password = "Please enter a valid password"
        }
        

        const auth = getAuth(); // Assuming `firebaseApp` is properly initialized
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setLoginSuccess(true)
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.message);
                newErrors.overall = "Email or password is not correct, please try again, or register for a new account below"
                setErrors(newErrors)
            });
        
    };

    if (loginSuccess === true) {
        return (
            <Navigate to="/dashboard" />
        )
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1><a href="/">Course IQ</a></h1>
                <div className="login-with">
                    <a href="https://react-golf-app-699bf.firebaseapp.com/__/auth/handler">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
                        <p>Login with Google</p>
                    </a>
                    <a href="https://YOUR_FIREBASE_PROJECT_ID.firebaseapp.com/__/auth/handler" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
                        <p>Login with Apple</p>
                    </a>
                </div>
                <div className="or-container">
                    <div></div>
                    <p>or</p>
                </div>
                <form onSubmit={(event) => handleLogin(event)}>
                    <label htmlFor="email">Email Address</label> <br />
                    <input id="email" type="email" onChange={(event) => setEmail(event.target.value)} className={(errors.email || errors.overall) ? "error-box" : ""} /> <br />
                    {(errors.email) ? (<p className="error">{errors.email}</p>) : (<p className="error">{errors.overall}</p>)}
                    <label htmlFor="password" >Password</label> <br />
                    <input id="password" type="password" onChange={(event) => setPassword(event.target.value)} className={(errors.password || errors.overall) ? "error-box" : ""} /> <br />
                    {(errors.password) ? (<p className="error">{errors.password}</p>) : (<p className="error">{errors.overall}</p>)}
                    <button type="submit">Login</button>
                </form>
                <div className="forgot-grid">
                    <a>Forgot Password?</a>
                    <a style={{ cursor: "default" }}>·</a>
                    <a href="/register">Register</a>
                </div>
            </div>
            <div className="login-image">

            </div>
        </div>
    )
}