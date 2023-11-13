import { faArrowRightFromBracket, faFileInvoice, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from 'react';

import "../../Styles/settingsnew.css"
import Authnavbar from "./authnavbar"


/* Firebase Imports */
import { getAuth, onAuthStateChanged, signOut, updateEmail, updatePassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {collection, query, where, getDocs, addDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from "../../firebase"
import { Navigate } from 'react-router-dom';


export default function Settings() {
    const [selected, setSelected] = useState("profile")
    const [edit1, setEdit1] = useState(false)

    const [user, setUser] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [handicap, setHandicap] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const [currUser, setCurrUser] = useState("")
    const [currEmail, setCurrEmail] = useState("")
    
    const [signout, setSignout] = useState(false)

    const [errors, setErrors] = useState({})

    const checkUsernameExists = async (username) => {
        if (username === currUser) {
            return false
        }
        else {
            try {
                const usersCollection = collection(db, 'user');
                const querySnapshot = await getDocs(query(usersCollection, where('username', '==', username)));
                return !querySnapshot.empty;
            } catch (error) {
                console.error('Error checking username:', error);
                return true; // Error occurred while checking email
            }
        }
    };

    const checkEmailExists = async (email) => {
        if (email === currEmail) {
            return false
        }
        else {
            try {
                const usersCollection = collection(db, 'user');
                const querySnapshot = await getDocs(query(usersCollection, where('email', '==', email)));
                return !querySnapshot.empty;
            } catch (error) {
                console.error('Error checking email:', error);
                return true; // Error occurred while checking email
            }
        }
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                // Retrieve user's name from the Firestore database
                const db = getFirestore();
                const userDocRef = doc(db, 'user', user.uid);
                const userDocSnapshot = await getDoc(userDocRef);
                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setFirstName(userData.firstName)
                    setLastName(userData.lastName)
                    setUsername(userData.username)
                    setEmail(userData.email)
                    setHandicap(userData.handicapGoal)
                    setPassword(userData.password)
                    setCity(userData.city)
                    setCountry(userData.country)
                    setCurrUser(userData.username)
                    setCurrEmail(userData.email)
                }
            }
        });

        // Clean up the effect
        return () => unsubscribe();
    }, []);

    async function handleSubmit() {
        const errorsHelp = {}
        if (firstName.length === 0) {
            errorsHelp.firstName = "Please enter a valid first name"
        }
        if (lastName.length === 0) {
            errorsHelp.lastName = "Please enter a valid last name"
        }
        if (username.length === 0) {
            errorsHelp.username = "Please enter a valid username"
        }
        if (email.length === 0) {
            errorsHelp.email = "Please enter a valid email"
        }
        if (handicap.length === 0) {
            errorsHelp.handicap = "Please enter a valid handicap goal"
        }
        if (password.length < 8) {
            errorsHelp.password = "Please enter a valid password greater than 8 characters"
        }
        if (city.length === 0) {
            errorsHelp.city = "Please enter a valid city"
        }
        if (country.length === 0) {
            errorsHelp.country = "Please enter a valid country"
        }
        if (await checkUsernameExists(username)) {
            errorsHelp.username = "This username already exists, please try again"
        }
        if (await checkEmailExists(email)) {
            errorsHelp.email = "This email already exists, please try again"
        }
        setErrors(errorsHelp)
        if (Object.keys(errorsHelp).length === 0) {
            const db = getFirestore()
            const userDocRef = doc(db, "user", user.uid)
            const updatedUserData = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                handicapGoal: handicap,
                password: password,
                city: city,
                country: country
            }
            try {
                await updateDoc(userDocRef, updatedUserData)
                setCurrEmail(email)
                setCurrUser(username)
                setEdit1(false)
                await updatePassword(user, password)
                await updateEmail(user, email)
            } catch(error) {
                alert(error)
            }
        }

    }

    async function handleLogout() {
        try {
            const auth = getAuth();
            await signOut(auth); // Sign out the user
            setSignout(true)
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    async function handleDeleteAccount() {
        const confirmation = window.prompt(
            "Are you sure you want to delete your account?\n" +
            "By doing this, you will have no access to any data saved within the app. \n" +
            "Type 'DELETE' in the box below to confirm."
        );
    
        if (confirmation === 'DELETE') {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
    
                // Delete user's document from Firestore
                const db = getFirestore();
                const userDocRef = doc(db, 'user', user.uid);
                await deleteDoc(userDocRef);
    
                // Delete the user's account
                await user.delete();
    
                setSignout(true); // Log the user out after deletion
            } catch (error) {
                console.error('Error during account deletion:', error);
            }
        }
    }

    if (signout === true) {
        return(
            <Navigate to="/" />
        )
    } 


    return (
        <>
            <Authnavbar page="settings"/>
            <div className="homepage-page">
                <div className="settings-container">
                    <span style={{ height: "220px" }}>
                        <ul>
                            <li onClick={() => setSelected("profile")} className={(selected === "profile") ? "selected" : ""}><FontAwesomeIcon icon={faUser} className="fa" /> Profile</li>
                            <li onClick={() => setSelected("billing")} className={(selected === "billing") ? "selected" : ""}><FontAwesomeIcon icon={faFileInvoice} className="fa" /> Billing</li>
                            <li className="red" onClick={() => handleLogout()}><FontAwesomeIcon icon={faArrowRightFromBracket} className="fa" /> Logout</li>
                            <li className="red" onClick={() => handleDeleteAccount()}><FontAwesomeIcon icon={faTrash} className="fa"/> Delete Account</li>
                        </ul>
                    </span>
                    <span>
                        <div className="top-settings">
                            <div style={{ margin: "auto" }}>
                                <div className="initals">{firstName[0]}{lastName[0]}</div>
                            </div>
                            <div style={{ margin: "auto 0" }}>
                                <h3>{firstName} {lastName}</h3>
                                <h4>{city}, {country}</h4>
                            </div>
                        </div>
                        <div className="line-settings"></div>
                        {(edit1 === false) && <div className="settings-edit-1" onClick={() => setEdit1(!edit1)}>Edit</div>}
                        {(edit1 === true) && <div className="settings-edit-1" onClick={() => handleSubmit()}>Save</div>}
                        {(edit1 === false) &&
                            <div className="grid-settings">
                                <div>
                                    <h5>First Name</h5>
                                    <h6>{firstName}</h6>
                                    <h5>Username</h5>
                                    <h6>{username}</h6>
                                    <h5>Handicap Goal</h5>
                                    <h6>{handicap}</h6>
                                    <h5>City</h5>
                                    <h6>{city}</h6>
                                </div>
                                <div>
                                    <h5>Last Name</h5>
                                    <h6>{lastName}</h6>
                                    <h5>Email</h5>
                                    <h6>{email}</h6>
                                    <h5>Password</h5>
                                    <h6>{password}</h6>
                                    <h5>Country</h5>
                                    <h6>{country}</h6>
                                </div>
                            </div>
                        }
                        {(edit1 === true) &&
                            <div className="grid-settings">
                                <div>
                                    <h5>First Name</h5>
                                    <input value={firstName} onChange={(event) => setFirstName(event.target.value)} className={(errors.firstName) ? "error-box-settings" : ""} />
                                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                                    <h5>Username</h5>
                                    <input value={username} onChange={(event) => setUsername(event.target.value)} className={(errors.username) ? "error-box-settings" : ""} />
                                    {errors.username && <p className="error-message">{errors.username}</p>}
                                    <h5>Handicap Goal</h5>
                                    <input value={handicap} onChange={(event) => setHandicap(event.target.value)} className={(errors.handicap) ? "error-box-settings" : ""} />
                                    {errors.handicap && <p className="error-message">{errors.handicap}</p>}
                                    <h5>City</h5>
                                    <input value={city} onChange={(event) => setCity(event.target.value)} className={(errors.city) ? "error-box-settings" : ""} />
                                    {errors.city && <p className="error-message">{errors.city}</p>}
                                </div>
                                <div>
                                    <h5>Last Name</h5>
                                    <input value={lastName} onChange={(event) => setLastName(event.target.value)} className={(errors.lastName) ? "error-box-settings" : ""} />
                                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                    <h5>Email</h5>
                                    <input value={email} onChange={(event) => setEmail(event.target.value)} className={(errors.email) ? "error-box-settings" : ""} />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                    <h5>Password</h5>
                                    <input value={password} onChange={(event) => setPassword(event.target.value)} className={(errors.password) ? "error-box-settings" : ""} />
                                    {errors.password && <p className="error-message">{errors.password}</p>}
                                    <h5>Country</h5>
                                    <input value={country} onChange={(event) => setCountry(event.target.value)} className={(errors.country) ? "error-box-settings" : ""} />
                                    {errors.country && <p className="error-message">{errors.country}</p>}
                                </div>
                            </div>
                        }
                    </span>
                </div>
            </div>
        </>
    )
}