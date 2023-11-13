import { useState } from "react"
import "../Styles/loginnew.css"

import { getFirestore, collection, query, where, getDocs, addDoc, doc, setDoc} from 'firebase/firestore';

import { getAuth, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { Navigate } from "react-router-dom";

import { db, auth } from "../firebase"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({})

    const [loginSuccess, setLoginSuccess] = useState(false)
    const [forgot, setForgot] = useState(false)
    const [resetSent, setResetSent] = useState(false)

    const [emailReset, setEmailReset] = useState("")
    const [resetError, setResetError] = useState("")

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission
        const newErrors = {}
        if (email.length < 1) {
            newErrors.email = "Please enter a valid email"
        }
        if (password.length < 1) {
            newErrors.password = "Please enter a valid password"
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    setLoginSuccess(true);
                } else {
                    newErrors.overall = "Email not verified. Please check your email for a verification link.";
                    setErrors(newErrors);
                    sendEmailVerification(user).catch((error) => {
                        console.log(error.code);
                        console.log(error.message);
                    });
                }
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.message);
                newErrors.overall =
                    "Email or password is not correct, please try again, or register for a new account below";
                setErrors(newErrors);
            });
    };

    if (loginSuccess === true) {
        return (
            <Navigate to="/dashboard" />
        )
    }
    const checkEmailExists = async (email) => {
        try {
            const usersCollection = collection(db, 'user');
            const querySnapshot = await getDocs(query(usersCollection, where('email', '==', email)));
            return !querySnapshot.empty;
        } catch (error) {
            console.error('Error checking email:', error);
            return true; // Error occurred while checking email
        }
    };

    async function handleReset(event) {
        event.preventDefault();
        if (emailReset.length === 0) {
          setResetError("Please enter a valid Email");
        } else if (await checkEmailExists(emailReset) === false) { // Await the result
          setResetError("This email does not seem to be registered, please make an account");
        } else {
          try {
            await sendPasswordResetEmail(auth, emailReset);
            setResetSent(true);
            setResetError(""); // Clear any previous error
          } catch (error) {
            console.error("Password reset error:", error.message);
            setResetError("Password reset failed. Please try again later.");
          }
        }
    }

    function backtoLogin(event) {
        event.preventDefault()
        setResetSent(false)
        setForgot(false)
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1><a href="/">Course IQ</a></h1>
                {(forgot === false) && (
                    <div>
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
                            <a href="#" onClick={() => setForgot(true)}>Forgot Password?</a>
                            <a style={{ cursor: "default" }} href=" ">·</a>
                            <a href="/register">Register</a>
                        </div>
                    </div>
                )}
                {(forgot === true && resetSent === false) && (
                    <div className="forgot-container">
                        <h6 style={{marginLeft: "0"}}>Please enter your email</h6>
                        <input onChange={(event) => setEmailReset(event.target.value)} value={emailReset}/>
                        <p className="error">{resetError}</p>
                        <button onClick={(event) => handleReset(event)}>Reset Password</button>
                    </div>
                )}
                {(forgot === true && resetSent === true) && (
                    <div className="forgot-container">
                        <p>Email has been sent, please check your email account.</p>
                        <button onClick={(event) => backtoLogin(event)}>Login</button>
                    </div>
                )}
            </div>
            <div className="login-image">

            </div>
        </div>
    )
}