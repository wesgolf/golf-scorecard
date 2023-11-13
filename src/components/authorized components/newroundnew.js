import Authnavbar from "./authnavbar";
import React from "react";

import '../../Styles/newroundnew.css'
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Firestore } from "firebase/firestore";
import { getFirestore, collection, query, where, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { db, auth } from "../../firebase"

import { Radar, Chart } from 'react-chartjs-2';
import { RadialLinearScale } from 'chart.js/auto';



export default function Newroundnew() {
    const [holes, setHoles] = useState(18)
    const [courseName, setCourseName] = useState("")
    const [date, setDate] = useState("")
    const [errors, setErrors] = useState({})
    const [uid, setUid] = useState(null);

    const [hole, setHole] = useState(0)

    const [part, setPart] = useState(1)
    const [back, setBack] = useState(false)
    const [analysisSelect, setAnalysisSelect] = useState("tee")
    const [done, setDone] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid);  // Set uid
            } else {
                setUid(null);  // Set to null if user is logged out
            }
        });

        // Cleanup
        return () => {
            unsubscribe();
        };
    }, []);


    function nextPage() {
        const errorsTemp = {}
        if (courseName.length === 0) {
            errorsTemp.courseName = "Please enter a valid course name"
        }
        if (date.length === 0) {
            errorsTemp.date = "Please enter a valid date"
        }
        if (Object.keys(errorsTemp).length === 0) {
            setPart(2)
        }
        setErrors(errorsTemp)
    }

    function nextPage2() {
        if (done === true) {
            setPart(3)
        }
    }

    function holeChange2(holee, part) {
        if (done) {
            setHole(holee)
        }
        if (part === 1) {
            const errorsTemp = {}
        if (courseName.length === 0) {
            errorsTemp.courseName = "Please enter a valid course name"
        }
        if (date.length === 0) {
            errorsTemp.date = "Please enter a valid date"
        }
        if (Object.keys(errorsTemp).length === 0) {
            setPart(2)
        }
        setErrors(errorsTemp)
        }
        if ((part === 2) && holee < hole){
            setHole(holee)
        }

    }
    async function handleExit() {

        if (part <= 2) {
            let result = window.confirm("Are you sure you want to exit? By doing so, you will not have this round saved.");
            if (result) {
                setBack(true);
            }
        } else {
            let userData = {
                course: courseName,
                userID: uid,
                Date: date,
                holes: holes,

                pars: [pars[0], pars[1], pars[2], pars[3], pars[4], pars[5], pars[6], pars[7], pars[8], pars[9], pars[10], pars[11], pars[12], pars[13], pars[14], pars[15], pars[16], pars[17]],
                scores: [scores[0], scores[1], scores[2], scores[3], scores[4], scores[5], scores[6], scores[7], scores[8], scores[9], scores[10], scores[11], scores[12], scores[13], scores[14], scores[15], scores[16], scores[17]],
                par3s: par3s,
                par4s: par4s,
                par5s: par5s,

                frontpar: frontPar,
                backpar: backPar,
                totalpar: totalPar,

                frontscore: frontScore,
                backscore: backScore,
                totalscore: totalScore,
                score: totalScore,

                sgTotal: sgTee + sgApproach + sgShortgame + sgPutting,
                sgTee: sgTee, 
                sgApproach: sgApproach,
                sgShortgame, sgShortgame,
                sgPutting, sgPutting,


                tee1: [fairways, fairways4, fairways5],
                tee2: [sgTee, sgTee4, sgTee5],

                putting1: [ppr, ppGir, dist, onePutt, threePutt],
                putting2: [sgp0to5, sgp5to10, sgp10to20, sgp20to50, sgp50to],
                putting3: [perMade0to5, perMade5to10, perMade10to20, perMade20to50, perMade50to],
                putting4: [tp05, tp510, tp1020, tp2050, tp50],
                putting5: [thp05, thp510, thp1020, thp2050, thp50],

                scoring1: [gir3, gir4, gir5],
                scoring2: [sa3, sa4, sa5],
                scoring3: [bpr3, bpr4, bpr5],
                scoring4: [ppr3, ppr4, ppr5],
                scoring5: [bopr3, bopr4, bopr5],

                approach1: [pthF100125, pthF125150, pthF150175, pthF175200, pthF200225, pthF225250, pthF250],
                approach2: [pthR100125, pthR125150, pthR150175, pthR175200, pthR200225, pthR225250, pthR250],
                approach3: [pthS100125, pthS125150, pthS150175, pthS175200, pthS200225, pthS225250, pthS250],
                approach4: [phgF100125, phgF125150, phgF150175, phgF175200, phgF200225, phgF225250, phgF250],
                approach5: [phgR100125, phgR125150, phgR150175, phgR175200, phgR200225, phgR225250, phgR250],
                approach6: [phgS100125, phgS125150, phgS150175, phgS175200, phgS200225, phgS225250, phgS250],
                approach7: [sgF100125, sgF125150, sgF150175, sgF175200, sgF200225, sgF225250, sgF250],
                approach8: [sgR100125, sgR125150, sgR150175, sgR175200, sgR200225, sgR225250, sgR250],
                approach9: [sgS100125, sgS125150, sgS150175, sgS175200, sgS200225, sgS225250, sgS250],

                shortgame1: [s010, s1020, s2030, s30],
                shortgame2: [sc010, sc1020, sc2030, sc30],
                shortgame3: [pthF010, pthF1025, pthF2550, pthF5075, pthF75100],
                shortgame4: [pthR010, pthR1025, pthR2550, pthR5075, pthR75100],
                shortgame5: [pthS010, pthS1025, pthS2550, pthS5075, pthS75100],
                shortgame6: [sgF010, sgF1025, sgF2550, sgF5075, sgF75100],
                shortgame7: [sgR010, sgR1025, sgR2550, sgR5075, sgR75100],
                shortgame8: [sgS010, sgS1025, sgS2550, sgS5075, sgS75100]
            };

            try {
                const docRef = await addDoc(collection(db, "rounds"), userData);

                setBack(true);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    }

    


    const defaultPars = new Array(18).fill(1);
    const defaultScores = new Array(18).fill(1);

    const [pars, setPars] = useState(defaultPars);
    const [scores, setScores] = useState(defaultScores);

    const frontPar = pars.slice(0, 9).reduce((acc, par) => acc + par, 0);
    const backPar = pars.slice(9).reduce((acc, par) => acc + par, 0);
    const totalPar = frontPar + backPar;

    const frontScore = scores.slice(0, 9).reduce((acc, score) => acc + score, 0);
    const backScore = scores.slice(9).reduce((acc, score) => acc + score, 0);
    const totalScore = frontScore + backScore;

    function setParForHole(holeIndex, value) {
        const newPars = [...pars];
        newPars[holeIndex] = value;
        setPars(newPars);
    }
    function setScoreForHole(holeIndex, value) {
        const newScores = [...scores];
        newScores[holeIndex] = value;
        setScores(newScores);
    }

    const defaultShot = [{ startingLie: "Tee", distanceToHole: 0 }];

    const [shots, setShots] = useState(Array(18).fill().map(() => defaultShot));

    const shotSetters = [
        setShots[0], setShots[1], setShots[2], setShots[3], setShots[4],
        setShots[5], setShots[6], setShots[7], setShots[8], setShots[9],
        setShots[10], setShots[11], setShots[12], setShots[13], setShots[14],
        setShots[15], setShots[16], setShots[17]
    ];

    /* Alerts to help user */
    function helpstartinglie() { alert("The starting lie is where on the golf course you took your shot from. For example, your first shot would be from the Tee, as this is the starting lie for your first shot.") }
    function helpdistance() { alert("The distance to hole is the distance to th hole that you had for your shot. For example, your first shot's distance to hole should be the length of the hole, as this is the distance to the hole from the starting position of the shot.") }

    function addShot(holeIndex) {
        const newShot = { startingLie: "Fairway", distanceToHole: 0 };
        const newShots = JSON.parse(JSON.stringify(shots));
        newShots[holeIndex - 1].push(newShot);
        setShots(newShots);  // Add this line to actually update the state
        setScoreForHole(holeIndex - 1, scores[holeIndex - 1] + 1);
    }

    function removeShot(holeIndex) {
        const newShots = JSON.parse(JSON.stringify(shots));
        if (scores[holeIndex - 1] > 1) {
            newShots[holeIndex - 1].pop();
            setShots(newShots);
            setScoreForHole(holeIndex - 1, scores[holeIndex - 1] - 1);
        }
    }

    function changeLie(event, index, hole) {
        const newShots = JSON.parse(JSON.stringify(shots)); // Deep copy of shots
        newShots[hole][index].startingLie = event; // Update the startingLie value of the shot
        setShots(newShots); // Set the updated shots array
    }
    function changeDistance(event, index, hole) {
        const newShots = JSON.parse(JSON.stringify(shots)); // Deep copy of shots
        newShots[hole][index].distanceToHole = parseInt(event, 10); // Update the distanceToHole value of the shot
        setShots(newShots); // Set the updated shots array
    }

    function setHoleChange(hole) {
        if (pars[hole-1] === 1) {
            alert("Please enter a valid par for this hole")
        }
        else if (shots[hole-1][0].distanceToHole === 0) {
            alert("Please enter at least one valid shot for this hole")
        }
        else {
            setHole(hole+1)
        }
    }

    /* PGA Database */
    const lieTypes = {
        "Tee": { 0: 1, 100: 2.92, 120: 2.99, 140: 2.97, 160: 2.99, 180: 3.05, 200: 3.12, 220: 3.17, 240: 3.25, 260: 3.45, 280: 3.65, 300: 3.71, 320: 3.79, 340: 3.86, 360: 3.92, 380: 3.96, 400: 3.99, 420: 4.02, 440: 4.08, 460: 4.17, 480: 4.28, 500: 4.41, 520: 4.54, 540: 4.65, 560: 4.74, 580: 4.79, 600: 4.82 },
        "Green": { 0: 1, 1: 1.00, 2: 1.02, 3: 1.04, 4: 1.13, 5: 1.23, 6: 1.34, 7: 1.42, 8: 1.50, 9: 1.56, 10: 1.61, 15: 1.78, 20: 1.87, 30: 1.98, 40: 2.06, 50: 2.14, 60: 2.21, 90: 2.40, 100: 2.50 },
        "Sand": { 0: 1, 20: 2.53, 40: 2.82, 60: 3.15, 80: 3.24, 100: 3.23, 120: 3.21, 140: 3.22, 160: 3.28, 180: 3.40, 200: 3.55, 220: 3.70, 240: 2.84, 260: 3.93, 280: 4.00, 320: 4.12, 340: 4.26, 360: 4.41, 380: 4.55, 400: 4.69, 420: 4.73, 440: 4.78, 460: 4.87, 480: 4.98, 500: 5.11, 520: 5.24, 540: 5.36, 560: 5.44, 580: 5.49, 600: 5.52 },
        "Rough": { 0: 1, 20: 2.59, 40: 2.78, 60: 2.91, 80: 2.96, 100: 3.02, 120: 3.08, 140: 3.15, 160: 3.23, 180: 3.31, 200: 3.42, 220: 3.53, 240: 3.64, 260: 3.74, 280: 3.83, 300: 3.90, 320: 3.95, 340: 4.02, 360: 4.11, 380: 4.21, 400: 4.30, 420: 4.34, 440: 4.39, 460: 4.48, 480: 4.59, 500: 4.72, 520: 4.85, 540: 4.97, 560: 5.05, 580: 5.10, 600: 5.13 },
        "Fairway": { 0: 1, 20: 2.40, 40: 2.60, 60: 2.70, 80: 2.75, 100: 2.80, 120: 2.85, 140: 2.91, 160: 2.98, 180: 3.08, 200: 3.19, 220: 3.32, 240: 3.45, 260: 3.58, 280: 3.69, 300: 3.78, 320: 3.84, 340: 3.88, 360: 3.95, 380: 4.03, 400: 4.11, 420: 4.15, 440: 4.20, 460: 4.29, 480: 4.40, 500: 4.53, 520: 4.66, 540: 4.78, 560: 4.86, 580: 4.91, 600: 4.94 }
    }

    function rounding(distance, lieName) {
        const lie = lieTypes[lieName];

        if (!lie) {
            return null;  // Handle invalid lie type
        }

        const keys = Object.keys(lie).map(Number).sort((a, b) => a - b);
        if (keys.length === 0) {
            return null; // Handle empty object
        }

        // Directly return value if distance exists in lie
        if (lie.hasOwnProperty(distance)) {
            return lie[distance];
        }

        // Handle out-of-range cases
        if (distance < keys[0]) {
            return lie[keys[0]];
        }
        if (distance > keys[keys.length - 1]) {
            return lie[keys[keys.length - 1]];
        }

        // Find closest upper and lower keys
        let upperKey = null;
        let lowerKey = null;
        let upperDiff = Infinity;
        let lowerDiff = Infinity;

        for (let i = 0; i < keys.length - 1; i++) {
            if (distance > keys[i] && distance < keys[i + 1]) {
                upperKey = keys[i + 1];
                lowerKey = keys[i];
                lowerDiff = distance - lowerKey;
                upperDiff = upperKey - distance;
                break;
            }
        }

        // Interpolate value using a weighted sum
        const totalGap = upperDiff + lowerDiff;
        const lowerWeight = lowerDiff / totalGap;
        const upperWeight = upperDiff / totalGap;
        const interpolatedValue = (lowerWeight * lie[lowerKey]) + (upperWeight * lie[upperKey]);

        return interpolatedValue;
    }
    
    /* Total Strokes Gained */
    const [sgApproach, setSgApproach] = useState(0)
    const [sgShortgame, setSgShortGame] = useState(0)
    const [sgPutting, setSgPutting] = useState(0)

    /* Pars */
    const [par3s, setPar3s] = useState(0)
    const [par4s, setPar4s] = useState(0)
    const [par5s, setPar5s] = useState(0)

    /* Strokes Gained States Tee*/
    const [fairways, setFairways] = useState(0)
    const [fairways4, setFairways4] = useState(0)
    const [fairways5, setFairways5] = useState(0)

    const [sgTee, setSgTee] = useState(0)
    const [sgTee4, setSgTee4] = useState(0)
    const [sgTee5, setSgTee5] = useState(0)

    /* Approach States */
    /* Prox to Hole */
    const [pthF100125, setPthF100125] = useState(0)
    const [pthF125150, setPthF125150] = useState(0)
    const [pthF150175, setPthF150175] = useState(0)
    const [pthF175200, setPthF175200] = useState(0)
    const [pthF200225, setPthF200225] = useState(0)
    const [pthF225250, setPthF225250] = useState(0)
    const [pthF250, setPthF250] = useState(0)

    const [pthR100125, setPthR100125] = useState(0)
    const [pthR125150, setPthR125150] = useState(0)
    const [pthR150175, setPthR150175] = useState(0)
    const [pthR175200, setPthR175200] = useState(0)
    const [pthR200225, setPthR200225] = useState(0)
    const [pthR225250, setPthR225250] = useState(0)
    const [pthR250, setPthR250] = useState(0)

    const [pthS100125, setPthS100125] = useState(0)
    const [pthS125150, setPthS125150] = useState(0)
    const [pthS150175, setPthS150175] = useState(0)
    const [pthS175200, setPthS175200] = useState(0)
    const [pthS200225, setPthS200225] = useState(0)
    const [pthS225250, setPthS225250] = useState(0)
    const [pthS250, setPthS250] = useState(0)
    /* % Hit Green */
    const [phgF100125, setPhgF100125] = useState(0)
    const [phgF125150, setPhgF125150] = useState(0)
    const [phgF150175, setPhgF150175] = useState(0)
    const [phgF175200, setPhgF175200] = useState(0)
    const [phgF200225, setPhgF200225] = useState(0)
    const [phgF225250, setPhgF225250] = useState(0)
    const [phgF250, setPhgF250] = useState(0)

    const [phgR100125, setPhgR100125] = useState(0)
    const [phgR125150, setPhgR125150] = useState(0)
    const [phgR150175, setPhgR150175] = useState(0)
    const [phgR175200, setPhgR175200] = useState(0)
    const [phgR200225, setPhgR200225] = useState(0)
    const [phgR225250, setPhgR225250] = useState(0)
    const [phgR250, setPhgR250] = useState(0)

    const [phgS100125, setPhgS100125] = useState(0)
    const [phgS125150, setPhgS125150] = useState(0)
    const [phgS150175, setPhgS150175] = useState(0)
    const [phgS175200, setPhgS175200] = useState(0)
    const [phgS200225, setPhgS200225] = useState(0)
    const [phgS225250, setPhgS225250] = useState(0)
    const [phgS250, setPhgS250] = useState(0)
    /* Strokes Gained */
    const [sgF100125, setSgF100125] = useState(0)
    const [sgF125150, setSgF125150] = useState(0)
    const [sgF150175, setSgF150175] = useState(0)
    const [sgF175200, setSgF175200] = useState(0)
    const [sgF200225, setSgF200225] = useState(0)
    const [sgF225250, setSgF225250] = useState(0)
    const [sgF250, setSgF250] = useState(0)

    const [sgR100125, setSgR100125] = useState(0)
    const [sgR125150, setSgR125150] = useState(0)
    const [sgR150175, setSgR150175] = useState(0)
    const [sgR175200, setSgR175200] = useState(0)
    const [sgR200225, setSgR200225] = useState(0)
    const [sgR225250, setSgR225250] = useState(0)
    const [sgR250, setSgR250] = useState(0)

    const [sgS100125, setSgS100125] = useState(0)
    const [sgS125150, setSgS125150] = useState(0)
    const [sgS150175, setSgS150175] = useState(0)
    const [sgS175200, setSgS175200] = useState(0)
    const [sgS200225, setSgS200225] = useState(0)
    const [sgS225250, setSgS225250] = useState(0)
    const [sgS250, setSgS250] = useState(0)

    /* Short Game States */
    const [s010, setS010] = useState(0)
    const [s1020, setS1020] = useState(0)
    const [s2030, setS2030] = useState(0)
    const [s30, setS30] = useState(0)

    const [sc010, setSc010] = useState(0)
    const [sc1020, setSc1020] = useState(0)
    const [sc2030, setSc2030] = useState(0)
    const [sc30, setSc30] = useState(0)

    /* Prox to Hole Approach */
    const [pthF010, setPthF010] = useState(0)
    const [pthF1025, setPthF1025] = useState(0)
    const [pthF2550, setPthF2550] = useState(0)
    const [pthF5075, setPthF5075] = useState(0)
    const [pthF75100, setPthF75100] = useState(0)

    const [pthR010, setPthR010] = useState(0)
    const [pthR1025, setPthR1025] = useState(0)
    const [pthR2550, setPthR2550] = useState(0)
    const [pthR5075, setPthR5075] = useState(0)
    const [pthR75100, setPthR75100] = useState(0)

    const [pthS010, setPthS010] = useState(0)
    const [pthS1025, setPthS1025] = useState(0)
    const [pthS2550, setPthS2550] = useState(0)
    const [pthS5075, setPthS5075] = useState(0)
    const [pthS75100, setPthS75100] = useState(0)

    /* Strokes Gained Approach */
    const [sgF010, setSgF010] = useState(0)
    const [sgF1025, setSgF1025] = useState(0)
    const [sgF2550, setSgF2550] = useState(0)
    const [sgF5075, setSgF5075] = useState(0)
    const [sgF75100, setSgF75100] = useState(0)

    const [sgR010, setSgR010] = useState(0)
    const [sgR1025, setSgR1025] = useState(0)
    const [sgR2550, setSgR2550] = useState(0)
    const [sgR5075, setSgR5075] = useState(0)
    const [sgR75100, setSgR75100] = useState(0)

    const [sgS010, setSgS010] = useState(0)
    const [sgS1025, setSgS1025] = useState(0)
    const [sgS2550, setSgS2550] = useState(0)
    const [sgS5075, setSgS5075] = useState(0)
    const [sgS75100, setSgS75100] = useState(0)



    /* Putting States */
    const [ppr, setPpr] = useState(0)
    const [dist, setDist] = useState(0)
    const [ppGir, setPpGir] = useState(0)
    const [onePutt, setOnePutt] = useState(0)
    const [threePutt, setThreePutt] = useState(0)

    const [sgp0to5, setSgp0to5] = useState(0)
    const [sgp5to10, setSgp5to10] = useState(0)
    const [sgp10to20, setSgp10to20] = useState(0)
    const [sgp20to50, setSgp20to50] = useState(0)
    const [sgp50to, setSgp50to] = useState(0)

    const [perMade0to5, setPerMade0to5] = useState(0)
    const [perMade5to10, setPerMade5to10] = useState(0)
    const [perMade10to20, setPerMade10to20] = useState(0)
    const [perMade20to50, setPerMade20to50] = useState(0)
    const [perMade50to, setPerMade50to] = useState(0)

    const [tp05, setTp05] = useState(0)
    const [tp510, setTp510] = useState(0)
    const [tp1020, setTp1020] = useState(0)
    const [tp2050, setTp2050] = useState(0)
    const [tp50, setTp50] = useState(0)

    const [thp05, setThp05] = useState(0)
    const [thp510, setThp510] = useState(0)
    const [thp1020, setThp1020] = useState(0)
    const [thp2050, setThp2050] = useState(0)
    const [thp50, setThp50] = useState(0)

    /* States for Scoring */
    const [gir3, setGir3] = useState(0)
    const [gir4, setGir4] = useState(0)
    const [gir5, setGir5] = useState(0)

    const [sa3, setSa3] = useState(0)
    const [sa4, setSa4] = useState(0)
    const [sa5, setSa5] = useState(0)

    const [bpr3, setBpr3] = useState(0)
    const [bpr4, setBpr4] = useState(0)
    const [bpr5, setBpr5] = useState(0)

    const [ppr3, setPpr3] = useState(0)
    const [ppr4, setPpr4] = useState(0)
    const [ppr5, setPpr5] = useState(0)

    const [bopr3, setBopr3] = useState(0)
    const [bopr4, setBopr4] = useState(0)
    const [bopr5, setBopr5] = useState(0)

    function Algorithm(shots) {
        /* Setting Overall */
        let sgPutting = 0
        let sgShortgame = 0
        let sgApproach = 0

        /* Setting Tee */
        let fairways = [0, 0]
        let fairways4 = [0, 0]
        let fairways5 = [0, 0]

        let sgTee = 0
        let sgTee4 = 0
        let sgTee5 = 0

        /* Setting Approach */
        /* Shots for Calculations */
        let shotsF100125 = 0
        let shotsF125150 = 0
        let shotsF150175 = 0
        let shotsF175200 = 0
        let shotsF200225 = 0
        let shotsF225250 = 0
        let shotsF250 = 0

        let shotsR100125 = 0
        let shotsR125150 = 0
        let shotsR150175 = 0
        let shotsR175200 = 0
        let shotsR200225 = 0
        let shotsR225250 = 0
        let shotsR250 = 0

        let shotsS100125 = 0
        let shotsS125150 = 0
        let shotsS150175 = 0
        let shotsS175200 = 0
        let shotsS200225 = 0
        let shotsS225250 = 0
        let shotsS250 = 0

        /* Greens for Calculations */
        let greenF100125 = 0
        let greenF125150 = 0
        let greenF150175 = 0
        let greenF175200 = 0
        let greenF200225 = 0
        let greenF225250 = 0
        let greenF250 = 0

        let greenR100125 = 0
        let greenR125150 = 0
        let greenR150175 = 0
        let greenR175200 = 0
        let greenR200225 = 0
        let greenR225250 = 0
        let greenR250 = 0

        let greenS100125 = 0
        let greenS125150 = 0
        let greenS150175 = 0
        let greenS175200 = 0
        let greenS200225 = 0
        let greenS225250 = 0
        let greenS250 = 0


        /* Prox to hole */
        let pthF100125 = 0
        let pthF125150 = 0
        let pthF150175 = 0
        let pthF175200 = 0
        let pthF200225 = 0
        let pthF225250 = 0
        let pthF250 = 0


        let pthR100125 = 0
        let pthR125150 = 0
        let pthR150175 = 0
        let pthR175200 = 0
        let pthR200225 = 0
        let pthR225250 = 0
        let pthR250 = 0

        let pthS100125 = 0
        let pthS125150 = 0
        let pthS150175 = 0
        let pthS175200 = 0
        let pthS200225 = 0
        let pthS225250 = 0
        let pthS250 = 0

        /* Per hit green */
        let phgF100125 = 0
        let phgF125150 = 0
        let phgF150175 = 0
        let phgF175200 = 0
        let phgF200225 = 0
        let phgF225250 = 0
        let phgF250 = 0

        let phgR100125 = 0
        let phgR125150 = 0
        let phgR150175 = 0
        let phgR175200 = 0
        let phgR200225 = 0
        let phgR225250 = 0
        let phgR250 = 0

        let phgS100125 = 0
        let phgS125150 = 0
        let phgS150175 = 0
        let phgS175200 = 0
        let phgS200225 = 0
        let phgS225250 = 0
        let phgS250 = 0

        /* Strokes Gained Approach */
        let sgF100125 = 0
        let sgF125150 = 0
        let sgF150175 = 0
        let sgF175200 = 0
        let sgF200225 = 0
        let sgF225250 = 0
        let sgF250 = 0

        let sgR100125 = 0
        let sgR125150 = 0
        let sgR150175 = 0
        let sgR175200 = 0
        let sgR200225 = 0
        let sgR225250 = 0
        let sgR250 = 0

        let sgS100125 = 0
        let sgS125150 = 0
        let sgS150175 = 0
        let sgS175200 = 0
        let sgS200225 = 0
        let sgS225250 = 0
        let sgS250 = 0

        /* Short Game Settings */
        let ts010 = 0
        let ts1020 = 0
        let ts2030 = 0
        let ts30 = 0

        let s010 = 0
        let s1020 = 0
        let s2030 = 0
        let s30 = 0

        let tsc010 = 0
        let tsc1020 = 0
        let tsc2030 = 0
        let tsc30 = 0

        let sc010 = 0
        let sc1020 = 0
        let sc2030 = 0
        let sc30 = 0


        /* Approach Helpers */
        let shotsF010 = 0
        let shotsF1025 = 0
        let shotsF2550 = 0
        let shotsF5075 = 0
        let shotsF75100 = 0

        let shotsR010 = 0
        let shotsR1025 = 0
        let shotsR2550 = 0
        let shotsR5075 = 0
        let shotsR75100 = 0

        let shotsS010 = 0
        let shotsS1025 = 0
        let shotsS2550 = 0
        let shotsS5075 = 0
        let shotsS75100 = 0

        /* PTH Approach */
        let pthF010 = 0
        let pthF1025 = 0
        let pthF2550 = 0
        let pthF5075 = 0
        let pthF75100 = 0

        let pthR010 = 0
        let pthR1025 = 0
        let pthR2550 = 0
        let pthR5075 = 0
        let pthR75100 = 0

        let pthS010 = 0
        let pthS1025 = 0
        let pthS2550 = 0
        let pthS5075 = 0
        let pthS75100 = 0

        /* Strokes Gained Approach */
        let sgF010 = 0
        let sgF1025 = 0
        let sgF2550 = 0
        let sgF5075 = 0
        let sgF75100 = 0

        let sgR010 = 0
        let sgR1025 = 0
        let sgR2550 = 0
        let sgR5075 = 0
        let sgR75100 = 0

        let sgS010 = 0
        let sgS1025 = 0
        let sgS2550 = 0
        let sgS5075 = 0
        let sgS75100 = 0


        /* Setting Putts */
        let ppr = 0
        let dist = 0
        let ppGir = 0
        let ppGircount = 0
        let onePutt = 0
        let threePutt = 0

        let sgp0to5 = 0
        let sgp5to10 = 0
        let sgp10to20 = 0
        let sgp20to50 = 0
        let sgp50to = 0

        let perMade0to5 = 0
        let total0to5 = 0
        let perMade5to10 = 0
        let total5to10 = 0
        let perMade10to20 = 0
        let total10to20 = 0
        let perMade20to50 = 0
        let total20to50 = 0
        let perMade50to = 0
        let total50to = 0

        let tp05 = 0
        let tp510 = 0
        let tp1020 = 0
        let tp2050 = 0
        let tp50 = 0

        let thp05 = 0
        let thp510 = 0
        let thp1020 = 0
        let thp2050 = 0
        let thp50 = 0

        let totalp05 = 0
        let totalp510 = 0
        let totalp1020 = 0
        let totalp2050 = 0
        let totalp50 = 0

        /* Setting Score */
        let gir3 = 0
        let gir4 = 0
        let gir5 = 0

        let sa3 = 0
        let par3 = 0
        let sa4 = 0
        let par4 = 0
        let sa5 = 0
        let par5 = 0

        let bpr3 = 0
        let bpr4 = 0
        let bpr5 = 0

        let ppr3 = 0
        let ppr4 = 0
        let ppr5 = 0

        let bopr3 = 0
        let bopr4 = 0
        let bopr5 = 0


        for (let i = 0; i < holes; i++) {
            const holeShots = shots[i];
            let gir = false
            /* Tee Algorithm */
            const first = rounding(holeShots[0].distanceToHole, holeShots[0].startingLie)
            if ((pars[i] === 4) && (typeof holeShots[1] !== 'undefined')) {
                const second = rounding(holeShots[1].distanceToHole, holeShots[1].startingLie)
                if (holeShots[1].startingLie === "Fairway") {
                    fairways[0] = fairways[0] + 1
                    fairways[1] = fairways[1] + 1

                    fairways4[0] = fairways4[0] + 1
                    fairways4[1] = fairways4[1] + 1
                }
                else {
                    fairways[1] = fairways[1] + 1

                    fairways4[1] = fairways4[1] + 1
                }
                sgTee += (first - second - 1)
                sgTee4 += (first - second - 1)
            }
            if ((pars[i] === 5) && (typeof holeShots[1] !== 'undefined')) {
                const second = rounding(holeShots[1].distanceToHole, holeShots[1].startingLie)
                if (holeShots[1].startingLie === "Fairway") {
                    fairways[0] = fairways[0] + 1
                    fairways[1] = fairways[1] + 1

                    fairways5[0] = fairways5[0] + 1
                    fairways5[1] = fairways5[1] + 1
                }
                else {
                    fairways[1] = fairways[1] + 1

                    fairways5[1] = fairways5[1] + 1
                }
                sgTee += (first - second - 1)
                sgTee5 += (first - second - 1)
            }
            /* Scoring Algorithm */
            if (pars[i] === 3) {
                if (scores[i] < pars[i]) {
                    bpr3 += 1
                    ppr3 += 1
                }
                if (scores[i] === pars[i]) {
                    ppr3 += 1
                }
                if (scores[i] > pars[i]) {
                    bopr3 += 1
                }
                if (holeShots[1] !== undefined && holeShots[1].startingLie === "Green") {
                    gir3 += 1
                    gir = true
                }
                sa3 += scores[i]
                par3 += 1
            }
            if (pars[i] === 4) {
                if (scores[i] < pars[i]) {
                    bpr4 += 1
                    ppr4 += 1
                }
                if (scores[i] === pars[i]) {
                    ppr4 += 1
                }
                if (scores[i] > pars[i]) {
                    bopr4 += 1
                }
                if ((holeShots[1] !== undefined && holeShots[1].startingLie === "Green") || (holeShots[2] !== undefined && holeShots[2].startingLie === "Green")) {
                    gir4 += 1
                    gir = true
                }
                sa4 += scores[i]
                par4 += 1
            }
            if (pars[i] === 5) {
                if (scores[i] < pars[i]) {
                    bpr5 += 1
                    ppr5 += 1
                }
                if (scores[i] === pars[i]) {
                    ppr5 += 1
                }
                if (scores[i] > pars[i]) {
                    bopr5 += 1
                }
                if ((holeShots[2] !== undefined && holeShots[2].startingLie === "Green") || (holeShots[3] !== undefined && holeShots[3].startingLie === "Green")) {
                    gir5 += 1
                    gir = true
                }
                sa5 += scores[i]
                par5 += 1
            }
            /* Putting Algorithm */
            let holePutts = 0
            for (let j = 0; j < holeShots.length; j++) {
                const shot = holeShots[j];

                if (shot.startingLie === "Green") {
                    ppr += 1
                    holePutts += 1
                }
                if ((shot.startingLie === "Green") && (shot.distanceToHole <= 5)) {
                    total0to5 += 1
                    if ((j + 1) === holeShots.length) {
                        sgp0to5 += rounding(shot.distanceToHole, shot.startingLie) - 1
                        perMade0to5 += 1
                    }
                    else {
                        let sec = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let first = rounding(shot.distanceToHole, shot.startingLie)
                        sgp0to5 += first - sec - 1
                    }
                }
                if ((shot.startingLie === "Green") && (shot.distanceToHole > 5) && (shot.distanceToHole <= 10)) {
                    total5to10 += 1
                    if ((j + 1) === holeShots.length) {
                        sgp5to10 += rounding(shot.distanceToHole, shot.startingLie) - 1
                        perMade5to10 += 1
                    }
                    else {
                        let sec = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let first = rounding(shot.distanceToHole, shot.startingLie)
                        sgp5to10 += first - sec - 1
                    }
                }
                if ((shot.startingLie === "Green") && (shot.distanceToHole > 10) && (shot.distanceToHole <= 20)) {
                    total10to20 += 1
                    if ((j + 1) === holeShots.length) {
                        sgp10to20 += rounding(shot.distanceToHole, shot.startingLie) - 1
                        perMade10to20 += 1
                    }
                    else {
                        let sec = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let first = rounding(shot.distanceToHole, shot.startingLie)
                        sgp10to20 += first - sec - 1
                    }
                }
                if ((shot.startingLie === "Green") && (shot.distanceToHole > 20) && (shot.distanceToHole <= 50)) {
                    total20to50 += 1
                    if ((j + 1) === holeShots.length) {
                        sgp20to50 += rounding(shot.distanceToHole, shot.startingLie) - 1
                        perMade20to50 += 1
                    }
                    else {
                        let sec = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let first = rounding(shot.distanceToHole, shot.startingLie)
                        sgp20to50 += first - sec - 1
                    }
                }
                if ((shot.startingLie === "Green") && (shot.distanceToHole > 50)) {
                    total50to += 1
                    if ((j + 1) === holeShots.length) {
                        sgp50to += rounding(shot.distanceToHole, shot.startingLie) - 1
                        perMade50to += 1
                    }
                    else {
                        let sec = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let first = rounding(shot.distanceToHole, shot.startingLie)
                        sgp50to += first - sec - 1
                    }
                }

            }
            if (holeShots[holeShots.length - 1].startingLie === "Green") {
                dist += holeShots[holeShots.length - 1].distanceToHole
            }
            if (holePutts === 1) {
                onePutt += 1
            }
            if (holePutts === 3) {
                threePutt += 1
            }
            if (gir === true) {
                ppGircount += 1
                ppGir += holePutts
            }
            /* Two and Three Putt algorithm */
            if (holePutts === 2) {
                if (holeShots[scores[i] - 2].distanceToHole < 5) {
                    tp05 += 1
                }
                if ((holeShots[scores[i] - 2].distanceToHole >= 5) && (holeShots[scores[i] - 2].distanceToHole < 10)) {
                    tp510 += 1
                }
                if ((holeShots[scores[i] - 2].distanceToHole >= 10) && (holeShots[scores[i] - 2].distanceToHole < 20)) {
                    tp1020 += 1
                }
                if ((holeShots[scores[i] - 2].distanceToHole >= 20) && (holeShots[scores[i] - 2].distanceToHole < 50)) {
                    tp2050 += 1
                }
                if (holeShots[scores[i] - 2].distanceToHole >= 50) {
                    tp50 += 1
                }
            }
            if (holePutts === 3) {
                if (holeShots[scores[i] - 3].distanceToHole < 5) {
                    thp05 += 1
                }
                if ((holeShots[scores[i] - 3].distanceToHole >= 5) && (holeShots[scores[i] - 3].distanceToHole < 10)) {
                    thp510 += 1
                }
                if ((holeShots[scores[i] - 3].distanceToHole >= 10) && (holeShots[scores[i] - 3].distanceToHole < 20)) {
                    thp1020 += 1
                }
                if ((holeShots[scores[i] - 3].distanceToHole >= 20) && (holeShots[scores[i] - 3].distanceToHole < 50)) {
                    thp2050 += 1
                }
                if (holeShots[scores[i] - 3].distanceToHole >= 50) {
                    thp50 += 1
                }
            }
            let foundShot = undefined
            for (let j = 0; j < holeShots.length; j++) {
                const shot = holeShots[j]
                if (shot.startingLie === "Green") {
                    foundShot = shot
                    break
                }
            }
            if (foundShot !== undefined) {
                if (foundShot.distanceToHole < 5) {
                    totalp05 += 1
                }
                if ((foundShot.distanceToHole >= 5) && (foundShot.distanceToHole < 10)) {
                    totalp510 += 1
                }
                if ((foundShot.distanceToHole >= 10) && (foundShot.distanceToHole < 20)) {
                    totalp1020 += 1
                }
                if ((foundShot.distanceToHole >= 20) && (foundShot.distanceToHole < 50)) {
                    totalp2050 += 1
                }
                if (foundShot.distanceToHole >= 50) {
                    totalp50 += 1
                }
            }

            /* Approach Algorithm */
            for (let j = 0; j < holeShots.length; j++) {
                const shot = holeShots[j];
                /* 100-125 */
                if ((shot.distanceToHole >= 100) && (shot.distanceToHole < 125)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF100125 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF100125 += 1
                            sgF100125 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF100125 += holeShots[j + 1].distanceToHole
                                phgF100125 += 1
                                greenF100125 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF100125 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR100125 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR100125 += 1
                            sgR100125 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR100125 += holeShots[j + 1].distanceToHole
                                phgR100125 += 1
                                greenR100125 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR100125 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS100125 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS100125 += 1
                            sgS100125 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS100125 += holeShots[j + 1].distanceToHole
                                phgS100125 += 1
                                greenS100125 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS100125 += firstt - secondd - 1
                        }
                    }
                }
                if ((shot.distanceToHole >= 125) && (shot.distanceToHole < 150)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF125150 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF125150 += 1
                            sgF125150 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF125150 += holeShots[j + 1].distanceToHole
                                phgF125150 += 1
                                greenF125150 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF125150 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR125150 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR125150 += 1
                            sgR125150 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR125150 += holeShots[j + 1].distanceToHole
                                phgR125150 += 1
                                greenR125150 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR125150 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS125150 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS125150 += 1
                            sgS125150 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS125150 += holeShots[j + 1].distanceToHole
                                phgS125150 += 1
                                greenS125150 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS125150 += firstt - secondd - 1
                        }
                    }
                }
                if ((shot.distanceToHole >= 150) && (shot.distanceToHole < 175)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF150175 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF150175 += 1
                            sgF150175 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF150175 += holeShots[j + 1].distanceToHole
                                phgF150175 += 1
                                greenF150175 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF150175 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR150175 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR150175 += 1
                            sgR150175 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR150175 += holeShots[j + 1].distanceToHole
                                phgR150175 += 1
                                greenR150175 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR150175 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS150175 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS150175 += 1
                            sgS150175 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS150175 += holeShots[j + 1].distanceToHole
                                phgS150175 += 1
                                greenS150175 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS150175 += firstt - secondd - 1
                        }
                    }
                }
                if ((shot.distanceToHole >= 175) && (shot.distanceToHole < 200)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF175200 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF175200 += 1
                            sgF175200 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF175200 += holeShots[j + 1].distanceToHole
                                phgF175200 += 1
                                greenF175200 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF175200 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR175200 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR175200 += 1
                            sgR175200 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR175200 += holeShots[j + 1].distanceToHole
                                phgR175200 += 1
                                greenR175200 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR175200 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS175200 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS175200 += 1
                            sgS175200 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS175200 += holeShots[j + 1].distanceToHole
                                phgS175200 += 1
                                greenS175200 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS175200 += firstt - secondd - 1
                        }
                    }
                }
                if ((shot.distanceToHole >= 200) && (shot.distanceToHole < 225)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF200225 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF200225 += 1
                            sgF200225 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF200225 += holeShots[j + 1].distanceToHole
                                phgF200225 += 1
                                greenF200225 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF200225 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR200225 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR200225 += 1
                            sgR200225 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR200225 += holeShots[j + 1].distanceToHole
                                phgR200225 += 1
                                greenR200225 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR200225 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS200225 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS200225 += 1
                            sgS200225 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS200225 += holeShots[j + 1].distanceToHole
                                phgS200225 += 1
                                greenS200225 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS200225 += firstt - secondd - 1
                        }
                    }
                }
                if ((shot.distanceToHole >= 225) && (shot.distanceToHole < 250)) {
                    if (shot.startingLie === "Fairway") {
                        shotsF225250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF225250 += 1
                            sgF225250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF225250 += holeShots[j + 1].distanceToHole
                                phgF225250 += 1
                                greenF225250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF225250 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR225250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR225250 += 1
                            sgR225250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR225250 += holeShots[j + 1].distanceToHole
                                phgR225250 += 1
                                greenR225250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR225250 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS225250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS225250 += 1
                            sgS225250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS225250 += holeShots[j + 1].distanceToHole
                                phgS225250 += 1
                                greenS225250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS225250 += firstt - secondd - 1
                        }
                    }
                }
                if (shot.distanceToHole >= 250) {
                    if (shot.startingLie === "Fairway") {
                        shotsF250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgF250 += 1
                            sgF250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthF250 += holeShots[j + 1].distanceToHole
                                phgF250 += 1
                                greenF250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF250 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Rough") {
                        shotsR250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgR250 += 1
                            sgR250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthR250 += holeShots[j + 1].distanceToHole
                                phgR250 += 1
                                greenR250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR250 += firstt - secondd - 1
                        }
                    }
                    if (shot.startingLie === "Sand") {
                        shotsS250 += 1
                        let firstt = rounding(shot.distanceToHole, shot.startingLie)
                        /* Shot is holed out */
                        if ((j + 1) === holeShots.length) {
                            phgS250 += 1
                            sgS250 += firstt - 1
                        }
                        else {
                            if (holeShots[j + 1].startingLie === "Green") {
                                pthS250 += holeShots[j + 1].distanceToHole
                                phgS250 += 1
                                greenS250 += 1
                            }
                            let secondd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS250 += firstt - secondd - 1
                        }
                    }
                }
            }
            /* Short Game Algorithm */
            let scrambling = false
            if ((gir === false) && (scores[i] === pars[i])) {
                if (pars[i] === 3 && holeShots[1] !== "Green") {
                    scrambling = true
                }
                if (pars[i] === 4 && holeShots[2] !== "Green") {
                    scrambling = true
                }
                if (pars[i] === 5 && holeShots[3] !== "Green") {
                    scrambling = true
                }
            }
            if (gir === false) {
                if (holeShots[pars[i] - 2] !== undefined && holeShots[pars[i] - 2].startingLie !== "Green") {
                    if (holeShots[pars[i] - 2].distanceToHole < 10) {
                        ts010 += 1
                        if (pars[i] >= scores[i]) {
                            s010 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 10) && (holeShots[pars[i] - 2].distanceToHole < 20)) {
                        ts1020 += 1
                        if (pars[i] >= scores[i]) {
                            s1020 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 20) && (holeShots[pars[i] - 2].distanceToHole < 30)) {
                        ts2030 += 1
                        if (pars[i] >= scores[i]) {
                            s2030 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 30)) {
                        ts30 += 1
                        if (pars[i] >= scores[i]) {
                            s30 += 1
                        }
                    }
                }
            }

            if (gir === false) {
                if (holeShots[pars[i] - 2] !== undefined && holeShots[pars[i] - 2].startingLie === "Sand") {
                    if (holeShots[pars[i] - 2].distanceToHole < 10) {
                        tsc010 += 1
                        if (pars[i] >= scores[i]) {
                            sc010 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 10) && (holeShots[pars[i] - 2].distanceToHole < 20)) {
                        tsc1020 += 1
                        if (pars[i] >= scores[i]) {
                            sc1020 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 20) && (holeShots[pars[i] - 2].distanceToHole < 30)) {
                        tsc2030 += 1
                        if (pars[i] >= scores[i]) {
                            sc2030 += 1
                        }
                    }
                    if ((holeShots[pars[i] - 2].distanceToHole >= 30)) {
                        tsc30 += 1
                        if (pars[i] >= scores[i]) {
                            sc30 += 1
                        }
                    }
                }
            }
            /* Short Game Strokes Gained */
            for (let j = 0; j < holeShots.length; j++) {
                const shot = holeShots[j];
                let shott = rounding(shot.distanceToHole, shot.startingLie)
                if (shot.startingLie === "Fairway") {
                    /* Shot is holed out */
                    if (shot.distanceToHole < 10) {
                        if ((j + 1) === holeShots.length) {
                            sgF010 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF010 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsF010 += 1
                                pthF010 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 10) && (shot.distanceToHole < 25)) {
                        if ((j + 1) === holeShots.length) {
                            sgF1025 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF1025 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsF1025 += 1
                                pthF1025 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 25) && (shot.distanceToHole < 50)) {
                        if ((j + 1) === holeShots.length) {
                            sgF2550 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF2550 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsF2550 += 1
                                pthF2550 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 50) && (shot.distanceToHole < 75)) {
                        if ((j + 1) === holeShots.length) {
                            sgF5075 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF5075 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsF5075 += 1
                                pthF5075 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 75) && (shot.distanceToHole < 100)) {
                        if ((j + 1) === holeShots.length) {
                            sgF75100 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgF75100 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsF75100 += 1
                                pthF75100 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                }
                if (shot.startingLie === "Rough") {
                    /* Shot is holed out */
                    if (shot.distanceToHole < 10) {
                        if ((j + 1) === holeShots.length) {
                            sgR010 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR010 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsR010 += 1
                                pthR010 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 10) && (shot.distanceToHole < 25)) {
                        if ((j + 1) === holeShots.length) {
                            sgR1025 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR1025 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsR1025 += 1
                                pthR1025 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 25) && (shot.distanceToHole < 50)) {
                        if ((j + 1) === holeShots.length) {
                            sgR2550 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR2550 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsR2550 += 1
                                pthR2550 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 50) && (shot.distanceToHole < 75)) {
                        if ((j + 1) === holeShots.length) {
                            sgR5075 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR5075 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsR5075 += 1
                                pthR5075 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 75) && (shot.distanceToHole < 100)) {
                        if ((j + 1) === holeShots.length) {
                            sgR75100 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgR75100 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsR75100 += 1
                                pthR75100 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                }
                if (shot.startingLie === "Sand") {
                    /* Shot is holed out */
                    if (shot.distanceToHole < 10) {
                        if ((j + 1) === holeShots.length) {
                            sgS010 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS010 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsS010 += 1
                                pthS010 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 10) && (shot.distanceToHole < 25)) {
                        if ((j + 1) === holeShots.length) {
                            sgS1025 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS1025 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsS1025 += 1
                                pthS1025 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 25) && (shot.distanceToHole < 50)) {
                        if ((j + 1) === holeShots.length) {
                            sgS2550 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS2550 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsS2550 += 1
                                pthS2550 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 50) && (shot.distanceToHole < 75)) {
                        if ((j + 1) === holeShots.length) {
                            sgS5075 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS5075 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsS5075 += 1
                                pthS5075 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                    if ((shot.distanceToHole >= 75) && (shot.distanceToHole < 100)) {
                        if ((j + 1) === holeShots.length) {
                            sgS75100 += shott - 1
                        }
                        else {
                            let shots2 = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                            sgS75100 += shott - shots2 - 1
                            if (holeShots[j + 1].startingLie === "Green") {
                                shotsS75100 += 1
                                pthS75100 += holeShots[j + 1].distanceToHole
                            }
                        }
                    }
                }
            }
            /* SG Approach Total */
            for (let j = 0; j < holeShots.length; j++) {
                const shot = holeShots[j]
                if (shot.distanceToHole >= 100 && (shot.startingLie !== "Green" && shot.startingLie !== "Tee")) {
                    /* Below is assuming that the shot is holed out */
                    if (j + 1 === holeShots.length) {
                        sgApproach += rounding(shot.distanceToHole, shot.startingLie) - 1
                    }
                    else {
                        let secnd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let frst = rounding(shot.distanceToHole, shot.startingLie)
                        sgApproach += frst - secnd - 1
                    }
                }
                if (shot.startingLie === "Green") {
                    if (j + 1 === holeShots.length) {
                        sgPutting += rounding(shot.distanceToHole, shot.startingLie) - 1
                    }
                    else {
                        let secnd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let frst = rounding(shot.distanceToHole, shot.startingLie)
                        sgPutting += frst - secnd - 1
                    }
                }
                if ((shot.distanceToHole < 100) && (shot.startingLie !== "Green" && shot.startingLie !== "Tee")) {
                    /* Below is assuming that the shot is holed out */
                    if (j + 1 === holeShots.length) {
                        sgShortgame += rounding(shot.distanceToHole, shot.startingLie) - 1
                    }
                    else {
                        let secnd = rounding(holeShots[j + 1].distanceToHole, holeShots[j + 1].startingLie)
                        let frst = rounding(shot.distanceToHole, shot.startingLie)
                        sgShortgame += frst - secnd - 1
                    }
                }
            }

        }
        /* Setting States Overall */
        setSgApproach(sgApproach)
        setSgShortGame(sgShortgame)
        setSgPutting(sgPutting)

        /* Setting States Tee */
        setFairways(fairways[0] / fairways[1])
        setFairways4(fairways4[0] / fairways4[1])
        setFairways5(fairways5[0] / fairways5[1])

        setSgTee(sgTee)
        setSgTee4(sgTee4)
        setSgTee5(sgTee5)

        /* Setting State Approach */
        /* Prox to Hole */
        setPthF100125(pthF100125 / greenF100125)
        setPthF125150(pthF125150 / greenF125150)
        setPthF150175(pthF150175 / greenF150175)
        setPthF175200(pthF175200 / greenF175200)
        setPthF200225(pthF200225 / greenF200225)
        setPthF225250(pthF225250 / greenF225250)
        setPthF250(pthF250 / greenF250)

        setPthR100125(pthR100125 / greenR100125)
        setPthR125150(pthR125150 / greenR125150)
        setPthR150175(pthR150175 / greenR150175)
        setPthR175200(pthR175200 / greenR175200)
        setPthR200225(pthR200225 / greenR200225)
        setPthR225250(pthR225250 / greenR225250)
        setPthR250(pthR250 / greenR250)

        setPthS100125(pthS100125 / greenS100125)
        setPthS125150(pthS125150 / greenS125150)
        setPthS150175(pthS150175 / greenS150175)
        setPthS175200(pthS175200 / greenS175200)
        setPthS200225(pthS200225 / greenS200225)
        setPthS225250(pthS225250 / greenS225250)
        setPthS250(pthS250 / greenS250)

        /* % Hit */
        setPhgF100125(phgF100125 / shotsF100125)
        setPhgF125150(phgF125150 / shotsF125150)
        setPhgF150175(phgF150175 / shotsF150175)
        setPhgF175200(phgF175200 / shotsF175200)
        setPhgF200225(phgF200225 / shotsF200225)
        setPhgF225250(phgF225250 / shotsF225250)
        setPhgF250(phgF250 / shotsF250)

        setPhgR100125(phgR100125 / shotsR100125)
        setPhgR125150(phgR125150 / shotsR125150)
        setPhgR150175(phgR150175 / shotsR150175)
        setPhgR175200(phgR175200 / shotsR175200)
        setPhgR200225(phgR200225 / shotsR200225)
        setPhgR225250(phgR225250 / shotsR225250)
        setPhgR250(phgR250 / shotsR250)

        setPhgS100125(phgS100125 / shotsS100125)
        setPhgS125150(phgS125150 / shotsS125150)
        setPhgS150175(phgS150175 / shotsS150175)
        setPhgS175200(phgS175200 / shotsS175200)
        setPhgS200225(phgS200225 / shotsS200225)
        setPhgS225250(phgS225250 / shotsS225250)
        setPhgS250(phgS250 / shotsS250)

        /* Set Strokes Gained */
        setSgF100125(sgF100125)
        setSgF125150(sgF125150)
        setSgF150175(sgF150175)
        setSgF175200(sgF175200)
        setSgF200225(sgF200225)
        setSgF225250(sgF225250)
        setSgF250(sgF250)

        setSgR100125(sgR100125)
        setSgR125150(sgR125150)
        setSgR150175(sgR150175)
        setSgR175200(sgR175200)
        setSgR200225(sgR200225)
        setSgR225250(sgR225250)
        setSgR250(sgR250)

        setSgS100125(sgS100125)
        setSgS125150(sgS125150)
        setSgS150175(sgS150175)
        setSgS175200(sgS175200)
        setSgS200225(sgS200225)
        setSgS225250(sgS225250)
        setSgS250(sgS250)

        /* Setting Approach */
        setS010(s010 / ts010)
        setS1020(s1020 / ts1020)
        setS2030(s2030 / ts2030)
        setS30(s30 / ts30)

        setSc010(sc010 / tsc010)
        setSc1020(sc1020 / tsc1020)
        setSc2030(sc2030 / tsc2030)
        setSc30(sc30 / tsc30)

        /* Prox to Hole */
        setPthF010(pthF010 / shotsF010)
        setPthF1025(pthF1025 / shotsF1025)
        setPthF2550(pthF2550 / shotsF2550)
        setPthF5075(pthF5075 / shotsF5075)
        setPthF75100(pthF75100 / shotsF75100)

        setPthR010(pthR010 / shotsR010)
        setPthR1025(pthR1025 / shotsR1025)
        setPthR2550(pthR2550 / shotsR2550)
        setPthR5075(pthR5075 / shotsR5075)
        setPthR75100(pthR75100 / shotsR75100)

        setPthS010(pthS010 / shotsS010)
        setPthS1025(pthS1025 / shotsS1025)
        setPthS2550(pthS2550 / shotsS2550)
        setPthS5075(pthS5075 / shotsS5075)
        setPthS75100(pthS75100 / shotsS75100)


        setSgF010(sgF010)
        setSgF1025(sgF1025)
        setSgF2550(sgF2550)
        setSgF5075(sgF5075)
        setSgF75100(sgF75100)

        setSgR010(sgR010)
        setSgR1025(sgR1025)
        setSgR2550(sgR2550)
        setSgR5075(sgR5075)
        setSgR75100(sgR75100)

        setSgS010(sgS010)
        setSgS1025(sgS1025)
        setSgS2550(sgS2550)
        setSgS5075(sgS5075)
        setSgS75100(sgS75100)


        /* Setting Putts */
        setPpr(ppr)
        setDist(dist)
        setPpGir(ppGir/ppGircount)
        setOnePutt(onePutt / holes)
        setThreePutt(threePutt / holes)

        setSgp0to5(sgp0to5)
        setSgp5to10(sgp5to10)
        setSgp10to20(sgp10to20)
        setSgp20to50(sgp20to50)
        setSgp50to(sgp50to)

        setPerMade0to5(perMade0to5 / total0to5)
        setPerMade5to10(perMade5to10 / total5to10)
        setPerMade10to20(perMade10to20 / total10to20)
        setPerMade20to50(perMade20to50 / total20to50)
        setPerMade50to(perMade50to / total50to)

        setTp05(tp05 / totalp05)
        setTp510(tp510 / totalp510)
        setTp1020(tp1020 / totalp1020)
        setTp2050(tp2050 / totalp2050)
        setTp50(tp50 / totalp50)

        setThp05(thp05 / totalp05)
        setThp510(thp510 / totalp510)
        setThp1020(thp1020 / totalp1020)
        setThp2050(thp2050 / totalp2050)
        setThp50(thp50 / totalp50)

        /* Setting States Scoring */
        setGir3(gir3 / par3)
        setGir4(gir4 / par4)
        setGir5(gir5 / par5)

        setSa3(sa3 / par3)
        setSa4(sa4 / par4)
        setSa5(sa5 / par5)

        setBpr3(bpr3)
        setBpr4(bpr4)
        setBpr5(bpr5)

        setPpr3(ppr3)
        setPpr4(ppr4)
        setPpr5(ppr5)

        setBopr3(bopr3)
        setBopr4(bopr4)
        setBopr5(bopr5)
    }

    useEffect(() => {
        Algorithm(shots);
    }, [shots]);

    function countPars(pars) {
        let par3s = 0
        let par4s = 0
        let par5s = 0
        let i = 0
        while (i < holes) {
            if (pars[i] === 3) {
                par3s += 1
            }
            if (pars[i] === 4) {
                par4s += 1
            }
            if (pars[i] === 5) {
                par5s += 1
            }
            i += 1
        }
        setPar3s(par3s)
        setPar4s(par4s)
        setPar5s(par5s)
    }

    useEffect(() => {
        countPars(pars)
    }, [pars])

    if (back === true) {
        return <Navigate to="/dashboard" />
    }

    const data = {
        labels: ['SG Putting', 'SG Short Game', 'SG Approach', "SG Tee"],
        datasets: [
            {
                data: [sgPutting.toFixed(2), sgShortgame.toFixed(2), sgApproach.toFixed(2), sgTee.toFixed(2)],
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
            <Authnavbar />
            <div className="homepage-page">
                <div className="homepage-container">
                    <div className="new-round-header">
                        <h1>Add Round</h1>
                        <a style={{ textAlign: "right", color: "black", textDecoration: "none" }} className="click" onClick={() => handleExit()}><h1>{(part <= 2) ? "X" : "✔"}</h1></a>
                    </div>
                    <div className="nav">
                        <p onClick={() => setPart(1)} className={(part === 1) ? "par-selected" : ""}>Round Details</p>
                        <p onClick={() => nextPage()} className={(part === 2) ? "par-selected" : ""}>Add Shots</p>
                        <p onClick={() => nextPage2()} className={(part === 3) ? "par-selected" : ""}>Review Statistics</p>
                    </div>
                    <div className="scorecard-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    {Array.from({ length: holes }, (_, i) => (
                                        <>
                                            <th key={i} className={hole === (i + 1) ? "par-selected click" : "click"} onClick={() =>holeChange2(i+1, part)}>{i + 1}</th>
                                            {(holes === 18 && i === 8) && <th>OUT</th>}
                                        </>
                                    ))}
                                    {holes === 18 && <th>IN</th>}
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {['Par', 'Score'].map((label, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td>{label}</td>
                                        {Array.from({ length: holes }, (_, i) => (
                                            <>
                                                <td key={i} className={hole === (i + 1) ? "par-selected click" : "click"} onClick={() => holeChange2(i+1, part)}>{rowIndex === 0 ? pars[i] : scores[i]}</td>
                                                {holes === 18 && i === 8 && (
                                                    <td>{rowIndex === 0 ? frontPar : frontScore}</td>
                                                )}
                                            </>
                                        ))}
                                        {holes === 18 && (
                                            <td>{rowIndex === 0 ? backPar : backScore}</td>
                                        )}
                                        <td>{rowIndex === 0 ? (holes === 18 ? totalPar : frontPar) : (holes === 18 ? totalScore : frontScore)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {(part === 1) && (
                        <div>
                            <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Add Round Details</h2>
                            <div className="new-round-info">
                                <h4>Select Number of Holes Played</h4>
                                <div className="hole-container">
                                    <p onClick={() => setHoles(9)} className={(holes === 9) ? "selected click" : "click"}>9 Holes</p>
                                    <p onClick={() => setHoles(18)} className={(holes === 18) ? "selected click" : "click"}>18 Holes</p>
                                </div>
                                <div className="new-round-info-grid">
                                    <div>
                                        <h4>Course Name</h4>
                                        <input onChange={(event) => setCourseName(event.target.value)} value={courseName} className={(errors.courseName) ? "red" : ""} />
                                        <p className="error">{errors.courseName}</p>
                                    </div>
                                    <div>
                                        <h4>Date Played</h4>
                                        <input type="date" onChange={(event) => setDate(event.target.value)} value={date} className={(errors.date) ? "red" : ""} />
                                        <p className="error">{errors.date}</p>
                                    </div>
                                </div>
                                <div className="new-round-info-bottom">
                                    <p></p>
                                    <p style={{ textAlign: "right" }} className="click" onClick={() => { nextPage(); setHole(1) }}>Enter Shots &rarr;</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {(part === 2) && (
                        <>
                            <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Add Shots</h2>
                            <div className="hole-container-2">
                                <h3>Hole {hole}</h3>
                                <h4>Select Par</h4>
                                <div className="par-selector">
                                    <p onClick={() => setParForHole(hole - 1, 3)} className={(pars[hole - 1] === 3) ? "par-selected click" : "click"}>Par 3</p>
                                    <p onClick={() => setParForHole(hole - 1, 4)} className={(pars[hole - 1] === 4) ? "par-selected click" : "click"}>Par 4</p>
                                    <p onClick={() => setParForHole(hole - 1, 5)} className={(pars[hole - 1] === 5) ? "par-selected click" : "click"}>Par 5</p>
                                </div>
                                <h4>Add Shots</h4>
                                <div className="shot-title-container">
                                    <p>Starting Lie <p className="shot-title-container-p" onClick={() => helpstartinglie()}>?</p></p>
                                    <p>Distance to Hole <p className="shot-title-container-p" onClick={() => helpdistance()}>?</p></p>
                                </div>
                                {Array.from({ length: scores[hole - 1] }).map((_, index) => (
                                    <div className="add-shots-grid-real">
                                        <select onChange={(event) => changeLie(event.target.value, index, hole - 1)} value={shots[hole - 1][index].startingLie}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" onChange={(event) => changeDistance(event.target.value, index, hole - 1)} value={shots[hole - 1][index].distanceToHole || ''} />
                                    </div>))}
                                <div className="add-shot-container">
                                    <p className="click" onClick={() => addShot(hole)}>Add Shot</p>
                                    <p className="click" onClick={() => removeShot(hole)}>Delete Shot</p>
                                </div>
                                <div className="change-hole-container">
                                    {(hole > 1) ? (<p onClick={() => setHole(hole - 1)} className="click">&larr;   Previous Hole</p>) : (<p></p>)}
                                    {(hole < holes) ? <p onClick={() => setHoleChange(hole)} style={{ textAlign: "right" }} className="click">Next Hole   &rarr;</p> : <p style={{ textAlign: "right" }} onClick={() => { setHole(0); setPart(3); setDone(true) }} className="click">Finish Round  &rarr;</p>}
                                </div>
                            </div>
                        </>
                    )}
                    {(part === 3) && (
                        <>
                            <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Round Analysis</h2>
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
                                                <td style={{ textAlign: "center" }}>{sgPutting.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgPutting > 0.00) ? "green" : ((sgPutting === 0)? "" : "red")}>{sgPutting.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Short Game</td>
                                                <td style={{ textAlign: "center" }}>{sgShortgame.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgShortgame > 0.00) ? "green" : ((sgShortgame === 0)? "" : "red")}>{sgShortgame.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Approach</td>
                                                <td style={{ textAlign: "center" }}>{sgApproach.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgApproach > 0.00) ? "green" : ((sgApproach === 0)? "" : "red")}>{sgApproach.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>SG Tee</td>
                                                <td style={{ textAlign: "center" }}>{sgTee.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgTee > 0.00) ? "green" : ((sgTee === 0)? "" : "red")}>{sgTee.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(fairways) ? "N/A" : (fairways * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5857 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN(fairways) ? "grey" : (fairways - 0.5857 > 0 ? "green" : "red")}>
                                                    {isNaN(fairways) ? "N/A" : ((fairways - 0.5857) * 100).toFixed(2) + "%"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(fairways4) ? "N/A" : (fairways4 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5852 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN(fairways4) ? "grey" : (fairways4 - 0.5852 > 0 ? "green" : "red")}>
                                                    {isNaN(fairways4) ? "N/A" : ((fairways4 - 0.5852) * 100).toFixed(2) + "%"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(fairways5) ? "N/A" : (fairways5 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5862 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={isNaN(fairways5) ? "grey" : (fairways5 - 0.5862 > 0 ? "green" : "red")}>
                                                    {isNaN(fairways5) ? "N/A" : ((fairways5 - 0.5862) * 100).toFixed(2) + "%"}
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
                                                <td style={{ textAlign: "center" }}>{isNaN(sgTee) ? "N/A" : sgTee.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(sgTee === 0 ? "grey" : sgTee > 0 ? "green" : "red")}> {isNaN(sgTee) ? "N/A" : sgTee.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sgTee4) ? "N/A" : sgTee4.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(sgTee4 === 0 ? "grey" : sgTee4 > 0 ? "green" : "red")}> {isNaN(sgTee4) ? "N/A" : sgTee4.toFixed(2)}</td>

                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sgTee5) ? "N/A" : sgTee5.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(sgTee5 === 0 ? "grey" : sgTee5 > 0 ? "green" : "red")}> {isNaN(sgTee5) ? "N/A" : sgTee5.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{ppr}</td>
                                                <td style={{ textAlign: "center" }}>{(holes === 18) ? 28.96 : 14.48}</td>
                                                <td style={{ textAlign: "center" }} className={(holes === 18) ? ((28.96 - ppr > 0) ? "green" : "red") : ((14.48 - ppr > 0) ? "green" : "red")}>{(holes === 18) ? (28.96 - ppr).toFixed(2) : (14.48 - ppr).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Putts Per GIR</td>
                                                <td style={{ textAlign: "center" }}>{ppGir.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>1.8</td>
                                                <td style={{ textAlign: "center" }} className={(1.8 > ppGir) ? "green" : ( isNaN(ppGir)||(1.8 === ppGir) ? "" : "red")}>{(1.8 - ppGir).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Distance Putts <br />Made per Round</td>
                                                <td style={{ textAlign: "center" }}>{dist} Feet</td>
                                                <td style={{ textAlign: "center" }}>{((holes === 18) ? 72.8 : 72.8/2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(dist > ((holes === 18) ? 72.8 : 72.8/2)) ? "green" : ((dist === ((holes === 18) ? 72.8 : 72.8/2)) ? "" : "red")}>{(dist - ((holes === 18) ? 72.8 : 72.8/2)).toFixed(2)} Feet</td>
                                            </tr>
                                            <tr>
                                                <td>One Putt %</td>
                                                <td style={{ textAlign: "center" }}>{(onePutt * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>38.89%</td>
                                                <td style={{ textAlign: "center" }} className={((onePutt.toFixed(4) - 0.3889) > 0) ? "green" : ((onePutt.toFixed(4) - 0.3889) === 0) ? "" : "red"}>{((onePutt.toFixed(4) - 0.3889) * 100).toFixed(2)}%</td>
                                            </tr>
                                            <tr>
                                                <td>Threee Putt %</td>
                                                <td style={{ textAlign: "center" }}>{(threePutt * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>3.02%</td>
                                                <td style={{ textAlign: "center" }} className={((0.0302 - threePutt.toFixed(4)) > 0) ? "green" : ((0.0302 - threePutt.toFixed(4)) === 0) ? "" : "red"}>{((0.0302 - threePutt.toFixed(4)) * 100).toFixed(2)}%</td>
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
                                                <td style={{ textAlign: "center" }}>{sgp0to5.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={(sgp0to5 > 0) ? "green" : (sgp0to5 === 0) ? "" : "red"}>{sgp0to5.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{sgp5to10.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={(sgp5to10 > 0) ? "green" : (sgp5to10 === 0) ? "" : "red"}>{sgp5to10.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{sgp10to20.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={(sgp10to20 > 0) ? "green" : (sgp10to20 === 0) ? "" : "red"}>{sgp10to20.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{sgp20to50.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={(sgp20to50 > 0) ? "green" : (sgp20to50 === 0) ? "" : "red"}>{sgp20to50.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{sgp50to.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0</td>
                                                <td style={{ textAlign: "center" }} className={(sgp50to > 0) ? "green" : (sgp50to === 0) ? "" : "red"}>{sgp50to.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(perMade0to5) ? 'N/A' : (perMade0to5 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.88 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN(perMade0to5) || perMade0to5 === 0.88) ? "" : ((perMade0to5 > 0.88) ? "green" : "red")}>{isNaN(perMade0to5) ? 'N/A' : ((perMade0to5 - 0.88) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(perMade5to10) ? 'N/A' : (perMade5to10 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.585 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN(perMade5to10) || perMade5to10 === 0.585) ? "" : ((perMade5to10 > 0.585) ? "green" : "red")}>{isNaN(perMade5to10) ? 'N/A' : ((perMade5to10 - 0.585) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(perMade10to20) ? 'N/A' : (perMade10to20 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.275 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN(perMade10to20) || perMade10to20 === 0.275) ? "" : ((perMade10to20 > 0.275) ? "green" : "red")}>{isNaN(perMade10to20) ? 'N/A' : ((perMade10to20 - 0.275) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(perMade20to50) ? 'N/A' : (perMade20to50 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.09 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN(perMade20to50) || perMade20to50 === 0.09) ? "" : ((perMade20to50 > 0.09) ? "green" : "red")}>{isNaN(perMade20to50) ? 'N/A' : ((perMade20to50 - 0.09) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(perMade50to) ? 'N/A' : (perMade50to * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.02 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(isNaN(perMade50to) || perMade50to === 0.02) ? "" : ((perMade50to > 0.02) ? "green" : "red")}>{isNaN(perMade50to) ? 'N/A' : ((perMade50to - 0.02) * 100).toFixed(2) + '%'}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(tp05) ? 'N/A' : (tp05 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.12 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(tp05 < 0.12) ? "red" : (isNaN(tp05) || tp05 === 0.12) ? "" : "green"}>{isNaN(tp05) ? 'N/A' : ((tp05 - 0.12) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(tp510) ? 'N/A' : (tp510 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.4095 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(tp510 < 0.4095) ? "red" : (isNaN(tp510) || tp510 === 0.4095) ? "" : "green"}>{isNaN(tp510) ? 'N/A' : ((tp510 - 0.4095) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(tp1020) ? 'N/A' : (tp1020 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{((0.7115) * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(tp1020 < 0.7115) ? "red" : (isNaN(tp1020) || tp1020 === 0.7115) ? "" : "green"}>{isNaN(tp1020) ? 'N/A' : ((tp1020 - 0.7115) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(tp2050) ? 'N/A' : (tp2050 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.815 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(tp2050 < 0.815) ? "red" : (isNaN(tp2050) || tp2050 === 0.815) ? "" : "green"}>{isNaN(tp2050) ? 'N/A' : ((tp2050 - 0.815) * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(tp50) ? 'N/A' : (tp50 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.69 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(tp50 < 0.69) ? "red" : (isNaN(tp50) || tp50 === 0.69) ? "" : "green"}>{isNaN(tp50) ? 'N/A' : ((tp50 - 0.69) * 100).toFixed(2) + '%'}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(thp05) ? 'N/A' : (thp05 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(thp05 > 0) ? "red" : ""}>{isNaN(thp05) ? 'N/A' : (-thp05 * 100).toFixed(2) + '%'}</td>
                                            </tr>
                                            <tr>
                                                <td>5-10 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(thp510) ? 'N/A' : (thp510 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.0055 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(thp510 > 0.0055) ? "red" : (isNaN(thp510) || thp510 === 0.0055) ? "" : "green"}>{isNaN(thp510) ? "N/A" : ((0.0055 - thp510) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(thp1020) ? 'N/A' : (thp1020 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.0135 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(thp1020 > 0.0135) ? "red" : (isNaN(thp1020) || thp1020 === 0.0135) ? "" : "green"}>{isNaN(thp1020) ? "N/A" : ((0.0135 - thp1020) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-50 Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(thp2050) ? 'N/A' : (thp2050 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.095 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(thp2050 > 0.095) ? "red" : (isNaN(thp2050) || thp2050 === 0.095) ? "" : "green"}>{isNaN(thp2050) ? "N/A" : ((0.095 - thp2050) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>50+ Feet</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(thp50) ? 'N/A' : (thp50 * 100).toFixed(2) + '%'}</td>
                                                <td style={{ textAlign: "center" }}>{(0.29 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(thp50 > 0.29) ? "red" : (isNaN(thp50) || thp50 === 0.29) ? "" : "green"}>{isNaN(thp50) ? "N/A" : ((0.29 - thp50) * 100).toFixed(2) + "%"}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF100125) ? 'N/A' : pthF100125 + ' Feet'}</td>
                                                <td style={{ textAlign: "center" }}>{20.00} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(( 20 - pthF100125) > 0) ? "green" : ((isNaN(pthF100125) || pthF100125 === 20) ? "" : "red")}>{isNaN(pthF100125) ? 'N/A' : (20 - pthF100125).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF125150) ? "N/A" : pthF125150 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{23.30} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((23.3 - pthF125150) > 0) ? "green" : ((isNaN(pthF125150) || pthF125150 === 23.3) ? "" : "red")}>{isNaN(pthF125150) ? "N/A" : (23.3 - pthF125150).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF150175) ? "N/A" : pthF150175 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{28.55} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((28.55 - pthF150175) > 0) ? "green" : ((isNaN(pthF150175) || pthF150175 === 28.55) ? "" : "red")}>{isNaN(pthF150175) ? "N/A" : ( 28.55 - pthF150175).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF175200) ? "N/A" : pthF175200 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{36.65} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((36.65 - pthF175200) > 0) ? "green" : ((isNaN(pthF175200) || pthF175200 === 36.65) ? "" : "red")}>{isNaN(pthF175200) ? "N/A" : ( 36.65 - pthF175200).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF200225) ? "N/A" : pthF200225 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{49.90} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((49.90 - pthF200225) > 0) ? "green" : ((isNaN(pthF200225) || pthF200225 === 49.90) ? "" : "red")}>{isNaN(pthF200225) ? "N/A" : (49.90 - pthF200225).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF225250) ? "N/A" : pthF225250 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{71.75} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((71.75 - pthF225250) > 0) ? "green" : ((isNaN(pthF225250) || pthF225250 === 71.75) ? "" : "red")}>{isNaN(pthF225250) ? "N/A" : (71.75 - pthF225250).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF250) ? "N/A" : pthF250 + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{85.1} Feet</td>
                                                <td style={{ textAlign: "center" }} className={((85.1 - pthF250) > 0) ? "green" : ((isNaN(pthF250) || pthF250 === 85.1) ? "" : "red")}>{isNaN(pthF250) ? "N/A" : (85.1 - pthF250).toFixed(2) + " Feet"}</td>
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
                                                <td style={{ textAlign: "center" }}>{pthR100125} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{pthR125150} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{pthR150175} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{pthR175200} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{pthR200225} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{pthR225250} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{pthR250} Feet</td>
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
                                                <td style={{ textAlign: "center" }}>{pthS100125} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{pthS125150} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{pthS150175} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{pthS175200} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{pthS200225} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{pthS225250} Feet</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{pthS250} Feet</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF100125) ? "N/A" : (phgF100125 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.8195*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF100125 > 0.8195) ? "green" : ((phgF100125 === 0.8195 || isNaN(phgF100125)) ? "" : "red")}>{isNaN(phgF100125) ? "N/A" : ((phgF100125-0.8195) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF125150) ? "N/A" : (phgF125150 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.7815*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF125150 > 0.7815) ? "green" : ((phgF125150 === 0.7815 || isNaN(phgF125150)) ? "" : "red")}>{isNaN(phgF125150) ? "N/A" : ((phgF125150-0.7815) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF150175) ? "N/A" : (phgF150175 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.714*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF150175 > 0.714) ? "green" : ((phgF150175 === 0.714 || isNaN(phgF150175)) ? "" : "red")}>{isNaN(phgF150175) ? "N/A" : ((phgF150175-0.714) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF175200) ? "N/A" : (phgF175200 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.602*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF175200 > 0.602) ? "green" : ((phgF175200 === 0.602 || isNaN(phgF175200)) ? "" : "red")}>{isNaN(phgF175200) ? "N/A" : ((phgF175200-0.602) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF200225) ? "N/A" : (phgF200225 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.439*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF200225 > 0.439) ? "green" : ((phgF200225 === 0.439 || isNaN(phgF200225)) ? "" : "red")}>{isNaN(phgF200225) ? "N/A" : ((phgF200225-0.439) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF225250) ? "N/A" : (phgF225250 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.2715*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF225250 > 0.2715) ? "green" : ((phgF225250 === 0.2715 || isNaN(phgF225250)) ? "" : "red")}>{isNaN(phgF225250) ? "N/A" : ((phgF225250-0.2715) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(phgF250) ? "N/A" : (phgF250 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.202*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(phgF250 > 0.202) ? "green" : ((phgF250 === 0.202 || isNaN(phgF250)) ? "" : "red")}>{isNaN(phgF250) ? "N/A" : ((phgF250-0.202) * 100).toFixed(2) + "%"}</td>
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
                                                <td style={{ textAlign: "center" }}>{(phgR100125 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(phgR125150 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(phgR150175 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(phgR175200 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(phgR200225 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(phgR225250 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(phgR250 * 100).toFixed(2)}%</td>
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
                                                <td style={{ textAlign: "center" }}>{(phgS100125 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{(phgS125150 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{(phgS150175 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{(phgS175200 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{(phgS200225 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{(phgS225250 * 100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{(phgS250 * 100).toFixed(2)}%</td>
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
                                                <td style={{ textAlign: "center" }}>{sgF100125.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF100125 > 0) ? "green" : ((sgF100125 === 0) ? "" : "red")}>{sgF100125.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{sgF125150.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF125150 > 0) ? "green" : ((sgF125150 === 0) ? "" : "red")}>{sgF125150.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{sgF150175.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF150175 > 0) ? "green" : ((sgF150175 === 0) ? "" : "red")}>{sgF150175.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{sgF175200.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF175200 > 0) ? "green" : ((sgF175200 === 0) ? "" : "red")}>{sgF175200.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{sgF200225.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF200225 > 0) ? "green" : ((sgF200225 === 0) ? "" : "red")}>{sgF200225.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{sgF225250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF225250 > 0) ? "green" : ((sgF225250 === 0) ? "" : "red")}>{sgF225250.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{sgF250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF250 > 0) ? "green" : ((sgF250 === 0) ? "" : "red")}>{sgF250.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{sgR100125.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR100125 > 0) ? "green" : ((sgR100125 === 0) ? "" : "red")}>{sgR100125.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{sgR125150.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR125150 > 0) ? "green" : ((sgR125150 === 0) ? "" : "red")}>{sgR125150.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{sgR150175.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR150175 > 0) ? "green" : ((sgR150175 === 0) ? "" : "red")}>{sgR150175.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{sgR175200.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR175200 > 0) ? "green" : ((sgR175200 === 0) ? "" : "red")}>{sgR175200.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{sgR200225.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR200225 > 0) ? "green" : ((sgR200225 === 0) ? "" : "red")}>{sgR200225.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{sgR225250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR225250 > 0) ? "green" : ((sgR225250 === 0) ? "" : "red")}>{sgR225250.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{sgR250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR250 > 0) ? "green" : ((sgR250 === 0) ? "" : "red")}>{sgR250.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{sgS100125.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS100125 > 0) ? "N/A" : ((sgS100125 === 0) ? "" : "red")}>{sgS100125.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>125-150</td>
                                                <td style={{ textAlign: "center" }}>{sgS125150.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS125150 > 0) ? "N/A" : ((sgS125150 === 0) ? "" : "red")}>{sgS125150.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>150-175</td>
                                                <td style={{ textAlign: "center" }}>{sgS150175.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS150175 > 0) ? "N/A" : ((sgS150175 === 0) ? "" : "red")}>{sgS150175.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>175-200</td>
                                                <td style={{ textAlign: "center" }}>{sgS175200.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS175200 > 0) ? "N/A" : ((sgS175200 === 0) ? "" : "red")}>{sgS175200.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>200-225</td>
                                                <td style={{ textAlign: "center" }}>{sgS200225.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS200225 > 0) ? "N/A" : ((sgS200225 === 0) ? "" : "red")}>{sgS200225.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>225-250</td>
                                                <td style={{ textAlign: "center" }}>{sgS225250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS225250 > 0) ? "N/A" : ((sgS225250 === 0) ? "" : "red")}>{sgS225250.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>250+</td>
                                                <td style={{ textAlign: "center" }}>{sgS250.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS250 > 0) ? "N/A" : ((sgS250 === 0) ? "" : "red")}>{sgS250.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(s010) ? "N/A" : (s010 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(s010 > 0.5849) ? "green" : ((isNaN(s010) || s010 === 0.5849) ? "" : "red")}>{isNaN(s010)? "N/A" : ((s010 - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(s1020)? "N/A" : (s1020 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(s1020 > 0.5849) ? "green" : ((isNaN(s1020) || s1020 === 0.5849) ? "" : "red")}>{isNaN(s1020)? "N/A" : ((s1020 - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-30</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(s2030) ? "N/A" : (s2030 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(s2030 > 0.5849) ? "green" : ((isNaN(s2030) || s2030 === 0.5849) ? "" : "red")}>{isNaN(s2030)? "N/A" : ((s2030 - 0.5849) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>30 +</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(s30) ? "N/A" : (s30 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.5849*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(s30 > 0.5849) ? "green" : ((isNaN(s30) || s30 === 0.5849) ? "" : "red")}>{isNaN(s30)? "N/A" : ((s30 - 0.5849) * 100).toFixed(2) + "%"}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(sc010)? "N/A" : (sc010 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(sc010 > 0.51)? "green" : ((isNaN(sc010) || sc010 === 0.51) ? "" : "red")}>{isNaN(sc010)? "N/A" : ((sc010-0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-20</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sc1020)? "N/A" : (sc1020 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(sc1020 > 0.51)? "green" : ((isNaN(sc1020) || sc1020 === 0.51) ? "" : "red")}>{isNaN(sc1020)? "N/A" : ((sc1020-0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>20-30</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sc2030)? "N/A" : (sc2030 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(sc2030 > 0.51)? "green" : ((isNaN(sc2030) || sc2030 === 0.51) ? "" : "red")}>{isNaN(sc2030)? "N/A" : ((sc2030-0.51) * 100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>30 +</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sc30)? "N/A" : (sc30 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.51*100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }} className={(sc30 > 0.51)? "green" : ((isNaN(sc30) || sc30 === 0.51) ? "" : "red")}>{isNaN(sc30)? "N/A" : ((sc30-0.51) * 100).toFixed(2) + "%"}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF010)? "N/A" : pthF010.toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(2.4).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(pthF1025 < 2.4) ? "green" : ((isNaN(pthF010) || pthF010 === 2.4) ? "" : "red")}>{isNaN(pthF010)? "N/A" : (2.4 - pthF010).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF1025)? "N/A" : pthF1025.toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(7.25).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(pthF1025 < 7.25) ? "green" : ((isNaN(pthF1025) || pthF1025 === 7.25) ? "" : "red")}>{isNaN(pthF1025)? "N/A" : (7.25 - pthF1025).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF2550)? "N/A" : pthF2550.toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(12.55).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(pthF2550 < 12.55) ? "green" : ((isNaN(pthF2550) || pthF2550 === 12.55) ? "" : "red")}>{isNaN(pthF2550)? "N/A" : (12.55 - pthF2550).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF5075)? "N/A" : pthF5075.toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(16.55).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(pthF5075 < 16.55) ? "green" : ((isNaN(pthF5075) || pthF5075 === 16.55) ? "" : "red")}>{isNaN(pthF5075)? "N/A" : (16.55 - pthF5075).toFixed(2) + " Feet"}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(pthF75100)? "N/A" : pthF75100.toFixed(2) + " Feet"}</td>
                                                <td style={{ textAlign: "center" }}>{(17.7).toFixed(2)} Feet</td>
                                                <td style={{ textAlign: "center" }} className={(pthF75100 < 17.7) ? "green" : ((isNaN(pthF75100) || pthF75100 === 17.7) ? "" : "red")}>{isNaN(pthF75100)? "N/A" : (17.7 - pthF75100).toFixed(2) + " Feet"}</td>
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
                                                <td style={{ textAlign: "center" }}>{pthR010}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{pthR1025}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{pthR2550}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{pthR5075}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{pthR75100}</td>
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
                                                <td style={{ textAlign: "center" }}>{pthS010}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{pthS1025}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{pthS2550}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{pthS5075}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{pthS75100}</td>
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
                                                <td style={{ textAlign: "center" }}>{sgF010.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF010 > 0) ? "green" : ((sgF010 === 0) ? "" : "red")}>{sgF010.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{sgF1025.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF1025 > 0) ? "green" : ((sgF1025 === 0) ? "" : "red")}>{sgF1025.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{sgF2550.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF2550 > 0) ? "green" : ((sgF2550 === 0) ? "" : "red")}>{sgF2550.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{sgF5075.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF5075 > 0) ? "green" : ((sgF5075 === 0) ? "" : "red")}>{sgF5075.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{sgF75100.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgF75100 > 0) ? "green" : ((sgF75100 === 0) ? "" : "red")}>{sgF75100.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{sgR010.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR010 > 0) ? "green" : ((sgR010 === 0) ? "" : "red")}>{sgR010.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{sgR1025.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR1025 > 0) ? "green" : ((sgR1025 === 0) ? "" : "red")}>{sgR1025.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{sgR2550.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR2550 > 0) ? "green" : ((sgR2550 === 0) ? "" : "red")}>{sgR2550.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{sgR5075.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR5075 > 0) ? "green" : ((sgR5075 === 0) ? "" : "red")}>{sgR5075.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{sgR75100.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgR75100 > 0) ? "green" : ((sgR75100 === 0) ? "" : "red")}>{sgR75100.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{sgS010.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS010 > 0) ? "green" : ((sgS010 === 0) ? "" : "red")}>{sgS010.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>10-25</td>
                                                <td style={{ textAlign: "center" }}>{sgS1025.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS1025 > 0) ? "green" : ((sgS1025 === 0) ? "" : "red")}>{sgS1025.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>25-50</td>
                                                <td style={{ textAlign: "center" }}>{sgS2550.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS2550 > 0) ? "green" : ((sgS2550 === 0) ? "" : "red")}>{sgS2550.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>50-75</td>
                                                <td style={{ textAlign: "center" }}>{sgS5075.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS5075 > 0) ? "green" : ((sgS5075 === 0) ? "" : "red")}>{sgS5075.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>75-100</td>
                                                <td style={{ textAlign: "center" }}>{sgS75100.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>0.00</td>
                                                <td style={{ textAlign: "center" }} className={(sgS75100 > 0) ? "green" : ((sgS75100 === 0) ? "" : "red")}>{sgS75100.toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(gir3) ? "N/A" : (gir3 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630*100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(gir3 > 0.6630) ? "green" : ((gir3 === 0.6630 || isNaN(gir3)) ? "" : "red")}>{isNaN(gir3) ? "N/A" : ((gir3 - 0.6630)*100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(gir4) ? "N/A" : (gir4 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630*100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(gir4 > 0.6630) ? "green" : ((gir4 === 0.6630 || isNaN(gir4)) ? "" : "red")}>{isNaN(gir4) ? "N/A" : ((gir4 - 0.6630)*100).toFixed(2) + "%"}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(gir5) ? "N/A" : (gir5 * 100).toFixed(2) + "%"}</td>
                                                <td style={{ textAlign: "center" }}>{(0.6630*100).toFixed(2)}%</td>
                                                <td style={{ textAlign: "center" }} className={(gir5 > 0.6630) ? "green" : ((gir5 === 0.6630 || isNaN(gir5)) ? "" : "red")}>{isNaN(gir5) ? "N/A" : ((gir5 - 0.6630)*100).toFixed(2) + "%"}</td>
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
                                                <td style={{ textAlign: "center" }}>{isNaN(sa3) ? "N/A" : sa3.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>3.06</td>
                                                <td style={{ textAlign: "center" }} className={(sa3 < 3.06) ? "green" : ((sa3 === 3.06 || isNaN(sa3)) ? "" : "red")}>{isNaN(sa3) ? "N/A" : (3.06-sa3).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sa4) ? "N/A" : sa4.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>4.04</td>
                                                <td style={{ textAlign: "center" }} className={(sa4 < 4.04) ? "green" : ((sa4 === 4.04 || isNaN(sa4)) ? "" : "red")}>{isNaN(sa4) ? "N/A" : (4.04-sa4).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{isNaN(sa5) ? "N/A" : sa5.toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }}>4.64</td>
                                                <td style={{ textAlign: "center" }} className={(sa5 < 4.64) ? "green" : ((sa5 === 4.64 || isNaN(sa5)) ? "" : "red")}>{isNaN(sa5) ? "N/A" : (4.64-sa5).toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{bpr3}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65/18)*par3s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bpr3 > ((3.65/18)*par3s)) ? "green" : (((par3s === 0) || (bpr3 === ((3.65/18)*par3s))) ? "" : "red")}>{(bpr3 - ((3.65/18)*par3s)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{bpr4}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65/18)*par4s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bpr4 > ((3.65/18)*par4s)) ? "green" : (((par4s === 0) || (bpr4 === ((3.65/18)*par4s))) ? "" : "red")}>{(bpr4 - ((3.65/18)*par4s)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{bpr5}</td>
                                                <td style={{ textAlign: "center" }}>{((3.65/18)*par5s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bpr5 > ((3.65/18)*par5s)) ? "green" : (((par5s === 0) || (bpr5 === ((3.65/18)*par5s))) ? "" : "red")}>{(bpr5 - ((3.65/18)*par5s)).toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{ppr3}</td>
                                                <td style={{ textAlign: "center" }}>{((1-(2.66/18))*par3s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(ppr3 > ((1-(2.66/18))*par3s)) ? "green" : ((par3s === 0) ? "" : "red")}>{(ppr3- ((1-(2.66/18))*par3s)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{ppr4}</td>
                                                <td style={{ textAlign: "center" }}>{((1-(2.66/18))*par4s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(ppr4 > ((1-(2.66/18))*par4s)) ? "green" : ((par4s === 0) ? "" : "red")}>{(ppr4- ((1-(2.66/18))*par4s)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{ppr5}</td>
                                                <td style={{ textAlign: "center" }}>{((1-(2.66/18))*par5s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(ppr5 > ((1-(2.66/18))*par5s)) ? "green" : ((par5s === 0) ? "" : "red")}>{(ppr3 - ((1-(2.66/18))*par3s)).toFixed(2)}</td>
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
                                                <td style={{ textAlign: "center" }}>{bopr3}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66/18)*par3s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bopr3 < ((2.66/18)*par3s)) ? "green" : (((bopr3 === ((2.66/18)*par3s)) || (par3s === 0)) ? "" : "red")}>{(((2.66/18)*par3s) - bopr3).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{bopr4}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66/18)*par4s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bopr4 < ((2.66/18)*par4s)) ? "green" : (((bopr4 === ((2.66/18)*par4s)) || (par4s === 0)) ? "" : "red")}>{(((2.66/18)*par4s) - bopr4).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{bopr5}</td>
                                                <td style={{ textAlign: "center" }}>{((2.66/18)*par5s).toFixed(2)}</td>
                                                <td style={{ textAlign: "center" }} className={(bopr5 < ((2.66/18)*par5s)) ? "green" : (((bopr5 === ((2.66/18)*par5s)) || (par5s === 0)) ? "" : "red")}>{(((2.66/18)*par5s) - bopr5).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}