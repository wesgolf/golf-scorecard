/* React Imports */
import React, { useState, useEffect } from "react";

/* Style Import */
import '../../Styles/homepagenew.css'

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







  return (
    <div>
      <Authnavbar />
      <Newroundbutton />
      <div className="homepagecontainer1">
        <h2>Good {date}, {name}</h2>
        <h4>Showing Stats for the past
          <select value={rounds} onChange={(event) => setRounds(event.target.value)} className="rounds">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>All</option>
          </select>
          rounds
        </h4>
        <div className="homepagegrid1">
          <div>
            <h5>Score to Par</h5>
            <h6>VS Par</h6>
          </div>
          <div>
            <h5>Strokes gained</h5>
            <h6>VS PGA Tour Field</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
