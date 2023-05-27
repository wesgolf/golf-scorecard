import React, { useState, useEffect } from "react";
import "../../Styles/settings.css";
import Authnavbar from "./authnavbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faFileInvoice, faRightFromBracket, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { auth, db } from '../../firebase';
import { getDatabase, ref, get, update } from 'firebase/database';

import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore";
import { Navigate } from "react-router-dom";

import { getAuth, onAuthStateChanged, deleteUser } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { remove } from 'firebase/database';


export default function Settings() {
    const [settingspage, setsettingspage] = useState("profile");
    const [signedout, setsignedout] = useState(false);

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [handicapgoal, sethandicapgoal] = useState("");
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const [currentpassword, setcurrentpassword] = useState("")

    const [newpassword1, setnewpassword1] = useState("")
    const [newpassword2, setnewpassword2] = useState("")

    const [error, seterror] = useState("")

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign out the user
            setsignedout(true);
        } catch (error) {
            // Handle error during logout
            console.error('Error logging out:', error);
        }
    };

    function emailchange() {
        alert("Unable to change email. If you would like to change your email, please delete your account, and make a new one.")
    }




    useEffect(() => {
        const authInstance = getAuth();
        const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
            if (user) {
                // Retrieve user's name from the Firestore database
                const db = getFirestore();
                const userDocRef = doc(db, 'user', user.uid);
                const userDocSnapshot = await getDoc(userDocRef);
                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setfirstname(userData.firstname);
                    setlastname(userData.lastname);
                    sethandicapgoal(userData.handicapGoal);
                    setemail(userData.email);
                    setusername(userData.username)
                    setpassword(userData.password)
                }
            }
        });

        // Clean up the effect
        return () => unsubscribe();
    }, []);

    function handlesubmit(event) {
        const updateData = {
            email: email,
            firstname: firstname,
            handicapGoal: handicapgoal,
            lastname: lastname,
            password: newpassword1,
            username: username,
        };
        event.preventDefault()
        if (firstname.length === 0) {
            seterror("Please enter a valid first name")
        }
        else if (lastname.length === 0) {
            seterror("Please enter a valid last name")
        }
        else if (username.length === 0) {
            seterror("Please enter a valid username")
        }
        else if (handicapgoal.length === 0) {
            seterror("Please enter a valid handicap goal")
        }
        else if ((currentpassword.length > 0) && (newpassword1.length === 0)) {
            seterror("I see that you attempted to change your password, however, you have not provided a new password. Please try again")
        }
        else if ((currentpassword.length > 0) && (newpassword2.length === 0 || newpassword1 != newpassword2)) {
            seterror("Your new password that you provided does not match the one that you retyped, please try again.")
        }
        else if ((currentpassword.length > 0) && (newpassword1.length < 8)) {
            seterror("Please enter a new password that is greater than 8 characters in length")
        }
        else if ((currentpassword.length > 0) && (currentpassword != password)) {
            seterror("The current password that you provided is incorrect, please try again")
        }
        else if ((currentpassword.length > 0) && (currentpassword === newpassword1)) {
            seterror("Please enter a new password")
        }
        else if (
            (newpassword1.length !== 0 && newpassword2.length === 0) ||
            (newpassword1.length === 0 && newpassword2.length !== 0) ||
            (currentpassword.length === 0 && newpassword1.length !== 0 && newpassword2.length !== 0)
        ) {
            seterror(
                "There is an issue with the password inputs. Please make sure to provide the required information."
            );
        }
        /* Actual database stuff */
        else {
            alert(updateData.username)
        }
    }

    useEffect(() => {
        if (error !== "") {
            alert(error);
        }
    }, [error]);



    if (signedout) {
        return <Navigate to="/" />;
    }

    return (
        <div className="gray">
            <Authnavbar />
            <div className="settingsgrid">
                <div>
                    <div className="settingsgrid1">
                        <ul>
                            <li className={settingspage === "profile" ? "blue click" : "click"} onClick={() => setsettingspage("profile")}>Profile <FontAwesomeIcon icon={faAddressCard} className="right" /></li>
                            <li className={settingspage === "billing" ? "blue click" : "click"} onClick={() => setsettingspage("billing")}>Billing <FontAwesomeIcon icon={faFileInvoice} className="right" /></li>
                        </ul>
                    </div>
                    <div className="logout click" onClick={handleLogout}>
                        <p className="click">Logout <FontAwesomeIcon icon={faRightFromBracket} className="right" /></p>
                    </div>
                    <div className="logout click">
                        <p className="click">Delete Account <FontAwesomeIcon icon={faTrashCan} className="right" /></p>
                    </div>
                </div>

                {settingspage === "profile" ? (
                    <div className="settingsgrid2">
                        <form onSubmit={handlesubmit}>
                            <h4>Personal Information</h4>
                            <div className="settingsform">
                                <div>
                                    <label>First Name</label> <br />
                                    <input value={firstname} onChange={(event) => setfirstname(event.target.value)} />
                                </div>
                                <div>
                                    <label>Last Name</label> <br />
                                    <input value={lastname} onChange={(event) => setlastname(event.target.value)} />
                                </div>
                            </div>
                            <h4>Golf Preferences</h4>
                            <div className="marginleft">
                                <label>Handicap Goal</label> <br />
                                <input value={handicapgoal} onChange={(event) => sethandicapgoal(event.target.value)} />
                            </div>
                            <h4>Account Settings</h4>
                            <div className="settingsform">
                                <div>
                                    <label>Email</label> <br />
                                    <input value={email} readOnly onClick={() => emailchange()} />
                                </div>
                                <div>
                                    <label>Username</label>
                                    <input value={username} onChange={(event) => setusername(event.target.value)} />
                                </div>
                            </div>
                            <h4>Update Password</h4>
                            <div className="settingsform2">
                                <div>
                                    <label>Current Password</label> <br />
                                    <input type="password" onChange={(event) => setcurrentpassword(event.target.value)} />
                                </div>
                                <div>
                                    <label>Set New Password</label> <br />
                                    <input type="password" onChange={(event) => setnewpassword1(event.target.value)} />
                                </div>
                                <div>
                                    <label>Retype New Password</label> <br />
                                    <input type="password" onChange={(event) => setnewpassword2(event.target.value)} />
                                </div>
                            </div>
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                ) : (
                    <div className="settingsgrid2">
                    </div>
                )}
            </div>
        </div>
    );
}