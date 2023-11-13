import { useState, useEffect } from "react";
import Authnavbar from "../authorized components/authnavbar";
import Newroundbutton from "./newroundbutton";

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

/*

export default function Friends() {
    const [rounds, setRounds] = useState(5)
    const [user, setUser] = useState("")
    const [friends, setFriends] = useState([])
    const [thirdSelect, setThirdSelect] = useState("tee")
    const [friendsNames, setFriendsNames] = useState([])
    const [combinedData, setCombinedData] = useState([]);


    const [fairwaysHitLeaderboard, setFairwaysHitLeaderboard] = useState([]);
    const [strokesGainedTeeLeaderboard, setStrokesGainedTeeLeaderboard] = useState([]);


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
                    setFriends(userData.friends)
                }
            }
        });
        // Clean up the effect
        return () => unsubscribe();
    }, []);

    async function fetch(userr, i) {
        const db = getFirestore()
        const roundsRef = collection(db, 'rounds');
        const querySnapshot = await getDocs(query(roundsRef, where("userID", "==", userr)));
        const roundsData = querySnapshot.docs.map(doc => doc.data());

        let j = 0
        let summ = 0
        let help = Math.min(roundsData.length, rounds)
        while (j < help) {
            summ += roundsData[j].tee2[0]
            j += 1
        }
        summ = summ / help
        setStrokesGainedTeeLeaderboard(prevList => [...prevList, summ]);
    }

    async function updateNames(friend) {
        const db = getFirestore()
        const userDocRef = doc(db, 'user', friend);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setFriendsNames(prevList => [...prevList, userData.firstName + " " + userData.lastName])
        }

    }

    useEffect(() => {
        let i = 0
        setStrokesGainedTeeLeaderboard([])
        setFriendsNames([])


        while (i < friends.length) {
            fetch(friends[i], i)
            updateNames(friends[i])
            i += 1
        }

        const combinedData = friendsNames.map((name, index) => {
            return {
                name: name,
                statistic: strokesGainedTeeLeaderboard[index]
            };
        });

        combinedData.sort((a, b) => b.statistic - a.statistic);  // Sort in descending order
        setCombinedData(combinedData); // Where combinedDataArray is your constructed array


    }, [rounds, friends, friendsNames])


    return (
        <>
            <Newroundbutton />
            <Authnavbar page="friends" />
            <div className="homepage-page">
                <div className="homepage-container">
                    <h1>Friends Statistics</h1>
                    <h2>
                        Showing friends statistics for the past
                        <select value={rounds} onChange={(event) => setRounds(event.target.value)} className="select-number-rounds">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        rounds
                    </h2>
                    {(friends.length === 0) ? (
                        <div className="noPrevContainer">
                            <p className="noPrev">You do not have any friends on the app</p>
                            <p className="noPrev2">To add new friends, search for their username on the navigation bar above</p>
                        </div>) :
                        <>
                            <div className="homepage-button-container">
                                <p className={(thirdSelect === "tee") ? "second-selected click" : "click"} onClick={() => setThirdSelect("tee")}>Tee</p>
                                <p className={(thirdSelect === "approach") ? "second-selected click" : "click"} onClick={() => setThirdSelect("approach")}>Approach</p>
                                <p className={(thirdSelect === "short game") ? "second-selected click" : "click"} onClick={() => setThirdSelect("short game")}>Short Game</p>
                                <p className={(thirdSelect === "putting") ? "second-selected click" : "click"} onClick={() => setThirdSelect("putting")}>Putting</p>
                                <p className={(thirdSelect === "scoring") ? "second-selected click" : "click"} onClick={() => setThirdSelect("scoring")}>Scoring</p>
                            </div>
                            <div className="homepage-fourth-grid">
                                <div>
                                    <h3>Fairways Hit %</h3>
                                </div>
                                <div>
                                    <h3>Strokes Gained Tee</h3>
                                    <h4>Leaderboard</h4>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Friend</th>
                                                <th>Their Statistic</th>
                                                <th>Your Statistic</th>
                                                <th>Gap</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {combinedData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}.</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.statistic}</td>
                                                    <td>Placeholder_Avg</td>
                                                    <td>Placeholder_Gap</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
} */