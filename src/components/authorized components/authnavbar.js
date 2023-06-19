/* React Imports */
import React, { useState, useEffect } from "react";

/* Style Import */
import "../../Styles/authnavbarnew.css"

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore';

/* FA Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell, faHouse, faClock, faGear, faCircleQuestion, faUserGroup, faTimes, faChevronDown, faArrowRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons';

/* Images */
import profileImage from '../../blank-profile-picture-973460_1280.webp'

export default function Authnavbar() {
    const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)

    const [selected, setSelected] = useState("dashboard")
    const [navbarVisibilty, setNavbarVisibility] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const [searchQuery, setSearchQuery] = useState("")
    const [usernames, setUsernames] = useState([])


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

    // ...

    // ...

useEffect(() => {
    const fetchUsernames = async () => {
      if (searchQuery !== "") {
        const db = getFirestore();
        const usernamesCollectionRef = collection(db, 'user');
        const usernamesQuery = query(usernamesCollectionRef, where('username', '>=', searchQuery));
        const snapshot = await getDocs(usernamesQuery);
        const usernamesData = snapshot.docs.map(doc => doc.data().username);
        setUsernames(usernamesData);
      } else {
        setUsernames([]); // Clear the usernames list when the search query is empty
      }
    };
  
    fetchUsernames();
  }, [searchQuery]);
  
  async function addFriend(username) {
    const db = getFirestore()
    const userDocRef = doc(db, 'user', user.uid)
    const userDocSnapshot = await getDoc(userDocRef)



  }


    return (
        <>
            <div className="top">
                <div className="left">
                    {!navbarVisibilty ? (
                        <FontAwesomeIcon icon={faBars} className="fa click" onClick={() => setNavbarVisibility(true)} />
                    ) : <FontAwesomeIcon icon={faTimes} className="fa click" onClick={() => setNavbarVisibility(false)} />}
                    <p>Course IQ</p>
                </div>
                <div className="right">
                    <form>
                        <input type="search" placeholder="Find friends..." className="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                        <FontAwesomeIcon icon={faSearch} className="fa" />
                    </form>
                    <FontAwesomeIcon icon={faBell} className="fa" />
                    <p className="click" onClick={() => setDropdown(!dropdown)}>{firstName} {lastName} <FontAwesomeIcon icon={faChevronDown} className="fa1" /></p>
                </div>
            </div>
            {
                dropdown && (
                    <div className="dropdown">
                        <ul>
                            <li><a>Settings<FontAwesomeIcon icon={faGear} className="falist" /></a></li>
                            <li><a>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} className="falist" /></a></li>
                        </ul>
                    </div>
                )
            }

            {
                navbarVisibilty && (
                    <div className="leftmenu">
                        <ul>
                            <li className={(selected === "dashboard") ? "bluebackground click" : "click"} onClick={() => setSelected("dashboard")}><a className={(selected === "dashboard") ? "bluebackground click" : "click"}>Dashboard <FontAwesomeIcon icon={faHouse} className="falist" /></a></li>
                            <li className={(selected === "previous") ? "bluebackground click" : "click"} onClick={() => setSelected("previous")}><a className={(selected === "previous") ? "bluebackground click" : "click"}>Previous Rounds <FontAwesomeIcon icon={faClock} className="falist" /></a></li>
                            <li className={(selected === "friends") ? "bluebackground click" : "click"} onClick={() => setSelected("friends")}><a className={(selected === "friends") ? "bluebackground click" : "click"}>Friends <FontAwesomeIcon icon={faUserGroup} className="falist" /></a></li>
                        </ul>
                        <p>Preferences</p>
                        <ul>
                            <li><a href="/settings">Settings <FontAwesomeIcon icon={faGear} className="falist" /></a></li>
                            <li><a>Help <FontAwesomeIcon icon={faCircleQuestion} className="falist" /></a></li>
                        </ul>
                    </div>
                )
            }
            <div className="usernames">
                {usernames.slice(0, 3).map((username, index) => (
                    <div className="griduser">
                        <img src={profileImage} />
                        <p key={index}>{username}</p>
                        <FontAwesomeIcon icon={faPlus} className="fa click" onClick={() => addFriend(username)} />
                    </div>
                ))}
            </div>


        </>
    )
}