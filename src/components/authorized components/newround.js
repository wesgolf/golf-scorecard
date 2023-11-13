/* React Imports */
import { useState } from "react";

/* Component Imports */
import Authnavbar from "./authnavbar";

/* Style Import */
import '../../Styles/newround.css'

/* FA Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Newround() {
    /* Navigation States */
    const [part, setPart] = useState(1)
    const [hole, setHole] = useState(0)
    const [holes, setHoles] = useState(18)

    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")

    const [errors, setErrors] = useState({})

    const [analysisSelect, setAnalysisSelect] = useState("tee")
    function firstPartFormSubmit(event) {
        event.preventDefault()
        const newErrors = {}
        if (course.length < 1) {
            newErrors.course = "Please enter a valid course name"
        }
        if (date.length < 1) {
            newErrors.date = "Please enter a valid date"
        }
        if (Object.keys(newErrors).length === 0) {
            setHole(1)
            setPart(2)
            setErrors({})
        } else {
            setErrors(newErrors)
        }
    }

    function handleHoleChange(number) {
        if (hole > number) {
            setHole(number)
        }
    }

    /* Alerts to help user */
    function helpstartinglie() { alert("The starting lie is where on the golf course you took your shot from. For example, your first shot would be from the Tee, as this is the starting lie for your first shot.") }
    function helpdistance() { alert("The distance to hole is the distance to th hole that you had for your shot. For example, your first shot's distance to hole should be the length of the hole, as this is the distance to the hole from the starting position of the shot.") }

    function transformToDigit(int) {
        if (int === 1) {
            return "one"
        } else if (int === 2) {
            return "two"
        } else if (int === 3) {
            return "three"
        } else if (int === 4) {
            return "four"
        } else if (int === 5) {
            return "five"
        } else if (int === 6) {
            return "six"
        } else if (int === 7) {
            return "seven"
        } else if (int === 8) {
            return "eight"
        } else if (int === 9) {
            return "nine"
        } else if (int === 10) {
            return "ten"
        } else if (int === 11) {
            return "eleven"
        } else if (int === 12) {
            return "twelve"
        } else if (int === 13) {
            return "thirteen"
        } else if (int === 14) {
            return "fourteen"
        } else if (int === 15) {
            return "fifteen"
        } else if (int === 16) {
            return "sixteen"
        } else if (int === 17) {
            return "seventeen"
        } else if (int === 18) {
            return "eighteen"
        }
    }


    /* Par States */
    const [onePar, setOnePar] = useState(4)
    const [twoPar, setTwoPar] = useState(4)
    const [threePar, setThreePar] = useState(4)
    const [fourPar, setFourPar] = useState(4)
    const [fivePar, setFivePar] = useState(4)
    const [sixPar, setSixPar] = useState(4)
    const [sevenPar, setSevenPar] = useState(4)
    const [eightPar, setEightPar] = useState(4)
    const [ninePar, setNinePar] = useState(4)
    const [tenPar, setTenPar] = useState(4)
    const [elevenPar, setElevenPar] = useState(4)
    const [twelvePar, setTwelvePar] = useState(4)
    const [thirteenPar, setThirteenPar] = useState(4)
    const [fourteenPar, setFourteenPar] = useState(4)
    const [fifteenPar, setFifteenPar] = useState(4)
    const [sixteenPar, setSixteenPar] = useState(4)
    const [seventeenPar, setSeventeenPar] = useState(4)
    const [eighteenPar, setEighteenPar] = useState(4)
    const frontPar = onePar + twoPar + threePar + fourPar + fivePar + sixPar + sevenPar + eightPar + ninePar
    const backPar = tenPar + elevenPar + twelvePar + thirteenPar + fourteenPar + fifteenPar + sixteenPar + seventeenPar + eighteenPar
    const totalPar = frontPar + backPar

    /* Scores */
    const [oneScore, setOneScore] = useState(1)
    const [twoScore, setTwoScore] = useState(1)
    const [threeScore, setThreeScore] = useState(1)
    const [fourScore, setFourScore] = useState(1)
    const [fiveScore, setFiveScore] = useState(1)
    const [sixScore, setSixScore] = useState(1)
    const [sevenScore, setSevenScore] = useState(1)
    const [eightScore, setEightScore] = useState(1)
    const [nineScore, setNineScore] = useState(1)
    const [tenScore, setTenScore] = useState(1)
    const [elevenScore, setElevenScore] = useState(1)
    const [twelveScore, setTwelveScore] = useState(1)
    const [thirteenScore, setThirteenScore] = useState(1)
    const [fourteenScore, setFourteenScore] = useState(1)
    const [fifteenScore, setFifteenScore] = useState(1)
    const [sixteenScore, setSixteenScore] = useState(1)
    const [seventeenScore, setSeventeenScore] = useState(1)
    const [eighteenScore, setEighteenScore] = useState(1)
    const frontScore = oneScore + twoScore + threeScore + fourScore + fiveScore + sixScore + sevenScore + eightScore + nineScore
    const backScore = tenScore + elevenScore + twelveScore + thirteenScore + fourteenScore + fifteenScore + sixteenScore + seventeenScore + eighteenScore
    const totalScore = frontScore + backScore


    const [oneShots, setOneShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [twoShots, setTwoShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [threeShots, setThreeShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fourShots, setFourShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fiveShots, setFiveShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sixShots, setSixShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sevenShots, setSevenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [eightShots, setEightShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [nineShots, setNineShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])

    const [tenShots, setTenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [elevenShots, setElevenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [twelveShots, setTwelveShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [thirteenShots, setThirteenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fourteenShots, setFourteenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [fifteenShots, setFifteenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [sixteenShots, setSixteenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [seventeenShots, setSeventeenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])
    const [eighteenShots, setEighteenShots] = useState([{ startingLie: "Tee", distanceToHole: 0 }])

    /* Hole One Functions */
    function addNewShotHoleOne() {
        const newShots = [{ startingLie: "", distanceToHole: 0 }]
        setOneShots([...oneShots, ...newShots])
    }

    function removeShotHoleOne() {
        const updatedOneShots = oneShots.slice(0, -1);
        setOneShots(updatedOneShots);
    }

    function oneShotLie(event, index) {
        const updatedOneshots = [...oneShots];
        updatedOneshots[index] = { ...updatedOneshots[index], startingLie: event };
        setOneShots(updatedOneshots);
    }

    function oneShotDistance(event, index) {
        const updatedOneshots = [...oneShots]
        updatedOneshots[index] = { ...updatedOneshots[index], distanceToHole: event };
        setOneShots(updatedOneshots);
    }

    /* Hole two Functions */
    function addNewShotHoleTwo() {
        const newShots = [{ startingLie: "", distanceToHole: 0 }]
        setTwoShots([...twoShots, ...newShots])
    }

    function removeShotHoleTwo() {
        const updatedTwoShots = twoShots.slice(0, -1);
        setTwoShots(updatedTwoShots);
    }

    function twoShotLie(event, index) {
        const updatedTwoshots = [...twoShots];
        updatedTwoshots[index] = { ...updatedTwoshots[index], startingLie: event };
        setTwoShots(updatedTwoshots);
    }

    function twoShotDistance(event, index) {
        const updatedTwoshots = [...twoShots]
        updatedTwoshots[index] = { ...updatedTwoshots[index], distanceToHole: event };
        setTwoShots(updatedTwoshots);
    }

    /* Hole three Functions */
    function addNewShotHoleThree() {
        const newShots = [{ startingLie: "", distanceToHole: 0 }]
        setThreeShots([...threeShots, ...newShots])
    }

    function removeShotHoleThree() {
        const updatedThreeShots = threeShots.slice(0, -1);
        setThreeShots(updatedThreeShots);
    }

    function threeShotLie(event, index) {
        const updatedThreeshots = [...threeShots];
        updatedThreeshots[index] = { ...updatedThreeshots[index], startingLie: event };
        setThreeShots(updatedThreeshots);
    }

    function threeShotDistance(event, index) {
        const updatedThreeshots = [...threeShots]
        updatedThreeshots[index] = { ...updatedThreeshots[index], distanceToHole: event };
        setThreeShots(updatedThreeshots);
    }

    /* Hole four Functions */
    function addNewShotHoleFour() {
        const newShots = [{ startingLie: "", distanceToHole: 0 }]
        setFourShots([...fourShots, ...newShots])
    }

    function removeShotHoleFour() {
        const updatedFourShots = fourShots.slice(0, -1);
        setFourShots(updatedFourShots);
    }

    function fourShotLie(event, index) {
        const updatedFourshots = [...fourShots];
        updatedFourshots[index] = { ...updatedFourshots[index], startingLie: event };
        setFourShots(updatedFourshots);
    }

    function fourShotDistance(event, index) {
        const updatedFourshots = [...fourShots]
        updatedFourshots[index] = { ...updatedFourshots[index], distanceToHole: event };
        setFourShots(updatedFourshots);
    }

    /* Hole five Functions */
    function addNewShotHoleFive() {
        const newShots = [{ startingLie: "", distanceToHole: 0 }]
        setFiveShots([...fiveShots, ...newShots])
    }

    function removeShotHoleFive() {
        const updatedFiveShots = fiveShots.slice(0, -1);
        setFiveShots(updatedFiveShots);
    }

    function fiveShotLie(event, index) {
        const updatedFiveshots = [...fiveShots];
        updatedFiveshots[index] = { ...updatedFiveshots[index], startingLie: event };
        setFiveShots(updatedFiveshots);
    }

    function fiveShotDistance(event, index) {
        const updatedFiveshots = [...fiveShots]
        updatedFiveshots[index] = { ...updatedFiveshots[index], distanceToHole: event };
        setFiveShots(updatedFiveshots);
    }

    /* Hole six Functions */
    function addNewShotHoleSix() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setSixShots([...sixShots, ...newShots])
    }

    function removeShotHoleSix() {
        const updatedSixShots = sixShots.slice(0, -1);
        setSixShots(updatedSixShots);
    }

    function sixShotLie(event, index) {
        const updatedSixshots = [...sixShots];
        updatedSixshots[index] = { ...updatedSixshots[index], startingLie: event };
        setSixShots(updatedSixshots);
    }

    function sixShotDistance(event, index) {
        const updatedSixshots = [...sixShots]
        updatedSixshots[index] = { ...updatedSixshots[index], distanceToHole: event };
        setSixShots(updatedSixshots);
    }

    /* Hole seven Functions */
    function addNewShotHoleSeven() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setSevenShots([...sevenShots, ...newShots])
    }

    function removeShotHoleSeven() {
        const updatedSevenShots = sevenShots.slice(0, -1);
        setSevenShots(updatedSevenShots);
    }

    function sevenShotLie(event, index) {
        const updatedSevenshots = [...sevenShots];
        updatedSevenshots[index] = { ...updatedSevenshots[index], startingLie: event };
        setSevenShots(updatedSevenshots);
    }

    function sevenShotDistance(event, index) {
        const updatedSevenshots = [...sevenShots]
        updatedSevenshots[index] = { ...updatedSevenshots[index], distanceToHole: event };
        setSevenShots(updatedSevenshots);
    }

    /* Hole eight Functions */
    function addNewShotHoleEight() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setEightShots([...eightShots, ...newShots])
    }

    function removeShotHoleEight() {
        const updatedEightShots = eightShots.slice(0, -1);
        setEightShots(updatedEightShots);
    }

    function eightShotLie(event, index) {
        const updatedEightshots = [...eightShots];
        updatedEightshots[index] = { ...updatedEightshots[index], startingLie: event };
        setEightShots(updatedEightshots);
    }

    function eightShotDistance(event, index) {
        const updatedEightshots = [...eightShots]
        updatedEightshots[index] = { ...updatedEightshots[index], distanceToHole: event };
        setEightShots(updatedEightshots);
    }

    /* Hole nine Functions */
    function addNewShotHoleNine() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setNineShots([...nineShots, ...newShots])
    }

    function removeShotHoleNine() {
        const updatedNineShots = nineShots.slice(0, -1);
        setNineShots(updatedNineShots);
    }

    function nineShotLie(event, index) {
        const updatedNineshots = [...nineShots];
        updatedNineshots[index] = { ...updatedNineshots[index], startingLie: event };
        setNineShots(updatedNineshots);
    }

    function nineShotDistance(event, index) {
        const updatedNineshots = [...nineShots]
        updatedNineshots[index] = { ...updatedNineshots[index], distanceToHole: event };
        setNineShots(updatedNineshots);
    }

    /* Hole ten Functions */
    function addNewShotHoleTen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setTenShots([...tenShots, ...newShots])
    }

    function removeShotHoleTen() {
        const updatedTenShots = tenShots.slice(0, -1);
        setTenShots(updatedTenShots);
    }

    function tenShotLie(event, index) {
        const updatedTenshots = [...tenShots];
        updatedTenshots[index] = { ...updatedTenshots[index], startingLie: event };
        setTenShots(updatedTenshots);
    }

    function tenShotDistance(event, index) {
        const updatedTenshots = [...tenShots]
        updatedTenshots[index] = { ...updatedTenshots[index], distanceToHole: event };
        setTenShots(updatedTenshots);
    }

    /* Hole eleven Functions */
    function addNewShotHoleEleven() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setElevenShots([...elevenShots, ...newShots])
    }

    function removeShotHoleEleven() {
        const updatedElevenShots = elevenShots.slice(0, -1);
        setElevenShots(updatedElevenShots);
    }

    function elevenShotLie(event, index) {
        const updatedElevenshots = [...elevenShots];
        updatedElevenshots[index] = { ...updatedElevenshots[index], startingLie: event };
        setElevenShots(updatedElevenshots);
    }

    function elevenShotDistance(event, index) {
        const updatedElevenshots = [...elevenShots]
        updatedElevenshots[index] = { ...updatedElevenshots[index], distanceToHole: event };
        setElevenShots(updatedElevenshots);
    }

    /* Hole twelve Functions */
    function addNewShotHoleTwelve() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setTwelveShots([...twelveShots, ...newShots])
    }

    function removeShotHoleTwelve() {
        const updatedTwelveShots = twelveShots.slice(0, -1);
        setTwelveShots(updatedTwelveShots);
    }

    function twelveShotLie(event, index) {
        const updatedTwelveshots = [...twelveShots];
        updatedTwelveshots[index] = { ...updatedTwelveshots[index], startingLie: event };
        setTwelveShots(updatedTwelveshots);
    }

    function twelveShotDistance(event, index) {
        const updatedTwelveshots = [...twelveShots]
        updatedTwelveshots[index] = { ...updatedTwelveshots[index], distanceToHole: event };
        setTwelveShots(updatedTwelveshots);
    }

    /* Hole thirteen Functions */
    function addNewShotHoleThirteen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setThirteenShots([...thirteenShots, ...newShots])
    }

    function removeShotHoleThirteen() {
        const updatedThirteenShots = thirteenShots.slice(0, -1);
        setThirteenShots(updatedThirteenShots);
    }

    function thirteenShotLie(event, index) {
        const updatedThirteenshots = [...thirteenShots];
        updatedThirteenshots[index] = { ...updatedThirteenshots[index], startingLie: event };
        setThirteenShots(updatedThirteenshots);
    }

    function thirteenShotDistance(event, index) {
        const updatedThirteenshots = [...thirteenShots]
        updatedThirteenshots[index] = { ...updatedThirteenshots[index], distanceToHole: event };
        setThirteenShots(updatedThirteenshots);
    }

    /* Hole fourteen Functions */
    function addNewShotHoleFourteen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setFourteenShots([...fourteenShots, ...newShots])
    }

    function removeShotHoleFourteen() {
        const updatedFourteenShots = fourteenShots.slice(0, -1);
        setFourteenShots(updatedFourteenShots);
    }

    function fourteenShotLie(event, index) {
        const updatedFourteenshots = [...fourteenShots];
        updatedFourteenshots[index] = { ...updatedFourteenshots[index], startingLie: event };
        setFourteenShots(updatedFourteenshots);
    }

    function fourteenShotDistance(event, index) {
        const updatedFourteenshots = [...fourteenShots]
        updatedFourteenshots[index] = { ...updatedFourteenshots[index], distanceToHole: event };
        setFourteenShots(updatedFourteenshots);
    }

    /* Hole fifteen Functions */
    function addNewShotHoleFifteen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setFifteenShots([...fifteenShots, ...newShots])
    }

    function removeShotHoleFifteen() {
        const updatedFifteenShots = fifteenShots.slice(0, -1);
        setFifteenShots(updatedFifteenShots);
    }

    function fifteenShotLie(event, index) {
        const updatedFifteenshots = [...fifteenShots];
        updatedFifteenshots[index] = { ...updatedFifteenshots[index], startingLie: event };
        setFifteenShots(updatedFifteenshots);
    }

    function fifteenShotDistance(event, index) {
        const updatedFifteenshots = [...fifteenShots]
        updatedFifteenshots[index] = { ...updatedFifteenshots[index], distanceToHole: event };
        setFifteenShots(updatedFifteenshots);
    }

    /* Hole sixteen Functions */
    function addNewShotHoleSixteen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setSixteenShots([...sixteenShots, ...newShots])
    }

    function removeShotHoleSixteen() {
        const updatedSixteenShots = sixteenShots.slice(0, -1);
        setSixteenShots(updatedSixteenShots);
    }

    function sixteenShotLie(event, index) {
        const updatedSixteenshots = [...sixteenShots];
        updatedSixteenshots[index] = { ...updatedSixteenshots[index], startingLie: event };
        setSixteenShots(updatedSixteenshots);
    }

    function sixteenShotDistance(event, index) {
        const updatedSixteenshots = [...sixteenShots]
        updatedSixteenshots[index] = { ...updatedSixteenshots[index], distanceToHole: event };
        setSixteenShots(updatedSixteenshots);
    }

    /* Hole seventeen Functions */
    function addNewShotHoleSeventeen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setSeventeenShots([...seventeenShots, ...newShots])
    }

    function removeShotHoleSeventeen() {
        const updatedSeventeenShots = seventeenShots.slice(0, -1);
        setSeventeenShots(updatedSeventeenShots);
    }

    function seventeenShotLie(event, index) {
        const updatedSeventeenshots = [...seventeenShots];
        updatedSeventeenshots[index] = { ...updatedSeventeenshots[index], startingLie: event };
        setSeventeenShots(updatedSeventeenshots);
    }

    function seventeenShotDistance(event, index) {
        const updatedSeventeenshots = [...seventeenShots]
        updatedSeventeenshots[index] = { ...updatedSeventeenshots[index], distanceToHole: event };
        setSeventeenShots(updatedSeventeenshots);
    }

    /* Hole eighteen Functions */
    function addNewShotHoleEighteen() {
        const newShots = [{ startingLie: "Fairway", distanceToHole: 0 }]
        setEighteenShots([...eighteenShots, ...newShots])
    }

    function removeShotHoleEighteen() {
        const updatedEighteenShots = eighteenShots.slice(0, -1);
        setEighteenShots(updatedEighteenShots);
    }

    function eighteenShotLie(event, index) {
        const updatedEighteenshots = [...eighteenShots];
        updatedEighteenshots[index] = { ...updatedEighteenshots[index], startingLie: event };
        setEighteenShots(updatedEighteenshots);
    }

    function eighteenShotDistance(event, index) {
        const updatedEighteenshots = [...eighteenShots]
        updatedEighteenshots[index] = { ...updatedEighteenshots[index], distanceToHole: event };
        setEighteenShots(updatedEighteenshots);
    }

    /* PGA Database */
    const tee = { 0: 1, 100: 2.92, 120: 2.99, 140: 2.97, 160: 2.99, 180: 3.05, 200: 3.12, 220: 3.17, 240: 3.25, 260: 3.45, 280: 3.65, 300: 3.71, 320: 3.79, 340: 3.86, 360: 3.92, 380: 3.96, 400: 3.99, 420: 4.02, 440: 4.08, 460: 4.17, 480: 4.28, 500: 4.41, 520: 4.54, 540: 4.65, 560: 4.74, 580: 4.79, 600: 4.82 }
    const green = { 0: 1, 1: 1.00, 2: 1.02, 3: 1.04, 4: 1.13, 5: 1.23, 6: 1.34, 7: 1.42, 8: 1.50, 9: 1.56, 10: 1.61, 15: 1.78, 20: 1.87, 30: 1.98, 40: 2.06, 50: 2.14, 60: 2.21, 90: 2.40, 100: 2.50 }
    const sand = { 0: 1, 20: 2.53, 40: 2.82, 60: 3.15, 80: 3.24, 100: 3.23, 120: 3.21, 140: 3.22, 160: 3.28, 180: 3.40, 200: 3.55, 220: 3.70, 240: 2.84, 260: 3.93, 280: 4.00, 320: 4.12, 340: 4.26, 360: 4.41, 380: 4.55, 400: 4.69, 420: 4.73, 440: 4.78, 460: 4.87, 480: 4.98, 500: 5.11, 520: 5.24, 540: 5.36, 560: 5.44, 580: 5.49, 600: 5.52 }
    const rough = { 0: 1, 20: 2.59, 40: 2.78, 60: 2.91, 80: 2.96, 100: 3.02, 120: 3.08, 140: 3.15, 160: 3.23, 180: 3.31, 200: 3.42, 220: 3.53, 240: 3.64, 260: 3.74, 280: 3.83, 300: 3.90, 320: 3.95, 340: 4.02, 360: 4.11, 380: 4.21, 400: 4.30, 420: 4.34, 440: 4.39, 460: 4.48, 480: 4.59, 500: 4.72, 520: 4.85, 540: 4.97, 560: 5.05, 580: 5.10, 600: 5.13 }
    const fairway = { 0: 1, 20: 2.40, 40: 2.60, 60: 2.70, 80: 2.75, 100: 2.80, 120: 2.85, 140: 2.91, 160: 2.98, 180: 3.08, 200: 3.19, 220: 3.32, 240: 3.45, 260: 3.58, 280: 3.69, 300: 3.78, 320: 3.84, 340: 3.88, 360: 3.95, 380: 4.03, 400: 4.11, 420: 4.15, 440: 4.20, 460: 4.29, 480: 4.40, 500: 4.53, 520: 4.66, 540: 4.78, 560: 4.86, 580: 4.91, 600: 4.94 }

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


    /* Statistics States "Tee" */
    const [fairwaysPer, setFairwaysPer] = useState([0, 0])
    const [fairwaysPer4, setFairwaysPer4] = useState([0, 0])
    const [fairwaysPer5, setFairwaysPer5] = useState([0, 0])

    const [strokesGainedTee, setStrokesGainedTee] = useState([0, 0])
    const [strokesGainedTee4, setStrokesGainedTee4] = useState([0, 0])
    const [strokesGainedTee5, setStrokesGainedTee5] = useState([0, 0])

    /* Strokes Gained "Approach" */
    const [pthF100125, setpthF100125] = useState("N/A", 0)
    const [pthF125150, setpthF125150] = useState("N/A", 0)
    const [pthF150175, setpthF150175] = useState("N/A")
    const [pthF175200, setpthF175200] = useState("N/A")
    const [pthF200225, setpthF200225] = useState("N/A")
    const [pthF225250, setpthF225250] = useState("N/A")
    const [pthF250, setpthF250] = useState("N/A")

    const [pthR100125, setpthR100125] = useState("N/A")
    const [pthR125150, setpthR125150] = useState("N/A")
    const [pthR150175, setpthR150175] = useState("N/A")
    const [pthR175200, setpthR175200] = useState("N/A")
    const [pthR200225, setpthR200225] = useState("N/A")
    const [pthR225250, setpthR225250] = useState("N/A")
    const [pthR250, setpthR250] = useState("N/A")

    const [pthS100125, setpthS100125] = useState("N/A")
    const [pthS125150, setpthS125150] = useState("N/A")
    const [pthS150175, setpthS150175] = useState("N/A")
    const [pthS175200, setpthS175200] = useState("N/A")
    const [pthS200225, setpthS200225] = useState("N/A")
    const [pthS225250, setpthS225250] = useState("N/A")
    const [pthS250, setpthS250] = useState("N/A")

    const [phgF100125, setphgF100125] = useState("N/A")

    /* Statistics States "Scoring" */
    const [pspr3, setPspr3] = useState(0)
    const [pspr4, setPspr4] = useState(0)
    const [pspr5, setPspr5] = useState(0)

    const [gir3, setGir3] = useState([0,0])
    const [gir4, setGir4] = useState([0,0])
    const [gir5, setGir5] = useState([0,0])

    const [sa3, setSa3] = useState([0,0])
    const [sa4, setSa4] = useState([0,0])
    const [sa5, setSa5] = useState([0,0])

    const [bpr3, setBrp3] = useState(0)
    const [bpr4, setBrp4] = useState(0)
    const [bpr5, setBrp5] = useState(0)

    const [ppr3, setPpr3] = useState(0)
    const [ppr4, setPpr4] = useState(0)
    const [ppr5, setPpr5] = useState(0)

    const [bopr3, setBopr3] = useState(0)
    const [bopr4, setBopr4] = useState(0)
    const [bopr5, setBopr5] = useState(0)
    
    /* Statistics States "Putting" */
    const [ppr, setPpr] = useState(0)
    const [ppg, setppg] = useState([0,0])
    const [totalDistanceStat, setTotalDistanceStat] = useState(0)
    const [onePuttP, setOnePuttP] = useState(0)
    const [threePuttP, setThreePuttP] = useState(0)


    /* Algorithm to calculate the Tee statistics */

    function algorithmtee(dict, hole) {
        if (((eval(transformToDigit(hole) + "Par") === 4) || (eval(transformToDigit(hole) + "Par") === 5)) && eval(transformToDigit(hole) + "Score") > 1) {
            if (dict[1].startingLie === "fairway") {
                const hit = fairwaysPer[0] + 1
                const total = fairwaysPer[1] + 1
                setFairwaysPer([hit, total])
            } else {
                const hit = fairwaysPer[0]
                const total = fairwaysPer[1] + 1
                setFairwaysPer([hit, total])
            }
            const next = rounding(dict[1].distanceToHole, eval(dict[1].startingLie))
            const current = rounding(dict[0].distanceToHole, tee)

            const sg = strokesGainedTee[0] + (next - current - 1)
            const totall = strokesGainedTee[1] + 1
            setStrokesGainedTee([sg, totall])
        }
        if ((eval(transformToDigit(hole) + "Par") === 4) && eval(transformToDigit(hole) + "Score") > 1) {
            if (dict[1].startingLie === "fairway") {
                const hit = fairwaysPer4[0] + 1
                const total = fairwaysPer4[1] + 1
                setFairwaysPer4([hit, total])
            } else {
                const hit = fairwaysPer4[0]
                const total = fairwaysPer4[1] + 1
                setFairwaysPer4([hit, total])
            }
            const next = rounding(dict[1].distanceToHole, eval(dict[1].startingLie))
            const current = rounding(dict[0].distanceToHole, tee)

            const sg = strokesGainedTee4[0] + (next - current - 1)
            const totall = strokesGainedTee4[1] + 1
            setStrokesGainedTee4([sg, totall])
        }
        if ((eval(transformToDigit(hole) + "Par") === 5) && eval(transformToDigit(hole) + "Score") > 1) {
            if (dict[1].startingLie === "fairway") {
                const hit = fairwaysPer5[0] + 1
                const total = fairwaysPer5[1] + 1
                setFairwaysPer5([hit, total])
            } else {
                const hit = fairwaysPer5[0]
                const total = fairwaysPer5[1] + 1
                setFairwaysPer5([hit, total])
            }
            const next = rounding(dict[1].distanceToHole, eval(dict[1].startingLie))
            const current = rounding(dict[0].distanceToHole, tee)

            const sg = strokesGainedTee5[0] + (next - current - 1)
            const totall = strokesGainedTee5[1] + 1
            setStrokesGainedTee5([sg, totall])
        }
    }

    /* Putting Algorithm */
    function algorithmputting(dict, hole) {
        var pprhole = 0
        var i = 0
        const dictLength = Object.keys(dict).length;
        while (i < dictLength) {
            if (dict[i].startingLie === "green") {
                ppr = ppr + 1
                i = i + 1
            }
        }
        setPpr(ppr + pprhole)
        if (pprhole == 1) {
            setOnePuttP(onePuttP + 1)
        }
        if (pprhole === 3 ) {
            setThreePuttP(threePuttP + 1)
        }
        if (dict[dictLength -1].startingLie === "green") {
            setTotalDistanceStat(totalDistanceStat + dict[dictLength -1].distanceToHole)
        }
        if (eval(transformToDigit(hole) + "Par") === 3) {
            if ((dictLength - ppr) === 1) {
                setppg([ppg[0] + ppr,ppg[1] + 1])
            }
        }
        if (eval(transformToDigit(hole) + "Par") === 4) {
            if ((dictLength - ppr) <= 2) {
                setppg([ppg[0] + ppr,ppg[1] + 1])
            }
        }
        if (eval(transformToDigit(hole) + "Par") === 5) {
            if ((dictLength - ppr) <= 3) {
                setppg([ppg[0] + ppr,ppg[1] + 1])
            }
        }  
    }


    /* Scoring Statistics */
    function algorithmscoring(dict, hole) {
        if (eval(transformToDigit(hole) + "Par") === 3) {
            const dictLength = Object.keys(dict).length;
            var pen = pspr3
            var i = 0
            while (i < dictLength) {
                if (dict[i].startingLie === "penalty") {
                    pen = pen + 1
                    i = i + 1
                }
            }
            setPspr3(pen)
            setSa3([sa3[0] + dictLength, sa3[0] + 1])
            if (dictLength < 3) {
                setBrp3(bpr3 + 1)
                setPpr3(ppr3 + 1)
            }
            else if (dictLength === 3) {
                setPpr3(ppr3 + 1)
            }
            else {
                setBopr3(bopr3 + 1)
            }
            if (dict[1]?.startingLie === "green" || dict[1]?.startingLie === undefined) {
               setGir3([gir3[0] + 1, gir3[1] + 1]) 
            }
            else {
                setGir3([gir3[0], gir3[1] + 1])
            }
        }
        if (eval(transformToDigit(hole) + "Par") === 4) {
            const dictLength = Object.keys(dict).length;
            var pen = pspr4
            i = 0
            while (i < dictLength) {
                if (dict[i].startingLie === "penalty") {
                    pen = pen + 1
                    i = i + 1
                }
            }
            setPspr4(pen)
            setSa4([sa4[0] + dictLength, sa4[0] + 1])
            if (dictLength < 4) {
                setBrp4(bpr4 + 1)
                setPpr4(ppr4 + 1)
            }
            else if (dictLength === 4) {
                setPpr4(ppr3 + 4)
            }
            else {
                setBopr4(bopr4 + 1)
            }
            if ((dict[2]?.startingLie === "green" || dict[2]?.startingLie === undefined) || (dict[1]?.startingLie === "green" || dict[1]?.startingLie === undefined)) {
               setGir4([gir4[0] + 1, gir4[1] + 1]) 
            }
            else {
                setGir4([gir4[0], gir4[1] + 1])
            }
        }
        if (eval(transformToDigit(hole) + "Par") === 5) {
            const dictLength = Object.keys(dict).length;
            var pen = pspr5
            i = 0
            while (i < dictLength) {
                if (dict[i].startingLie === "penalty") {
                    pen = pen + 1
                    i = i + 1
                }
            }
            setPspr5(pen)
            setSa5([sa5[0] + dictLength, sa5[0] + 1])
            if (dictLength < 5) {
                setBrp5(bpr5 + 1)
                setPpr5(ppr5 + 1)
            }
            else if (dictLength === 5) {
                setPpr5(ppr5 + 1)
            }
            else {
                setBopr5(bopr5 + 1)
            }
            if ((dict[3]?.startingLie === "green" || dict[3]?.startingLie === undefined) || (dict[2]?.startingLie === "green" || dict[2]?.startingLie === undefined)) {
               setGir3([gir5[0] + 1, gir5[1] + 1]) 
            }
            else {
                setGir5([gir5[0], gir5[1] + 1])
            }
        } 
    }


    function call() {
        var i = 1
        while (i <= holes) {
            algorithmtee(eval(transformToDigit(i) + "Shots"), i)
            algorithmputting(eval(transformToDigit(i) + "Shots"), i)
            algorithmscoring(eval(transformToDigit(i) + "Shots"), i)
            i = i + 1
        }
    }

    return (
        <>
            <Authnavbar />
            <div className="newround">
                <div className="homepage-container">
                    <div className="header-grid-top">
                        <div>
                            <h1>Add Round</h1>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <a href="/dashboard"><h1>&#10006;</h1></a>
                        </div>
                    </div>

                    <div className="homepage-button-container">
                        <p className={(part === 1) ? "second-selected click" : "click"} onClick={() => setPart(1)}>Round Details</p>
                        <p className={(part === 2) ? "second-selected click" : "click"}>Shot Data</p>
                        <p className={(part === 3) ? "second-selected click" : "click"}>Summary</p>
                    </div>
                    <div className="scorecard-container">
                        <table>
                            <tr>
                                <th></th>
                                {holes === 18 ? (
                                    <>
                                        <th className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>1</th>
                                        <th className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>2</th>
                                        <th className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>3</th>
                                        <th className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>4</th>
                                        <th className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>5</th>
                                        <th className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>6</th>
                                        <th className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>7</th>
                                        <th className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>8</th>
                                        <th className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>9</th>
                                        <th>IN</th>
                                        <th className={(hole === 10) ? "par-selected click" : "click"} onClick={() => handleHoleChange(10)}>10</th>
                                        <th className={(hole === 11) ? "par-selected click" : "click"} onClick={() => handleHoleChange(11)}>11</th>
                                        <th className={(hole === 12) ? "par-selected click" : "click"} onClick={() => handleHoleChange(12)}>12</th>
                                        <th className={(hole === 13) ? "par-selected click" : "click"} onClick={() => handleHoleChange(13)}>13</th>
                                        <th className={(hole === 14) ? "par-selected click" : "click"} onClick={() => handleHoleChange(14)}>14</th>
                                        <th className={(hole === 15) ? "par-selected click" : "click"} onClick={() => handleHoleChange(15)}>15</th>
                                        <th className={(hole === 16) ? "par-selected click" : "click"} onClick={() => handleHoleChange(16)}>16</th>
                                        <th className={(hole === 17) ? "par-selected click" : "click"} onClick={() => handleHoleChange(17)}>17</th>
                                        <th className={(hole === 18) ? "par-selected click" : "click"} onClick={() => handleHoleChange(18)}>18</th>
                                        <th>OUT</th>
                                        <th>TOTAL</th>
                                    </>
                                ) : holes === 9 ? (
                                    <>
                                        <th className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>1</th>
                                        <th className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>2</th>
                                        <th className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>3</th>
                                        <th className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>4</th>
                                        <th className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>5</th>
                                        <th className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>6</th>
                                        <th className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>7</th>
                                        <th className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>8</th>
                                        <th className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>9</th>
                                        <th>TOTAL</th>
                                    </>
                                ) : null}
                            </tr>
                            <tr>
                                <td>Par</td>
                                {holes === 18 ? (
                                    <>
                                        <td className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>{onePar}</td>
                                        <td className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>{twoPar}</td>
                                        <td className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>{threePar}</td>
                                        <td className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>{fourPar}</td>
                                        <td className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>{fivePar}</td>
                                        <td className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>{sixPar}</td>
                                        <td className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>{sevenPar}</td>
                                        <td className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>{eightPar}</td>
                                        <td className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>{ninePar}</td>
                                        <td>{frontPar}</td>
                                        <td className={(hole === 10) ? "par-selected click" : "click"} onClick={() => handleHoleChange(10)}>{tenPar}</td>
                                        <td className={(hole === 11) ? "par-selected click" : "click"} onClick={() => handleHoleChange(11)}>{elevenPar}</td>
                                        <td className={(hole === 12) ? "par-selected click" : "click"} onClick={() => handleHoleChange(12)}>{twelvePar}</td>
                                        <td className={(hole === 13) ? "par-selected click" : "click"} onClick={() => handleHoleChange(13)}>{thirteenPar}</td>
                                        <td className={(hole === 14) ? "par-selected click" : "click"} onClick={() => handleHoleChange(14)}>{fourteenPar}</td>
                                        <td className={(hole === 15) ? "par-selected click" : "click"} onClick={() => handleHoleChange(15)}>{fifteenPar}</td>
                                        <td className={(hole === 16) ? "par-selected click" : "click"} onClick={() => handleHoleChange(16)}>{sixteenPar}</td>
                                        <td className={(hole === 17) ? "par-selected click" : "click"} onClick={() => handleHoleChange(17)}>{seventeenPar}</td>
                                        <td className={(hole === 18) ? "par-selected click" : "click"} onClick={() => handleHoleChange(18)}>{eighteenPar}</td>
                                        <td>{backPar}</td>
                                        <td>{totalPar}</td>
                                    </>
                                ) : holes === 9 ? (
                                    <>
                                        <td className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>{onePar}</td>
                                        <td className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>{twoPar}</td>
                                        <td className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>{threePar}</td>
                                        <td className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>{fourPar}</td>
                                        <td className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>{fivePar}</td>
                                        <td className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>{sixPar}</td>
                                        <td className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>{sevenPar}</td>
                                        <td className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>{eightPar}</td>
                                        <td className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>{ninePar}</td>
                                        <th>{frontPar}</th>
                                    </>
                                ) : null}
                            </tr>
                            <tr>
                                <td>Score</td>
                                {holes === 18 ? (
                                    <>
                                        <td className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>{oneScore}</td>
                                        <td className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>{twoScore}</td>
                                        <td className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>{threeScore}</td>
                                        <td className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>{fourScore}</td>
                                        <td className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>{fiveScore}</td>
                                        <td className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>{sixScore}</td>
                                        <td className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>{sevenScore}</td>
                                        <td className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>{eightScore}</td>
                                        <td className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>{nineScore}</td>
                                        <td>{frontScore}</td>
                                        <td className={(hole === 10) ? "par-selected click" : "click"} onClick={() => handleHoleChange(10)}>{tenScore}</td>
                                        <td className={(hole === 11) ? "par-selected click" : "click"} onClick={() => handleHoleChange(11)}>{elevenScore}</td>
                                        <td className={(hole === 12) ? "par-selected click" : "click"} onClick={() => handleHoleChange(12)}>{twelveScore}</td>
                                        <td className={(hole === 13) ? "par-selected click" : "click"} onClick={() => handleHoleChange(13)}>{thirteenScore}</td>
                                        <td className={(hole === 14) ? "par-selected click" : "click"} onClick={() => handleHoleChange(14)}>{fourteenScore}</td>
                                        <td className={(hole === 15) ? "par-selected click" : "click"} onClick={() => handleHoleChange(15)}>{fifteenScore}</td>
                                        <td className={(hole === 16) ? "par-selected click" : "click"} onClick={() => handleHoleChange(16)}>{sixteenScore}</td>
                                        <td className={(hole === 17) ? "par-selected click" : "click"} onClick={() => handleHoleChange(17)}>{seventeenScore}</td>
                                        <td className={(hole === 18) ? "par-selected click" : "click"} onClick={() => handleHoleChange(18)}>{eighteenScore}</td>
                                        <td>{backScore}</td>
                                        <td>{totalScore}</td>
                                    </>
                                ) : holes === 9 ? (
                                    <>
                                        <td className={(hole === 1) ? "par-selected click" : "click"} onClick={() => handleHoleChange(1)}>{oneScore}</td>
                                        <td className={(hole === 2) ? "par-selected click" : "click"} onClick={() => handleHoleChange(2)}>{twoScore}</td>
                                        <td className={(hole === 3) ? "par-selected click" : "click"} onClick={() => handleHoleChange(3)}>{threeScore}</td>
                                        <td className={(hole === 4) ? "par-selected click" : "click"} onClick={() => handleHoleChange(4)}>{fourScore}</td>
                                        <td className={(hole === 5) ? "par-selected click" : "click"} onClick={() => handleHoleChange(5)}>{fiveScore}</td>
                                        <td className={(hole === 6) ? "par-selected click" : "click"} onClick={() => handleHoleChange(6)}>{sixScore}</td>
                                        <td className={(hole === 7) ? "par-selected click" : "click"} onClick={() => handleHoleChange(7)}>{sevenScore}</td>
                                        <td className={(hole === 8) ? "par-selected click" : "click"} onClick={() => handleHoleChange(8)}>{eightScore}</td>
                                        <td className={(hole === 9) ? "par-selected click" : "click"} onClick={() => handleHoleChange(9)}>{nineScore}</td>
                                        <td>{frontScore}</td>
                                    </>
                                ) : null}

                            </tr>
                        </table>
                    </div>
                    {(part === 1) && (
                        <>
                            <h3>Add Round Details</h3>
                            <div className="newround-form-container">
                                <h4>Select Number of Holes</h4>
                                <div className="par-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                                    <p onClick={() => setHoles(9)} className={(holes === 9) ? "par-selected click" : "click"}>9 Holes</p>
                                    <p onClick={() => setHoles(18)} className={(holes === 18) ? "par-selected click" : "click"}>18 Holes</p>
                                </div>
                                <div className="new-round-form-grid">
                                    <div>
                                        <h4>Course Name</h4>
                                        <input onChange={(event) => setCourse(event.target.value)} value={course} className={(errors.course) ? "error-box" : ""} />
                                        <p className="error">{errors.course}</p>
                                    </div>
                                    <div>
                                        <h4>Date Played</h4>
                                        <input type="date" onChange={(event) => setDate(event.target.value)} value={date} className={(errors.date) ? "error-box" : ""} />
                                        <p className="error">{errors.date}</p>
                                    </div>
                                </div>
                                <h5 onClick={(event) => firstPartFormSubmit(event)}>Next</h5>
                            </div>
                        </>
                    )}
                    {(part === 2) && (
                        <>
                            <h3>Add Round Details</h3>
                            <div className="newround-form-container">
                                {(hole === 1) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setOnePar(3)} className={(onePar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setOnePar(4)} className={(onePar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setOnePar(5)} className={(onePar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: oneScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => oneShotLie(event.target.value, index)} value={oneShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => oneShotDistance(event.target.value, index)} value={oneShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setOneScore(oneScore + 1); addNewShotHoleOne() }}>Add Shot</p>
                                            {(oneScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setOneScore(oneScore - 1); removeShotHoleOne() }}>Delete Shot</p>)}
                                            {(oneScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setOneScore(oneScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" style={{ color: "gray", cursor: "auto" }}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 2) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setTwoPar(3)} className={(twoPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setTwoPar(4)} className={(twoPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setTwoPar(5)} className={(twoPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: twoScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => twoShotLie(event.target.value, index)} value={twoShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => twoShotDistance(event.target.value, index)} value={twoShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTwoScore(twoScore + 1); addNewShotHoleTwo() }}>Add Shot</p>
                                            {(twoScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTwoScore(twoScore - 1); removeShotHoleTwo() }}>Delete Shot</p>)}
                                            {(twoScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setTwoScore(twoScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 3) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setThreePar(3)} className={(threePar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setThreePar(4)} className={(threePar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setThreePar(5)} className={(threePar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: threeScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => threeShotLie(event.target.value, index)} value={threeShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => threeShotDistance(event.target.value, index)} value={threeShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setThreeScore(threeScore + 1); addNewShotHoleThree() }}>Add Shot</p>
                                            {(threeScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setThreeScore(threeScore - 1); removeShotHoleThree() }}>Delete Shot</p>)}
                                            {(threeScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setThreeScore(threeScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 4) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setFourPar(3)} className={(fourPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setFourPar(4)} className={(fourPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setFourPar(5)} className={(fourPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: fourScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => fourShotLie(event.target.value, index)} value={fourShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => fourShotDistance(event.target.value, index)} value={fourShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFourScore(fourScore + 1); addNewShotHoleFour() }}>Add Shot</p>
                                            {(fourScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFourScore(fourScore - 1); removeShotHoleFour() }}>Delete Shot</p>)}
                                            {(fourScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setFourScore(fourScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 5) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setFivePar(3)} className={(fivePar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setFivePar(4)} className={(fivePar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setFivePar(5)} className={(fivePar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: fiveScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => fiveShotLie(event.target.value, index)} value={fiveShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => fiveShotDistance(event.target.value, index)} value={fiveShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFiveScore(fiveScore + 1); addNewShotHoleFive() }}>Add Shot</p>
                                            {(fiveScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFiveScore(fiveScore - 1); removeShotHoleFive() }}>Delete Shot</p>)}
                                            {(fiveScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setFiveScore(fiveScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 6) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setSixPar(3)} className={(sixPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setSixPar(4)} className={(sixPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setSixPar(5)} className={(sixPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: sixScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => sixShotLie(event.target.value, index)} value={sixShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => sixShotDistance(event.target.value, index)} value={sixShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSixScore(sixScore + 1); addNewShotHoleSix() }}>Add Shot</p>
                                            {(sixScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSixScore(sixScore - 1); removeShotHoleSix() }}>Delete Shot</p>)}
                                            {(sixScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setSixScore(sixScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 7) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setSevenPar(3)} className={(sevenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setSevenPar(4)} className={(sevenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setSevenPar(5)} className={(sevenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: sevenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => sevenShotLie(event.target.value, index)} value={sevenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => sevenShotDistance(event.target.value, index)} value={sevenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSevenScore(sevenScore + 1); addNewShotHoleSeven() }}>Add Shot</p>
                                            {(sevenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSevenScore(sevenScore - 1); removeShotHoleSeven() }}>Delete Shot</p>)}
                                            {(sevenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setSevenScore(sevenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 8) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setEightPar(3)} className={(eightPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setEightPar(4)} className={(eightPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setEightPar(5)} className={(eightPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: eightScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => eightShotLie(event.target.value, index)} value={eightShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => eightShotDistance(event.target.value, index)} value={eightShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setEightScore(eightScore + 1); addNewShotHoleEight() }}>Add Shot</p>
                                            {(eightScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setEightScore(eightScore - 1); removeShotHoleEight() }}>Delete Shot</p>)}
                                            {(eightScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setEightScore(eightScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 9) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setNinePar(3)} className={(ninePar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setNinePar(4)} className={(ninePar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setNinePar(5)} className={(ninePar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: nineScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => nineShotLie(event.target.value, index)} value={nineShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => nineShotDistance(event.target.value, index)} value={nineShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setNineScore(nineScore + 1); addNewShotHoleNine() }}>Add Shot</p>
                                            {(nineScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setNineScore(nineScore - 1); removeShotHoleNine() }}>Delete Shot</p>)}
                                            {(nineScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setNineScore(nineScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            {(holes === 18) && (<p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>)}
                                            {(holes === 9) && (<p style={{ textAlign: "right" }} className="click" onClick={() => { setHole(0); setPart(3); call() }}>Submit Round</p>)}
                                        </div>
                                    </>
                                )}
                                {(hole === 10) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setTenPar(3)} className={(tenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setTenPar(4)} className={(tenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setTenPar(5)} className={(tenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: tenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => tenShotLie(event.target.value, index)} value={tenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => tenShotDistance(event.target.value, index)} value={tenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTenScore(tenScore + 1); addNewShotHoleTen() }}>Add Shot</p>
                                            {(tenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTenScore(tenScore - 1); removeShotHoleTen() }}>Delete Shot</p>)}
                                            {(tenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setTenScore(tenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 11) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setElevenPar(3)} className={(elevenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setElevenPar(4)} className={(elevenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setElevenPar(5)} className={(elevenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: elevenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => elevenShotLie(event.target.value, index)} value={elevenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => elevenShotDistance(event.target.value, index)} value={elevenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setElevenScore(elevenScore + 1); addNewShotHoleEleven() }}>Add Shot</p>
                                            {(elevenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setElevenScore(elevenScore - 1); removeShotHoleEleven() }}>Delete Shot</p>)}
                                            {(elevenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setElevenScore(elevenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 12) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setTwelvePar(3)} className={(twelvePar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setTwelvePar(4)} className={(twelvePar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setTwelvePar(5)} className={(twelvePar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: twelveScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => twelveShotLie(event.target.value, index)} value={twelveShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => twelveShotDistance(event.target.value, index)} value={twelveShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTwelveScore(twelveScore + 1); addNewShotHoleTwelve() }}>Add Shot</p>
                                            {(twelveScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setTwelveScore(twelveScore - 1); removeShotHoleTwelve() }}>Delete Shot</p>)}
                                            {(twelveScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setTwelveScore(twelveScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 13) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setThirteenPar(3)} className={(thirteenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setThirteenPar(4)} className={(thirteenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setThirteenPar(5)} className={(thirteenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: thirteenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => thirteenShotLie(event.target.value, index)} value={thirteenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => thirteenShotDistance(event.target.value, index)} value={thirteenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setThirteenScore(thirteenScore + 1); addNewShotHoleThirteen() }}>Add Shot</p>
                                            {(thirteenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setThirteenScore(thirteenScore - 1); removeShotHoleThirteen() }}>Delete Shot</p>)}
                                            {(thirteenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setThirteenScore(thirteenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 14) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setFourteenPar(3)} className={(fourteenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setFourteenPar(4)} className={(fourteenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setFourteenPar(5)} className={(fourteenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: fourteenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => fourteenShotLie(event.target.value, index)} value={fourteenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => fourteenShotDistance(event.target.value, index)} value={fourteenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFourteenScore(fourteenScore + 1); addNewShotHoleFourteen() }}>Add Shot</p>
                                            {(fourteenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFourteenScore(fourteenScore - 1); removeShotHoleFourteen() }}>Delete Shot</p>)}
                                            {(fourteenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setFourteenScore(fourteenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 15) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setFifteenPar(3)} className={(fifteenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setFifteenPar(4)} className={(fifteenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setFifteenPar(5)} className={(fifteenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: fifteenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => fifteenShotLie(event.target.value, index)} value={fifteenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => fifteenShotDistance(event.target.value, index)} value={fifteenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFifteenScore(fifteenScore + 1); addNewShotHoleFifteen() }}>Add Shot</p>
                                            {(fifteenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setFifteenScore(fifteenScore - 1); removeShotHoleFifteen() }}>Delete Shot</p>)}
                                            {(fifteenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setFifteenScore(fifteenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 16) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setSixteenPar(3)} className={(sixteenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setSixteenPar(4)} className={(sixteenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setSixteenPar(5)} className={(sixteenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: sixteenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => sixteenShotLie(event.target.value, index)} value={sixteenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => sixteenShotDistance(event.target.value, index)} value={sixteenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSixteenScore(sixteenScore + 1); addNewShotHoleSixteen() }}>Add Shot</p>
                                            {(sixteenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSixteenScore(sixteenScore - 1); removeShotHoleSixteen() }}>Delete Shot</p>)}
                                            {(sixteenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setSixteenScore(sixteenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 17) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setSeventeenPar(3)} className={(seventeenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setSeventeenPar(4)} className={(seventeenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setSeventeenPar(5)} className={(seventeenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: seventeenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => seventeenShotLie(event.target.value, index)} value={seventeenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => seventeenShotDistance(event.target.value, index)} value={seventeenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSeventeenScore(seventeenScore + 1); addNewShotHoleSeventeen() }}>Add Shot</p>
                                            {(seventeenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setSeventeenScore(seventeenScore - 1); removeShotHoleSeventeen() }}>Delete Shot</p>)}
                                            {(seventeenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setSeventeenScore(seventeenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => setHole(hole + 1)}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                                {(hole === 18) && (
                                    <>
                                        <h4>Select Par</h4>
                                        <div className="par-grid">
                                            <p onClick={() => setEighteenPar(3)} className={(eighteenPar === 3) ? "par-selected click" : "click"}>Par 3</p>
                                            <p onClick={() => setEighteenPar(4)} className={(eighteenPar === 4) ? "par-selected click" : "click"}>Par 4</p>
                                            <p onClick={() => setEighteenPar(5)} className={(eighteenPar === 5) ? "par-selected click" : "click"}>Par 5</p>
                                        </div>
                                        <h4>Add Shots</h4>
                                        <div className="shot-selection-help">
                                            <p>Starting Lie<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpstartinglie} /></p>
                                            <p>Distance to Hole<FontAwesomeIcon icon={faCircleQuestion} className="question" onClick={helpdistance} /></p>
                                        </div>
                                        {Array.from({ length: eighteenScore }).map((_, index) => (
                                            <div key={index} className="add-shots-grid">
                                                <select name={`shotType${index}`} onChange={(event) => eighteenShotLie(event.target.value, index)} value={eighteenShots[index].startingLie}>
                                                    <option>Tee</option>
                                                    <option>Fairway</option>
                                                    <option>Green</option>
                                                    <option>Sand</option>
                                                    <option>Rough</option>
                                                </select>
                                                <input type="number" name={`shotSize${index}`} onChange={(event) => eighteenShotDistance(event.target.value, index)} value={eighteenShots[index].distanceToHole} />
                                            </div>
                                        ))}
                                        <div className="shot-selection-help">
                                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setEighteenScore(eighteenScore + 1); addNewShotHoleEighteen() }}>Add Shot</p>
                                            {(eighteenScore > 1) && (<p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => { setEighteenScore(eighteenScore - 1); removeShotHoleEighteen() }}>Delete Shot</p>)}
                                            {(eighteenScore === 1) && (<p style={{ textAlign: "center", color: "gray" }} onClick={() => setEighteenScore(eighteenScore)}>Delete Shot</p>)}
                                        </div>
                                        <div className="hole-navigator-container">
                                            <p className="click" onClick={() => setHole(hole - 1)}>Previous Hole</p>
                                            <p style={{ textAlign: "right" }} className="click" onClick={() => { setHole(0); setPart(3); call()}}>Next Hole</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                    {(part === 3) && (
                        <div className="round-analysis">
                            <h3>Round Analysis</h3>
                            <div className="round-analysis-grid">
                                <div>
                                    <h4>Strokes Gained</h4>
                                    <h5>VS ___</h5>
                                </div>
                                <div>
                                    <h4>Strokes Gained</h4>
                                    <h5>VS ___</h5>
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
                                        <h4>Basic Driving Statistics</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit %</td>
                                                <td style={{ textAlign: "center" }}>{fairwaysPer[0] / fairwaysPer[1]}</td>
                                                <td style={{ textAlign: "center" }}>____</td>
                                                <td style={{ textAlign: "center" }}>____</td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{fairwaysPer4[0] / fairwaysPer[1]}</td>
                                                <td style={{ textAlign: "center" }}>____</td>
                                                <td style={{ textAlign: "center" }}>____</td>
                                            </tr>
                                            <tr>
                                                <td>Fairways Hit % (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{fairwaysPer5[0] / fairwaysPer5[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Strokes Gained off the Tee</h4>
                                        <h5>From Distances VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained</td>
                                                <td style={{ textAlign: "center" }}>{strokesGainedTee[0]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 4's)</td>
                                                <td style={{ textAlign: "center" }}>{strokesGainedTee4[0]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Strokes Gained (Par 5's)</td>
                                                <td style={{ textAlign: "center" }}>{strokesGainedTee5[0]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {(analysisSelect === "putting") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h4>Basic Putting Statistics</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained Putting</h4>
                                        <h5>From Distances VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained past rounds</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>% Made from each Distance</h4>
                                        <h5>From Distances VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Two putt % from each Distance</h4>
                                        <h5>From Distances VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Three putt % from each Distance</h4>
                                        <h5>From Distances VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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

                            {(analysisSelect === "approach") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h4>Proximity to Hole (Fairway)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Proximity to Hole (Rough)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Proximity to Hole (Sand)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>% hit green (Fairway)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>% on Green (Rough)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>% on Green (Sand)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Fairway)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Rough)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Sand)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                            {(analysisSelect === "short game") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h4>Scrambling %</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Sand Save %</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Proximity to Hole (Fairway)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Proximity to Hole (Rough)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Proximity to Hole (Sand)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Fairway)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Rough)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                                        <h4>Strokes Gained (Sand)</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
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
                            {(analysisSelect === "scoring") && (
                                <div className="homepage-fourth-grid">
                                    <div>
                                        <h4>Penalty Stokes per Round</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{pspr3}</td>
                                                <td style={{ textAlign: "center" }}>_____</td>
                                                <td style={{ textAlign: "center" }}>_____</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{pspr4}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{pspr5}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>GIR %</h4>
                                        <h5>VS ___</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{gir3[0]/gir3[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{gir4[0]/gir4[1]}</td>
                                                <td style={{ textAlign: "center" }}>____</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{gir5[0]/gir5[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Scoring Average</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{sa3[0]/sa3[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{sa4[0]/sa4[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{sa5[0]/sa5[1]}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Birdies or Better Per Round</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{bpr3}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{bpr4}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{bpr5}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Pars or Better Per Round</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{ppr3}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{ppr4}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{ppr5}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Bogeys or worse per round</h4>
                                        <h5>VS __</h5>
                                        <table>
                                            <tr>
                                                <th></th>
                                                <th>Rounds</th>
                                                <th>Average</th>
                                                <th>Gap</th>
                                            </tr>
                                            <tr>
                                                <td>Par 3</td>
                                                <td style={{ textAlign: "center" }}>{bopr3}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 4</td>
                                                <td style={{ textAlign: "center" }}>{bopr4}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                            </tr>
                                            <tr>
                                                <td>Par 5</td>
                                                <td style={{ textAlign: "center" }}>{bopr5}</td>
                                                <td style={{ textAlign: "center" }}>___</td>
                                                <td style={{ textAlign: "center" }}>___</td>
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
    );
}
