import { useRef, useState, useEffect } from 'react'
import '../../Styles/newround.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleQuestion, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



export default function Newround() {
    {/*General Form Logic */ }
    const [page, setPage] = useState(3)

    {/*First part Form Logic */ }
    const [date, setDate] = useState("")
    const [holes, setHoles] = useState("")
    const [course, setCourse] = useState("")

    const [error, setError] = useState("")
    const [formValidated, setFormValidated] = useState(false)

    {/* Setting Part 1 form states */ }
    function handleChangeDate(event) {
        setDate(event.target.value)
    }
    function handleChangeHoles(event) {
        setHoles(parseInt(event.target.value))
    }
    function handleCourseChange(event) {
        setCourse(event.target.value)
    }

    {/* Handle Submit of the first form */ }
    function handlesubmit1(event) {
        event.preventDefault()
        if (date.length === 0) {
            setError("Please enter a valid Date")
        }
        else if (holes.length === 0) {
            setError("Please select the number of holes that you played")
        }
        else if (course.length === 0) {
            setError("Please enter a valid golf course")
        }
        else {
            setFormValidated(true)
        }
    }

    useEffect(() => {
        if (formValidated) {
            setPage(2);
        }
    }, [formValidated]);


    useEffect(() => {
        if (error) {
            alert(error)
            setError("")
        }
    }, [error])

    {/* Second Part States */ }

    const [currenthole, setCurrenthole] = useState(1)

    {/* Setting Par for each Hole */ }
    const [onepar, setonepar] = useState(4)
    const [twopar, settwopar] = useState(4)
    const [threepar, setthreepar] = useState(4)
    const [fourpar, setfourpar] = useState(4)
    const [fivepar, setfivepar] = useState(4)
    const [sixpar, setsixpar] = useState(4)
    const [sevenpar, setsevenpar] = useState(4)
    const [eightpar, seteightpar] = useState(4)
    const [ninepar, setninepar] = useState(4)
    const [tenpar, settenpar] = useState(4)
    const [elevenpar, setelevenpar] = useState(4)
    const [twelvepar, settwelvepar] = useState(4)
    const [thirteenpar, setthirteenpar] = useState(4)
    const [fourteenpar, setfourteenpar] = useState(4)
    const [fifteenpar, setfifteenpar] = useState(4)
    const [sixteenpar, setsixteenpar] = useState(4)
    const [seventeenpar, setseventeenpar] = useState(4)
    const [eighteenpar, seteighteenpar] = useState(4)

    {/* Calculations for total par */ }
    const frontpar = onepar + twopar + threepar + fourpar + fivepar + sixpar + sevenpar + eightpar + ninepar
    const backpar = tenpar + elevenpar + twelvepar + thirteenpar + fourteenpar + fifteenpar + sixteenpar + seventeenpar + eighteenpar
    const totalpar = frontpar + backpar

    {/*Setting the states for each score for each hole */ }
    const [onescore, setonescore] = useState(1)
    const [twoscore, settwoscore] = useState(1)
    const [threescore, setthreescore] = useState(1)
    const [fourscore, setfourscore] = useState(1)
    const [fivescore, setfivescore] = useState(1)
    const [sixscore, setsixscore] = useState(1)
    const [sevenscore, setsevenscore] = useState(1)
    const [eightscore, seteightscore] = useState(1)
    const [ninescore, setninescore] = useState(1)
    const [tenscore, settenscore] = useState(1)
    const [elevenscore, setelevenscore] = useState(1)
    const [twelvescore, settwelvescore] = useState(1)
    const [thirteenscore, setthirteenscore] = useState(1)
    const [fourteenscore, setfourteenscore] = useState(1)
    const [fifteenscore, setfifteenscore] = useState(1)
    const [sixteenscore, setsixteenscore] = useState(1)
    const [seventeenscore, setseventeenscore] = useState(1)
    const [eighteenscore, seteighteenscore] = useState(1)

    {/* Calculations for Total Score */ }
    const frontscore = onescore + twoscore + threescore + fourscore + fivescore + sixscore + sevenscore + eightscore + ninescore
    const backscore = tenscore + elevenscore + twelvescore + thirteenscore + fourteenscore + fifteenscore + sixteenscore + seventeenscore + eighteenscore
    const totalscore = frontscore + backscore

    {/* Setting the shot collection template for each hole */ }
    const [oneshots, setoneshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [twoshots, settwoshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [threeshots, setthreeshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fourshots, setfourshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fiveshots, setfiveshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sixshots, setsixshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sevenshots, setsevenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [eightshots, seteightshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [nineshots, setnineshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [tenshots, settenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [elevenshots, setelevenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [twelveshots, settwelveshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [thirteenshots, setthirteenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fourteenshots, setfourteenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fifteenshots, setfifteenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sixteenshots, setsixteenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [seventeenshots, setseventeenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [eighteenshots, seteighteenshots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])

    {/* Functions for each hole */ }
    {/* Hole one Functions */ }
    function handleOneParChange(event) {
        setonepar(parseInt(event.target.value));
    }

    function handleAddShotHoleOne(event) {
        event.preventDefault();
        setonescore(onescore + 1)
        const newShots = [{ startingLie: "", distanceToHole: 0 }];
        setoneshots([...oneshots, ...newShots]);
    }

    function handleRemoveShotHoleOne(event) {
        event.preventDefault();
        if (onescore <= 1) {
        }
        else {
            setonescore(onescore - 1)
            const updatedOneshots = oneshots.slice(0, -1);
            setoneshots(updatedOneshots);

        }
    }

    function changeHoleOne(index, event) {
        const value = event.target.value;
        const updatedOneshots = [...oneshots];
        updatedOneshots[index] = { ...updatedOneshots[index], startingLie: value };
        setoneshots(updatedOneshots);
    }



    function changeholeOneDistance(index, event) {
        const value = event.target.value;
        const updatedOneshots = [...oneshots]
        updatedOneshots[index] = { ...updatedOneshots[index], distanceToHole: value };
        setoneshots(updatedOneshots);
    }

    {/* Hole two Functions */ }
    function handleTwoParChange(event) {
        settwopar(parseInt(event.target.value));
    }

    function handleAddShotHoleTwo(event) {
        event.preventDefault();
        settwoscore(twoscore + 1)
    }

    function handleRemoveShotHoleTwo(event) {
        event.preventDefault();
        if (twoscore <= 1) {
        }
        else {
            settwoscore(twoscore - 1)
        }
    }

    function changeHoleTwo(event, index) {
        const value = event.target.value;
        const updatedTwoshots = [...twoshots];
        updatedTwoshots[index] = { ...updatedTwoshots[index], startingLie: value };
        settwoshots(updatedTwoshots);
    }
    function changeholeTwoDistance(event, index) {
        const value = event.target.value;
        const updatedTwoshots = [{ ...twoshots[index], distanceToHole: value }];
        settwoshots(updatedTwoshots);
    }

    {/* Hole three Functions */ }
    function handleThreeParChange(event) {
        setthreepar(parseInt(event.target.value));
    }

    function handleAddShotHoleThree(event) {
        event.preventDefault();
        setthreescore(threescore + 1)
    }

    function handleRemoveShotHoleThree(event) {
        event.preventDefault();
        if (threescore <= 1) {
        }
        else {
            setthreescore(threescore - 1)
        }
    }

    function changeHoleThree(event, index) {
        const value = event.target.value;
        const updatedThreeshots = [...threeshots];
        updatedThreeshots[index] = { ...updatedThreeshots[index], startingLie: value };
        setthreeshots(updatedThreeshots);
    }
    function changeholeThreeDistance(event, index) {
        const value = event.target.value;
        const updatedThreeshots = [{ ...threeshots[index], distanceToHole: value }];
        setthreeshots(updatedThreeshots);
    }

    {/* Hole four Functions */ }
    function handleFourParChange(event) {
        setfourpar(parseInt(event.target.value));
    }

    function handleAddShotHoleFour(event) {
        event.preventDefault();
        setfourscore(fourscore + 1)
    }

    function handleRemoveShotHoleFour(event) {
        event.preventDefault();
        if (fourscore <= 1) {
        }
        else {
            setfourscore(fourscore - 1)
        }
    }

    function changeHoleFour(event, index) {
        const value = event.target.value;
        const updatedfourshots = [...fourshots];
        updatedfourshots[index] = { ...updatedfourshots[index], startingLie: value };
        setfourshots(updatedfourshots);
    }
    function changeholeFourDistance(event, index) {
        const value = event.target.value;
        const updatedfourshots = [{ ...fourshots[index], distanceToHole: value }];
        setfourshots(updatedfourshots);
    }

    {/* Hole five Functions */ }
    function handleFiveParChange(event) {
        setfivepar(parseInt(event.target.value));
    }

    function handleAddShotHoleFive(event) {
        event.preventDefault();
        setfivescore(fivescore + 1)
    }

    function handleRemoveShotHoleFive(event) {
        event.preventDefault();
        if (fivescore <= 1) {
        }
        else {
            setfivescore(fivescore - 1)
        }
    }

    function changeHoleFive(event, index) {
        const value = event.target.value;
        const updatedfiveshots = [...fiveshots];
        updatedfiveshots[index] = { ...updatedfiveshots[index], startingLie: value };
        setfiveshots(updatedfiveshots);
    }
    function changeholeFiveDistance(event, index) {
        const value = event.target.value;
        const updatedfiveshots = [{ ...fiveshots[index], distanceToHole: value }];
        setfiveshots(updatedfiveshots);
    }

    {/* Hole six Functions */ }
    function handleSixParChange(event) {
        setsixpar(parseInt(event.target.value));
    }

    function handleAddShotHoleSix(event) {
        event.preventDefault();
        setsixscore(sixscore + 1)
    }

    function handleRemoveShotHoleSix(event) {
        event.preventDefault();
        if (sixscore <= 1) {
        }
        else {
            setsixscore(sixscore - 1)
        }
    }

    function changeHoleSix(event, index) {
        const value = event.target.value;
        const updatedsixshots = [...sixshots];
        updatedsixshots[index] = { ...updatedsixshots[index], startingLie: value };
        setsixshots(updatedsixshots);
    }
    function changeholeSixDistance(event, index) {
        const value = event.target.value;
        const updatedsixshots = [{ ...sixshots[index], distanceToHole: value }];
        setsixshots(updatedsixshots);
    }

    {/* Hole seven Functions */ }
    function handleSevenParChange(event) {
        setsevenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleSeven(event) {
        event.preventDefault();
        setsevenscore(sevenscore + 1)
    }

    function handleRemoveShotHoleSeven(event) {
        event.preventDefault();
        if (sevenscore <= 1) {
        }
        else {
            setsevenscore(sevenscore - 1)
        }
    }

    function changeHoleSeven(event, index) {
        const value = event.target.value;
        const updatedsevenshots = [...sevenshots];
        updatedsevenshots[index] = { ...updatedsevenshots[index], startingLie: value };
        setsevenshots(updatedsevenshots);
    }
    function changeholeSevenDistance(event, index) {
        const value = event.target.value;
        const updatedsevenshots = [{ ...sevenshots[index], distanceToHole: value }];
        setsevenshots(updatedsevenshots);
    }

    {/* Hole eight Functions */ }
    function handleEightParChange(event) {
        seteightpar(parseInt(event.target.value));
    }

    function handleAddShotHoleEight(event) {
        event.preventDefault();
        seteightscore(eightscore + 1)
    }

    function handleRemoveShotHoleEight(event) {
        event.preventDefault();
        if (eightscore <= 1) {
        }
        else {
            seteightscore(eightscore - 1)
        }
    }

    function changeHoleEight(event, index) {
        const value = event.target.value;
        const updatedeightshots = [...eightshots];
        updatedeightshots[index] = { ...updatedeightshots[index], startingLie: value };
        seteightshots(updatedeightshots);
    }
    function changeholeEightDistance(event, index) {
        const value = event.target.value;
        const updatedeightshots = [{ ...eightshots[index], distanceToHole: value }];
        seteightshots(updatedeightshots);
    }

    {/* Hole nine Functions */ }
    function handleNineParChange(event) {
        setninepar(parseInt(event.target.value));
    }

    function handleAddShotHoleNine(event) {
        event.preventDefault();
        setninescore(ninescore + 1)
    }

    function handleRemoveShotHoleNine(event) {
        event.preventDefault();
        if (ninescore <= 1) {
        }
        else {
            setninescore(ninescore - 1)
        }
    }

    function changeHoleNine(event, index) {
        const value = event.target.value;
        const updatednineshots = [...nineshots];
        updatednineshots[index] = { ...updatednineshots[index], startingLie: value };
        setnineshots(updatednineshots);
    }
    function changeholeNineDistance(event, index) {
        const value = event.target.value;
        const updatednineshots = [{ ...nineshots[index], distanceToHole: value }];
        setnineshots(updatednineshots);
    }

    {/* Hole ten Functions */ }
    function handleTenParChange(event) {
        settenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleTen(event) {
        event.preventDefault();
        settenscore(tenscore + 1)
    }

    function handleRemoveShotHoleTen(event) {
        event.preventDefault();
        if (tenscore <= 1) {
        }
        else {
            settenscore(tenscore - 1)
        }
    }

    function changeHoleTen(event, index) {
        const value = event.target.value;
        const updatedtenshots = [...tenshots];
        updatedtenshots[index] = { ...updatedtenshots[index], startingLie: value };
        settenshots(updatedtenshots);
    }
    function changeholeTenDistance(event, index) {
        const value = event.target.value;
        const updatedtenshots = [{ ...tenshots[index], distanceToHole: value }];
        settenshots(updatedtenshots);
    }

    {/* Hole eleven Functions */ }
    function handleElevenParChange(event) {
        setelevenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleEleven(event) {
        event.preventDefault();
        setelevenscore(elevenscore + 1)
    }

    function handleRemoveShotHoleEleven(event) {
        event.preventDefault();
        if (elevenscore <= 1) {
        }
        else {
            setelevenscore(elevenscore - 1)
        }
    }

    function changeHoleEleven(event, index) {
        const value = event.target.value;
        const updatedelevenshots = [...elevenshots];
        updatedelevenshots[index] = { ...updatedelevenshots[index], startingLie: value };
        setelevenshots(updatedelevenshots);
    }
    function changeholeElevenDistance(event, index) {
        const value = event.target.value;
        const updatedelevenshots = [{ ...elevenshots[index], distanceToHole: value }];
        setelevenshots(updatedelevenshots);
    }

    {/* Hole twelve Functions */ }
    function handleTwelveParChange(event) {
        settwelvepar(parseInt(event.target.value));
    }

    function handleAddShotHoleTwelve(event) {
        event.preventDefault();
        settwelvescore(twelvescore + 1)
    }

    function handleRemoveShotHoleTwelve(event) {
        event.preventDefault();
        if (twelvescore <= 1) {
        }
        else {
            settwelvescore(twelvescore - 1)
        }
    }

    function changeHoleTwelve(event, index) {
        const value = event.target.value;
        const updatedtwelveshots = [...twelveshots];
        updatedtwelveshots[index] = { ...updatedtwelveshots[index], startingLie: value };
        settwelveshots(updatedtwelveshots);
    }
    function changeholeTwelveDistance(event, index) {
        const value = event.target.value;
        const updatedtwelveshots = [{ ...twelveshots[index], distanceToHole: value }];
        settwelveshots(updatedtwelveshots);
    }

    {/* Hole thirteen Functions */ }
    function handleThirteenParChange(event) {
        setthirteenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleThirteen(event) {
        event.preventDefault();
        setthirteenscore(thirteenscore + 1)
    }

    function handleRemoveShotHoleThirteen(event) {
        event.preventDefault();
        if (thirteenscore <= 1) {
        }
        else {
            setthirteenscore(thirteenscore - 1)
        }
    }

    function changeHoleThirteen(event, index) {
        const value = event.target.value;
        const updatedthirteenshots = [...thirteenshots];
        updatedthirteenshots[index] = { ...updatedthirteenshots[index], startingLie: value };
        setthirteenshots(updatedthirteenshots);
    }
    function changeholeThirteenDistance(event, index) {
        const value = event.target.value;
        const updatedthirteenshots = [{ ...thirteenshots[index], distanceToHole: value }];
        setthirteenshots(updatedthirteenshots);
    }

    {/* Hole fourteen Functions */ }
    function handleFourteenParChange(event) {
        setfourteenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleFourteen(event) {
        event.preventDefault();
        setfourteenscore(fourteenscore + 1)
    }

    function handleRemoveShotHoleFourteen(event) {
        event.preventDefault();
        if (fourteenscore <= 1) {
        }
        else {
            setfourteenscore(fourteenscore - 1)
        }
    }

    function changeHoleFourteen(event, index) {
        const value = event.target.value;
        const updatedfourteenshots = [...fourteenshots];
        updatedfourteenshots[index] = { ...updatedfourteenshots[index], startingLie: value };
        setfourteenshots(updatedfourteenshots);
    }
    function changeholeFourteenDistance(event, index) {
        const value = event.target.value;
        const updatedfourteenshots = [{ ...fourteenshots[index], distanceToHole: value }];
        setfourteenshots(updatedfourteenshots);
    }

    {/* Hole fifteen Functions */ }
    function handleFifteenParChange(event) {
        setfifteenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleFifteen(event) {
        event.preventDefault();
        setfifteenscore(fifteenscore + 1)
    }

    function handleRemoveShotHoleFifteen(event) {
        event.preventDefault();
        if (fifteenscore <= 1) {
        }
        else {
            setfifteenscore(fifteenscore - 1)
        }
    }

    function changeHoleFifteen(event, index) {
        const value = event.target.value;
        const updatedfifteenshots = [...fifteenshots];
        updatedfifteenshots[index] = { ...updatedfifteenshots[index], startingLie: value };
        setfifteenshots(updatedfifteenshots);
    }
    function changeholeFifteenDistance(event, index) {
        const value = event.target.value;
        const updatedfifteenshots = [{ ...fifteenshots[index], distanceToHole: value }];
        setfifteenshots(updatedfifteenshots);
    }

    {/* Hole sixteen Functions */ }
    function handleSixteenParChange(event) {
        setsixteenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleSixteen(event) {
        event.preventDefault();
        setsixteenscore(sixteenscore + 1)
    }

    function handleRemoveShotHoleSixteen(event) {
        event.preventDefault();
        if (sixteenscore <= 1) {
        }
        else {
            setsixteenscore(sixteenscore - 1)
        }
    }

    function changeHoleSixteen(event, index) {
        const value = event.target.value;
        const updatedsixteenshots = [...sixteenshots];
        updatedsixteenshots[index] = { ...updatedsixteenshots[index], startingLie: value };
        setsixteenshots(updatedsixteenshots);
    }
    function changeholeSixteenDistance(event, index) {
        const value = event.target.value;
        const updatedsixteenshots = [{ ...sixteenshots[index], distanceToHole: value }];
        setsixteenshots(updatedsixteenshots);
    }

    {/* Hole seventeen Functions */ }
    function handleSeventeenParChange(event) {
        setseventeenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleSeventeen(event) {
        event.preventDefault();
        setseventeenscore(seventeenscore + 1)
    }

    function handleRemoveShotHoleSeventeen(event) {
        event.preventDefault();
        if (seventeenscore <= 1) {
        }
        else {
            setseventeenscore(seventeenscore - 1)
        }
    }

    function changeHoleSeventeen(event, index) {
        const value = event.target.value;
        const updatedseventeenshots = [...seventeenshots];
        updatedseventeenshots[index] = { ...updatedseventeenshots[index], startingLie: value };
        setseventeenshots(updatedseventeenshots);
    }
    function changeholeSeventeenDistance(event, index) {
        const value = event.target.value;
        const updatedseventeenshots = [{ ...seventeenshots[index], distanceToHole: value }];
        setseventeenshots(updatedseventeenshots);
    }

    {/* Hole eighteen Functions */ }
    function handleEighteenParChange(event) {
        seteighteenpar(parseInt(event.target.value));
    }

    function handleAddShotHoleEighteen(event) {
        event.preventDefault();
        seteighteenscore(eighteenscore + 1)
    }

    function handleRemoveShotHoleEighteen(event) {
        event.preventDefault();
        if (eighteenscore <= 1) {
        }
        else {
            seteighteenscore(eighteenscore - 1)
        }
    }

    function changeHoleEighteen(event, index) {
        const value = event.target.value;
        const updatedeighteenshots = [...eighteenshots];
        updatedeighteenshots[index] = { ...updatedeighteenshots[index], startingLie: value };
        seteighteenshots(updatedeighteenshots);
    }
    function changeholeEighteenDistance(event, index) {
        const value = event.target.value;
        const updatedeighteenshots = [{ ...eighteenshots[index], distanceToHole: value }];
        seteighteenshots(updatedeighteenshots);
    }


    {/* Alerts to help user */ }

    function helpstartinglie() {
        alert("The starting lie is where on the golf course you took your shot from. For example, your first shot would be from the Tee, as this is the starting lie for your first shot.")
    }

    function helpdistance() {
        alert("The distance to hole is the distance to th hole that you had for your shot. For example, your first shot's distance to hole should be the length of the hole, as this is the distance to the hole from the starting position of the shot.")
    }

    {/* navigating holes and pages */ }
    function tonexthole(event) {
        event.preventDefault()
        setCurrenthole(currenthole + 1)
    }

    function toprevhole(event) {
        event.preventDefault()
        setCurrenthole(currenthole - 1)
    }

    function backtoone() {
        setPage(1)
    }

    function backtotwo() {
        setPage(2)
    }

    function finishround() {
        setPage(3)
    }

    function navigateholes(target) {
        const current = currenthole
        if (page === 3) {
            setPage(2)
            setCurrenthole(target)
        }
        else if (current >= target) {
            setCurrenthole(target)
        } else {
        }
    }

    {/* Part 3 Logic */ }
    {/* The Strokes Gained Database */ }
    const tee = { 0: 1, 100: 2.92, 120: 2.99, 140: 2.97, 160: 2.99, 180: 3.05, 200: 3.12, 220: 3.17, 240: 3.25, 260: 3.45, 280: 3.65, 300: 3.71, 320: 3.79, 340: 3.86, 360: 3.92, 380: 3.96, 400: 3.99, 420: 4.02, 440: 4.08, 460: 4.17, 480: 4.28, 500: 4.41, 520: 4.54, 540: 4.65, 560: 4.74, 580: 4.79, 600: 4.82 }
    const green = { 0: 1, 1: 1.00, 2: 1.02, 3: 1.04, 4: 1.13, 5: 1.23, 6: 1.34, 7: 1.42, 8: 1.50, 9: 1.56, 10: 1.61, 15: 1.78, 20: 1.87, 30: 1.98, 40: 2.06, 50: 2.14, 60: 2.21, 90: 2.40, 100: 2.50 }
    const sand = { 0: 1, 20: 2.53, 40: 2.82, 60: 3.15, 80: 3.24, 100: 3.23, 120: 3.21, 140: 3.22, 160: 3.28, 180: 3.40, 200: 3.55, 220: 3.70, 240: 2.84, 260: 3.93, 280: 4.00, 320: 4.12, 340: 4.26, 360: 4.41, 380: 4.55, 400: 4.69, 420: 4.73, 440: 4.78, 460: 4.87, 480: 4.98, 500: 5.11, 520: 5.24, 540: 5.36, 560: 5.44, 580: 5.49, 600: 5.52 }
    const rough = { 0: 1, 20: 2.59, 40: 2.78, 60: 2.91, 80: 2.96, 100: 3.02, 120: 3.08, 140: 3.15, 160: 3.23, 180: 3.31, 200: 3.42, 220: 3.53, 240: 3.64, 260: 3.74, 280: 3.83, 300: 3.90, 320: 3.95, 340: 4.02, 360: 4.11, 380: 4.21, 400: 4.30, 420: 4.34, 440: 4.39, 460: 4.48, 480: 4.59, 500: 4.72, 520: 4.85, 540: 4.97, 560: 5.05, 580: 5.10, 600: 5.13 }
    const fairway = { 0: 1, 20: 2.40, 40: 2.60, 60: 2.70, 80: 2.75, 100: 2.80, 120: 2.85, 140: 2.91, 160: 2.98, 180: 3.08, 200: 3.19, 220: 3.32, 240: 3.45, 260: 3.58, 280: 3.69, 300: 3.78, 320: 3.84, 340: 3.88, 360: 3.95, 380: 4.03, 400: 4.11, 420: 4.15, 440: 4.20, 460: 4.29, 480: 4.40, 500: 4.53, 520: 4.66, 540: 4.78, 560: 4.86, 580: 4.91, 600: 4.94 }


    {/*Seting the strokes gained states */ }
    const [oneputtingsg, setoneputtingsg] = useState(0)
    const [oneshortgamesg, setoneshortgamesg] = useState(0)
    const [oneapproachsg, setoneapproachsg] = useState(0)
    const [oneteesg, setoneteesg] = useState(0)

    const [twoputtingsg, settwoputtingsg] = useState(0)
    const [twoshortgamesg, settwoshortgamesg] = useState(0)
    const [twoapproachsg, settwoapproachsg] = useState(0)
    const [twoteesg, settwoteesg] = useState(0)

    const [threeputtingsg, setthreeputtingsg] = useState(0)
    const [threeshortgamesg, setthreeshortgamesg] = useState(0)
    const [threeapproachsg, setthreeapproachsg] = useState(0)
    const [threeteesg, setthreeteesg] = useState(0)

    const [fourputtingsg, setfourputtingsg] = useState(0)
    const [fourshortgamesg, setfourshortgamesg] = useState(0)
    const [fourapproachsg, setfourapproachsg] = useState(0)
    const [fourteesg, setfourteesg] = useState(0)

    const [fiveputtingsg, setfiveputtingsg] = useState(0)
    const [fiveshortgamesg, setfiveshortgamesg] = useState(0)
    const [fiveapproachsg, setfiveapproachsg] = useState(0)
    const [fiveteesg, setfiveteesg] = useState(0)

    const [sixputtingsg, setsixputtingsg] = useState(0)
    const [sixshortgamesg, setsixshortgamesg] = useState(0)
    const [sixapproachsg, setsixapproachsg] = useState(0)
    const [sixteesg, setsixteesg] = useState(0)

    const [sevenputtingsg, setsevenputtingsg] = useState(0)
    const [sevenshortgamesg, setsevenshortgamesg] = useState(0)
    const [sevenapproachsg, setsevenapproachsg] = useState(0)
    const [seventeesg, setseventeesg] = useState(0)

    const [eightputtingsg, seteightputtingsg] = useState(0)
    const [eightshortgamesg, seteightshortgamesg] = useState(0)
    const [eightapproachsg, seteightapproachsg] = useState(0)
    const [eightteesg, seteightteesg] = useState(0)

    const [nineputtingsg, setnineputtingsg] = useState(0)
    const [nineshortgamesg, setnineshortgamesg] = useState(0)
    const [nineapproachsg, setnineapproachsg] = useState(0)
    const [nineteesg, setnineteesg] = useState(0)

    const [tenputtingsg, settenputtingsg] = useState(0)
    const [tenshortgamesg, settenshortgamesg] = useState(0)
    const [tenapproachsg, settenapproachsg] = useState(0)
    const [tenteesg, settenteesg] = useState(0)

    const [elevenputtingsg, setelevenputtingsg] = useState(0)
    const [elevenshortgamesg, setelevenshortgamesg] = useState(0)
    const [elevenapproachsg, setelevenapproachsg] = useState(0)
    const [eleventeesg, seteleventeesg] = useState(0)

    const [twelveputtingsg, settwelveputtingsg] = useState(0)
    const [twelveshortgamesg, settwelveshortgamesg] = useState(0)
    const [twelveapproachsg, settwelveapproachsg] = useState(0)
    const [twelveteesg, settwelveteesg] = useState(0)

    const [thirteenputtingsg, setthirteenputtingsg] = useState(0)
    const [thirteenshortgamesg, setthirteenshortgamesg] = useState(0)
    const [thirteenapproachsg, setthirteenapproachsg] = useState(0)
    const [thirteenteesg, setthirteenteesg] = useState(0)

    const [fourteenputtingsg, setfourteenputtingsg] = useState(0)
    const [fourteenshortgamesg, setfourteenshortgamesg] = useState(0)
    const [fourteenapproachsg, setfourteenapproachsg] = useState(0)
    const [fourteenteesg, setfourteenteesg] = useState(0)

    const [fifteenputtingsg, setfifteenputtingsg] = useState(0)
    const [fifteenshortgamesg, setfifteenshortgamesg] = useState(0)
    const [fifteenapproachsg, setfifteenapproachsg] = useState(0)
    const [fifteenteesg, setfifteenteesg] = useState(0)

    const [sixteenputtingsg, setsixteenputtingsg] = useState(0)
    const [sixteenshortgamesg, setsixteenshortgamesg] = useState(0)
    const [sixteenapproachsg, setsixteenapproachsg] = useState(0)
    const [sixteenteesg, setsixteenteesg] = useState(0)

    const [seventeenputtingsg, setseventeenputtingsg] = useState(0)
    const [seventeenshortgamesg, setseventeenshortgamesg] = useState(0)
    const [seventeenapproachsg, setseventeenapproachsg] = useState(0)
    const [seventeenteesg, setseventeenteesg] = useState(0)

    const [eighteenputtingsg, seteighteenputtingsg] = useState(0)
    const [eighteenshortgamesg, seteighteenshortgamesg] = useState(0)
    const [eighteenapproachsg, seteighteenapproachsg] = useState(0)
    const [eighteenteesg, seteighteenteesg] = useState(0)


    function rounding(distance, lie) {
        const keys = Object.keys(lie);
        let upperKey = null;
        let lowerKey = null;
        let upperDiff = Infinity;
        let lowerDiff = Infinity;

        if (distance in lie) {
            return lie[distance];
        } else if (distance < parseInt(keys[keys.length - 1]) && distance > parseInt(keys[0])) {
            for (let i = 0; i < keys.length - 1; i++) {
                if (distance > keys[i] && distance < keys[i + 1]) {
                    upperKey = keys[i + 1];
                    lowerKey = keys[i];
                    lowerDiff = distance - lowerKey;
                    upperDiff = upperKey - distance;
                    break;
                }
            }
        }

        const uppervalue = lie[upperKey]
        const lowervalue = lie[lowerKey]
        const totalgap = upperDiff + lowerDiff

        const lowerWeight = lowerDiff / totalgap
        const upperWeight = upperDiff / totalgap

        const returnn = (lowerWeight * lowervalue) + (upperWeight * uppervalue)

        return returnn

    }



    function strokesgainedholeone(dict) {
        let onesgputting = 0
        let onesgapproach = 0
        let onesgshortgame = 0
        let onesgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    onesgtee = rounding(distance, tee) - 1 + onesgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        onesgshortgame = rounding(distance, rough) - 1 + onesgshortgame
                    } else if (lie === "Fairway") {
                        onesgshortgame = rounding(distance, fairway) - 1 + onesgshortgame
                    } else if (lie === "Sand") {
                        onesgshortgame = rounding(distance, sand) - 1 + onesgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    onesgapproach = rounding(distance, fairway) - 1 + onesgapproach
                } else if (lie === "Rough") {
                    onesgapproach = rounding(distance, rough) - 1 + onesgapproach
                } else if (lie === "Sand") {
                    onesgapproach = rounding(distance, sand) - 1 + onesgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    onesgputting = rounding(distance, green) - 1 + onesgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusonelie = dict[i + 1].startingLie
                const plusonedistance = dict[i + 1].distanceToHole
                
                let plusonesg = 0
                if (plusonelie === "Green") {
                    plusonesg = rounding(plusonedistance, green)
                } else if (plusonelie === "Rough") {
                    plusonesg = rounding(plusonedistance, rough)
                } else if (plusonelie === "Fairway") {
                    plusonesg = rounding(plusonedistance, fairway)
                } else if (plusonelie === "Sand") {
                    plusonesg = rounding(plusonedistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        onesgshortgame = currentsg - plusonesg - 1 + onesgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        onesgshortgame = currentsg - plusonesg - 1 + onesgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        onesgshortgame = currentsg - plusonesg - 1 + onesgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    onesgputting = currentsg - plusonesg - 1 + onesgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    onesgtee = currentsg - plusonesg - 1 + onesgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    onesgapproach = currentsg - plusonesg - 1 + onesgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    onesgapproach = currentsg - plusonesg - 1 + onesgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    onesgapproach = currentsg - plusonesg - 1 + onesgapproach
                }
            }
        }
        setoneputtingsg(onesgputting)
        setoneshortgamesg(onesgshortgame)
        setoneapproachsg(onesgapproach)
        setoneteesg(onesgtee)
    }


    useEffect(() => {
        strokesgainedholeone(oneshots);
    }, [oneshots]);

    function strokesgainedholetwo(dict) {
        let twosgputting = 0
        let twosgapproach = 0
        let twosgshortgame = 0
        let twosgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    twosgtee = rounding(distance, tee) - 1 + twosgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        twosgshortgame = rounding(distance, rough) - 1 + twosgshortgame
                    } else if (lie === "Fairway") {
                        twosgshortgame = rounding(distance, fairway) - 1 + twosgshortgame
                    } else if (lie === "Sand") {
                        twosgshortgame = rounding(distance, sand) - 1 + twosgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    twosgapproach = rounding(distance, fairway) - 1 + twosgapproach
                } else if (lie === "Rough") {
                    twosgapproach = rounding(distance, rough) - 1 + twosgapproach
                } else if (lie === "Sand") {
                    twosgapproach = rounding(distance, sand) - 1 + twosgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    twosgputting = rounding(distance, green) - 1 + twosgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plustwolie = dict[i + 1].startingLie
                const plustwodistance = dict[i + 1].distanceToHole
                
                let plustwosg = 0
                if (plustwolie === "Green") {
                    plustwosg = rounding(plustwodistance, green)
                } else if (plustwolie === "Rough") {
                    plustwosg = rounding(plustwodistance, rough)
                } else if (plustwolie === "Fairway") {
                    plustwosg = rounding(plustwodistance, fairway)
                } else if (plustwolie === "Sand") {
                    plustwosg = rounding(plustwodistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        twosgshortgame = currentsg - plustwosg - 1 + twosgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        twosgshortgame = currentsg - plustwosg - 1 + twosgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        twosgshortgame = currentsg - plustwosg - 1 + twosgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    twosgputting = currentsg - plustwosg - 1 + twosgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    twosgtee = currentsg - plustwosg - 1 + twosgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    twosgapproach = currentsg - plustwosg - 1 + twosgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    twosgapproach = currentsg - plustwosg - 1 + twosgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    twosgapproach = currentsg - plustwosg - 1 + twosgapproach
                }
            }
        }
        settwoputtingsg(twosgputting)
        settwoshortgamesg(twosgshortgame)
        settwoapproachsg(twosgapproach)
        settwoteesg(twosgtee)
    }


    useEffect(() => {
        strokesgainedholetwo(twoshots);
    }, [twoshots]);

    function strokesgainedholethree(dict) {
        let threesgputting = 0
        let threesgapproach = 0
        let threesgshortgame = 0
        let threesgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    threesgtee = rounding(distance, tee) - 1 + threesgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        threesgshortgame = rounding(distance, rough) - 1 + threesgshortgame
                    } else if (lie === "Fairway") {
                        threesgshortgame = rounding(distance, fairway) - 1 + threesgshortgame
                    } else if (lie === "Sand") {
                        threesgshortgame = rounding(distance, sand) - 1 + threesgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    threesgapproach = rounding(distance, fairway) - 1 + threesgapproach
                } else if (lie === "Rough") {
                    threesgapproach = rounding(distance, rough) - 1 + threesgapproach
                } else if (lie === "Sand") {
                    threesgapproach = rounding(distance, sand) - 1 + threesgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    threesgputting = rounding(distance, green) - 1 + threesgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusthreelie = dict[i + 1].startingLie
                const plusthreedistance = dict[i + 1].distanceToHole
                
                let plusthreesg = 0
                if (plusthreelie === "Green") {
                    plusthreesg = rounding(plusthreedistance, green)
                } else if (plusthreelie === "Rough") {
                    plusthreesg = rounding(plusthreedistance, rough)
                } else if (plusthreelie === "Fairway") {
                    plusthreesg = rounding(plusthreedistance, fairway)
                } else if (plusthreelie === "Sand") {
                    plusthreesg = rounding(plusthreedistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        threesgshortgame = currentsg - plusthreesg - 1 + threesgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        threesgshortgame = currentsg - plusthreesg - 1 + threesgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        threesgshortgame = currentsg - plusthreesg - 1 + threesgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    threesgputting = currentsg - plusthreesg - 1 + threesgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    threesgtee = currentsg - plusthreesg - 1 + threesgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    threesgapproach = currentsg - plusthreesg - 1 + threesgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    threesgapproach = currentsg - plusthreesg - 1 + threesgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    threesgapproach = currentsg - plusthreesg - 1 + threesgapproach
                }
            }
        }
        setthreeputtingsg(threesgputting)
        setthreeshortgamesg(threesgshortgame)
        setthreeapproachsg(threesgapproach)
        setthreeteesg(threesgtee)
    }


    useEffect(() => {
        strokesgainedholethree(threeshots);
    }, [threeshots]);

    function strokesgainedholefour(dict) {
        let foursgputting = 0
        let foursgapproach = 0
        let foursgshortgame = 0
        let foursgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    foursgtee = rounding(distance, tee) - 1 + foursgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        foursgshortgame = rounding(distance, rough) - 1 + foursgshortgame
                    } else if (lie === "Fairway") {
                        foursgshortgame = rounding(distance, fairway) - 1 + foursgshortgame
                    } else if (lie === "Sand") {
                        foursgshortgame = rounding(distance, sand) - 1 + foursgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    foursgapproach = rounding(distance, fairway) - 1 + foursgapproach
                } else if (lie === "Rough") {
                    foursgapproach = rounding(distance, rough) - 1 + foursgapproach
                } else if (lie === "Sand") {
                    foursgapproach = rounding(distance, sand) - 1 + foursgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    foursgputting = rounding(distance, green) - 1 + foursgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusfourlie = dict[i + 1].startingLie
                const plusfourdistance = dict[i + 1].distanceToHole
                
                let plusfoursg = 0
                if (plusfourlie === "Green") {
                    plusfoursg = rounding(plusfourdistance, green)
                } else if (plusfourlie === "Rough") {
                    plusfoursg = rounding(plusfourdistance, rough)
                } else if (plusfourlie === "Fairway") {
                    plusfoursg = rounding(plusfourdistance, fairway)
                } else if (plusfourlie === "Sand") {
                    plusfoursg = rounding(plusfourdistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        foursgshortgame = currentsg - plusfoursg - 1 + foursgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        foursgshortgame = currentsg - plusfoursg - 1 + foursgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        foursgshortgame = currentsg - plusfoursg - 1 + foursgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    foursgputting = currentsg - plusfoursg - 1 + foursgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    foursgtee = currentsg - plusfoursg - 1 + foursgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    foursgapproach = currentsg - plusfoursg - 1 + foursgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    foursgapproach = currentsg - plusfoursg - 1 + foursgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    foursgapproach = currentsg - plusfoursg - 1 + foursgapproach
                }
            }
        }
        setfourputtingsg(foursgputting)
        setfourshortgamesg(foursgshortgame)
        setfourapproachsg(foursgapproach)
        setfourteesg(foursgtee)
    }


    useEffect(() => {
        strokesgainedholefour(fourshots);
    }, [fourshots]);

    function strokesgainedholefive(dict) {
        let fivesgputting = 0
        let fivesgapproach = 0
        let fivesgshortgame = 0
        let fivesgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    fivesgtee = rounding(distance, tee) - 1 + fivesgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        fivesgshortgame = rounding(distance, rough) - 1 + fivesgshortgame
                    } else if (lie === "Fairway") {
                        fivesgshortgame = rounding(distance, fairway) - 1 + fivesgshortgame
                    } else if (lie === "Sand") {
                        fivesgshortgame = rounding(distance, sand) - 1 + fivesgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    fivesgapproach = rounding(distance, fairway) - 1 + fivesgapproach
                } else if (lie === "Rough") {
                    fivesgapproach = rounding(distance, rough) - 1 + fivesgapproach
                } else if (lie === "Sand") {
                    fivesgapproach = rounding(distance, sand) - 1 + fivesgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    fivesgputting = rounding(distance, green) - 1 + fivesgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusfivelie = dict[i + 1].startingLie
                const plusfivedistance = dict[i + 1].distanceToHole
                
                let plusfivesg = 0
                if (plusfivelie === "Green") {
                    plusfivesg = rounding(plusfivedistance, green)
                } else if (plusfivelie === "Rough") {
                    plusfivesg = rounding(plusfivedistance, rough)
                } else if (plusfivelie === "Fairway") {
                    plusfivesg = rounding(plusfivedistance, fairway)
                } else if (plusfivelie === "Sand") {
                    plusfivesg = rounding(plusfivedistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        fivesgshortgame = currentsg - plusfivesg - 1 + fivesgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        fivesgshortgame = currentsg - plusfivesg - 1 + fivesgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        fivesgshortgame = currentsg - plusfivesg - 1 + fivesgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    fivesgputting = currentsg - plusfivesg - 1 + fivesgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    fivesgtee = currentsg - plusfivesg - 1 + fivesgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    fivesgapproach = currentsg - plusfivesg - 1 + fivesgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    fivesgapproach = currentsg - plusfivesg - 1 + fivesgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    fivesgapproach = currentsg - plusfivesg - 1 + fivesgapproach
                }
            }
        }
        setfiveputtingsg(fivesgputting)
        setfiveshortgamesg(fivesgshortgame)
        setfiveapproachsg(fivesgapproach)
        setfiveteesg(fivesgtee)
    }


    useEffect(() => {
        strokesgainedholefive(fiveshots);
    }, [fiveshots]);

    function strokesgainedholesix(dict) {
        let sixsgputting = 0
        let sixsgapproach = 0
        let sixsgshortgame = 0
        let sixsgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    sixsgtee = rounding(distance, tee) - 1 + sixsgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        sixsgshortgame = rounding(distance, rough) - 1 + sixsgshortgame
                    } else if (lie === "Fairway") {
                        sixsgshortgame = rounding(distance, fairway) - 1 + sixsgshortgame
                    } else if (lie === "Sand") {
                        sixsgshortgame = rounding(distance, sand) - 1 + sixsgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    sixsgapproach = rounding(distance, fairway) - 1 + sixsgapproach
                } else if (lie === "Rough") {
                    sixsgapproach = rounding(distance, rough) - 1 + sixsgapproach
                } else if (lie === "Sand") {
                    sixsgapproach = rounding(distance, sand) - 1 + sixsgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    sixsgputting = rounding(distance, green) - 1 + sixsgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plussixlie = dict[i + 1].startingLie
                const plussixdistance = dict[i + 1].distanceToHole
                
                let plussixsg = 0
                if (plussixlie === "Green") {
                    plussixsg = rounding(plussixdistance, green)
                } else if (plussixlie === "Rough") {
                    plussixsg = rounding(plussixdistance, rough)
                } else if (plussixlie === "Fairway") {
                    plussixsg = rounding(plussixdistance, fairway)
                } else if (plussixlie === "Sand") {
                    plussixsg = rounding(plussixdistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        sixsgshortgame = currentsg - plussixsg - 1 + sixsgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        sixsgshortgame = currentsg - plussixsg - 1 + sixsgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        sixsgshortgame = currentsg - plussixsg - 1 + sixsgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    sixsgputting = currentsg - plussixsg - 1 + sixsgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    sixsgtee = currentsg - plussixsg - 1 + sixsgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    sixsgapproach = currentsg - plussixsg - 1 + sixsgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    sixsgapproach = currentsg - plussixsg - 1 + sixsgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    sixsgapproach = currentsg - plussixsg - 1 + sixsgapproach
                }
            }
        }
        setsixputtingsg(sixsgputting)
        setsixshortgamesg(sixsgshortgame)
        setsixapproachsg(sixsgapproach)
        setsixteesg(sixsgtee)
    }


    useEffect(() => {
        strokesgainedholesix(sixshots);
    }, [sixshots]);

    function strokesgainedholeseven(dict) {
        let sevensgputting = 0
        let sevensgapproach = 0
        let sevensgshortgame = 0
        let sevensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    sevensgtee = rounding(distance, tee) - 1 + sevensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        sevensgshortgame = rounding(distance, rough) - 1 + sevensgshortgame
                    } else if (lie === "Fairway") {
                        sevensgshortgame = rounding(distance, fairway) - 1 + sevensgshortgame
                    } else if (lie === "Sand") {
                        sevensgshortgame = rounding(distance, sand) - 1 + sevensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    sevensgapproach = rounding(distance, fairway) - 1 + sevensgapproach
                } else if (lie === "Rough") {
                    sevensgapproach = rounding(distance, rough) - 1 + sevensgapproach
                } else if (lie === "Sand") {
                    sevensgapproach = rounding(distance, sand) - 1 + sevensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    sevensgputting = rounding(distance, green) - 1 + sevensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plussevenlie = dict[i + 1].startingLie
                const plussevendistance = dict[i + 1].distanceToHole
                
                let plussevensg = 0
                if (plussevenlie === "Green") {
                    plussevensg = rounding(plussevendistance, green)
                } else if (plussevenlie === "Rough") {
                    plussevensg = rounding(plussevendistance, rough)
                } else if (plussevenlie === "Fairway") {
                    plussevensg = rounding(plussevendistance, fairway)
                } else if (plussevenlie === "Sand") {
                    plussevensg = rounding(plussevendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        sevensgshortgame = currentsg - plussevensg - 1 + sevensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        sevensgshortgame = currentsg - plussevensg - 1 + sevensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        sevensgshortgame = currentsg - plussevensg - 1 + sevensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    sevensgputting = currentsg - plussevensg - 1 + sevensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    sevensgtee = currentsg - plussevensg - 1 + sevensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    sevensgapproach = currentsg - plussevensg - 1 + sevensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    sevensgapproach = currentsg - plussevensg - 1 + sevensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    sevensgapproach = currentsg - plussevensg - 1 + sevensgapproach
                }
            }
        }
        setsevenputtingsg(sevensgputting)
        setsevenshortgamesg(sevensgshortgame)
        setsevenapproachsg(sevensgapproach)
        setseventeesg(sevensgtee)
    }


    useEffect(() => {
        strokesgainedholeseven(sevenshots);
    }, [sevenshots]);

    function strokesgainedholeeight(dict) {
        let eightsgputting = 0
        let eightsgapproach = 0
        let eightsgshortgame = 0
        let eightsgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    eightsgtee = rounding(distance, tee) - 1 + eightsgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        eightsgshortgame = rounding(distance, rough) - 1 + eightsgshortgame
                    } else if (lie === "Fairway") {
                        eightsgshortgame = rounding(distance, fairway) - 1 + eightsgshortgame
                    } else if (lie === "Sand") {
                        eightsgshortgame = rounding(distance, sand) - 1 + eightsgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    eightsgapproach = rounding(distance, fairway) - 1 + eightsgapproach
                } else if (lie === "Rough") {
                    eightsgapproach = rounding(distance, rough) - 1 + eightsgapproach
                } else if (lie === "Sand") {
                    eightsgapproach = rounding(distance, sand) - 1 + eightsgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    eightsgputting = rounding(distance, green) - 1 + eightsgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const pluseightlie = dict[i + 1].startingLie
                const pluseightdistance = dict[i + 1].distanceToHole
                
                let pluseightsg = 0
                if (pluseightlie === "Green") {
                    pluseightsg = rounding(pluseightdistance, green)
                } else if (pluseightlie === "Rough") {
                    pluseightsg = rounding(pluseightdistance, rough)
                } else if (pluseightlie === "Fairway") {
                    pluseightsg = rounding(pluseightdistance, fairway)
                } else if (pluseightlie === "Sand") {
                    pluseightsg = rounding(pluseightdistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        eightsgshortgame = currentsg - pluseightsg - 1 + eightsgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        eightsgshortgame = currentsg - pluseightsg - 1 + eightsgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        eightsgshortgame = currentsg - pluseightsg - 1 + eightsgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    eightsgputting = currentsg - pluseightsg - 1 + eightsgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    eightsgtee = currentsg - pluseightsg - 1 + eightsgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    eightsgapproach = currentsg - pluseightsg - 1 + eightsgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    eightsgapproach = currentsg - pluseightsg - 1 + eightsgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    eightsgapproach = currentsg - pluseightsg - 1 + eightsgapproach
                }
            }
        }
        seteightputtingsg(eightsgputting)
        seteightshortgamesg(eightsgshortgame)
        seteightapproachsg(eightsgapproach)
        seteightteesg(eightsgtee)
    }


    useEffect(() => {
        strokesgainedholeeight(eightshots);
    }, [eightshots]);

    function strokesgainedholenine(dict) {
        let ninesgputting = 0
        let ninesgapproach = 0
        let ninesgshortgame = 0
        let ninesgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    ninesgtee = rounding(distance, tee) - 1 + ninesgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        ninesgshortgame = rounding(distance, rough) - 1 + ninesgshortgame
                    } else if (lie === "Fairway") {
                        ninesgshortgame = rounding(distance, fairway) - 1 + ninesgshortgame
                    } else if (lie === "Sand") {
                        ninesgshortgame = rounding(distance, sand) - 1 + ninesgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    ninesgapproach = rounding(distance, fairway) - 1 + ninesgapproach
                } else if (lie === "Rough") {
                    ninesgapproach = rounding(distance, rough) - 1 + ninesgapproach
                } else if (lie === "Sand") {
                    ninesgapproach = rounding(distance, sand) - 1 + ninesgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    ninesgputting = rounding(distance, green) - 1 + ninesgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusninelie = dict[i + 1].startingLie
                const plusninedistance = dict[i + 1].distanceToHole
                
                let plusninesg = 0
                if (plusninelie === "Green") {
                    plusninesg = rounding(plusninedistance, green)
                } else if (plusninelie === "Rough") {
                    plusninesg = rounding(plusninedistance, rough)
                } else if (plusninelie === "Fairway") {
                    plusninesg = rounding(plusninedistance, fairway)
                } else if (plusninelie === "Sand") {
                    plusninesg = rounding(plusninedistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        ninesgshortgame = currentsg - plusninesg - 1 + ninesgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        ninesgshortgame = currentsg - plusninesg - 1 + ninesgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        ninesgshortgame = currentsg - plusninesg - 1 + ninesgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    ninesgputting = currentsg - plusninesg - 1 + ninesgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    ninesgtee = currentsg - plusninesg - 1 + ninesgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    ninesgapproach = currentsg - plusninesg - 1 + ninesgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    ninesgapproach = currentsg - plusninesg - 1 + ninesgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    ninesgapproach = currentsg - plusninesg - 1 + ninesgapproach
                }
            }
        }
        setnineputtingsg(ninesgputting)
        setnineshortgamesg(ninesgshortgame)
        setnineapproachsg(ninesgapproach)
        setnineteesg(ninesgtee)
    }


    useEffect(() => {
        strokesgainedholenine(nineshots);
    }, [nineshots]);

    function strokesgainedholeten(dict) {
        let tensgputting = 0
        let tensgapproach = 0
        let tensgshortgame = 0
        let tensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    tensgtee = rounding(distance, tee) - 1 + tensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        tensgshortgame = rounding(distance, rough) - 1 + tensgshortgame
                    } else if (lie === "Fairway") {
                        tensgshortgame = rounding(distance, fairway) - 1 + tensgshortgame
                    } else if (lie === "Sand") {
                        tensgshortgame = rounding(distance, sand) - 1 + tensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    tensgapproach = rounding(distance, fairway) - 1 + tensgapproach
                } else if (lie === "Rough") {
                    tensgapproach = rounding(distance, rough) - 1 + tensgapproach
                } else if (lie === "Sand") {
                    tensgapproach = rounding(distance, sand) - 1 + tensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    tensgputting = rounding(distance, green) - 1 + tensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plustenlie = dict[i + 1].startingLie
                const plustendistance = dict[i + 1].distanceToHole
                
                let plustensg = 0
                if (plustenlie === "Green") {
                    plustensg = rounding(plustendistance, green)
                } else if (plustenlie === "Rough") {
                    plustensg = rounding(plustendistance, rough)
                } else if (plustenlie === "Fairway") {
                    plustensg = rounding(plustendistance, fairway)
                } else if (plustenlie === "Sand") {
                    plustensg = rounding(plustendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        tensgshortgame = currentsg - plustensg - 1 + tensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        tensgshortgame = currentsg - plustensg - 1 + tensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        tensgshortgame = currentsg - plustensg - 1 + tensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    tensgputting = currentsg - plustensg - 1 + tensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    tensgtee = currentsg - plustensg - 1 + tensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    tensgapproach = currentsg - plustensg - 1 + tensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    tensgapproach = currentsg - plustensg - 1 + tensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    tensgapproach = currentsg - plustensg - 1 + tensgapproach
                }
            }
        }
        settenputtingsg(tensgputting)
        settenshortgamesg(tensgshortgame)
        settenapproachsg(tensgapproach)
        settenteesg(tensgtee)
    }


    useEffect(() => {
        strokesgainedholeten(tenshots);
    }, [tenshots]);

    function strokesgainedholeeleven(dict) {
        let elevensgputting = 0
        let elevensgapproach = 0
        let elevensgshortgame = 0
        let elevensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    elevensgtee = rounding(distance, tee) - 1 + elevensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        elevensgshortgame = rounding(distance, rough) - 1 + elevensgshortgame
                    } else if (lie === "Fairway") {
                        elevensgshortgame = rounding(distance, fairway) - 1 + elevensgshortgame
                    } else if (lie === "Sand") {
                        elevensgshortgame = rounding(distance, sand) - 1 + elevensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    elevensgapproach = rounding(distance, fairway) - 1 + elevensgapproach
                } else if (lie === "Rough") {
                    elevensgapproach = rounding(distance, rough) - 1 + elevensgapproach
                } else if (lie === "Sand") {
                    elevensgapproach = rounding(distance, sand) - 1 + elevensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    elevensgputting = rounding(distance, green) - 1 + elevensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const pluselevenlie = dict[i + 1].startingLie
                const pluselevendistance = dict[i + 1].distanceToHole
                
                let pluselevensg = 0
                if (pluselevenlie === "Green") {
                    pluselevensg = rounding(pluselevendistance, green)
                } else if (pluselevenlie === "Rough") {
                    pluselevensg = rounding(pluselevendistance, rough)
                } else if (pluselevenlie === "Fairway") {
                    pluselevensg = rounding(pluselevendistance, fairway)
                } else if (pluselevenlie === "Sand") {
                    pluselevensg = rounding(pluselevendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        elevensgshortgame = currentsg - pluselevensg - 1 + elevensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        elevensgshortgame = currentsg - pluselevensg - 1 + elevensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        elevensgshortgame = currentsg - pluselevensg - 1 + elevensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    elevensgputting = currentsg - pluselevensg - 1 + elevensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    elevensgtee = currentsg - pluselevensg - 1 + elevensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    elevensgapproach = currentsg - pluselevensg - 1 + elevensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    elevensgapproach = currentsg - pluselevensg - 1 + elevensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    elevensgapproach = currentsg - pluselevensg - 1 + elevensgapproach
                }
            }
        }
        setelevenputtingsg(elevensgputting)
        setelevenshortgamesg(elevensgshortgame)
        setelevenapproachsg(elevensgapproach)
        seteleventeesg(elevensgtee)
    }


    useEffect(() => {
        strokesgainedholeeleven(elevenshots);
    }, [elevenshots]);

    function strokesgainedholetwelve(dict) {
        let twelvesgputting = 0
        let twelvesgapproach = 0
        let twelvesgshortgame = 0
        let twelvesgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    twelvesgtee = rounding(distance, tee) - 1 + twelvesgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        twelvesgshortgame = rounding(distance, rough) - 1 + twelvesgshortgame
                    } else if (lie === "Fairway") {
                        twelvesgshortgame = rounding(distance, fairway) - 1 + twelvesgshortgame
                    } else if (lie === "Sand") {
                        twelvesgshortgame = rounding(distance, sand) - 1 + twelvesgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    twelvesgapproach = rounding(distance, fairway) - 1 + twelvesgapproach
                } else if (lie === "Rough") {
                    twelvesgapproach = rounding(distance, rough) - 1 + twelvesgapproach
                } else if (lie === "Sand") {
                    twelvesgapproach = rounding(distance, sand) - 1 + twelvesgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    twelvesgputting = rounding(distance, green) - 1 + twelvesgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plustwelvelie = dict[i + 1].startingLie
                const plustwelvedistance = dict[i + 1].distanceToHole
                
                let plustwelvesg = 0
                if (plustwelvelie === "Green") {
                    plustwelvesg = rounding(plustwelvedistance, green)
                } else if (plustwelvelie === "Rough") {
                    plustwelvesg = rounding(plustwelvedistance, rough)
                } else if (plustwelvelie === "Fairway") {
                    plustwelvesg = rounding(plustwelvedistance, fairway)
                } else if (plustwelvelie === "Sand") {
                    plustwelvesg = rounding(plustwelvedistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        twelvesgshortgame = currentsg - plustwelvesg - 1 + twelvesgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        twelvesgshortgame = currentsg - plustwelvesg - 1 + twelvesgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        twelvesgshortgame = currentsg - plustwelvesg - 1 + twelvesgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    twelvesgputting = currentsg - plustwelvesg - 1 + twelvesgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    twelvesgtee = currentsg - plustwelvesg - 1 + twelvesgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    twelvesgapproach = currentsg - plustwelvesg - 1 + twelvesgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    twelvesgapproach = currentsg - plustwelvesg - 1 + twelvesgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    twelvesgapproach = currentsg - plustwelvesg - 1 + twelvesgapproach
                }
            }
        }
        settwelveputtingsg(twelvesgputting)
        settwelveshortgamesg(twelvesgshortgame)
        settwelveapproachsg(twelvesgapproach)
        settwelveteesg(twelvesgtee)
    }


    useEffect(() => {
        strokesgainedholetwelve(twelveshots);
    }, [twelveshots]);

    function strokesgainedholethirteen(dict) {
        let thirteensgputting = 0
        let thirteensgapproach = 0
        let thirteensgshortgame = 0
        let thirteensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    thirteensgtee = rounding(distance, tee) - 1 + thirteensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        thirteensgshortgame = rounding(distance, rough) - 1 + thirteensgshortgame
                    } else if (lie === "Fairway") {
                        thirteensgshortgame = rounding(distance, fairway) - 1 + thirteensgshortgame
                    } else if (lie === "Sand") {
                        thirteensgshortgame = rounding(distance, sand) - 1 + thirteensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    thirteensgapproach = rounding(distance, fairway) - 1 + thirteensgapproach
                } else if (lie === "Rough") {
                    thirteensgapproach = rounding(distance, rough) - 1 + thirteensgapproach
                } else if (lie === "Sand") {
                    thirteensgapproach = rounding(distance, sand) - 1 + thirteensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    thirteensgputting = rounding(distance, green) - 1 + thirteensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusthirteenlie = dict[i + 1].startingLie
                const plusthirteendistance = dict[i + 1].distanceToHole
                
                let plusthirteensg = 0
                if (plusthirteenlie === "Green") {
                    plusthirteensg = rounding(plusthirteendistance, green)
                } else if (plusthirteenlie === "Rough") {
                    plusthirteensg = rounding(plusthirteendistance, rough)
                } else if (plusthirteenlie === "Fairway") {
                    plusthirteensg = rounding(plusthirteendistance, fairway)
                } else if (plusthirteenlie === "Sand") {
                    plusthirteensg = rounding(plusthirteendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        thirteensgshortgame = currentsg - plusthirteensg - 1 + thirteensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        thirteensgshortgame = currentsg - plusthirteensg - 1 + thirteensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        thirteensgshortgame = currentsg - plusthirteensg - 1 + thirteensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    thirteensgputting = currentsg - plusthirteensg - 1 + thirteensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    thirteensgtee = currentsg - plusthirteensg - 1 + thirteensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    thirteensgapproach = currentsg - plusthirteensg - 1 + thirteensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    thirteensgapproach = currentsg - plusthirteensg - 1 + thirteensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    thirteensgapproach = currentsg - plusthirteensg - 1 + thirteensgapproach
                }
            }
        }
        setthirteenputtingsg(thirteensgputting)
        setthirteenshortgamesg(thirteensgshortgame)
        setthirteenapproachsg(thirteensgapproach)
        setthirteenteesg(thirteensgtee)
    }


    useEffect(() => {
        strokesgainedholethirteen(thirteenshots);
    }, [thirteenshots]);

    function strokesgainedholefourteen(dict) {
        let fourteensgputting = 0
        let fourteensgapproach = 0
        let fourteensgshortgame = 0
        let fourteensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    fourteensgtee = rounding(distance, tee) - 1 + fourteensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        fourteensgshortgame = rounding(distance, rough) - 1 + fourteensgshortgame
                    } else if (lie === "Fairway") {
                        fourteensgshortgame = rounding(distance, fairway) - 1 + fourteensgshortgame
                    } else if (lie === "Sand") {
                        fourteensgshortgame = rounding(distance, sand) - 1 + fourteensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    fourteensgapproach = rounding(distance, fairway) - 1 + fourteensgapproach
                } else if (lie === "Rough") {
                    fourteensgapproach = rounding(distance, rough) - 1 + fourteensgapproach
                } else if (lie === "Sand") {
                    fourteensgapproach = rounding(distance, sand) - 1 + fourteensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    fourteensgputting = rounding(distance, green) - 1 + fourteensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusfourteenlie = dict[i + 1].startingLie
                const plusfourteendistance = dict[i + 1].distanceToHole
                
                let plusfourteensg = 0
                if (plusfourteenlie === "Green") {
                    plusfourteensg = rounding(plusfourteendistance, green)
                } else if (plusfourteenlie === "Rough") {
                    plusfourteensg = rounding(plusfourteendistance, rough)
                } else if (plusfourteenlie === "Fairway") {
                    plusfourteensg = rounding(plusfourteendistance, fairway)
                } else if (plusfourteenlie === "Sand") {
                    plusfourteensg = rounding(plusfourteendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        fourteensgshortgame = currentsg - plusfourteensg - 1 + fourteensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        fourteensgshortgame = currentsg - plusfourteensg - 1 + fourteensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        fourteensgshortgame = currentsg - plusfourteensg - 1 + fourteensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    fourteensgputting = currentsg - plusfourteensg - 1 + fourteensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    fourteensgtee = currentsg - plusfourteensg - 1 + fourteensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    fourteensgapproach = currentsg - plusfourteensg - 1 + fourteensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    fourteensgapproach = currentsg - plusfourteensg - 1 + fourteensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    fourteensgapproach = currentsg - plusfourteensg - 1 + fourteensgapproach
                }
            }
        }
        setfourteenputtingsg(fourteensgputting)
        setfourteenshortgamesg(fourteensgshortgame)
        setfourteenapproachsg(fourteensgapproach)
        setfourteenteesg(fourteensgtee)
    }


    useEffect(() => {
        strokesgainedholefourteen(fourteenshots);
    }, [fourteenshots]);

    function strokesgainedholefifteen(dict) {
        let fifteensgputting = 0
        let fifteensgapproach = 0
        let fifteensgshortgame = 0
        let fifteensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    fifteensgtee = rounding(distance, tee) - 1 + fifteensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        fifteensgshortgame = rounding(distance, rough) - 1 + fifteensgshortgame
                    } else if (lie === "Fairway") {
                        fifteensgshortgame = rounding(distance, fairway) - 1 + fifteensgshortgame
                    } else if (lie === "Sand") {
                        fifteensgshortgame = rounding(distance, sand) - 1 + fifteensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    fifteensgapproach = rounding(distance, fairway) - 1 + fifteensgapproach
                } else if (lie === "Rough") {
                    fifteensgapproach = rounding(distance, rough) - 1 + fifteensgapproach
                } else if (lie === "Sand") {
                    fifteensgapproach = rounding(distance, sand) - 1 + fifteensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    fifteensgputting = rounding(distance, green) - 1 + fifteensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusfifteenlie = dict[i + 1].startingLie
                const plusfifteendistance = dict[i + 1].distanceToHole
                
                let plusfifteensg = 0
                if (plusfifteenlie === "Green") {
                    plusfifteensg = rounding(plusfifteendistance, green)
                } else if (plusfifteenlie === "Rough") {
                    plusfifteensg = rounding(plusfifteendistance, rough)
                } else if (plusfifteenlie === "Fairway") {
                    plusfifteensg = rounding(plusfifteendistance, fairway)
                } else if (plusfifteenlie === "Sand") {
                    plusfifteensg = rounding(plusfifteendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        fifteensgshortgame = currentsg - plusfifteensg - 1 + fifteensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        fifteensgshortgame = currentsg - plusfifteensg - 1 + fifteensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        fifteensgshortgame = currentsg - plusfifteensg - 1 + fifteensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    fifteensgputting = currentsg - plusfifteensg - 1 + fifteensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    fifteensgtee = currentsg - plusfifteensg - 1 + fifteensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    fifteensgapproach = currentsg - plusfifteensg - 1 + fifteensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    fifteensgapproach = currentsg - plusfifteensg - 1 + fifteensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    fifteensgapproach = currentsg - plusfifteensg - 1 + fifteensgapproach
                }
            }
        }
        setfifteenputtingsg(fifteensgputting)
        setfifteenshortgamesg(fifteensgshortgame)
        setfifteenapproachsg(fifteensgapproach)
        setfifteenteesg(fifteensgtee)
    }


    useEffect(() => {
        strokesgainedholefifteen(fifteenshots);
    }, [fifteenshots]);

    function strokesgainedholesixteen(dict) {
        let sixteensgputting = 0
        let sixteensgapproach = 0
        let sixteensgshortgame = 0
        let sixteensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    sixteensgtee = rounding(distance, tee) - 1 + sixteensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        sixteensgshortgame = rounding(distance, rough) - 1 + sixteensgshortgame
                    } else if (lie === "Fairway") {
                        sixteensgshortgame = rounding(distance, fairway) - 1 + sixteensgshortgame
                    } else if (lie === "Sand") {
                        sixteensgshortgame = rounding(distance, sand) - 1 + sixteensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    sixteensgapproach = rounding(distance, fairway) - 1 + sixteensgapproach
                } else if (lie === "Rough") {
                    sixteensgapproach = rounding(distance, rough) - 1 + sixteensgapproach
                } else if (lie === "Sand") {
                    sixteensgapproach = rounding(distance, sand) - 1 + sixteensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    sixteensgputting = rounding(distance, green) - 1 + sixteensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plussixteenlie = dict[i + 1].startingLie
                const plussixteendistance = dict[i + 1].distanceToHole
                
                let plussixteensg = 0
                if (plussixteenlie === "Green") {
                    plussixteensg = rounding(plussixteendistance, green)
                } else if (plussixteenlie === "Rough") {
                    plussixteensg = rounding(plussixteendistance, rough)
                } else if (plussixteenlie === "Fairway") {
                    plussixteensg = rounding(plussixteendistance, fairway)
                } else if (plussixteenlie === "Sand") {
                    plussixteensg = rounding(plussixteendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        sixteensgshortgame = currentsg - plussixteensg - 1 + sixteensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        sixteensgshortgame = currentsg - plussixteensg - 1 + sixteensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        sixteensgshortgame = currentsg - plussixteensg - 1 + sixteensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    sixteensgputting = currentsg - plussixteensg - 1 + sixteensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    sixteensgtee = currentsg - plussixteensg - 1 + sixteensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    sixteensgapproach = currentsg - plussixteensg - 1 + sixteensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    sixteensgapproach = currentsg - plussixteensg - 1 + sixteensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    sixteensgapproach = currentsg - plussixteensg - 1 + sixteensgapproach
                }
            }
        }
        setsixteenputtingsg(sixteensgputting)
        setsixteenshortgamesg(sixteensgshortgame)
        setsixteenapproachsg(sixteensgapproach)
        setsixteenteesg(sixteensgtee)
    }


    useEffect(() => {
        strokesgainedholesixteen(sixteenshots);
    }, [sixteenshots]);

    function strokesgainedholeseventeen(dict) {
        let seventeensgputting = 0
        let seventeensgapproach = 0
        let seventeensgshortgame = 0
        let seventeensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    seventeensgtee = rounding(distance, tee) - 1 + seventeensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        seventeensgshortgame = rounding(distance, rough) - 1 + seventeensgshortgame
                    } else if (lie === "Fairway") {
                        seventeensgshortgame = rounding(distance, fairway) - 1 + seventeensgshortgame
                    } else if (lie === "Sand") {
                        seventeensgshortgame = rounding(distance, sand) - 1 + seventeensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    seventeensgapproach = rounding(distance, fairway) - 1 + seventeensgapproach
                } else if (lie === "Rough") {
                    seventeensgapproach = rounding(distance, rough) - 1 + seventeensgapproach
                } else if (lie === "Sand") {
                    seventeensgapproach = rounding(distance, sand) - 1 + seventeensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    seventeensgputting = rounding(distance, green) - 1 + seventeensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const plusseventeenlie = dict[i + 1].startingLie
                const plusseventeendistance = dict[i + 1].distanceToHole
                
                let plusseventeensg = 0
                if (plusseventeenlie === "Green") {
                    plusseventeensg = rounding(plusseventeendistance, green)
                } else if (plusseventeenlie === "Rough") {
                    plusseventeensg = rounding(plusseventeendistance, rough)
                } else if (plusseventeenlie === "Fairway") {
                    plusseventeensg = rounding(plusseventeendistance, fairway)
                } else if (plusseventeenlie === "Sand") {
                    plusseventeensg = rounding(plusseventeendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        seventeensgshortgame = currentsg - plusseventeensg - 1 + seventeensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        seventeensgshortgame = currentsg - plusseventeensg - 1 + seventeensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        seventeensgshortgame = currentsg - plusseventeensg - 1 + seventeensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    seventeensgputting = currentsg - plusseventeensg - 1 + seventeensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    seventeensgtee = currentsg - plusseventeensg - 1 + seventeensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    seventeensgapproach = currentsg - plusseventeensg - 1 + seventeensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    seventeensgapproach = currentsg - plusseventeensg - 1 + seventeensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    seventeensgapproach = currentsg - plusseventeensg - 1 + seventeensgapproach
                }
            }
        }
        setseventeenputtingsg(seventeensgputting)
        setseventeenshortgamesg(seventeensgshortgame)
        setseventeenapproachsg(seventeensgapproach)
        setseventeenteesg(seventeensgtee)
    }


    useEffect(() => {
        strokesgainedholeseventeen(seventeenshots);
    }, [seventeenshots]);

    function strokesgainedholeeighteen(dict) {
        let eighteensgputting = 0
        let eighteensgapproach = 0
        let eighteensgshortgame = 0
        let eighteensgtee = 0

        const values = Object.values(dict);
        const numValues = values.length;
        
        
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            /* The "if" statement Below is the last shot for each hole */
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                /* This is the assumption that they made a hole in one */
                if (lie === "Tee") {
                    eighteensgtee = rounding(distance, tee) - 1 + eighteensgtee
                }
                /* This is the assumption that they chipped in from the short game area */
                if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        eighteensgshortgame = rounding(distance, rough) - 1 + eighteensgshortgame
                    } else if (lie === "Fairway") {
                        eighteensgshortgame = rounding(distance, fairway) - 1 + eighteensgshortgame
                    } else if (lie === "Sand") {
                        eighteensgshortgame = rounding(distance, sand) - 1 + eighteensgshortgame
                    }
                }
                /* This is the assumption that they holed out from outisde of 50 yards */
                else if (lie === "Fairway") {
                    eighteensgapproach = rounding(distance, fairway) - 1 + eighteensgapproach
                } else if (lie === "Rough") {
                    eighteensgapproach = rounding(distance, rough) - 1 + eighteensgapproach
                } else if (lie === "Sand") {
                    eighteensgapproach = rounding(distance, sand) - 1 + eighteensgapproach
                }
                /* This is the assumption that they putted in */
                else {
                    eighteensgputting = rounding(distance, green) - 1 + eighteensgputting
                }
            
            }
            /* This is assuming that this current shot did not hole out */
            else {
                const pluseighteenlie = dict[i + 1].startingLie
                const pluseighteendistance = dict[i + 1].distanceToHole
                
                let pluseighteensg = 0
                if (pluseighteenlie === "Green") {
                    pluseighteensg = rounding(pluseighteendistance, green)
                } else if (pluseighteenlie === "Rough") {
                    pluseighteensg = rounding(pluseighteendistance, rough)
                } else if (pluseighteenlie === "Fairway") {
                    pluseighteensg = rounding(pluseighteendistance, fairway)
                } else if (pluseighteenlie === "Sand") {
                    pluseighteensg = rounding(pluseighteendistance, sand)
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                let currentsg = null
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        currentsg = rounding(distance, rough)
                        eighteensgshortgame = currentsg - pluseighteensg - 1 + eighteensgshortgame
                    } else if (currentlie === "Fairway") {
                        currentsg = rounding(distance, fairway)
                        eighteensgshortgame = currentsg - pluseighteensg - 1 + eighteensgshortgame
                    } else if (currentlie === "Sand") {
                        currentsg = rounding(distance, sand)
                        eighteensgshortgame = currentsg - pluseighteensg - 1 + eighteensgshortgame
                    }
                }
                else if (currentlie === "Green") {
                    currentsg = rounding(distance, green)
                    eighteensgputting = currentsg - pluseighteensg - 1 + eighteensgputting
                } else if (currentlie === "Tee") {
                    currentsg = rounding(distance, tee)
                    eighteensgtee = currentsg - pluseighteensg - 1 + eighteensgtee
                } else if (currentlie === "Rough") {
                    currentsg = rounding(distance, rough)
                    eighteensgapproach = currentsg - pluseighteensg - 1 + eighteensgapproach
                } else if (currentlie === "Fairway") {
                    currentsg = rounding(distance, fairway)
                    eighteensgapproach = currentsg - pluseighteensg - 1 + eighteensgapproach
                } else if (currentlie === "Sand") {
                    currentsg = rounding(distance, sand)
                    eighteensgapproach = currentsg - pluseighteensg - 1 + eighteensgapproach
                }
            }
        }
        seteighteenputtingsg(eighteensgputting)
        seteighteenshortgamesg(eighteensgshortgame)
        seteighteenapproachsg(eighteensgapproach)
        seteighteenteesg(eighteensgtee)
    }


    useEffect(() => {
        strokesgainedholeeighteen(eighteenshots);
    }, [eighteenshots]);

    {/* Calculating Total SG */}
    const totalputtingsg = oneputtingsg + twoputtingsg + threeputtingsg + fourputtingsg + fiveputtingsg + sixputtingsg + sevenputtingsg + eightputtingsg + nineputtingsg + tenputtingsg + elevenputtingsg + twelveputtingsg + thirteenputtingsg + fourteenputtingsg + fifteenputtingsg + sixteenputtingsg + seventeenputtingsg + eighteenputtingsg

    {/* Chart Config */}
    const data = {
        labels: ["SG Putting", 'SG Short Game', 'SG Approach', 'SG Driving'],
        datasets: [
            {
                label: 'Personal SG',
                data: [0.12, 1, 0.2, 2],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'PGA Tour Average',
                data: [0.17, 0.64, 0.64, 0.32],
                backgroundColor: 'rgba(99, 132, 255, 0.2)',
                borderColor: 'rgba(99, 132, 255, 1)',
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
                suggestedMin: -2,
                suggestedMax: 2,
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



    const [statshowing, setstatshowing] = useState("putting")









    if (page === 1) {
        return (
            <>
                <div className="headerroundentry">
                    <div className='g'></div>
                    <div className='displayflex'>
                        <p className='active'>1. Round Details</p>
                        <p className='inactive'>2. Shot Data</p>
                        <p className='inactive'>3. Round Analysis</p>
                    </div>
                    <h1>Add Round</h1>
                </div>
                <div className='formmm'>
                    <div className='s'></div>
                    <div className='p'>
                        <h4>Add Details</h4>
                        <form onSubmit={handlesubmit1}>
                            <label>Date</label> <br />
                            <input type="date" value={date} onChange={handleChangeDate} /> <br />
                            <label>Number of Holes</label> <br />
                            <label>9</label>
                            <input type="radio" onChange={handleChangeHoles} value={9} name="holes" />
                            <label>18</label>
                            <input type="radio" onChange={handleChangeHoles} value={18} name="holes" /> <br />
                            <label>Course</label>
                            <input type="text" value={course} onChange={handleCourseChange} />
                            <button type="submit" onClick={handlesubmit1}>Continue to shot entry</button>
                        </form>
                    </div>

                </div>
            </>
        )
    }
    else if (page === 2) {
        return (
            <>
                <div className="headerroundentry">
                    <div className='g'></div>
                    <div className='displayflex'>
                        <p className='active click' onClick={backtoone}>1. Round Details</p>
                        <p className='active'>2. Shot Data</p>
                        <p className='inactive'>3. Round Analysis</p>
                    </div>
                    <h1>Add Shots</h1>
                    <div class="scorecard">
                        <table>
                            <thead>
                                <tr>
                                    <th>Hole</th>
                                    {holes === 9 ?
                                        <>
                                            <th className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")} onClick={() => navigateholes(1)}>1</th>
                                            <th className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")} onClick={() => navigateholes(2)}>2</th>
                                            <th className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")} onClick={() => navigateholes(3)}>3</th>
                                            <th className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")} onClick={() => navigateholes(4)}>4</th>
                                            <th className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")} onClick={() => navigateholes(5)}>5</th>
                                            <th className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")} onClick={() => navigateholes(6)}>6</th>
                                            <th className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")} onClick={() => navigateholes(7)}>7</th>
                                            <th className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")} onClick={() => navigateholes(8)}>8</th>
                                            <th className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")} onClick={() => navigateholes(9)}>9</th>
                                        </>
                                        :
                                        <>
                                            <th className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")} onClick={() => navigateholes(1)}>1</th>
                                            <th className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")} onClick={() => navigateholes(2)}>2</th>
                                            <th className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")} onClick={() => navigateholes(3)}>3</th>
                                            <th className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")} onClick={() => navigateholes(4)}>4</th>
                                            <th className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")} onClick={() => navigateholes(5)}>5</th>
                                            <th className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")} onClick={() => navigateholes(6)}>6</th>
                                            <th className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")} onClick={() => navigateholes(7)}>7</th>
                                            <th className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")} onClick={() => navigateholes(8)}>8</th>
                                            <th className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")} onClick={() => navigateholes(9)}>9</th>
                                            <th>Front</th>
                                            <th className={currenthole === 10 ? "Highlighted" : (currenthole > 10 ? "click" : "")} onClick={() => navigateholes(10)}>10</th>
                                            <th className={currenthole === 11 ? "Highlighted" : (currenthole > 11 ? "click" : "")} onClick={() => navigateholes(11)}>11</th>
                                            <th className={currenthole === 12 ? "Highlighted" : (currenthole > 12 ? "click" : "")} onClick={() => navigateholes(12)}>12</th>
                                            <th className={currenthole === 13 ? "Highlighted" : (currenthole > 13 ? "click" : "")} onClick={() => navigateholes(13)}>13</th>
                                            <th className={currenthole === 14 ? "Highlighted" : (currenthole > 14 ? "click" : "")} onClick={() => navigateholes(14)}>14</th>
                                            <th className={currenthole === 15 ? "Highlighted" : (currenthole > 15 ? "click" : "")} onClick={() => navigateholes(15)}>15</th>
                                            <th className={currenthole === 16 ? "Highlighted" : (currenthole > 16 ? "click" : "")} onClick={() => navigateholes(16)}>16</th>
                                            <th className={currenthole === 17 ? "Highlighted" : (currenthole > 17 ? "click" : "")} onClick={() => navigateholes(17)}>17</th>
                                            <th className={currenthole === 18 ? "Highlighted" : (currenthole > 18 ? "click" : "")} onClick={() => navigateholes(18)}>18</th>

                                            <th>Back</th>
                                        </>
                                    }
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Par</td>
                                    {holes === 9 ?
                                        <>
                                            <td className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")} onClick={() => navigateholes(1)}>{onepar}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")} onClick={() => navigateholes(2)}>{twopar}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")} onClick={() => navigateholes(3)}>{threepar}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")} onClick={() => navigateholes(4)}>{fourpar}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")} onClick={() => navigateholes(5)}>{fivepar}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")} onClick={() => navigateholes(6)}>{sixpar}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")} onClick={() => navigateholes(7)}>{sevenpar}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")} onClick={() => navigateholes(8)}>{eightpar}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")} onClick={() => navigateholes(9)}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                        </>
                                        :
                                        <>
                                            <td className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")} onClick={() => navigateholes(1)}>{onepar}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")} onClick={() => navigateholes(2)}>{twopar}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")} onClick={() => navigateholes(3)}>{threepar}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")} onClick={() => navigateholes(4)}>{fourpar}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")} onClick={() => navigateholes(5)}>{fivepar}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")} onClick={() => navigateholes(6)}>{sixpar}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")} onClick={() => navigateholes(7)}>{sevenpar}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")} onClick={() => navigateholes(8)}>{eightpar}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")} onClick={() => navigateholes(9)}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                            <td className={currenthole === 10 ? "Highlighted" : (currenthole > 10 ? "click" : "")} onClick={() => navigateholes(10)}>{tenpar}</td>
                                            <td className={currenthole === 11 ? "Highlighted" : (currenthole > 11 ? "click" : "")} onClick={() => navigateholes(11)}>{elevenpar}</td>
                                            <td className={currenthole === 12 ? "Highlighted" : (currenthole > 12 ? "click" : "")} onClick={() => navigateholes(12)}>{twelvepar}</td>
                                            <td className={currenthole === 13 ? "Highlighted" : (currenthole > 13 ? "click" : "")} onClick={() => navigateholes(13)}>{thirteenpar}</td>
                                            <td className={currenthole === 14 ? "Highlighted" : (currenthole > 14 ? "click" : "")} onClick={() => navigateholes(14)}>{fourteenpar}</td>
                                            <td className={currenthole === 15 ? "Highlighted" : (currenthole > 15 ? "click" : "")} onClick={() => navigateholes(15)}>{fifteenpar}</td>
                                            <td className={currenthole === 16 ? "Highlighted" : (currenthole > 16 ? "click" : "")} onClick={() => navigateholes(16)}>{sixteenpar}</td>
                                            <td className={currenthole === 17 ? "Highlighted" : (currenthole > 17 ? "click" : "")} onClick={() => navigateholes(17)}>{seventeenpar}</td>
                                            <td className={currenthole === 18 ? "Highlighted" : (currenthole > 18 ? "click" : "")} onClick={() => navigateholes(18)}>{eighteenpar}</td>
                                            <td className='bold'>{backpar}</td>
                                            <td className='bold'>{totalpar}</td>
                                        </>

                                    }




                                </tr>
                                <tr>
                                    <td>Score</td>
                                    {holes === 9 ?
                                        <>
                                            <td className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")}>{onescore}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")}>{twoscore}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")}>{threescore}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")}>{fourscore}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")}>{fivescore}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")}>{sixscore}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")}>{sevenscore}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")}>{eightscore}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")}>{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                        </>
                                        :
                                        <>
                                            <td className={currenthole === 1 ? "Highlighted" : (currenthole > 1 ? "click" : "")}>{onescore}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : (currenthole > 2 ? "click" : "")}>{twoscore}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : (currenthole > 3 ? "click" : "")}>{threescore}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : (currenthole > 4 ? "click" : "")}>{fourscore}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : (currenthole > 5 ? "click" : "")}>{fivescore}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : (currenthole > 6 ? "click" : "")}>{sixscore}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : (currenthole > 7 ? "click" : "")}>{sevenscore}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : (currenthole > 8 ? "click" : "")}>{eightscore}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : (currenthole > 9 ? "click" : "")}>{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                            <td className={currenthole === 10 ? "Highlighted" : (currenthole > 10 ? "click" : "")}>{tenscore}</td>
                                            <td className={currenthole === 11 ? "Highlighted" : (currenthole > 11 ? "click" : "")}>{elevenscore}</td>
                                            <td className={currenthole === 12 ? "Highlighted" : (currenthole > 12 ? "click" : "")}>{twelvescore}</td>
                                            <td className={currenthole === 13 ? "Highlighted" : (currenthole > 13 ? "click" : "")}>{thirteenscore}</td>
                                            <td className={currenthole === 14 ? "Highlighted" : (currenthole > 14 ? "click" : "")}>{fourteenscore}</td>
                                            <td className={currenthole === 15 ? "Highlighted" : (currenthole > 15 ? "click" : "")}>{fifteenscore}</td>
                                            <td className={currenthole === 16 ? "Highlighted" : (currenthole > 16 ? "click" : "")}>{sixteenscore}</td>
                                            <td className={currenthole === 17 ? "Highlighted" : (currenthole > 17 ? "click" : "")}>{seventeenscore}</td>
                                            <td className={currenthole === 18 ? "Highlighted" : (currenthole > 18 ? "click" : "")}>{eighteenscore}</td>
                                            <td className='bold'>{backscore}</td>
                                            <td className='bold'>{totalscore}</td>
                                        </>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='formmm'>
                    <div className='s'></div>
                    {currenthole === 1 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeonepar' id='hole-one-par-3' value={3} onChange={handleOneParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeonepar' id='hole-one-par-4' value={4} onChange={handleOneParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeonepar' id='hole-one-par-5' value={5} onChange={handleOneParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: onescore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleOne(index, event)} value={oneshots[index].startingLie} >
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeOneDistance(index, event)} value={oneshots[index].distanceToHole} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleOne}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleOne}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 2 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holetwopar' id='hole-two-par-3' value={3} onChange={handleTwoParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holetwopar' id='hole-two-par-4' value={4} onChange={handleTwoParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holetwopar' id='hole-two-par-5' value={5} onChange={handleTwoParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: twoscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleTwo(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeTwoDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleTwo}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleTwo}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 3 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holethreepar' id='hole-three-par-3' value={3} onChange={handleThreeParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holethreepar' id='hole-three-par-4' value={4} onChange={handleThreeParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holethreepar' id='hole-three-par-5' value={5} onChange={handleThreeParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: threescore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleThree(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeThreeDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleThree}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleThree}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 4 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holefourpar' id='hole-four-par-3' value={3} onChange={handleFourParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holefourpar' id='hole-four-par-4' value={4} onChange={handleFourParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holefourpar' id='hole-four-par-5' value={5} onChange={handleFourParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: fourscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleFour(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeFourDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleFour}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleFour}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 5 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holefivepar' id='hole-five-par-3' value={3} onChange={handleFiveParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holefivepar' id='hole-five-par-4' value={4} onChange={handleFiveParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holefivepar' id='hole-five-par-5' value={5} onChange={handleFiveParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: fivescore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleFive(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeFiveDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleFive}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleFive}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 6 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holesixpar' id='hole-six-par-3' value={3} onChange={handleSixParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holesixpar' id='hole-six-par-4' value={4} onChange={handleSixParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holesixpar' id='hole-six-par-5' value={5} onChange={handleSixParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: sixscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleSix(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeSixDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleSix}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleSix}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 7 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holesevenpar' id='hole-seven-par-3' value={3} onChange={handleSevenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holesevenpar' id='hole-seven-par-4' value={4} onChange={handleSevenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holesevenpar' id='hole-seven-par-5' value={5} onChange={handleSevenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: sevenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleSeven(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeSevenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleSeven}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleSeven}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 8 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeeightpar' id='hole-eight-par-3' value={3} onChange={handleEightParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeeightpar' id='hole-eight-par-4' value={4} onChange={handleEightParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeeightpar' id='hole-eight-par-5' value={5} onChange={handleEightParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: eightscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleEight(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeEightDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleEight}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleEight}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 9 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeninepar' id='hole-nine-par-3' value={3} onChange={handleNineParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeninepar' id='hole-nine-par-4' value={4} onChange={handleNineParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeninepar' id='hole-nine-par-5' value={5} onChange={handleNineParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: ninescore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleNine(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeNineDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleNine}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleNine}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    {holes === 9
                                        ? <button onClick={finishround} className="nexthole">Finish Round<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                        : <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                    }
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 10 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holetenpar' id='hole-ten-par-3' value={3} onChange={handleTenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holetenpar' id='hole-ten-par-4' value={4} onChange={handleTenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holetenpar' id='hole-ten-par-5' value={5} onChange={handleTenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: tenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleTen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeTenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleTen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleTen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 11 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeelevenpar' id='hole-eleven-par-3' value={3} onChange={handleElevenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeelevenpar' id='hole-eleven-par-4' value={4} onChange={handleElevenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeelevenpar' id='hole-eleven-par-5' value={5} onChange={handleElevenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: elevenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleEleven(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeElevenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleEleven}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleEleven}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 12 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holetwelvepar' id='hole-twelve-par-3' value={3} onChange={handleTwelveParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holetwelvepar' id='hole-twelve-par-4' value={4} onChange={handleTwelveParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holetwelvepar' id='hole-twelve-par-5' value={5} onChange={handleTwelveParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: twelvescore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleTwelve(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeTwelveDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleTwelve}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleTwelve}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 13 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holethirteenpar' id='hole-thirteen-par-3' value={3} onChange={handleThirteenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holethirteenpar' id='hole-thirteen-par-4' value={4} onChange={handleThirteenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holethirteenpar' id='hole-thirteen-par-5' value={5} onChange={handleThirteenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: thirteenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleThirteen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeThirteenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleThirteen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleThirteen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 14 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holefourteenpar' id='hole-fourteen-par-3' value={3} onChange={handleFourteenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holefourteenpar' id='hole-fourteen-par-4' value={4} onChange={handleFourteenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holefourteenpar' id='hole-fourteen-par-5' value={5} onChange={handleFourteenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: fourteenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleFourteen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeFourteenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleFourteen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleFourteen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 15 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holefifteenpar' id='hole-fifteen-par-3' value={3} onChange={handleFifteenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holefifteenpar' id='hole-fifteen-par-4' value={4} onChange={handleFifteenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holefifteenpar' id='hole-fifteen-par-5' value={5} onChange={handleFifteenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: fifteenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleFifteen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeFifteenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleFifteen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleFifteen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 16 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holesixteenpar' id='hole-sixteen-par-3' value={3} onChange={handleSixteenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holesixteenpar' id='hole-sixteen-par-4' value={4} onChange={handleSixteenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holesixteenpar' id='hole-sixteen-par-5' value={5} onChange={handleSixteenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: sixteenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleSixteen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeSixteenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleSixteen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleSixteen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 17 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeseventeenpar' id='hole-seventeen-par-3' value={3} onChange={handleSeventeenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeseventeenpar' id='hole-seventeen-par-4' value={4} onChange={handleSeventeenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeseventeenpar' id='hole-seventeen-par-5' value={5} onChange={handleSeventeenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: seventeenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleSeventeen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeSeventeenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleSeventeen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleSeventeen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                    {currenthole === 18 && (
                        <div className='hole1'>
                            <h4>Add Shots</h4>
                            <form>
                                <div className='parselector'>
                                    <input type="radio" name='holeeighteenpar' id='hole-eighteen-par-3' value={3} onChange={handleEighteenParChange} />
                                    <label >Par 3</label>
                                    <input type="radio" name='holeeighteenpar' id='hole-eighteen-par-4' value={4} onChange={handleEighteenParChange} />
                                    <label>Par 4</label>
                                    <input type="radio" name='holeeighteenpar' id='hole-eighteen-par-5' value={5} onChange={handleEighteenParChange} />
                                    <label>Par 5</label> <br />
                                </div>
                                <div className='descriptions'>
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                </div>
                                {Array.from({ length: eighteenscore }).map((_, index) => (
                                    <div key={index}>
                                        <select name={`shotType${index}`} onChange={(event) => changeHoleEighteen(index)}>
                                            <option>Tee</option>
                                            <option>Fairway</option>
                                            <option>Green</option>
                                            <option>Sand</option>
                                            <option>Rough</option>
                                        </select>
                                        <input type="number" name={`shotSize${index}`} onChange={(event) => changeholeEighteenDistance(event, index)} />
                                    </div>
                                ))}
                                <div className='buttoncontainer'>
                                    <button onClick={handleRemoveShotHoleEighteen}>Remove Shot</button> <br />
                                    <button onClick={handleAddShotHoleEighteen}>Add Shot</button>
                                </div>
                                <div>
                                    <button onClick={toprevhole} className="previoushole"><FontAwesomeIcon icon={faArrowLeft} className="fai" />Previous Hole</button>
                                    <button onClick={finishround} className="nexthole">Finish Round<FontAwesomeIcon icon={faArrowRight} className="fai" /></button>
                                </div>
                            </form>
                        </div>)}
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="headerroundentry">
                    <div className='g'></div>
                    <div className='displayflex'>
                        <p className='active click' onClick={backtoone}>1. Round Details</p>
                        <p className='active click' onClick={backtotwo}>2. Shot Data</p>
                        <p className='active'>3. Round Analysis</p>
                    </div>
                    <h1>Round Analysis</h1>
                    <div class="scorecard">
                        <table>
                            <thead>
                                <tr>
                                    <th>Hole</th>
                                    {holes === 9 ?
                                        <>
                                            <th className="click" onClick={() => navigateholes(1)}>1</th>
                                            <th className="click" onClick={() => navigateholes(2)}>2</th>
                                            <th className="click" onClick={() => navigateholes(3)}>3</th>
                                            <th className="click" onClick={() => navigateholes(4)}>4</th>
                                            <th className="click" onClick={() => navigateholes(5)}>5</th>
                                            <th className="click" onClick={() => navigateholes(6)}>6</th>
                                            <th className="click" onClick={() => navigateholes(7)}>7</th>
                                            <th className="click" onClick={() => navigateholes(8)}>8</th>
                                            <th className="click" onClick={() => navigateholes(9)}>9</th>
                                        </>
                                        :
                                        <>
                                            <th className="click" onClick={() => navigateholes(1)}>1</th>
                                            <th className="click" onClick={() => navigateholes(2)}>2</th>
                                            <th className="click" onClick={() => navigateholes(3)}>3</th>
                                            <th className="click" onClick={() => navigateholes(4)}>4</th>
                                            <th className="click" onClick={() => navigateholes(5)}>5</th>
                                            <th className="click" onClick={() => navigateholes(6)}>6</th>
                                            <th className="click" onClick={() => navigateholes(7)}>7</th>
                                            <th className="click" onClick={() => navigateholes(8)}>8</th>
                                            <th className="click" onClick={() => navigateholes(9)}>9</th>
                                            <th>Front</th>
                                            <th className="click" onClick={() => navigateholes(10)}>10</th>
                                            <th className="click" onClick={() => navigateholes(11)}>11</th>
                                            <th className="click" onClick={() => navigateholes(12)}>12</th>
                                            <th className="click" onClick={() => navigateholes(13)}>13</th>
                                            <th className="click" onClick={() => navigateholes(14)}>14</th>
                                            <th className="click" onClick={() => navigateholes(15)}>15</th>
                                            <th className="click" onClick={() => navigateholes(16)}>16</th>
                                            <th className="click" onClick={() => navigateholes(17)}>17</th>
                                            <th className="click" onClick={() => navigateholes(18)}>18</th>
                                            <th>Back</th>
                                        </>
                                    }
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Par</td>
                                    {holes === 9 ?
                                        <>
                                            <td className="click" onClick={() => navigateholes(1)}>{onepar}</td>
                                            <td className="click" onClick={() => navigateholes(2)}>{twopar}</td>
                                            <td className="click" onClick={() => navigateholes(3)}>{threepar}</td>
                                            <td className="click" onClick={() => navigateholes(4)}>{fourpar}</td>
                                            <td className="click" onClick={() => navigateholes(5)}>{fivepar}</td>
                                            <td className="click" onClick={() => navigateholes(6)}>{sixpar}</td>
                                            <td className="click" onClick={() => navigateholes(7)}>{sevenpar}</td>
                                            <td className="click" onClick={() => navigateholes(8)}>{eightpar}</td>
                                            <td className="click" onClick={() => navigateholes(9)}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                        </>
                                        :
                                        <>
                                            <td className="click" onClick={() => navigateholes(1)}>{onepar}</td>
                                            <td className="click" onClick={() => navigateholes(2)}>{twopar}</td>
                                            <td className="click" onClick={() => navigateholes(3)}>{threepar}</td>
                                            <td className="click" onClick={() => navigateholes(4)}>{fourpar}</td>
                                            <td className="click" onClick={() => navigateholes(5)}>{fivepar}</td>
                                            <td className="click" onClick={() => navigateholes(6)}>{sixpar}</td>
                                            <td className="click" onClick={() => navigateholes(7)}>{sevenpar}</td>
                                            <td className="click" onClick={() => navigateholes(8)}>{eightpar}</td>
                                            <td className="click" onClick={() => navigateholes(9)}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                            <td className="click" onClick={() => navigateholes(10)}>{tenpar}</td>
                                            <td className="click" onClick={() => navigateholes(11)}>{elevenpar}</td>
                                            <td className="click" onClick={() => navigateholes(12)}>{twelvepar}</td>
                                            <td className="click" onClick={() => navigateholes(13)}>{thirteenpar}</td>
                                            <td className="click" onClick={() => navigateholes(14)}>{fourteenpar}</td>
                                            <td className="click" onClick={() => navigateholes(15)}>{fifteenpar}</td>
                                            <td className="click" onClick={() => navigateholes(16)}>{sixteenpar}</td>
                                            <td className="click" onClick={() => navigateholes(17)}>{seventeenpar}</td>
                                            <td className="click" onClick={() => navigateholes(18)}>{eighteenpar}</td>
                                            <td className='bold'>{backpar}</td>
                                            <td className='bold'>{totalpar}</td>
                                        </>
                                    }
                                </tr>
                                <tr>
                                    <td>Score</td>
                                    {holes === 9 ?
                                        <>
                                            <td className="click">{onescore}</td>
                                            <td className="click">{twoscore}</td>
                                            <td className="click">{threescore}</td>
                                            <td className="click">{fourscore}</td>
                                            <td className="click">{fivescore}</td>
                                            <td className="click">{sixscore}</td>
                                            <td className="click">{sevenscore}</td>
                                            <td className="click">{eightscore}</td>
                                            <td className="click">{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                        </>
                                        :
                                        <>
                                            <td className="click">{onescore}</td>
                                            <td className="click">{twoscore}</td>
                                            <td className="click">{threescore}</td>
                                            <td className="click">{fourscore}</td>
                                            <td className="click">{fivescore}</td>
                                            <td className="click">{sixscore}</td>
                                            <td className="click">{sevenscore}</td>
                                            <td className="click">{eightscore}</td>
                                            <td className="click">{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                            <td className="click">{tenscore}</td>
                                            <td className="click">{elevenscore}</td>
                                            <td className="click">{twelvescore}</td>
                                            <td className="click">{thirteenscore}</td>
                                            <td className="click">{fourteenscore}</td>
                                            <td className="click">{fifteenscore}</td>
                                            <td className="click">{sixteenscore}</td>
                                            <td className="click">{seventeenscore}</td>
                                            <td className="click">{eighteenscore}</td>
                                            <td className='bold'>{backscore}</td>
                                            <td className='bold'>{totalscore}</td>
                                        </>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='statscontainer'>
                    <div className='gridd'>
                        <div className='graph'>
                            <Radar data={data} options={options} />
                        </div>
                        <div className='analysis'>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Total SG</th>
                                        <th>SG Putting</th>
                                        <th>SG Short Game</th>
                                        <th>SG Approach</th>
                                        <th>SG Driving</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>This Round</td>
                                        <td>{/* totalsg */}</td>
                                        <td>{/* totalsgputting */}</td>
                                        <td>{/* totalsgshortgame */}</td>
                                        <td>{/* totalsgapproach */}</td>
                                        <td>{/* totalsgdriving */}</td>
                                    </tr>
                                    <tr>
                                        <td>PGA Tour Player Average</td>
                                        <td>{/*Find the data here */}</td>
                                    </tr>
                                    <tr>
                                        <td>Gap</td>
                                        <td>{/* Find the Difference Here*/}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='buttoncontainer2'>
                        <p className={statshowing === "putting" ? "active2" : ""} onClick={() => setstatshowing('putting')}>Putting</p>
                        <p className={statshowing === "shortgame" ? "active2" : ""} onClick={() => setstatshowing('shortgame')}>Short Game</p>
                        <p className={statshowing === "approach" ? "active2" : ""} onClick={() => setstatshowing("approach")}>Approach</p>
                        <p className={statshowing === "driving" ? "active2" : ""} onClick={() => setstatshowing("driving")}>Driving</p>
                        <p onClick={()=>{strokesgainedholeone([{ startingLie: "Tee", distanceToHole: 0 }])}}>Function Tester</p>
                        <p>{totalputtingsg}</p>
                    </div>
                    {statshowing === "putting" && (
                        <div>
                            putting
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
                </div>
            </>
        )
    }
}