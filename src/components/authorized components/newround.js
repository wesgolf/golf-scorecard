import { useState, useEffect } from 'react'
import '../../Styles/newround.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faCircleQuestion} from "@fortawesome/free-solid-svg-icons";

export default function Newround() {
    {/*General Form Logic */ }
    const [page, setPage] = useState(1)

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


    {/* Alerts to help user */}

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

    {/* Part 3 Logic */ }
    {/* The Strokes Gained Database */ }
    const tee = { 100: 2.92, 120: 2.99, 140: 2.97, 160: 2.99, 180: 3.05, 200: 3.12, 220: 3.17, 240: 3.25, 260: 3.45, 280: 3.65, 300: 3.71, 320: 3.79, 340: 3.86, 360: 3.92, 380: 3.96, 400: 3.99, 420: 4.02, 440: 4.08, 460: 4.17, 480: 4.28, 500: 4.41, 520: 4.54, 540: 4.65, 560: 4.74, 580: 4.79, 600: 4.82 }
    const green = { 1: 1.04, 2: 1.04, 3: 1.04, 4: 1.13, 5: 1.23, 6: 1.34, 7: 1.42, 8: 1.50, 9: 1.56, 10: 1.61, 11: 1.61, 12: 1.61, 13: 1.61, 14: 1.61, 15: 1.78, 16: 1.78, 17: 1.78, 18: 1.78, 19: 1.78, 20: 1.87, 21: 1.87, 22: 1.87, 23: 1.87, 24: 1.87, 25: 1.87, 26: 1.87, 27: 1.87, 28: 1.87, 29: 1.87, 30: 1.98, 31: 1.98, 32: 1.98, 33: 1.98, 34: 1.98, 35: 1.98, 36: 1.98, 37: 1.98, 38: 1.98, 39: 2.06, 40: 2.14, 41: 2.14, 42: 2.14, 43: 2.14, 44: 2.14, 45: 2.14, 46: 2.14, 47: 2.14, 48: 2.14, 49: 2.14, 50: 2.21, 51: 2.21, 52: 2.21, 53: 2.21, 54: 2.21, 55: 2.21, 56: 2.21, 57: 2.21, 58: 2.21, 59: 2.21, 60: 2.40, 61: 2.40, 62: 2.40, 63: 2.40, 64: 2.40, 65: 2.40, 66: 2.40, 67: 2.40, 68: 2.40, 69: 2.40, 70: 2.40, 71: 2.40, 72: 2.40, 73: 2.40, 74: 2.40, 75: 2.40, 76: 2.40, 77: 2.40, 78: 2.40, 79: 2.40, 80: 2.40, 81: 2.40, 82: 2.40, 80: 2.31, 81: 2.32, 82: 2.33, 83: 2.34, 84: 2.35, 85: 2.36, 86: 2.37, 87: 2.38, 88: 2.39, 89: 2.39, 90: 2.40, 91: 2.41, 92: 2.42, 93: 2.43, 94: 2.44, 95: 2.45, 96: 2.46, 97: 2.47, 98: 2.48, 99: 2.49, 100: 2.50 }
    const sand = {}
    const rough = {}
    const fairway = {}


    {/*Seting the strokes gained states */ }
    const [onesgputting, setonesgputting] = useState(0)
    const [onesgshortgame, setonesgshortgame] = useState(0)
    const [onesgapproach, setonesgapproach] = useState(0)
    const [onesgtee, setonesgtee] = useState(0)

    function strokesgainedholeone(dict) {
        const values = Object.values(dict);
        const numValues = values.length;
        for (let i = numValues - 1; i >= 0; i--) {
            const lie = dict[i].startingLie;
            if (i === numValues - 1) {
                const distance = dict[i].distanceToHole
                if (lie === "Tee") {
                    setonesgtee(tee[distance] - 1 + onesgtee)
                    alert("Hole in One!!")
                } if (distance <= 50 && lie !== "Green") {
                    if (lie === "Rough") {
                        setonesgshortgame(rough[distance] - 1 + onesgshortgame)
                    } else if (lie === "Fairway") {
                        setonesgshortgame(fairway[distance] - 1 + onesgshortgame)
                    } else if (lie === "Sand") {
                        setonesgshortgame(sand[distance] - 1 + onesgshortgame)
                    }
                }
                else if (lie === "Fairway") {
                    setonesgapproach(fairway[distance] - 1 + onesgapproach)
                } else if (lie === "Rough") {
                    setonesgapproach(rough[distance] - 1 + onesgapproach)
                } else if (lie === "Sand") {
                    setonesgapproach(sand[distance] - 1 + onesgapproach)
                } else {
                    setonesgputting(green[distance] - 1 + onesgputting)
                }
            } else {
                const plusonelie = dict[i + 1].startingLie
                const plusonedistance = dict[i + 1].distanceToHole
                const plusonesg = 0
                if (plusonelie === "Green") {
                    const plusonesg = green[plusonedistance]
                } else if (plusonelie === "Rough") {
                    const plusonesg = rough[plusonedistance]
                } else if (plusonelie === "Fairway") {
                    const plusonesg = fairway[plusonedistance]
                } else if (plusonelie === "Sand") {
                    const plusonesg = sand[plusonedistance]
                }
                const currentlie = dict[i].startingLie
                const distance = dict[i].distanceToHole
                if (distance <= 50 && currentlie !== "Green") {
                    if (currentlie === "Rough") {
                        const currentsg = rough[distance]
                        setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                    } else if (currentlie === "Fairway") {
                        const currentsg = fairway[distance]
                        setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                    } else if (currentlie === "Sand") {
                        const currentsg = sand[distance]
                        setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                    }
                }
                else if (currentlie === "Green") {
                    const currentsg = green[distance]
                    setonesgputting(currentsg - plusonesg - 1 + onesgputting)
                } else if (currentlie === "Tee") {
                    const currentsg = tee[distance]
                    setonesgtee(currentsg - plusonesg - 1 + onesgtee)
                } else if (currentlie === "Rough") {
                    const currentsg = rough[distance]
                    setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                } else if (currentlie === "Fairway") {
                    const currentsg = fairway[distance]
                    setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                } else if (currentlie === "Sand") {
                    const currentsg = sand[distance]
                    setonesgapproach(currentsg - plusonesg - 1 + onesgapproach)
                }
            }
        }
    }



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
                                            <th className={currenthole === 1 ? "Highlighted" : ""}>1</th>
                                            <th className={currenthole === 2 ? "Highlighted" : ""}>2</th>
                                            <th className={currenthole === 3 ? "Highlighted" : ""}>3</th>
                                            <th className={currenthole === 4 ? "Highlighted" : ""}>4</th>
                                            <th className={currenthole === 5 ? "Highlighted" : ""}>5</th>
                                            <th className={currenthole === 6 ? "Highlighted" : ""}>6</th>
                                            <th className={currenthole === 7 ? "Highlighted" : ""}>7</th>
                                            <th className={currenthole === 8 ? "Highlighted" : ""}>8</th>
                                            <th className={currenthole === 9 ? "Highlighted" : ""}>9</th>
                                        </>
                                        :
                                        <>
                                            <th className={currenthole === 1 ? "Highlighted" : ""}>1</th>
                                            <th className={currenthole === 2 ? "Highlighted" : ""}>2</th>
                                            <th className={currenthole === 3 ? "Highlighted" : ""}>3</th>
                                            <th className={currenthole === 4 ? "Highlighted" : ""}>4</th>
                                            <th className={currenthole === 5 ? "Highlighted" : ""}>5</th>
                                            <th className={currenthole === 6 ? "Highlighted" : ""}>6</th>
                                            <th className={currenthole === 7 ? "Highlighted" : ""}>7</th>
                                            <th className={currenthole === 8 ? "Highlighted" : ""}>8</th>
                                            <th className={currenthole === 9 ? "Highlighted" : ""}>9</th>
                                            <th>Front</th>
                                            <th className={currenthole === 10 ? "Highlighted" : ""}>10</th>
                                            <th className={currenthole === 11 ? "Highlighted" : ""}>11</th>
                                            <th className={currenthole === 12 ? "Highlighted" : ""}>12</th>
                                            <th className={currenthole === 13 ? "Highlighted" : ""}>13</th>
                                            <th className={currenthole === 14 ? "Highlighted" : ""}>14</th>
                                            <th className={currenthole === 15 ? "Highlighted" : ""}>15</th>
                                            <th className={currenthole === 16 ? "Highlighted" : ""}>16</th>
                                            <th className={currenthole === 17 ? "Highlighted" : ""}>17</th>
                                            <th className={currenthole === 18 ? "Highlighted" : ""}>18</th>

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
                                            <td className={currenthole === 1 ? "Highlighted" : ""}>{onepar}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : ""}>{twopar}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : ""}>{threepar}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : ""}>{fourpar}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : ""}>{fivepar}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : ""}>{sixpar}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : ""}>{sevenpar}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : ""}>{eightpar}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : ""}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                        </>
                                        :
                                        <>
                                            <td className={currenthole === 1 ? "Highlighted" : ""}>{onepar}</td>
                                            <td className={currenthole === 2 ? "Highlighted" : ""}>{twopar}</td>
                                            <td className={currenthole === 3 ? "Highlighted" : ""}>{threepar}</td>
                                            <td className={currenthole === 4 ? "Highlighted" : ""}>{fourpar}</td>
                                            <td className={currenthole === 5 ? "Highlighted" : ""}>{fivepar}</td>
                                            <td className={currenthole === 6 ? "Highlighted" : ""}>{sixpar}</td>
                                            <td className={currenthole === 7 ? "Highlighted" : ""}>{sevenpar}</td>
                                            <td className={currenthole === 8 ? "Highlighted" : ""}>{eightpar}</td>
                                            <td className={currenthole === 9 ? "Highlighted" : ""}>{ninepar}</td>
                                            <td className='bold'>{frontpar}</td>
                                            <td className={currenthole === 10 ? "Highlighted" : ""}>{tenpar}</td>
                                            <td className={currenthole === 11 ? "Highlighted" : ""}>{elevenpar}</td>
                                            <td className={currenthole === 12 ? "Highlighted" : ""}>{twelvepar}</td>
                                            <td className={currenthole === 13 ? "Highlighted" : ""}>{thirteenpar}</td>
                                            <td className={currenthole === 14 ? "Highlighted" : ""}>{fourteenpar}</td>
                                            <td className={currenthole === 15 ? "Highlighted" : ""}>{fifteenpar}</td>
                                            <td className={currenthole === 16 ? "Highlighted" : ""}>{sixteenpar}</td>
                                            <td className={currenthole === 17 ? "Highlighted" : ""}>{seventeenpar}</td>
                                            <td className={currenthole === 18 ? "Highlighted" : ""}>{eighteenpar}</td>
                                            <td className='bold'>{backpar}</td>
                                            <td className='bold'>{totalpar}</td>
                                        </>

                                    }




                                </tr>
                                <tr>
                                    <td>Score</td>
                                    {holes === 9 ?
                                        <>
                                            <td>{onescore}</td>
                                            <td>{twoscore}</td>
                                            <td>{threescore}</td>
                                            <td>{fourscore}</td>
                                            <td>{fivescore}</td>
                                            <td>{sixscore}</td>
                                            <td>{sevenscore}</td>
                                            <td>{eightscore}</td>
                                            <td>{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                        </>
                                        :
                                        <>
                                            <td>{onescore}</td>
                                            <td>{twoscore}</td>
                                            <td>{threescore}</td>
                                            <td>{fourscore}</td>
                                            <td>{fivescore}</td>
                                            <td>{sixscore}</td>
                                            <td>{sevenscore}</td>
                                            <td>{eightscore}</td>
                                            <td>{ninescore}</td>
                                            <td className='bold'>{frontscore}</td>
                                            <td>{tenscore}</td>
                                            <td>{elevenscore}</td>
                                            <td>{twelvescore}</td>
                                            <td>{thirteenscore}</td>
                                            <td>{fourteenscore}</td>
                                            <td>{fifteenscore}</td>
                                            <td>{sixteenscore}</td>
                                            <td>{seventeenscore}</td>
                                            <td>{eighteenscore}</td>
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
                                    <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie}/></p>
                                    <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance}/></p>
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
                                    <button onClick={tonexthole} className="nexthole">Next Hole<FontAwesomeIcon icon={faArrowRight} className="fai"/></button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="previoushole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="previoushole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="previoushole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    {holes === 9
                                        ? <button onClick={finishround} className="finishround">Finish Round</button>
                                        : <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={tonexthole} className="nexthole">Next Hole</button>
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
                                    <p>Starting Lie</p>
                                    <p>Distance to Hole</p>
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
                                    <button onClick={toprevhole} className="nexthole">Previous Hole</button>
                                    <button onClick={finishround} className="nexthole">Finish Round</button>
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
                </div>
                <button onClick={(event) => strokesgainedholeone(oneshots)}>Strokes Gained</button>
            </>
        )
    }
}