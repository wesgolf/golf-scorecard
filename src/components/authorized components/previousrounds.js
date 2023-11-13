import Authnavbar from "./authnavbar";
import "../../Styles/previousrounds.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Newroundbutton from "./newroundbutton";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Radar } from 'react-chartjs-2';

export default function Previousrounds() {
    const [rounds, setRounds] = useState([]);
    const [userId, setUserId] = useState(null);

    const [roundSelected, setRoundSelected] = useState(-1)

    const [filterCriteria, setFilterCriteria] = useState(""); // Initial state can be empty
    const [sortOrder, setSortOrder] = useState("desc"); // Initial state can be "desc" (descending)


    const [analysisSelect, setAnalysisSelect] = useState("tee")


    useEffect(() => {
        const fetchRounds = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "rounds"));
                const fetchedRounds = [];

                querySnapshot.forEach((doc) => {
                    fetchedRounds.push(doc.data());
                });

                setRounds(fetchedRounds);
            } catch (error) {
                console.error("Error fetching rounds:", error);
            }
        };

        fetchRounds();
    }, []);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid); // Set the user ID in the state
            } else {
                setUserId(null); // User is not logged in
            }
        });

        return () => unsubscribe(); // Cleanup the listener when the component unmounts
    }, []);

    const userIdFromDatabase = userId; // Replace this with actual user ID
    const userRounds = rounds.filter(round => round.userID === userIdFromDatabase);
    const filteredUserRounds = userRounds.filter(round =>
        round.course.toLowerCase().includes(filterCriteria.toLowerCase())
    );

    const sortedUserRounds = filteredUserRounds.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.Date.localeCompare(b.Date);
        } else {
            return b.Date.localeCompare(a.Date);
        }
    });

    const data = {
        labels: ['SG Putting', 'SG Short Game', 'SG Approach', "SG Tee"],
        datasets: [
            {
                data: [
                    (sortedUserRounds[roundSelected] && sortedUserRounds[roundSelected].sgPutting) ? sortedUserRounds[roundSelected].sgPutting.toFixed(2) : 0,
                    (sortedUserRounds[roundSelected] && sortedUserRounds[roundSelected].sgShortgame) ? sortedUserRounds[roundSelected].sgShortgame.toFixed(2) : 0,
                    (sortedUserRounds[roundSelected] && sortedUserRounds[roundSelected].sgApproach) ? sortedUserRounds[roundSelected].sgApproach.toFixed(2) : 0,
                    (sortedUserRounds[roundSelected] && sortedUserRounds[roundSelected].sgTee) ? sortedUserRounds[roundSelected].sgTee.toFixed(2) : 0
                ],
                
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                grid: {
                    backgroundColor: 'transparent'  // Make the background transparent
                },
                ticks: {
                    callback: function(value, index, values) {
                        if (index % 2 === 0) return value;
                        return '';
                    },
                    backgroundColor: 'transparent'
                },
                pointLabels: {
                    font: {
                        size: 12,
                        family: "'TT Norms Pro', sans-serif",
                        backgroundColor: 'transparent',
                        padding: "0px" 
                    }
                }
            }
        }
    };


    return (
        <>
            <Authnavbar page="previous rounds" />
            <Newroundbutton />
            <div className="homepage-page">
                <div className="homepage-container">
                    {(roundSelected === -1) && (
                        <div>
                            <h1>Previous Rounds</h1>
                            <div className="sorting-container">
                                <div className="sorting-container-inline">
                                    <h6 onClick={() => setSortOrder("asc")}>Date &uarr;</h6>
                                    <h6 onClick={() => setSortOrder("desc")}>Date &darr;</h6>
                                </div>
                                <div>
                                    <input value={filterCriteria} onChange={(event) => setFilterCriteria(event.target.value)} />
                                </div>
                            </div>

                            {sortedUserRounds.length === 0 ? (
                                <div className="noPrevContainer">
                                    <p className="noPrev">No previous rounds available</p>
                                    <p className="noPrev2">Add a new round by clicking the blue arrow at the bottom right</p>
                                </div>
                            ) : (
                                sortedUserRounds.map((round, index) => (
                                    <div className="old-round" key={index}>
                                        <div className="old-round-inner" onClick={() => setRoundSelected(index)}>
                                            <div>
                                                <h2>{round.course}</h2>
                                                <h3>{round.Date}</h3>
                                            </div>
                                            <div className="sg-container">
                                                <div>
                                                    <h4>Total SG</h4>
                                                    <h5>{round.sgTotal.toFixed(2)}</h5>
                                                </div>
                                                <div>
                                                    <h4>SG Putting</h4>
                                                    <h5>{round.sgPutting.toFixed(2)}</h5>
                                                </div>
                                                <div>
                                                    <h4>SG Short</h4>
                                                    <h5>{round.sgShortgame.toFixed(2)}</h5>
                                                </div>
                                                <div>
                                                    <h4>SG Approach</h4>
                                                    <h5>{round.sgApproach.toFixed(2)}</h5>
                                                </div>
                                                <div>
                                                    <h4>SG Tee</h4>
                                                    <h5>{round.sgTee.toFixed(2)}</h5>
                                                </div>
                                                <div>
                                                    <h4>Score</h4>
                                                    <h5>{round.score}</h5>
                                                </div>
                                            </div>
                                            <div className="fa-scores">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                    {(roundSelected !== -1) && (
                        <div className="other-state">
                            <div className="other-state-grid">
                                <div>
                                    <h1>{sortedUserRounds[roundSelected].course}</h1>
                                </div>
                                <div>
                                    <h1 style={{ textAlign: "right" }} className="click" onClick={() => setRoundSelected(-1)}>X</h1>
                                </div>
                            </div>
                            <h2>{sortedUserRounds[roundSelected].Date}</h2>
                            <div className="scorecard-container">
                                <table style={{ margin: "auto" }}>
                                    <tr>
                                        <th></th>
                                        {sortedUserRounds[roundSelected].holes === 18 ? (
                                            <>
                                                <th>1</th>
                                                <th>2</th>
                                                <th>3</th>
                                                <th>4</th>
                                                <th>5</th>
                                                <th>6</th>
                                                <th>7</th>
                                                <th>8</th>
                                                <th>9</th>
                                                <th>IN</th>
                                                <th>10</th>
                                                <th>11</th>
                                                <th>12</th>
                                                <th>13</th>
                                                <th>14</th>
                                                <th>15</th>
                                                <th>16</th>
                                                <th>17</th>
                                                <th>18</th>
                                                <th>OUT</th>
                                                <th>TOTAL</th>
                                            </>
                                        ) : sortedUserRounds[roundSelected].holes === 9 ? (
                                            <>
                                                <th>1</th>
                                                <th>2</th>
                                                <th>3</th>
                                                <th>4</th>
                                                <th>5</th>
                                                <th>6</th>
                                                <th>7</th>
                                                <th>8</th>
                                                <th>9</th>
                                                <th>TOTAL</th>
                                            </>
                                        ) : null}
                                    </tr>
                                    <tr>
                                        <td>Par</td>
                                        {sortedUserRounds[roundSelected].holes === 18 ? (
                                            <>
                                                <td>{sortedUserRounds[roundSelected].pars[0]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[1]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[2]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[3]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[4]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[5]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[6]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[7]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[8]}</td>
                                                <td>{sortedUserRounds[roundSelected].frontpar}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[9]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[10]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[11]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[12]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[13]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[14]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[15]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[16]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[17]}</td>
                                                <td>{sortedUserRounds[roundSelected].backpar}</td>
                                                <td>{sortedUserRounds[roundSelected].totalpar}</td>
                                            </>
                                        ) : sortedUserRounds[roundSelected].holes === 9 ? (
                                            <>
                                                <td>{sortedUserRounds[roundSelected].pars[0]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[1]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[2]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[3]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[4]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[5]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[6]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[7]}</td>
                                                <td>{sortedUserRounds[roundSelected].pars[8]}</td>
                                                <td>{sortedUserRounds[roundSelected].frontpar}</td>
                                            </>
                                        ) : null}
                                    </tr>
                                    <tr>
                                        <td>Score</td>
                                        {sortedUserRounds[roundSelected].holes === 18 ? (
                                            <>
                                                <td>{sortedUserRounds[roundSelected].scores[0]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[1]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[2]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[3]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[4]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[5]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[6]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[7]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[8]}</td>
                                                <td>{sortedUserRounds[roundSelected].frontscore}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[9]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[10]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[11]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[12]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[13]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[14]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[15]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[16]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[17]}</td>
                                                <td>{sortedUserRounds[roundSelected].backscore}</td>
                                                <td>{sortedUserRounds[roundSelected].totalscore}</td>
                                            </>
                                        ) : sortedUserRounds[roundSelected].holes === 9 ? (
                                            <>
                                                <td>{sortedUserRounds[roundSelected].scores[0]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[1]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[2]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[3]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[4]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[5]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[6]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[7]}</td>
                                                <td>{sortedUserRounds[roundSelected].scores[8]}</td>
                                                <td>{sortedUserRounds[roundSelected].frontscore}</td>
                                            </>
                                        ) : null}

                                    </tr>
                                </table>
                            </div>
                            <div className="round-analysis-grid">
                                <div style={{height: "auto"}}>
                                    <h3>Strokes Gained</h3>
                                    <h4>VS PGA Tour</h4>
                                    <span className="two-chart-table">
                                        <div className="space">

                                        </div>
                                    <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>SG Putting</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].sgPutting).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].sgPutting) > 0.00) ? "green" : (((sortedUserRounds[roundSelected].sgPutting) === 0)? "" : "red")}>{(sortedUserRounds[roundSelected].sgPutting).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Short Game</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].sgShortgame).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].sgShortgame) > 0.00) ? "green" : (((sortedUserRounds[roundSelected].sgShortgame) === 0)? "" : "red")}>{(sortedUserRounds[roundSelected].sgShortgame).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Approach</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].sgApproach).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].sgApproach) > 0.00) ? "green" : (((sortedUserRounds[roundSelected].sgApproach) === 0)? "" : "red")}>{(sortedUserRounds[roundSelected].sgApproach).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Tee</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].sgTee).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].sgTee) > 0.00) ? "green" : (((sortedUserRounds[roundSelected].sgTee) === 0)? "" : "red")}>{(sortedUserRounds[roundSelected].sgTee).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                        <div className="space">

                                        </div>
                                    </span>
                                </div>
                                <div>
                                    <h3>Strokes Gained</h3>
                                    <h4>VS PGA Tour</h4>
                                    <div className="radar-container" style={{backgroundColor: "transparent"}}>
                                         <Radar data={data} options={options} /> 
                                    </div>
                                    <div className="space1">

                                    </div>

                                </div>
                            </div>
                            <div className="homepage-button-container">
                                <p className={(analysisSelect === "tee") ? "second-selected click" : "click"} onClick={() => setAnalysisSelect("tee")}>Tee</p>
                                <p className={(analysisSelect === "approach") ? "second-selected click" : "click"} onClick={() => setAnalysisSelect("approach")}>Approach</p>
                                <p className={(analysisSelect === "short game") ? "second-selected click" : "click"} onClick={() => setAnalysisSelect("short game")}>Short Game</p>
                                <p className={(analysisSelect === "putting") ? "second-selected click" : "click"} onClick={() => setAnalysisSelect("putting")}>Putting</p>
                                <p className={(analysisSelect === "scoring") ? "second-selected click" : "click"} onClick={() => setAnalysisSelect("scoring")}>Scoring</p>
                            </div>
                            {(analysisSelect === "tee") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Basic Driving Statistics</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit %</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee1[0])) ? "N/A" : ((sortedUserRounds[roundSelected].tee1[0]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5857 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN((sortedUserRounds[roundSelected].tee1[0])) ? "grey" : ((sortedUserRounds[roundSelected].tee1[0]) - 0.5857 > 0 ? "green" : "red")}>
                                                    {isNaN((sortedUserRounds[roundSelected].tee1[0])) ? "N/A" : (((sortedUserRounds[roundSelected].tee1[0]) - 0.5857) * 100).toFixed(2) + "%"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee1[1])) ? "N/A" : ((sortedUserRounds[roundSelected].tee1[1]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5852 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN((sortedUserRounds[roundSelected].tee1[1])) ? "grey" : ((sortedUserRounds[roundSelected].tee1[1]) - 0.5852 > 0 ? "green" : "red")}>
                                                    {isNaN((sortedUserRounds[roundSelected].tee1[1])) ? "N/A" : (((sortedUserRounds[roundSelected].tee1[1]) - 0.5852) * 100).toFixed(2) + "%"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee1[2])) ? "N/A" : ((sortedUserRounds[roundSelected].tee1[2]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5862 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN((sortedUserRounds[roundSelected].tee1[2])) ? "grey" : ((sortedUserRounds[roundSelected].tee1[2]) - 0.5862 > 0 ? "green" : "red")}>
                                                    {isNaN((sortedUserRounds[roundSelected].tee1[2])) ? "N/A" : (((sortedUserRounds[roundSelected].tee1[2]) - 0.5862) * 100).toFixed(2) + "%"}
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div>
                                        <h3>Strokes Gained off the Tee</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee2[0])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].tee2[0]) === 0 ? "grey" : (sortedUserRounds[roundSelected].tee2[0]) > 0 ? "green" : "red")}> {isNaN((sortedUserRounds[roundSelected].tee2[0])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee2[1])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].tee2[1]) === 0 ? "grey" : (sortedUserRounds[roundSelected].tee2[1]) > 0 ? "green" : "red")}> {isNaN((sortedUserRounds[roundSelected].tee2[1])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[1]).toFixed(2)}</td>

                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].tee2[2])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].tee2[2]) === 0 ? "grey" : (sortedUserRounds[roundSelected].tee2[2]) > 0 ? "green" : "red")}> {isNaN((sortedUserRounds[roundSelected].tee2[2])) ? "N/A" : (sortedUserRounds[roundSelected].tee2[2]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(analysisSelect === "putting") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Basic Putting Statistics</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Putts Per Round</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting1[0])}</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].holes) === 18) ? 28.96 : 14.48}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].holes) === 18) ? ((28.96 - (sortedUserRounds[roundSelected].putting1[0]) > 0) ? "green" : "red") : ((14.48 - (sortedUserRounds[roundSelected].putting1[0]) > 0) ? "green" : "red")}>{((sortedUserRounds[roundSelected].holes) === 18) ? (28.96 - (sortedUserRounds[roundSelected].putting1[0])).toFixed(2) : (14.48 - (sortedUserRounds[roundSelected].putting1[0])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Putts Per GIR</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting1[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>1.8</td>
                                                <td style={{ textAlign: "center" }} className={(1.8 > (sortedUserRounds[roundSelected].putting1[1])) ? "green" : (isNaN((sortedUserRounds[roundSelected].putting1[1])) || (1.8 === (sortedUserRounds[roundSelected].putting1[1])) ? "" : "red")}>{(1.8 - (sortedUserRounds[roundSelected].putting1[1])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Distance Putts <br />Made per Round</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting1[2])} Feet</td>
                                                <td style={{ textAlign: "center" }}>{(((sortedUserRounds[roundSelected].holes) === 18) ? 72.8 : 72.8 / 2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting1[2]) > (((sortedUserRounds[roundSelected].holes) === 18) ? 72.8 : 72.8 / 2)) ? "green" : (((sortedUserRounds[roundSelected].putting1[2]) === (((sortedUserRounds[roundSelected].holes) === 18) ? 72.8 : 72.8 / 2)) ? "" : "red")}>{((sortedUserRounds[roundSelected].putting1[2]) - (((sortedUserRounds[roundSelected].holes) === 18) ? 72.8 : 72.8 / 2)).toFixed(2)} Feet</td>
                                            </tr>
                                            <tr>
                                                <td>One Putt %</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].putting1[3]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>38.89%</td>
                                                <td style={{ textAlign: "center" }} className={(((sortedUserRounds[roundSelected].putting1[3]).toFixed(4) - 0.3889) > 0) ? "green" : (((sortedUserRounds[roundSelected].putting1[3]).toFixed(4) - 0.3889) === 0) ? "" : "red"}>{(((sortedUserRounds[roundSelected].putting1[3]).toFixed(4) - 0.3889) * 100).toFixed(2)}%</td>
                                            </tr>
                                            <tr>
                                                <td>Threee Putt %</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].putting1[4]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>3.02%</td>
                                                <td style={{ textAlign: "center" }} className={((0.0302 - (sortedUserRounds[roundSelected].putting1[4]).toFixed(4)) > 0) ? "green" : ((0.0302 - (sortedUserRounds[roundSelected].putting1[4]).toFixed(4)) === 0) ? "" : "red"}>{((0.0302 - (sortedUserRounds[roundSelected].putting1[4]).toFixed(4)) * 100).toFixed(2)}%</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained Putting</h3>
                                        <h4>From Distances VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>0-5 Feet</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting2[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting2[0]) > 0) ? "green" : ((sortedUserRounds[roundSelected].putting2[0]) === 0) ? "" : "red"}>{(sortedUserRounds[roundSelected].putting2[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting2[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting2[1]) > 0) ? "green" : ((sortedUserRounds[roundSelected].putting2[1]) === 0) ? "" : "red"}>{(sortedUserRounds[roundSelected].putting2[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting2[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting2[2]) > 0) ? "green" : ((sortedUserRounds[roundSelected].putting2[2]) === 0) ? "" : "red"}>{(sortedUserRounds[roundSelected].putting2[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting2[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting2[3]) > 0) ? "green" : ((sortedUserRounds[roundSelected].putting2[3]) === 0) ? "" : "red"}>{(sortedUserRounds[roundSelected].putting2[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].putting2[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting2[4]) > 0) ? "green" : ((sortedUserRounds[roundSelected].putting2[4]) === 0) ? "" : "red"}>{(sortedUserRounds[roundSelected].putting2[4]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>% Made from each Distance</h3>
                                        <h4>From Distances VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>0-5 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting3[0])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting3[0]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.88 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN((sortedUserRounds[roundSelected].putting3[0])) || (sortedUserRounds[roundSelected].putting3[0]) === 0.88) ? "" : (((sortedUserRounds[roundSelected].putting3[0]) > 0.88) ? "green" : "red")}>{isNaN((sortedUserRounds[roundSelected].putting3[0])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting3[0]) - 0.88) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting3[1])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting3[1]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.585 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN((sortedUserRounds[roundSelected].putting3[1])) || (sortedUserRounds[roundSelected].putting3[1]) === 0.585) ? "" : (((sortedUserRounds[roundSelected].putting3[1]) > 0.585) ? "green" : "red")}>{isNaN((sortedUserRounds[roundSelected].putting3[1])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting3[1]) - 0.585) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting3[2])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting3[2]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.275 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN((sortedUserRounds[roundSelected].putting3[2])) || (sortedUserRounds[roundSelected].putting3[2]) === 0.275) ? "" : (((sortedUserRounds[roundSelected].putting3[2]) > 0.275) ? "green" : "red")}>{isNaN((sortedUserRounds[roundSelected].putting3[2])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting3[2]) - 0.275) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting3[3])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting3[3]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.09 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN((sortedUserRounds[roundSelected].putting3[3])) || (sortedUserRounds[roundSelected].putting3[3]) === 0.09) ? "" : (((sortedUserRounds[roundSelected].putting3[3]) > 0.09) ? "green" : "red")}>{isNaN((sortedUserRounds[roundSelected].putting3[3])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting3[3]) - 0.09) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting3[4])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting3[4]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.02 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN((sortedUserRounds[roundSelected].putting3[4])) || (sortedUserRounds[roundSelected].putting3[4]) === 0.02) ? "" : (((sortedUserRounds[roundSelected].putting3[4]) > 0.02) ? "green" : "red")}>{isNaN((sortedUserRounds[roundSelected].putting3[4])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting3[4]) - 0.02) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                        </table>

                                    </div>

                                    <div>
                                        <h3>Two putt % from each Distance</h3>
                                        <h4>From Distances VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>0-5 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting4[0])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting4[0]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.12 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting4[0]) < 0.12) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting4[0])) || (sortedUserRounds[roundSelected].putting4[0]) === 0.12) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting4[0])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting4[0]) - 0.12) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting4[1])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting4[1]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.4095 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting4[1]) < 0.4095) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting4[1])) || (sortedUserRounds[roundSelected].putting4[1]) === 0.4095) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting4[1])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting4[1]) - 0.4095) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting4[2])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting4[2]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{((0.7115) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting4[2]) < 0.7115) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting4[2])) || (sortedUserRounds[roundSelected].putting4[2]) === 0.7115) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting4[2])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting4[2]) - 0.7115) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting4[3])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting4[3]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.815 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting4[3]) < 0.815) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting4[3])) || (sortedUserRounds[roundSelected].putting4[3]) === 0.815) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting4[3])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting4[3]) - 0.815) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting4[4])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting4[4]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.69 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting4[4]) < 0.69) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting4[4])) || (sortedUserRounds[roundSelected].putting4[4]) === 0.69) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting4[4])) ? 'N/A' : (((sortedUserRounds[roundSelected].putting4[4]) - 0.69) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Three putt % from each Distance</h3>
                                        <h4>From Distances VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>0-5 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting5[0])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting5[0]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting5[0]) > 0) ? "red" : ""}>{isNaN((sortedUserRounds[roundSelected].putting5[0])) ? 'N/A' : (-(sortedUserRounds[roundSelected].putting5[0]) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting5[1])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting5[1]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.0055 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting5[1]) > 0.0055) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting5[1])) || (sortedUserRounds[roundSelected].putting5[1]) === 0.0055) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting5[1])) ? "N/A" : ((0.0055 - (sortedUserRounds[roundSelected].putting5[1])) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting5[2])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting5[2]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.0135 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting5[2]) > 0.0135) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting5[2])) || (sortedUserRounds[roundSelected].putting5[2]) === 0.0135) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting5[2])) ? "N/A" : ((0.0135 - (sortedUserRounds[roundSelected].putting5[2])) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting5[3])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting5[3]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.095 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting5[3]) > 0.095) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting5[3])) || (sortedUserRounds[roundSelected].putting5[3]) === 0.095) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting5[3])) ? "N/A" : ((0.095 - (sortedUserRounds[roundSelected].putting5[3])) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].putting5[4])) ? 'N/A' : ((sortedUserRounds[roundSelected].putting5[4]) * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.29 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].putting5[4]) > 0.29) ? "red" : (isNaN((sortedUserRounds[roundSelected].putting5[4])) || (sortedUserRounds[roundSelected].putting5[4]) === 0.29) ? "" : "green"}>{isNaN((sortedUserRounds[roundSelected].putting5[4])) ? "N/A" : ((0.29 - (sortedUserRounds[roundSelected].putting5[4])) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(analysisSelect === "approach") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Proximity to Hole (Fairway)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[0])) ? 'N/A' : (sortedUserRounds[roundSelected].approach1[0]) + ' Feet'}</td>
                                                <td style={{ textAlign: "center" }}>{20.00} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((20 - (sortedUserRounds[roundSelected].approach1[0])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[0])) || (sortedUserRounds[roundSelected].approach1[0]) === 20) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[0])) ? 'N/A' : (20 - (sortedUserRounds[roundSelected].approach1[0])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[1])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[1]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{23.30} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((23.3 - (sortedUserRounds[roundSelected].approach1[1])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[1])) || (sortedUserRounds[roundSelected].approach1[1]) === 23.3) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[1])) ? "N/A" : (23.3 - (sortedUserRounds[roundSelected].approach1[1])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[2])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[2]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{28.55} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((28.55 - (sortedUserRounds[roundSelected].approach1[2])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[2])) || (sortedUserRounds[roundSelected].approach1[2]) === 28.55) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[2])) ? "N/A" : (28.55 - (sortedUserRounds[roundSelected].approach1[2])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[3])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[3]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{36.65} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((36.65 - (sortedUserRounds[roundSelected].approach1[3])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[3])) || (sortedUserRounds[roundSelected].approach1[3]) === 36.65) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[3])) ? "N/A" : (36.65 - (sortedUserRounds[roundSelected].approach1[3])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[4])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[4]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{49.90} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((49.90 - (sortedUserRounds[roundSelected].approach1[4])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[4])) || (sortedUserRounds[roundSelected].approach1[4]) === 49.90) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[4])) ? "N/A" : (49.90 - (sortedUserRounds[roundSelected].approach1[4])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[5])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[5]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{71.75} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((71.75 - (sortedUserRounds[roundSelected].approach1[5])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[5])) || (sortedUserRounds[roundSelected].approach1[5]) === 71.75) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[5])) ? "N/A" : (71.75 - (sortedUserRounds[roundSelected].approach1[5])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach1[6])) ? "N/A" : (sortedUserRounds[roundSelected].approach1[6]) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{85.1} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((85.1 - (sortedUserRounds[roundSelected].approach1[6])) > 0) ? "green" : ((isNaN((sortedUserRounds[roundSelected].approach1[6])) || (sortedUserRounds[roundSelected].approach1[6]) === 85.1) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach1[6])) ? "N/A" : (85.1 - (sortedUserRounds[roundSelected].approach1[6])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Proximity to Hole (Rough)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[0])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[1])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[2])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[3])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[4])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[5])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach2[6])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Proximity to Hole (Sand)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[0])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[1])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[2])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[3])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[4])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[5])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach3[6])} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>% hit green (Fairway)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[0])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[0]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.8195 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[0]) > 0.8195) ? "green" : (((sortedUserRounds[roundSelected].approach4[0]) === 0.8195 || isNaN((sortedUserRounds[roundSelected].approach4[0]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[0])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[0]) - 0.8195) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[1])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[1]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.7815 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[1]) > 0.7815) ? "green" : (((sortedUserRounds[roundSelected].approach4[1]) === 0.7815 || isNaN((sortedUserRounds[roundSelected].approach4[1]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[1])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[1]) - 0.7815) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[2])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[2]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.714 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[2]) > 0.714) ? "green" : (((sortedUserRounds[roundSelected].approach4[2]) === 0.714 || isNaN((sortedUserRounds[roundSelected].approach4[2]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[2])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[2]) - 0.714) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[3])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[3]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.602 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[3]) > 0.602) ? "green" : (((sortedUserRounds[roundSelected].approach4[3]) === 0.602 || isNaN((sortedUserRounds[roundSelected].approach4[3]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[3])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[3]) - 0.602) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[4])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[4]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.439 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[4]) > 0.439) ? "green" : (((sortedUserRounds[roundSelected].approach4[4]) === 0.439 || isNaN((sortedUserRounds[roundSelected].approach4[4]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[4])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[4]) - 0.439) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[5])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[5]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.2715 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[5]) > 0.2715) ? "green" : (((sortedUserRounds[roundSelected].approach4[5]) === 0.2715 || isNaN((sortedUserRounds[roundSelected].approach4[5]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[5])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[5]) - 0.2715) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].approach4[6])) ? "N/A" : ((sortedUserRounds[roundSelected].approach4[6]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.202 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach4[6]) > 0.202) ? "green" : (((sortedUserRounds[roundSelected].approach4[6]) === 0.202 || isNaN((sortedUserRounds[roundSelected].approach4[6]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].approach4[6])) ? "N/A" : (((sortedUserRounds[roundSelected].approach4[6]) - 0.202) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>% on Green (Rough)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[0]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[1]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[2]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[3]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[4]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[5]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach5[6]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>% on Green (Sand)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[0]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[1]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[2]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[3]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[4]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[5]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{((sortedUserRounds[roundSelected].approach6[6]) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Fairway)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[0]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[1]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[2]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[3]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[4]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[4]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[5]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[5]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[5]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[5]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach7[6]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach7[6]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach7[6]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach7[6]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Rough)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[0]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[1]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[2]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[3]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[4]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[4]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[5]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[5]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[5]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[5]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach8[6]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach8[6]) > 0) ? "green" : (((sortedUserRounds[roundSelected].approach8[6]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach8[6]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Sand)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>100-125</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[0]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[1]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[2]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[3]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[4]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[4]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[5]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[5]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[5]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[5]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].approach9[6]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].approach9[6]) > 0) ? "N/A" : (((sortedUserRounds[roundSelected].approach9[6]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].approach9[6]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(analysisSelect === "short game") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>Scrambling %</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame1[0])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame1[0]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame1[0]) > 0.5849) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame1[0])) || (sortedUserRounds[roundSelected].shortgame1[0]) === 0.5849) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame1[0])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame1[0]) - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame1[1])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame1[1]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame1[1]) > 0.5849) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame1[1])) || (sortedUserRounds[roundSelected].shortgame1[1]) === 0.5849) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame1[1])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame1[1]) - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-30</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame1[2])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame1[2]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame1[2]) > 0.5849) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame1[2])) || (sortedUserRounds[roundSelected].shortgame1[2]) === 0.5849) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame1[2])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame1[2]) - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>30 +</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame1[3])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame1[3]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame1[3]) > 0.5849) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame1[3])) || (sortedUserRounds[roundSelected].shortgame1[3]) === 0.5849) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame1[3])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame1[3]) - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Sand Save %</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame2[0])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame2[0]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame2[0]) > 0.51) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame2[0])) || (sortedUserRounds[roundSelected].shortgame2[0]) === 0.51) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame2[0])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame2[0]) - 0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame2[1])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame2[1]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame2[1]) > 0.51) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame2[1])) || (sortedUserRounds[roundSelected].shortgame2[1]) === 0.51) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame2[1])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame2[1]) - 0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-30</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame2[2])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame2[2]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame2[2]) > 0.51) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame2[2])) || (sortedUserRounds[roundSelected].shortgame2[2]) === 0.51) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame2[2])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame2[2]) - 0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>30 +</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame2[3])) ? "N/A" : ((sortedUserRounds[roundSelected].shortgame2[3]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame2[3]) > 0.51) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame2[3])) || (sortedUserRounds[roundSelected].shortgame2[3]) === 0.51) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame2[3])) ? "N/A" : (((sortedUserRounds[roundSelected].shortgame2[3]) - 0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Proximity to Hole (Fairway)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame3[0])) ? "N/A" : (sortedUserRounds[roundSelected].shortgame3[0]).toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(2.4).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame3[1]) < 2.4) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame3[0])) || (sortedUserRounds[roundSelected].shortgame3[0]) === 2.4) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame3[0])) ? "N/A" : (2.4 - (sortedUserRounds[roundSelected].shortgame3[0])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame3[1])) ? "N/A" : (sortedUserRounds[roundSelected].shortgame3[1]).toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(7.25).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame3[1]) < 7.25) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame3[1])) || (sortedUserRounds[roundSelected].shortgame3[1]) === 7.25) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame3[1])) ? "N/A" : (7.25 - (sortedUserRounds[roundSelected].shortgame3[1])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame3[2])) ? "N/A" : (sortedUserRounds[roundSelected].shortgame3[2]).toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(12.55).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame3[2]) < 12.55) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame3[2])) || (sortedUserRounds[roundSelected].shortgame3[2]) === 12.55) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame3[2])) ? "N/A" : (12.55 - (sortedUserRounds[roundSelected].shortgame3[2])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame3[3])) ? "N/A" : (sortedUserRounds[roundSelected].shortgame3[3]).toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(16.55).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame3[3]) < 16.55) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame3[3])) || (sortedUserRounds[roundSelected].shortgame3[3]) === 16.55) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame3[3])) ? "N/A" : (16.55 - (sortedUserRounds[roundSelected].shortgame3[3])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].shortgame3[4])) ? "N/A" : (sortedUserRounds[roundSelected].shortgame3[4]).toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(17.7).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame3[4]) < 17.7) ? "green" : ((isNaN((sortedUserRounds[roundSelected].shortgame3[4])) || (sortedUserRounds[roundSelected].shortgame3[4]) === 17.7) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].shortgame3[4])) ? "N/A" : (17.7 - (sortedUserRounds[roundSelected].shortgame3[4])).toFixed(2) + " Feet"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Proximity to Hole (Rough)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame4[0])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame4[1])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame4[2])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame4[3])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame4[4])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Proximity to Hole (Sand)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame5[0])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame5[1])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame5[2])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame5[3])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame5[4])}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Fairway)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame6[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame6[0]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame6[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame6[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame6[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame6[1]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame6[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame6[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame6[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame6[2]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame6[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame6[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame6[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame6[3]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame6[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame6[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame6[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame6[4]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame6[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame6[4]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Rough)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame7[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame7[0]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame7[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame7[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame7[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame7[1]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame7[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame7[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame7[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame7[2]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame7[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame7[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame7[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame7[3]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame7[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame7[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame7[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame7[4]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame7[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame7[4]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Strokes Gained (Sand)</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>&lt; 10</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame8[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame8[0]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame8[0]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame8[0]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame8[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame8[1]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame8[1]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame8[1]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame8[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame8[2]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame8[2]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame8[2]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame8[3]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame8[3]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame8[3]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame8[3]).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].shortgame8[4]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].shortgame8[4]) > 0) ? "green" : (((sortedUserRounds[roundSelected].shortgame8[4]) === 0) ? "" : "red")}>{(sortedUserRounds[roundSelected].shortgame8[4]).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(analysisSelect === "scoring") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h3>GIR %</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring1[0])) ? "N/A" : ((sortedUserRounds[roundSelected].scoring1[0]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring1[0]) > 0.6630) ? "green" : (((sortedUserRounds[roundSelected].scoring1[0]) === 0.6630 || isNaN((sortedUserRounds[roundSelected].scoring1[0]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring1[0])) ? "N/A" : (((sortedUserRounds[roundSelected].scoring1[0]) - 0.6630) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring1[1])) ? "N/A" : ((sortedUserRounds[roundSelected].scoring1[1]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring1[1]) > 0.6630) ? "green" : (((sortedUserRounds[roundSelected].scoring1[1]) === 0.6630 || isNaN((sortedUserRounds[roundSelected].scoring1[1]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring1[1])) ? "N/A" : (((sortedUserRounds[roundSelected].scoring1[1]) - 0.6630) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring1[2])) ? "N/A" : ((sortedUserRounds[roundSelected].scoring1[2]) * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring1[2]) > 0.6630) ? "green" : (((sortedUserRounds[roundSelected].scoring1[2]) === 0.6630 || isNaN((sortedUserRounds[roundSelected].scoring1[2]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring1[2])) ? "N/A" : (((sortedUserRounds[roundSelected].scoring1[2]) - 0.6630) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Scoring Average</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring2[0])) ? "N/A" : (sortedUserRounds[roundSelected].scoring2[0]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>3.06</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring2[0]) < 3.06) ? "green" : (((sortedUserRounds[roundSelected].scoring2[0]) === 3.06 || isNaN((sortedUserRounds[roundSelected].scoring2[0]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring2[0])) ? "N/A" : (3.06 - (sortedUserRounds[roundSelected].scoring2[0])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring2[1])) ? "N/A" : (sortedUserRounds[roundSelected].scoring2[1]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>4.04</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring2[1]) < 4.04) ? "green" : (((sortedUserRounds[roundSelected].scoring2[1]) === 4.04 || isNaN((sortedUserRounds[roundSelected].scoring2[1]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring2[1])) ? "N/A" : (4.04 - (sortedUserRounds[roundSelected].scoring2[1])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{isNaN((sortedUserRounds[roundSelected].scoring2[2])) ? "N/A" : (sortedUserRounds[roundSelected].scoring2[2]).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>4.64</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring2[2]) < 4.64) ? "green" : (((sortedUserRounds[roundSelected].scoring2[2]) === 4.64 || isNaN((sortedUserRounds[roundSelected].scoring2[2]))) ? "" : "red")}>{isNaN((sortedUserRounds[roundSelected].scoring2[2])) ? "N/A" : (4.64 - (sortedUserRounds[roundSelected].scoring2[2])).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Birdies or Better Per Round</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring3[0])}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65 / 18) * (sortedUserRounds[roundSelected].par3s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring3[0]) > ((3.65 / 18) * (sortedUserRounds[roundSelected].par3s))) ? "green" : ((((sortedUserRounds[roundSelected].par3s) === 0) || ((sortedUserRounds[roundSelected].scoring3[0]) === ((3.65 / 18) * (sortedUserRounds[roundSelected].par3s)))) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring3[0]) - ((3.65 / 18) * (sortedUserRounds[roundSelected].par3s))).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring3[1])}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65 / 18) * (sortedUserRounds[roundSelected].par4s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring3[1]) > ((3.65 / 18) * (sortedUserRounds[roundSelected].par4s))) ? "green" : ((((sortedUserRounds[roundSelected].par4s) === 0) || ((sortedUserRounds[roundSelected].scoring3[1]) === ((3.65 / 18) * (sortedUserRounds[roundSelected].par4s)))) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring3[1]) - ((3.65 / 18) * (sortedUserRounds[roundSelected].par4s))).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring3[2])}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65 / 18) * (sortedUserRounds[roundSelected].par5s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring3[2]) > ((3.65 / 18) * (sortedUserRounds[roundSelected].par5s))) ? "green" : ((((sortedUserRounds[roundSelected].par5s) === 0) || ((sortedUserRounds[roundSelected].scoring3[2]) === ((3.65 / 18) * (sortedUserRounds[roundSelected].par5s)))) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring3[2]) - ((3.65 / 18) * (sortedUserRounds[roundSelected].par5s))).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Pars or Better Per Round</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring4[0])}</td>
                                                <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par3s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring4[0]) > ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par3s))) ? "green" : (((sortedUserRounds[roundSelected].par3s) === 0) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring4[0]) - ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par3s))).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring4[1])}</td>
                                                <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par4s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring4[1]) > ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par4s))) ? "green" : (((sortedUserRounds[roundSelected].par4s) === 0) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring4[1]) - ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par4s))).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring4[2])}</td>
                                                <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par5s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring4[2]) > ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par5s))) ? "green" : (((sortedUserRounds[roundSelected].par5s) === 0) ? "" : "red")}>{((sortedUserRounds[roundSelected].scoring4[0]) - ((1 - (2.66 / 18)) * (sortedUserRounds[roundSelected].par3s))).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h3>Bogeys or worse per round</h3>
                                        <h4>VS PGA Tour</h4>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>This Round</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring5[0])}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66 / 18) * (sortedUserRounds[roundSelected].par3s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring5[0]) < ((2.66 / 18) * (sortedUserRounds[roundSelected].par3s))) ? "green" : ((((sortedUserRounds[roundSelected].scoring5[0]) === ((2.66 / 18) * (sortedUserRounds[roundSelected].par3s))) || ((sortedUserRounds[roundSelected].par3s) === 0)) ? "" : "red")}>{(((2.66 / 18) * (sortedUserRounds[roundSelected].par3s)) - (sortedUserRounds[roundSelected].scoring5[0])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring5[1])}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66 / 18) * (sortedUserRounds[roundSelected].par4s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring5[1]) < ((2.66 / 18) * (sortedUserRounds[roundSelected].par4s))) ? "green" : ((((sortedUserRounds[roundSelected].scoring5[1]) === ((2.66 / 18) * (sortedUserRounds[roundSelected].par4s))) || ((sortedUserRounds[roundSelected].par4s) === 0)) ? "" : "red")}>{(((2.66 / 18) * (sortedUserRounds[roundSelected].par4s)) - (sortedUserRounds[roundSelected].scoring5[1])).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{(sortedUserRounds[roundSelected].scoring5[2])}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66 / 18) * (sortedUserRounds[roundSelected].par5s)).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={((sortedUserRounds[roundSelected].scoring5[2]) < ((2.66 / 18) * (sortedUserRounds[roundSelected].par5s))) ? "green" : ((((sortedUserRounds[roundSelected].scoring5[2]) === ((2.66 / 18) * (sortedUserRounds[roundSelected].par5s))) || ((sortedUserRounds[roundSelected].par5s) === 0)) ? "" : "red")}>{(((2.66 / 18) * (sortedUserRounds[roundSelected].par5s)) - (sortedUserRounds[roundSelected].scoring5[2])).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}