/* React Imports */
import React, { useState, useEffect } from "react";

/* Style Import */
import "../../Styles/authnavbarnew.css"

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell, faHouse, faClock, faGear, faCircleQuestion, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function Authnavbar() {
    const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)

    const [selected, setSelected] = useState("dashboard")


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
                    setFirstName(userData.firstname);
                    setLastName(userData.lastname)
                }

            }
        });

        // Clean up the effect
        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="top">
                <div className="left">
                    <FontAwesomeIcon icon={faBars} className="fa"/>
                    <p>Course IQ</p>
                </div>
                <div className="right">
                    <form>
                        <input type="search" placeholder="Find friends..." className="search"/>
                        <FontAwesomeIcon icon={faSearch} className="fa" />
                    </form>
                    <FontAwesomeIcon icon={faBell} className="fa"/>
                    <p>{firstName} {lastName}</p>
                </div>
            </div>
            <div className="leftmenu">
                <ul>
                    <li className={(selected === "dashboard") ? "bluebackground click" : "click"} onClick={() => setSelected("dashboard")}><a className={(selected === "dashboard") ? "bluebackground click" : "click"}>Dashboard <FontAwesomeIcon icon={faHouse} className="falist"/></a></li>
                    <li className={(selected === "previous") ? "bluebackground click" : "click"} onClick={() => setSelected("previous")}><a className={(selected === "previous") ? "bluebackground click" : "click"}>Previous Rounds <FontAwesomeIcon icon={faClock} className="falist"/></a></li>
                    <li className={(selected === "friends") ? "bluebackground click" : "click"} onClick={() => setSelected("friends")}><a className={(selected === "friends") ? "bluebackground click" : "click"}>Friends <FontAwesomeIcon icon={faUserGroup} className="falist"/></a></li>
                </ul>
                <p>Preferences</p>
                <ul>
                    <li><a>Settings <FontAwesomeIcon icon={faGear} className="falist"/></a></li>
                    <li><a>Help<FontAwesomeIcon icon={faCircleQuestion} className="falist"/></a></li>
                </ul>
            </div>
        </>
    )
}