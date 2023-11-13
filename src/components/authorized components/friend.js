import { useLocation } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleQuestion, faClock, faGear, faHouse, faRightFromBracket, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore';
import Authnavbar from "./authnavbar";

import "../../Styles/friend.css";


/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Friend() {
  const location = useLocation();
  const userId = location.state?.userId; // Access userId from state
  const [user, setUser] = useState("");

  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  const [secondSelect, setSecondSelect] = useState("graph")
  const [thirdSelect, setThirdSelect] = useState("tee")

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // Retrieve user's name from the Firestore database
        const db = getFirestore();
        const userDocRef = doc(db, 'user', userId);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setUsername(userData.username);
          setFirstName(userData.firstName)
          setLastName(userData.lastName)
          setCity(userData.city)
          setCountry(userData.country)
        }
      }
    });

    // Clean up the effect
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Authnavbar />
      <div className='homepage-page'>
        <div className='homepage-container'>
          <div className='friend-header-container'>
            <h1>{username}</h1>
            <h2>{firstName} {lastName}</h2>
            <h3>{city}, {country}</h3>
          </div>
          <div className="homepage-grid-1">
            <div>
              <h3>Score to Par</h3>
              <h4>VS Par</h4>
            </div>
            <div>
              <span className="two-grid">
                <span >
                  <h3>Strokes Gained</h3>
                  <h4>VS ____</h4>
                </span>
                <span className="two-grid-inner">
                  <p className={(secondSelect === "graph") ? "second-selected click" : "click"} onClick={() => setSecondSelect("graph")}>Graph</p>
                  <p className={(secondSelect === "table") ? "second-selected click" : "click"} onClick={() => setSecondSelect("table")}>Table</p>
                </span>
              </span>
              {(secondSelect === "graph") ? (
                <div className="two-chart-radar">
                  {/* Radar Chart goes here */}
                </div>) : (
                <span className="two-chart-table">
                  <table>
                    <tr>
                      <th></th>
                      <th>Rounds</th>
                      <th>You</th>
                      <th>Gap</th>
                    </tr>
                    <tr>
                      <td>Overall</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                    </tr>
                    <tr>
                      <td>Off the Tee</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                    </tr>
                    <tr>
                      <td>Approach</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                    </tr>
                    <tr>
                      <td>Short Game</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                    </tr>
                    <tr>
                      <td>Putting</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                      <td style={{ textAlign: "center" }}>___</td>
                    </tr>
                  </table>
                </span>
              )
              }
            </div>

          </div>
          <h5>Statistics by part of game</h5>
          <div className="homepage-button-container">
            <p className={(thirdSelect === "tee") ? "second-selected click" : "click"} onClick={() => setThirdSelect("tee")}>Tee</p>
            <p className={(thirdSelect === "approach") ? "second-selected click" : "click"} onClick={() => setThirdSelect("approach")}>Approach</p>
            <p className={(thirdSelect === "short game") ? "second-selected click" : "click"} onClick={() => setThirdSelect("short game")}>Short Game</p>
            <p className={(thirdSelect === "putting") ? "second-selected click" : "click"} onClick={() => setThirdSelect("putting")}>Putting</p>
            <p className={(thirdSelect === "scoring") ? "second-selected click" : "click"} onClick={() => setThirdSelect("scoring")}>Scoring</p>
          </div>
          {(thirdSelect === "putting") && (
            <div className="homepage-fourth-grid">
              <div>
                <h3>Basic Putting Statistics</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Putts Per Round</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Putts Per GIR</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Total Distance Putts <br />Made per Round</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>One Putt %</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Threee Putt %</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained Putting</h3>
                <h4>From Distances VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>0-5 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>5-10 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-50 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50+ Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained past rounds</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Round 1</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Round 2</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Round 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Round 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Round 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>% Made from each Distance</h3>
                <h4>From Distances VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>0-5 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>5-10 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-50 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50+ Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3>Two putt % from each Distance</h3>
                <h4>From Distances VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>0-5 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>5-10 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-50 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50+ Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Three putt % from each Distance</h3>
                <h4>From Distances VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>0-5 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>5-10 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-50 Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50+ Feet</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {(thirdSelect === "tee") && (
            <div className="homepage-fourth-grid">
              <div>
                <h3>Basic Driving Statistics</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Fairways Hit %</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Fairways Hit % (Par 4's)</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Fairways Hit % (Par 5's)</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained off the Tee</h3>
                <h4>From Distances VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Strokes Gained</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Strokes Gained (Par 4's)</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Strokes Gained (Par 5's)</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {(thirdSelect === "approach") && (
            <div className="homepage-fourth-grid">
              <div>
                <h3>Proximity to Hole (Fairway)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Proximity to Hole (Rough)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Proximity to Hole (Sand)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>% hit green (Fairway)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>% on Green (Rough)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>% on Green (Sand)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Fairway)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Rough)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Sand)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>100-125</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>125-150</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>150-175</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>175-200</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>200-225</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>225-250</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>250+</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {(thirdSelect === "short game") && (
            <div className="homepage-fourth-grid">
              <div>
                <h3>Scrambling %</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-30</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>30 +</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Sand Save %</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-20</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>20-30</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>30 +</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Proximity to Hole (Fairway)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Proximity to Hole (Rough)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Proximity to Hole (Sand)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Fairway)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Rough)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Strokes Gained (Sand)</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>&lt; 10</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>10-25</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>25-50</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>50-75</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>75-100</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {(thirdSelect === "scoring") && (
            <div className="homepage-fourth-grid">
              <div>
                <h3>Penalty Stokes per Round</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>GIR %</h3>
                <h4>VS ___</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Scoring You</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Birdies or Better Per Round</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Pars or Better Per Round</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
              <div>
                <h3>Bogeys or worse per round</h3>
                <h4>VS __</h4>
                <table>
                  <tr>
                    <th></th>
                    <th>Rounds</th>
                    <th>You</th>
                    <th>Gap</th>
                  </tr>
                  <tr>
                    <td>Par 3</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 4</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                  <tr>
                    <td>Par 5</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                    <td style={{ textAlign: "center" }}>___</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
