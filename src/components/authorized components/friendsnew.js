import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, getFirestore, doc, where, getDocs, query, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Authnavbar from "./authnavbar";
import Newround from "./newround";
import Newroundbutton from "./newroundbutton";
import "../../Styles/friendsnew.css"

export default function Friends() {
    const [rounds, setRounds] = useState(5)
    const [thirdSelect, setThirdSelect] = useState('tee')

    const [user, setUser] = useState()
    const [friends, setFriends] = useState([])

    const [tee1, setTee1] = useState({})
    const [tee2, setTee2] = useState({})

    const [userTee1Stat, setUserTee1Stat] = useState(null);
    const [userTee2Stat, setUserTee2Stat] = useState(null);

    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user)

                const db = getFirestore()
                const userDocRef = doc(db, "user", user.uid)
                const userDocSnapshot = await getDoc(userDocRef)
                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    setFriends([...userData.friends, user.uid])
                }
            }
        })
    }, [])

    async function friendsNames(uid) {
        const db = getFirestore()
        const userDocRef = doc(db, "user", uid)
        const userDocSnapshot = await getDoc(userDocRef)
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data()
            return userData.firstName + " " + userData.lastName

        }
    }

    async function tee1stat(uid) {
        let tee1Total = 0;
        let total = 0

        const db = getFirestore();
        const roundsRef = collection(db, "rounds");
        const q = query(roundsRef, where("userID", "==", uid));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                tee1Total += data.tee1[0]
                total += 1
            });
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
        return (tee1Total/total);
    }

    async function tee2stat(uid) {
        let tee2Total = 0;

        const db = getFirestore();
        const roundsRef = collection(db, "rounds");
        const q = query(roundsRef, where("userID", "==", uid));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                tee2Total += data.sgTee
            });
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
        return tee2Total;
    }

    async function tee11() {
        let newTee1 = {};
        for (let i = 0; i < friends.length; i++) {
            const name = await friendsNames(friends[i]);
            const stat = await tee1stat(friends[i])
            newTee1[name] = stat;
        }
        setTee1(sortObjectByValues(newTee1));
    }

    async function tee22() {
        let newTee2 = {};
        for (let i = 0; i < friends.length; i++) {
            const name = await friendsNames(friends[i]);
            const stat = await tee2stat(friends[i])
            newTee2[name] = stat;
        }
        setTee2(sortObjectByValues(newTee2));
    }
    
    /* Calling all of the functions */
    useEffect(() => {
        if (user && friends.length > 0) {
            tee11();
            tee22()
        }
    }, [user, friends]);

    useEffect(() => {
        if (user) {
            tee1stat(user.uid).then(stat => setUserTee1Stat(stat));
            tee2stat(user.uid).then(stat => setUserTee2Stat(stat));
        }
    }, [user]);


    /* Sort by Decreasing Value */
    function sortObjectByValues(obj) {
        return Object.entries(obj)
            // Filter out entries with NaN values
            .filter(([k, v]) => !Number.isNaN(v))
            // Sort the remaining entries by value
            .sort((a, b) => b[1] - a[1])
            // Convert the sorted array back to an object
            .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    }
    



    return (
        <>
            <Authnavbar />
            <Newroundbutton />
            <div className="homepage-page">
                <div className="homepage-container">
                    <h1>Friends Statistics</h1>
                    <h2>
                        Showing statistics for the past
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
                        </div>
                    ) :
                        <>
                            <div className="homepage-button-container">
                                <p className={(thirdSelect === "tee") ? "second-selected click" : "click"} onClick={() => setThirdSelect("tee")}>Tee</p>
                                <p className={(thirdSelect === "approach") ? "second-selected click" : "click"} onClick={() => setThirdSelect("approach")}>Approach</p>
                                <p className={(thirdSelect === "short game") ? "second-selected click" : "click"} onClick={() => setThirdSelect("short game")}>Short Game</p>
                                <p className={(thirdSelect === "putting") ? "second-selected click" : "click"} onClick={() => setThirdSelect("putting")}>Putting</p>
                                <p className={(thirdSelect === "scoring") ? "second-selected click" : "click"} onClick={() => setThirdSelect("scoring")}>Scoring</p>
                            </div>
                            {(thirdSelect === "tee") && (
                                <div className="homepage-fourth-grid" style={{ gridTemplateColumns: " 1fr 1fr" }}>
                                    <div>
                                        <h3>Fairways Hit %</h3>
                                        <h4>Leaderboard</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Friend</th>
                                                    <th>Friend Statistic</th>
                                                    <th>Your Statistic</th>
                                                    <th>Gap</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(tee1).map(([key, value], index) => (
                                                    <tr key={index} className="leaderboard">
                                                        <td>{index + 1}</td>
                                                        <td>{key}</td>
                                                        <td>{((value)*100).toFixed(2) + "%"}</td>
                                                        <td>{userTee1Stat !== null ? (userTee1Stat*100).toFixed(2) + "%": 'Loading...'}</td>
                                                        <td className={(userTee1Stat<value) ? "red" : ((userTee1Stat>value) ? "green" : "")}>{((userTee1Stat-value)*100).toFixed(2) + "%"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained Tee</h3>
                                        <h4>Leaderboard</h4>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Friend</th>
                                                    <th>Friend Statistic</th>
                                                    <th>Your Statistic</th>
                                                    <th>Gap</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(tee2).map(([key, value], index) => (
                                                    <tr key={index} className="leaderboard">
                                                        <td>{index + 1}</td>
                                                        <td>{key}</td>
                                                        <td>{value.toFixed(2)}</td>
                                                        <td>{userTee2Stat !== null ? (userTee2Stat).toFixed(2): 'Loading...'}</td>
                                                        <td className={(userTee2Stat>value) ? "green" : ((userTee2Stat<value) ? "red" : "")}>{(userTee2Stat - value).toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(thirdSelect === "approach") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Strokes Gained Approach (Fairway)</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained Approach (Rough)</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained Approach (Sand)</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                </div>
                            )}
                            {(thirdSelect === "putting") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Strokes Gained Putting</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Putts Per Round</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Total Putts per Round</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>One Putt %</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Putts per GIR</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                </div>
                            )}
                            {(thirdSelect === "scoring") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>GIR %</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Scoring Average</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Birdies or Bettter per Round</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Bogeys or Worse per Round</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                </div>
                            )}
                            {(thirdSelect === "short game") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Scrambling %</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Sand Save %</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained Short Game</h3>
                                        <h4>Leaderboard</h4>
                                    </div>
                                </div>
                            )}
                        </>}
                </div>
            </div>
        </>
    )
}