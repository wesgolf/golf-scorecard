/* React Imports */
import React, { useState, useEffect } from "react";

/* Style Import */

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

/* Chart Imports */
import { Bar, Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

/* Component Imports */
import Newroundbutton from "./newroundbutton";
import Authnavbar from "./authnavbar";


export default function Dashboard() {
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null)
  const [rounds, setRounds] = useState(5)
  const [user, setUser] = useState(null);

  const [statshowing, setstatshowing] = useState("putting")

  useEffect(() => {
    // get the current time
    const now = new Date();

    // set the name based on the time of day
    if (now.getHours() < 12) {
      setDate("morning");
    } else if (now.getHours() < 18) {
      setDate("afternoon");
    } else {
      setDate("evening");
    }
  }, []);

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
          setName(userData.firstname);
        }

      }
    });

    // Clean up the effect
    return () => unsubscribe();
  }, []);



  const data = {
    labels: ["First Round Label", 'Second Round Label', 'Third Round Label', 'Fourth Round Label', "Fifth Round Label"],
    datasets: [
      {
        label: 'Personal SG',
        data: [1, -1, 1, 1, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    scale: {
      pointLabels: {
        fontSize: 14,
        fontColor: '#333',
      },
      ticks: {
        suggestedMin: -4,
        suggestedMax: 4,
      },
      angleLines: {
        color: '#ddd',
        lineWidth: 1,
      },
      gridLines: {
        color: 'transparent',
      },
      backgroundColor: 'transparent',
    },
  };


  if (user) {
    return (
      <>
        <Newroundbutton />
        <Authnavbar />
        <div className="homepageheader">
          <h1>Good {date}, {name} </h1>
          <h2>Showing stats for the past
            <select className="roundnumbers" value={rounds} onChange={(event) => setRounds(event.target.value)}>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>All</option>
            </select>
            rounds</h2>
        </div>
        <div className="statscontainerhome">
          <h5>Score to Par</h5>
          <h6>VS Par</h6>
          <div className="barcontainer">
            <h3>Average</h3>
            <h4>8</h4>
            <Bar data={data} options={options} className="center" />
          </div>
          <h5>Strokes Gained</h5>
          <h6>Versus Average PGA Tour Player</h6>
          <div className="clickcontainer">
            <p>Radar</p>
            <p>Trends</p>
          </div>
          <div className="barcontainer">
            <h3>Total</h3>
            <h4>____</h4>
            {/* Add the bar chart here */}
          </div>
          <div className="homepagegrid">
            <div>
              <h3>Putting</h3>
              <h4>____</h4>
            </div>
            <div>
              <h3>Short Game</h3>
              <h4>____</h4>
            </div>
            <div>
              <h3>Approach</h3>
              <h4>____</h4>
            </div>
            <div>
              <h3>Driving</h3>
              <h4>____</h4>
            </div>
          </div>
          <div className='buttoncontainer2'>
            <p className={statshowing === "putting" ? "active2" : ""} onClick={() => setstatshowing('putting')}>Putting</p>
            <p className={statshowing === "shortgame" ? "active2" : ""} onClick={() => setstatshowing('shortgame')}>Short Game</p>
            <p className={statshowing === "approach" ? "active2" : ""} onClick={() => setstatshowing("approach")}>Approach</p>
            <p className={statshowing === "driving" ? "active2" : ""} onClick={() => setstatshowing("driving")}>Driving</p>
            <p className={statshowing === "scoring" ? "active2" : ""} onClick={() => setstatshowing("scoring")}>Scoring</p>
          </div>
          {statshowing === "putting" && (
            <div className='putting'>
              <div className='puttinggrid'>
                <div>
                  <h4>Basic Statistics</h4>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>This Round</th>
                        <th>PGA Tour Average</th>
                        <th>Gap</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Putts Per Round</td>

                      </tr>
                      <tr>
                        <td>Putts Per GIR</td>

                      </tr>
                      <tr>
                        <td>One Putt Percentage</td>

                      </tr>
                      <tr>
                        <td>Three Putt Percentage</td>

                      </tr>
                      <tr>
                        <td>Total Distance of Putts Made</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div>
                  <h4>Percentage Made from Each Distance</h4>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>This Round</th>
                        <th>PGA Tour Average</th>
                        <th>Gap</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0-5 Feet</td>
                      </tr>
                      <tr>
                        <td>5-10 Feet</td>
                      </tr>
                      <tr>
                        <td>10-15 Feet</td>
                      </tr>
                      <tr>
                        <td>15-20 Feet</td>
                      </tr>
                      <tr>
                        <td>20+ Feet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4>Advanced Strokes gained Data</h4>
                </div>
              </div>

            </div>
          )}
          {statshowing === "shortgame" && (
            <div>
              short game
            </div>
          )}
          {statshowing === "approach" && (
            <div>
              approach
            </div>
          )}
          {statshowing === "driving" && (
            <div>
              driving
            </div>
          )}
          {statshowing === "scoring" && (
            <div>
              Scoring
            </div>
          )}
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <p>You have to login to view this page</p>
      </>
    )
  }
}
