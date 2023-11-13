import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleQuestion, faClock, faGear, faHouse, faRightFromBracket, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore';

import "../../Styles/authnavbarnew.css";

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Authnavbar({ page }) {
    const [user, setUser] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("");


    const [dropdown, setDropdown] = useState(false)
    const [signout, setSignout] = useState(false)

    const [searchQuery, setSearchQuery] = useState("")
    const [userList, setUserList] = useState([]);
    const [addedFriends, setAddedFriends] = useState([]);

    const [click, setClick] = useState(false)
    const [clickedUID, setClickedUID] = useState("")



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
                    setUsername(userData.username);
                    setFirstName(userData.firstName)
                    setLastName(userData.lastName)
                    setAddedFriends(userData.friends)
                }
            }
        });

        // Clean up the effect
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth); // Sign out the user
            setSignout(true)
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    useEffect(() => {
        const fetchUsernames = async () => {
            if (searchQuery !== "") {
                const db = getFirestore();
                const usernamesCollectionRef = collection(db, 'user');
                const usernamesQuery = query(usernamesCollectionRef, where('username', '>=', searchQuery));
                const snapshot = await getDocs(usernamesQuery);
                const usersData = snapshot.docs.map(doc => {
                    const userData = doc.data();
                    return { username: userData.username, firstName: userData.firstName, lastName: userData.lastName, userId: doc.id };
                }).filter(user => user.username !== username);
                setUserList(usersData);
            } else {
                setUserList([]); // Clear the user list when the search query is empty
            }
        };


        fetchUsernames();
    }, [searchQuery]);

    async function addFriend(userId) {
        const db = getFirestore();
        const userDocRef = doc(db, 'user', user.uid);

        // Get the current user's data
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            // Update the friends array with the new friend's userId
            const updatedFriends = [...userData.friends, userId];

            // Update the user document with the new friends array
            await updateDoc(userDocRef, { friends: updatedFriends });
        }
        setAddedFriends([...addedFriends, userId])
    }



    if (signout === true) {
        return (
            <Navigate to="/" />
        )
    }

    if (click === true) {
        return (
            <Navigate to='/friend' state={{ userId: clickedUID }} />
        )
    }    


    return (
        <>
            <div className="nav-bar-header">
                <div className="nav-bar-header-grid">
                    <div>
                        <h1>CourseIQ</h1>
                    </div>
                    <div className="content-right">
                        <input placeholder="Find Friends..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <div className='peron click' onClick={() => setDropdown(!dropdown)}>
                            <h4>{firstName[0]}{lastName[0]}</h4>
                            <h3>{username}</h3>
                            <FontAwesomeIcon icon={faCaretDown} className='fa' />
                        </div>

                    </div>
                </div>
            </div>

            <div className='nav-bar-left'>
                <ul>
                    <li className={(page === "dashboard") ? "nav-bar-left-selected click" : 'click'}><a href='/dashboard'><FontAwesomeIcon icon={faHouse} className="falist" />Dashboard</a></li>
                    <li className={(page === "previous rounds") ? "nav-bar-left-selected click" : 'click'}><a href='/previousrounds'><FontAwesomeIcon icon={faClock} className="falist" />Previous Rounds</a></li>
                    <li className={(page === "friends") ? "nav-bar-left-selected click" : 'click'}><a href='/friends'><FontAwesomeIcon icon={faUserGroup} className="falist" />Friends</a></li>
                </ul>
                <p>Preferences</p>
                <div className='vertical-line'></div>
                <ul>
                    <li className={(page === "settings") ? "nav-bar-left-selected click" : 'click'}><a href='/settings'><FontAwesomeIcon icon={faGear} className="falist" />Settings </a></li>
                    {/* <li onClick={() => setSelected("help")} className={(selected === "help") ? "nav-bar-left-selected click" : 'click'}><a><FontAwesomeIcon icon={faCircleQuestion} className="falist" />Help</a></li> */}
                </ul>
            </div>
            {dropdown &&
                <div className='auth-drop-down'>
                    <a href='/settings'><FontAwesomeIcon icon={faUser} className="fa" />Profile</a> <br />
                    <a style={{ borderTop: "0.5px solid rgba(0, 0, 0, 0.4)" }} className="red" onClick={() => handleLogout()}><FontAwesomeIcon icon={faRightFromBracket} className="fa" />Logout</a> <br />
                </div>}
            <div className='usernames'>
                {userList.slice(0, 3).map((user, index) => (
                    <div className="griduser">
                        <div>
                            <h6>{user.firstName[0]}{user.lastName[0]}</h6>
                        </div>
                        <p key={index} onClick={() => {setClickedUID(user.userId); setClick(true)}}>{user.username}</p>
                        {addedFriends.includes(user.userId) ? (
                            <p style={{ fontSize: "20px" }}></p>
                        ) : (
                            <p onClick={() => addFriend(user.userId)} style={{ fontSize: "20px" }}>+</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
