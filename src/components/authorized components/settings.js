/* React Imports */
import { useState, useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

/* Style Import */
import "../../Styles/settingsnew.css"

/* Component Imports */
import Authnavbar from "./authnavbar";

/* Font Awesome Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArrowLeftRotate, faArrowRightFromBracket, faCheck, faCreditCard, faDiagramSuccessor, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

/* Firebase Imports */
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';


/* Images */
import profileImage from '../../blank-profile-picture-973460_1280.webp'


export default function Settings() {
    const [current, setCurrent] = useState("My Profile")

    const [user, setUser] = useState(null)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [currentHandicap, setCurrentHandicap] = useState(null)
    const [handicapGoal, setHandicapGoal] = useState(null)
    const [city, setCity] = useState(null)
    const [country, setCountry] = useState(null)
    const [password, setPassword] = useState(null)

    const [realFirstName, setRealFirstName] = useState(null)
    const [realLastName, setRealLastName] = useState(null)
    const [realUsername, setRealUsername] = useState(null)
    const [realEmail, setRealEmail] = useState(null)
    const [realHandicapGoal, setRealHandicapGoal] = useState(null)
    const [realCity, setRealCity] = useState(null)
    const [realCountry, setRealCountry] = useState(null)
    const [realPassword, setRealPassword] = useState(null)

    const [error, setError] = useState("")

    const [edit, setEdit] = useState(false)

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                try {
                    const db = getFirestore();
                    const userDocRef = doc(db, 'user', user.uid);
                    const userDocSnapshot = await getDoc(userDocRef);

                    if (userDocSnapshot.exists()) {
                        const userData = userDocSnapshot.data();
                        setFirstName(userData.firstname);
                        setLastName(userData.lastname);
                        setUsername(userData.username);
                        setEmail(userData.email);
                        setCurrentHandicap(userData.currentHandicap);
                        setHandicapGoal(userData.handicapGoal);
                        setCity(userData.city);
                        setCountry(userData.country);
                        setPassword(userData.password);

                        setRealFirstName(userData.firstname);
                        setRealLastName(userData.lastname);
                        setRealUsername(userData.username);
                        setRealEmail(userData.email);
                        setRealHandicapGoal(userData.handicapGoal);
                        setRealCity(userData.city);
                        setRealCountry(userData.country);
                        setRealPassword(userData.password);
                    }
                } catch (error) {
                    console.error("Error retrieving user data:", error);
                }
            }
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);



    function handleLogout() {
        signOut(auth)
            .then(() => {
                alert("logout");
            })
            .catch((error) => {
                // Handle error during logout
                console.error("Error logging out:", error);
            });
    }

    async function checkUsernameAvailability(username) {
        const db = getFirestore();
        const usersCollection = collection(db, 'user');

        const q = query(usersCollection, where('username', '==', username));
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty; // Return true if no matching documents found, false otherwise
    }

    async function checkEmailAvailability(email) {
        const db = getFirestore();
        const usersCollection = collection(db, 'user');

        const q = query(usersCollection, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty; // Return true if no matching documents found, false otherwise
    }


async function updateUser(userid) {
  try {
    const db = getFirestore();
    const userDocRef = doc(db, 'user', userid);
    const newData = {
      firstname: 'golf', // Update the firstname field with the new value
      // Add more fields to update if needed
    };

    await updateDoc(userDocRef, newData);
    console.log('User updated successfully');
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

    


    async function handleChanges(event) {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (firstName.length < 1) {
          setError("Please enter a valid first name.");
        } else if (lastName.length < 1) {
          setError("Please enter a valid last name.");
        } else if (username.length < 1) {
          setError("Please enter a valid username.");
        } else if (email.length < 1) {
          setError("Please enter a valid email.");
        } else if (!emailRegex.test(email)) {
          setError("Please enter a valid email.");
        } else if (handicapGoal.length < 1) {
          setError("Please enter a valid handicap goal.");
        } else if (password.length < 8) {
          setError("Please enter a valid password that is greater than 8 characters long.");
        } else if (city.length < 1) {
          setError("Please enter a valid city.");
        } else if (country.length < 1) {
          setError("Please enter a valid country.");
        } else if (username.length > 1) {
          const isUsernameAvailable = await checkUsernameAvailability(username);
          if (!isUsernameAvailable && username !== realUsername) {
            setError("Username already taken, please try another username.");
          } else {
            if (email.length > 1) {
              const isEmailAvailable = await checkEmailAvailability(email);
              if (!isEmailAvailable && email !== realEmail) {
                setError("Email is already taken, please try another email.");
              } else {
                // Update the user entry here
                  updateUser(user.uid)
                  setEdit(false);
              }
            }
          }
        }
      }
      



    useEffect(() => {
        if (error.length > 0) {
            alert(error);
            setError("")
        }
    }, [error]);

    if (!user) {
        return <Navigate to="/" />
    }




    return (
        <div>
            <Authnavbar />
            <div className="settingsbackground">
                <h2>Account Settings</h2>

                <div className="settingscontainer">
                    <div className="lineright">
                        <ul>
                            <li onClick={() => setCurrent("My Profile")} className={(current === "My Profile") ? "bluebackground" : ""}><p className={(current === "My Profile") ? "bluebackground" : ""}>My Profile<FontAwesomeIcon icon={faAddressCard} className="falist" /></p></li>
                            <li onClick={() => setCurrent("Billing")} className={(current === "Billing") ? "bluebackground" : ""}><p className={(current === "Billing") ? "bluebackground" : ""}>Billing <FontAwesomeIcon icon={faCreditCard} className="falist" /></p></li>
                        </ul>
                        <ul>
                            <li className="red" onClick={() => handleLogout()}>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} className="falist" onClick={() => handleLogout()} /></li>
                            <li className="red">Delete Account <FontAwesomeIcon icon={faTrash} className="falist" /></li>
                        </ul>
                    </div>
                    {
                        (current === "My Profile") && (
                            <div className="rightt">
                                <h1>{current}</h1>
                                <div className="outline">
                                    <div className="griddd">
                                        <div>
                                            <img src={profileImage} />
                                        </div>
                                        <div className="textcontainer">
                                            <p className="boldd">{firstName} {lastName}</p>
                                            <p>Current Handicap: {currentHandicap}</p>
                                            <p>{city}, {country}</p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>



                                {
                                    (edit === false) && (
                                        <div className="outline extrabottom">
                                            <div className="settingsgrid3">
                                                <div>
                                                    <h3>Personal Information</h3>
                                                </div>
                                                <div>
                                                    <p className="click" onClick={() => setEdit(true)}>
                                                        Edit <FontAwesomeIcon icon={faPen} className="faa" />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="settingsgrid2">
                                                <div>
                                                    <h5>First Name</h5>
                                                    <h6>{firstName}</h6>
                                                    <h5>Username</h5>
                                                    <h6>{username}</h6>
                                                    <h5>Handicap Goal</h5>
                                                    <h6>{handicapGoal}</h6>
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
                                        </div>
                                    )
                                }
                                {
                                    (edit === true) && (
                                        <form className="outline extrabottom" onSubmit={(event) => handleChanges(event)}>
                                            <div className="settingsgrid3">
                                                <div>
                                                    <h3>Personal Information</h3>
                                                </div>
                                                <div>
                                                    <button type="submit" className="click">
                                                        Save <FontAwesomeIcon icon={faCheck} className="faa" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="settingsgrid2">
                                                <div>
                                                    <h5>First Name</h5>
                                                    <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                                                    <h5>Username</h5>
                                                    <input value={username} onChange={(event) => setUsername(event.target.value)} />
                                                    <h5>Handicap Goal</h5>
                                                    <input type="number" value={handicapGoal} onChange={(event) => setHandicapGoal(event.target.value)} />
                                                    <h5>City</h5>
                                                    <input value={city} onChange={(event) => setCity(event.target.value)} />
                                                </div>
                                                <div>
                                                    <h5>Last Name</h5>
                                                    <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
                                                    <h5>Email</h5>
                                                    <input value={email} onChange={(event) => setEmail(event.target.value)} />
                                                    <h5>Password</h5>
                                                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                                    <h5>Country</h5>
                                                    <input value={country} onChange={(event) => setCountry(event.target.value)} />
                                                </div>
                                            </div>
                                        </form>
                                    )
                                }



                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}