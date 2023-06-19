/* React Imports */
import { useState } from "react"

/* Style Imports */
import "../Styles/registernew.css"

/* Firebase Imports */
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore, collection, query, where, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from "../firebase"
import { Navigate } from 'react-router-dom';



export default function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [handicapGoal, setHandicapGoal] = useState("")
    const friends = []

    const [errors, setErrors] = useState({})

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const checkUsernameExists = async (username) => {
        try {
            const usersCollection = collection(db, 'user');
            const querySnapshot = await getDocs(query(usersCollection, where('username', '==', username)));
            return !querySnapshot.empty;
        } catch (error) {
            console.error('Error checking username:', error);
            return true; // Error occurred while checking email
        }
    };

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


    const handleSubmit = async (event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors = {};
        if (firstName.length < 1) {
            newErrors.firstName = "Please enter a valid first name";
        }
        if (lastName.length < 1) {
            newErrors.lastName = "Please enter a valid last name";
        }
        if (email.length < 1) {
            newErrors.email = "Please enter a valid email";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email";
        } else {
            try {
                const emailExists = await checkEmailExists(email);
                if (emailExists) {
                    newErrors.email = "Email already exists, please login or try another email";
                }
            } catch (error) {
                console.error("Error checking email:", error);
                newErrors.email = "Error occurred while checking email";
            }
        }
        if (username.length < 6) {
            newErrors.username = "Please enter a valid username greater than 6 characters";
        } else {
            try {
                const usernameExists = await checkUsernameExists(username);
                if (usernameExists) {
                    newErrors.username = "Username already exists, please try another";
                }
            } catch (error) {
                console.error("Error checking username:", error);
                newErrors.username = "Error occurred while checking username";
            }
        }
        if (password.length < 8) {
            newErrors.password = "Please enter a valid password greater than 8 characters";
        }
        if (city.length < 1) {
            newErrors.city = "Please enter a valid city";
        }
        if (country.length < 1) {
            newErrors.country = "Please enter a valid country";
        }
        if (!handicapGoal) {
            newErrors.handicapGoal = "Please enter a valid handicap goal";
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const userId = res.user.uid;
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password,
                city: city,
                country: country,
                handicapGoal: handicapGoal,
                friends: friends
              }
              await setDoc(doc(db, "user", userId), userData);

            setRegistrationSuccess(true)
        }
    }

    if (registrationSuccess === true) {
        return (
            <Navigate to="/dashboard" />
        )
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1><a href="/">Course IQ</a></h1>
                <h2>Lets get you setup</h2>
                <h6>If you already have a CourseIQ account, sign in <a href="/login">here</a></h6>
                <div className="login-with">
                    <a>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
                        <p>Register with Google</p>
                    </a>
                    <a>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
                        <p>Register with Apple</p>
                    </a>
                </div>
                <div className="or-container">
                    <div></div>
                    <p>or</p>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="grid-2">
                        <div>
                            <label>First Name</label> <br />
                            <input style={{ width: "90%" }} className={(errors.firstName) ? "error-box" : ""} onChange={(event) => setFirstName(event.target.value)} /> <br />
                            <p className="error">{errors.firstName}</p>
                        </div>
                        <div>
                            <label>Last Name</label> <br />
                            <input style={{ width: "90%" }} className={(errors.lastName) ? "error-box" : ""} onChange={(event) => setLastName(event.target.value)} /> <br />
                            <p className="error">{errors.lastName}</p>
                        </div>
                    </div>
                    <label>Email</label>
                    <input onChange={(event) => setEmail(event.target.value)} className={(errors.email) ? "error-box" : ""} />
                    <p className="error">{errors.email}</p>
                    
                    
                    <div className="grid-2">
                        <div>
                        <label>Username</label>
                    <input onChange={(event) => setUsername(event.target.value)} className={(errors.username) ? "error-box" : ""} />
                    <p className="error">{errors.username}</p>
                            <label >City</label>
                            <input onChange={(event) => setCity(event.target.value)} className={(errors.city) ? "error-box" : ""} />
                            <p className="error">{errors.city}</p>
                        </div>
                        <div>
                        <label>Password</label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} className={(errors.password) ? "error-box" : ""} />
                    <p className="error">{errors.password}</p>
                            <label>Country</label>
                            <input onChange={(event) => setCountry(event.target.value)} className={(errors.country) ? "error-box" : ""} />
                            <p className="error">{errors.country}</p>
                        </div>
                    </div>
                    <label>Handicap Goal</label>
                    <input type="number" className={(errors.handicapGoal) ? "error-box no-arrows" : "no-arrows"} onChange={(event) => setHandicapGoal(event.target.value)} />
                    <p className="error">{errors.handicapGoal}</p>
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="login-image">
            </div>
        </div>
    )
}