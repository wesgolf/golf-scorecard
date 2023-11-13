/* Component Imports */
import Authnavbar from "./authnavbar";

/* Style Imports */
import "../../Styles/homepagenew.css"

/* React Imports */
import { useState, useEffect } from "react";

/* Firebase Imports */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { collection, getDocs, query, where } from "firebase/firestore";


/* Graph Import */
import React from "react";
import { Bar, Radar } from 'react-chartjs-2';


import Newroundbutton from "./newroundbutton";


export default function Homepage() {

  const [firstName, setFirstName] = useState("")
  const [user, setUser] = useState("");
  const [time, setTime] = useState("")
  const [rounds, setRounds] = useState(5)
  const [secondSelect, setSecondSelect] = useState("graph")
  const [thirdSelect, setThirdSelect] = useState("tee")
  const [isVerified, setIsVerified] = useState(false)

  const [userRounds, setUserRounds] = useState([]);


  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // Retrieve user's name from the Firestore database
        const userDocRef = doc(db, 'user', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setFirstName(userData.firstName);
        }

        // Retrieve all rounds associated with the userId
        const roundsRef = collection(db, 'rounds');
        const querySnapshot = await getDocs(query(roundsRef, where("userID", "==", user.uid)));
        const roundsData = querySnapshot.docs.map(doc => doc.data());
        setUserRounds(roundsData);  // Assuming you have a state function called `setRounds`
      }
    });

    // Clean up the effect
    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const getCurrentTime = () => {
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay;
      if (hours < 12) {
        timeOfDay = 'Morning';
      } else if (hours < 18) {
        timeOfDay = 'Afternoon';
      } else {
        timeOfDay = 'Evening';
      }
      setTime(timeOfDay);
    };
    getCurrentTime();
  }, []);


  const [scores, setScores] = useState([])
  const [roundName, setRoundName] = useState([])

  const [tee11, setTee11] = useState(0)
  const [tee12, setTee12] = useState(0)
  const [tee13, setTee13] = useState(0)

  const [tee21, setTee21] = useState(0)
  const [tee22, setTee22] = useState(0)
  const [tee23, setTee23] = useState(0)

  const [approach11, setApproach11] = useState(0)
  const [approach12, setApproach12] = useState(0)
  const [approach13, setApproach13] = useState(0)
  const [approach14, setApproach14] = useState(0)
  const [approach15, setApproach15] = useState(0)
  const [approach16, setApproach16] = useState(0)
  const [approach17, setApproach17] = useState(0)

  const [approach21, setApproach21] = useState(0)
  const [approach22, setApproach22] = useState(0)
  const [approach23, setApproach23] = useState(0)
  const [approach24, setApproach24] = useState(0)
  const [approach25, setApproach25] = useState(0)
  const [approach26, setApproach26] = useState(0)
  const [approach27, setApproach27] = useState(0)

  const [approach31, setApproach31] = useState(0)
  const [approach32, setApproach32] = useState(0)
  const [approach33, setApproach33] = useState(0)
  const [approach34, setApproach34] = useState(0)
  const [approach35, setApproach35] = useState(0)
  const [approach36, setApproach36] = useState(0)
  const [approach37, setApproach37] = useState(0)

  const [approach41, setApproach41] = useState(0)
  const [approach42, setApproach42] = useState(0)
  const [approach43, setApproach43] = useState(0)
  const [approach44, setApproach44] = useState(0)
  const [approach45, setApproach45] = useState(0)
  const [approach46, setApproach46] = useState(0)
  const [approach47, setApproach47] = useState(0)

  const [approach51, setApproach51] = useState(0)
  const [approach52, setApproach52] = useState(0)
  const [approach53, setApproach53] = useState(0)
  const [approach54, setApproach54] = useState(0)
  const [approach55, setApproach55] = useState(0)
  const [approach56, setApproach56] = useState(0)
  const [approach57, setApproach57] = useState(0)

  const [approach61, setApproach61] = useState(0)
  const [approach62, setApproach62] = useState(0)
  const [approach63, setApproach63] = useState(0)
  const [approach64, setApproach64] = useState(0)
  const [approach65, setApproach65] = useState(0)
  const [approach66, setApproach66] = useState(0)
  const [approach67, setApproach67] = useState(0)

  const [approach71, setApproach71] = useState(0)
  const [approach72, setApproach72] = useState(0)
  const [approach73, setApproach73] = useState(0)
  const [approach74, setApproach74] = useState(0)
  const [approach75, setApproach75] = useState(0)
  const [approach76, setApproach76] = useState(0)
  const [approach77, setApproach77] = useState(0)

  const [approach81, setApproach81] = useState(0)
  const [approach82, setApproach82] = useState(0)
  const [approach83, setApproach83] = useState(0)
  const [approach84, setApproach84] = useState(0)
  const [approach85, setApproach85] = useState(0)
  const [approach86, setApproach86] = useState(0)
  const [approach87, setApproach87] = useState(0)

  const [approach91, setApproach91] = useState(0)
  const [approach92, setApproach92] = useState(0)
  const [approach93, setApproach93] = useState(0)
  const [approach94, setApproach94] = useState(0)
  const [approach95, setApproach95] = useState(0)
  const [approach96, setApproach96] = useState(0)
  const [approach97, setApproach97] = useState(0)

  const [putting11, setPutting11] = useState(0)
  const [putting12, setPutting12] = useState(0)
  const [putting13, setPutting13] = useState(0)
  const [putting14, setPutting14] = useState(0)
  const [putting15, setPutting15] = useState(0)

  const [putting21, setPutting21] = useState(0)
  const [putting22, setPutting22] = useState(0)
  const [putting23, setPutting23] = useState(0)
  const [putting24, setPutting24] = useState(0)
  const [putting25, setPutting25] = useState(0)

  const [putting31, setPutting31] = useState(0)
  const [putting32, setPutting32] = useState(0)
  const [putting33, setPutting33] = useState(0)
  const [putting34, setPutting34] = useState(0)
  const [putting35, setPutting35] = useState(0)

  const [putting41, setPutting41] = useState(0)
  const [putting42, setPutting42] = useState(0)
  const [putting43, setPutting43] = useState(0)
  const [putting44, setPutting44] = useState(0)
  const [putting45, setPutting45] = useState(0)

  const [putting51, setPutting51] = useState(0)
  const [putting52, setPutting52] = useState(0)
  const [putting53, setPutting53] = useState(0)
  const [putting54, setPutting54] = useState(0)
  const [putting55, setPutting55] = useState(0)

  const [scoring11, setScoring11] = useState(0)
  const [scoring12, setScoring12] = useState(0)
  const [scoring13, setScoring13] = useState(0)

  const [scoring21, setScoring21] = useState(0)
  const [scoring22, setScoring22] = useState(0)
  const [scoring23, setScoring23] = useState(0)

  const [scoring31, setScoring31] = useState(0)
  const [scoring32, setScoring32] = useState(0)
  const [scoring33, setScoring33] = useState(0)

  const [scoring41, setScoring41] = useState(0)
  const [scoring42, setScoring42] = useState(0)
  const [scoring43, setScoring43] = useState(0)

  const [scoring51, setScoring51] = useState(0)
  const [scoring52, setScoring52] = useState(0)
  const [scoring53, setScoring53] = useState(0)

  const [shortgame11, setShortgame11] = useState(0)
  const [shortgame12, setShortgame12] = useState(0)
  const [shortgame13, setShortgame13] = useState(0)
  const [shortgame14, setShortgame14] = useState(0)

  const [shortgame21, setShortgame21] = useState(0)
  const [shortgame22, setShortgame22] = useState(0)
  const [shortgame23, setShortgame23] = useState(0)
  const [shortgame24, setShortgame24] = useState(0)

  const [shortgame31, setShortgame31] = useState(0)
  const [shortgame32, setShortgame32] = useState(0)
  const [shortgame33, setShortgame33] = useState(0)
  const [shortgame34, setShortgame34] = useState(0)
  const [shortgame35, setShortgame35] = useState(0)

  const [shortgame41, setShortgame41] = useState(0)
  const [shortgame42, setShortgame42] = useState(0)
  const [shortgame43, setShortgame43] = useState(0)
  const [shortgame44, setShortgame44] = useState(0)
  const [shortgame45, setShortgame45] = useState(0)

  const [shortgame51, setShortgame51] = useState(0)
  const [shortgame52, setShortgame52] = useState(0)
  const [shortgame53, setShortgame53] = useState(0)
  const [shortgame54, setShortgame54] = useState(0)
  const [shortgame55, setShortgame55] = useState(0)

  const [shortgame61, setShortgame61] = useState(0)
  const [shortgame62, setShortgame62] = useState(0)
  const [shortgame63, setShortgame63] = useState(0)
  const [shortgame64, setShortgame64] = useState(0)
  const [shortgame65, setShortgame65] = useState(0)

  const [shortgame71, setShortgame71] = useState(0)
  const [shortgame72, setShortgame72] = useState(0)
  const [shortgame73, setShortgame73] = useState(0)
  const [shortgame74, setShortgame74] = useState(0)
  const [shortgame75, setShortgame75] = useState(0)

  const [shortgame81, setShortgame81] = useState(0)
  const [shortgame82, setShortgame82] = useState(0)
  const [shortgame83, setShortgame83] = useState(0)
  const [shortgame84, setShortgame84] = useState(0)
  const [shortgame85, setShortgame85] = useState(0)


  const [par3, setPar3] = useState(0)
  const [par4, setPar4] = useState(0)
  const [par5, setPar5] = useState(0)



  function algorithm(userRounds) {
    const choppedArray = userRounds.slice(0, rounds)
    const total = Math.min(userRounds.length, rounds)

    let scores = []
    let roundName = []

    let tee11 = 0
    let tee12 = 0
    let tee13 = 0

    let tee21 = 0
    let tee22 = 0
    let tee23 = 0

    let approach11 = 0
    let approach12 = 0
    let approach13 = 0
    let approach14 = 0
    let approach15 = 0
    let approach16 = 0
    let approach17 = 0

    let approach21 = 0
    let approach22 = 0
    let approach23 = 0
    let approach24 = 0
    let approach25 = 0
    let approach26 = 0
    let approach27 = 0

    let approach31 = 0
    let approach32 = 0
    let approach33 = 0
    let approach34 = 0
    let approach35 = 0
    let approach36 = 0
    let approach37 = 0

    let approach41 = 0
    let approach42 = 0
    let approach43 = 0
    let approach44 = 0
    let approach45 = 0
    let approach46 = 0
    let approach47 = 0

    let approach51 = 0
    let approach52 = 0
    let approach53 = 0
    let approach54 = 0
    let approach55 = 0
    let approach56 = 0
    let approach57 = 0

    let approach61 = 0
    let approach62 = 0
    let approach63 = 0
    let approach64 = 0
    let approach65 = 0
    let approach66 = 0
    let approach67 = 0

    let approach71 = 0
    let approach72 = 0
    let approach73 = 0
    let approach74 = 0
    let approach75 = 0
    let approach76 = 0
    let approach77 = 0

    let approach81 = 0
    let approach82 = 0
    let approach83 = 0
    let approach84 = 0
    let approach85 = 0
    let approach86 = 0
    let approach87 = 0

    let approach91 = 0
    let approach92 = 0
    let approach93 = 0
    let approach94 = 0
    let approach95 = 0
    let approach96 = 0
    let approach97 = 0

    let putting11 = 0
    let putting12 = 0
    let putting13 = 0
    let putting14 = 0
    let putting15 = 0

    let putting21 = 0
    let putting22 = 0
    let putting23 = 0
    let putting24 = 0
    let putting25 = 0

    let putting31 = 0
    let putting32 = 0
    let putting33 = 0
    let putting34 = 0
    let putting35 = 0

    let putting41 = 0
    let putting42 = 0
    let putting43 = 0
    let putting44 = 0
    let putting45 = 0

    let putting51 = 0
    let putting52 = 0
    let putting53 = 0
    let putting54 = 0
    let putting55 = 0

    let scoring11 = 0
    let scoring12 = 0
    let scoring13 = 0

    let scoring21 = 0
    let scoring22 = 0
    let scoring23 = 0

    let scoring31 = 0
    let scoring32 = 0
    let scoring33 = 0

    let scoring41 = 0
    let scoring42 = 0
    let scoring43 = 0

    let scoring51 = 0
    let scoring52 = 0
    let scoring53 = 0

    let shortgame11 = 0
    let shortgame12 = 0
    let shortgame13 = 0
    let shortgame14 = 0

    let shortgame21 = 0
    let shortgame22 = 0
    let shortgame23 = 0
    let shortgame24 = 0

    let shortgame31 = 0
    let shortgame32 = 0
    let shortgame33 = 0
    let shortgame34 = 0
    let shortgame35 = 0

    let shortgame41 = 0
    let shortgame42 = 0
    let shortgame43 = 0
    let shortgame44 = 0
    let shortgame45 = 0

    let shortgame51 = 0
    let shortgame52 = 0
    let shortgame53 = 0
    let shortgame54 = 0
    let shortgame55 = 0

    let shortgame61 = 0
    let shortgame62 = 0
    let shortgame63 = 0
    let shortgame64 = 0
    let shortgame65 = 0

    let shortgame71 = 0
    let shortgame72 = 0
    let shortgame73 = 0
    let shortgame74 = 0
    let shortgame75 = 0

    let shortgame81 = 0
    let shortgame82 = 0
    let shortgame83 = 0
    let shortgame84 = 0
    let shortgame85 = 0

    let par3 = 0
    let par4 = 0
    let par5 = 0



    let i = 0
    while (i < total) {
      scores.push(choppedArray[i].totalscore - choppedArray[i].totalpar)
      roundName.push("Round " + (i + 1))
      tee11 += choppedArray[i].tee1[0]
      tee12 += choppedArray[i].tee1[1]
      tee13 += choppedArray[i].tee1[2]

      tee21 += choppedArray[i].tee2[0]
      tee22 += choppedArray[i].tee2[1]
      tee23 += choppedArray[i].tee2[2]

      approach11 += choppedArray[i].approach1[0]
      approach12 += choppedArray[i].approach1[1]
      approach13 += choppedArray[i].approach1[2]
      approach14 += choppedArray[i].approach1[3]
      approach15 += choppedArray[i].approach1[4]
      approach16 += choppedArray[i].approach1[5]
      approach17 += choppedArray[i].approach1[6]

      approach21 += choppedArray[i].approach2[0]
      approach22 += choppedArray[i].approach2[1]
      approach23 += choppedArray[i].approach2[2]
      approach24 += choppedArray[i].approach2[3]
      approach25 += choppedArray[i].approach2[4]
      approach26 += choppedArray[i].approach2[5]
      approach27 += choppedArray[i].approach2[6]

      approach31 += choppedArray[i].approach3[0]
      approach32 += choppedArray[i].approach3[1]
      approach33 += choppedArray[i].approach3[2]
      approach34 += choppedArray[i].approach3[3]
      approach35 += choppedArray[i].approach3[4]
      approach36 += choppedArray[i].approach3[5]
      approach37 += choppedArray[i].approach3[6]

      approach41 += choppedArray[i].approach4[0]
      approach42 += choppedArray[i].approach4[1]
      approach43 += choppedArray[i].approach4[2]
      approach44 += choppedArray[i].approach4[3]
      approach45 += choppedArray[i].approach4[4]
      approach46 += choppedArray[i].approach4[5]
      approach47 += choppedArray[i].approach4[6]

      approach51 += choppedArray[i].approach5[0]
      approach52 += choppedArray[i].approach5[1]
      approach53 += choppedArray[i].approach5[2]
      approach54 += choppedArray[i].approach5[3]
      approach55 += choppedArray[i].approach5[4]
      approach56 += choppedArray[i].approach5[5]
      approach57 += choppedArray[i].approach5[6]

      approach61 += choppedArray[i].approach6[0]
      approach62 += choppedArray[i].approach6[1]
      approach63 += choppedArray[i].approach6[2]
      approach64 += choppedArray[i].approach6[3]
      approach65 += choppedArray[i].approach6[4]
      approach66 += choppedArray[i].approach6[5]
      approach67 += choppedArray[i].approach6[6]

      approach71 += choppedArray[i].approach7[0]
      approach72 += choppedArray[i].approach7[1]
      approach73 += choppedArray[i].approach7[2]
      approach74 += choppedArray[i].approach7[3]
      approach75 += choppedArray[i].approach7[4]
      approach76 += choppedArray[i].approach7[5]
      approach77 += choppedArray[i].approach7[6]

      approach81 += choppedArray[i].approach8[0]
      approach82 += choppedArray[i].approach8[1]
      approach83 += choppedArray[i].approach8[2]
      approach84 += choppedArray[i].approach8[3]
      approach85 += choppedArray[i].approach8[4]
      approach86 += choppedArray[i].approach8[5]
      approach87 += choppedArray[i].approach8[6]

      approach91 += choppedArray[i].approach9[0]
      approach92 += choppedArray[i].approach9[1]
      approach93 += choppedArray[i].approach9[2]
      approach94 += choppedArray[i].approach9[3]
      approach95 += choppedArray[i].approach9[4]
      approach96 += choppedArray[i].approach9[5]
      approach97 += choppedArray[i].approach9[6]

      putting11 += choppedArray[i].putting1[0]
      putting12 += choppedArray[i].putting1[1]
      putting13 += choppedArray[i].putting1[2]
      putting14 += choppedArray[i].putting1[3]
      putting15 += choppedArray[i].putting1[4]

      putting21 += choppedArray[i].putting2[0]
      putting22 += choppedArray[i].putting2[1]
      putting23 += choppedArray[i].putting2[2]
      putting24 += choppedArray[i].putting2[3]
      putting25 += choppedArray[i].putting2[4]

      putting31 += choppedArray[i].putting3[0]
      putting32 += choppedArray[i].putting3[1]
      putting33 += choppedArray[i].putting3[2]
      putting34 += choppedArray[i].putting3[3]
      putting35 += choppedArray[i].putting3[4]

      putting41 += choppedArray[i].putting4[0]
      putting42 += choppedArray[i].putting4[1]
      putting43 += choppedArray[i].putting4[2]
      putting44 += choppedArray[i].putting4[3]
      putting45 += choppedArray[i].putting4[4]

      putting51 += choppedArray[i].putting5[0]
      putting52 += choppedArray[i].putting5[1]
      putting53 += choppedArray[i].putting5[2]
      putting54 += choppedArray[i].putting5[3]
      putting55 += choppedArray[i].putting5[4]

      scoring11 += choppedArray[i].scoring1[0]
      scoring12 += choppedArray[i].scoring1[1]
      scoring13 += choppedArray[i].scoring1[2]

      scoring21 += choppedArray[i].scoring2[0]
      scoring22 += choppedArray[i].scoring2[1]
      scoring23 += choppedArray[i].scoring2[2]

      scoring31 += choppedArray[i].scoring3[0]
      scoring32 += choppedArray[i].scoring3[1]
      scoring33 += choppedArray[i].scoring3[2]

      scoring41 += choppedArray[i].scoring4[0]
      scoring42 += choppedArray[i].scoring4[1]
      scoring43 += choppedArray[i].scoring4[2]

      scoring51 += choppedArray[i].scoring5[0]
      scoring52 += choppedArray[i].scoring5[1]
      scoring53 += choppedArray[i].scoring5[2]

      shortgame11 += choppedArray[i].shortgame1[0]
      shortgame12 += choppedArray[i].shortgame1[1]
      shortgame13 += choppedArray[i].shortgame1[2]
      shortgame14 += choppedArray[i].shortgame1[3]

      shortgame21 += choppedArray[i].shortgame2[0]
      shortgame22 += choppedArray[i].shortgame2[1]
      shortgame23 += choppedArray[i].shortgame2[2]
      shortgame24 += choppedArray[i].shortgame2[3]

      shortgame31 += choppedArray[i].shortgame3[0]
      shortgame32 += choppedArray[i].shortgame3[1]
      shortgame33 += choppedArray[i].shortgame3[2]
      shortgame34 += choppedArray[i].shortgame3[3]
      shortgame35 += choppedArray[i].shortgame3[4]

      shortgame41 += choppedArray[i].shortgame4[0]
      shortgame42 += choppedArray[i].shortgame4[1]
      shortgame43 += choppedArray[i].shortgame4[2]
      shortgame44 += choppedArray[i].shortgame4[3]
      shortgame45 += choppedArray[i].shortgame4[4]

      shortgame51 += choppedArray[i].shortgame5[0]
      shortgame52 += choppedArray[i].shortgame5[1]
      shortgame53 += choppedArray[i].shortgame5[2]
      shortgame54 += choppedArray[i].shortgame5[3]
      shortgame55 += choppedArray[i].shortgame5[4]

      shortgame61 += choppedArray[i].shortgame6[0]
      shortgame62 += choppedArray[i].shortgame6[1]
      shortgame63 += choppedArray[i].shortgame6[2]
      shortgame64 += choppedArray[i].shortgame6[3]
      shortgame65 += choppedArray[i].shortgame6[4]

      shortgame71 += choppedArray[i].shortgame7[0]
      shortgame72 += choppedArray[i].shortgame7[1]
      shortgame73 += choppedArray[i].shortgame7[2]
      shortgame74 += choppedArray[i].shortgame7[3]
      shortgame75 += choppedArray[i].shortgame7[4]

      shortgame81 += choppedArray[i].shortgame8[0]
      shortgame82 += choppedArray[i].shortgame8[1]
      shortgame83 += choppedArray[i].shortgame8[2]
      shortgame84 += choppedArray[i].shortgame8[3]
      shortgame85 += choppedArray[i].shortgame8[4]

      par3 += choppedArray[i].par3s
      par4 += choppedArray[i].par4s
      par5 += choppedArray[i].par5s

      i += 1

    }

    setScores(scores)
    setRoundName(roundName)

    setTee11(tee11 / total)
    setTee12(tee12 / total)
    setTee13(tee13 / total)

    setTee21(tee21)
    setTee22(tee22)
    setTee23(tee23)

    setApproach11(approach11)
    setApproach12(approach12)
    setApproach13(approach13)
    setApproach14(approach14)
    setApproach15(approach15)
    setApproach16(approach16)
    setApproach17(approach17)

    setApproach21(approach21)
    setApproach22(approach22)
    setApproach23(approach23)
    setApproach24(approach24)
    setApproach25(approach25)
    setApproach26(approach26)
    setApproach27(approach27)

    setApproach31(approach31)
    setApproach32(approach32)
    setApproach33(approach33)
    setApproach34(approach34)
    setApproach35(approach35)
    setApproach36(approach36)
    setApproach37(approach37)

    setApproach41(approach41)
    setApproach42(approach42)
    setApproach43(approach43)
    setApproach44(approach44)
    setApproach45(approach45)
    setApproach46(approach46)
    setApproach47(approach47)

    setApproach51(approach51)
    setApproach52(approach52)
    setApproach53(approach53)
    setApproach54(approach54)
    setApproach55(approach55)
    setApproach56(approach56)
    setApproach57(approach57)

    setApproach61(approach61)
    setApproach62(approach62)
    setApproach63(approach63)
    setApproach64(approach64)
    setApproach65(approach65)
    setApproach66(approach66)
    setApproach67(approach67)

    setApproach71(approach71)
    setApproach72(approach72)
    setApproach73(approach73)
    setApproach74(approach74)
    setApproach75(approach75)
    setApproach76(approach76)
    setApproach77(approach77)

    setApproach81(approach81)
    setApproach82(approach82)
    setApproach83(approach83)
    setApproach84(approach84)
    setApproach85(approach85)
    setApproach86(approach86)
    setApproach87(approach87)

    setApproach91(approach91)
    setApproach92(approach92)
    setApproach93(approach93)
    setApproach94(approach94)
    setApproach95(approach95)
    setApproach96(approach96)
    setApproach97(approach97)

    setPutting11(putting11)
    setPutting12(putting12)
    setPutting13(putting13)
    setPutting14(putting14)
    setPutting15(putting15)

    setPutting21(putting21)
    setPutting22(putting22)
    setPutting23(putting23)
    setPutting24(putting24)
    setPutting25(putting25)

    setPutting31(putting31)
    setPutting32(putting32)
    setPutting33(putting33)
    setPutting34(putting34)
    setPutting35(putting35)

    setPutting41(putting41)
    setPutting42(putting42)
    setPutting43(putting43)
    setPutting44(putting44)
    setPutting45(putting45)

    setPutting51(putting51)
    setPutting52(putting52)
    setPutting53(putting53)
    setPutting54(putting54)
    setPutting55(putting55)

    setScoring11(scoring11)
    setScoring12(scoring12)
    setScoring13(scoring13)

    setScoring21(scoring21)
    setScoring22(scoring22)
    setScoring23(scoring23)

    setScoring31(scoring31)
    setScoring32(scoring32)
    setScoring33(scoring33)

    setScoring41(scoring41)
    setScoring42(scoring42)
    setScoring43(scoring43)

    setScoring51(scoring51)
    setScoring52(scoring52)
    setScoring53(scoring53)

    setShortgame11(shortgame11)
    setShortgame12(shortgame12)
    setShortgame13(shortgame13)
    setShortgame14(shortgame14)

    setShortgame21(shortgame21)
    setShortgame22(shortgame22)
    setShortgame23(shortgame23)
    setShortgame24(shortgame24)

    setShortgame31(shortgame31)
    setShortgame32(shortgame32)
    setShortgame33(shortgame33)
    setShortgame34(shortgame34)
    setShortgame35(shortgame35)

    setShortgame41(shortgame41)
    setShortgame42(shortgame42)
    setShortgame43(shortgame43)
    setShortgame44(shortgame44)
    setShortgame45(shortgame45)

    setShortgame51(shortgame51)
    setShortgame52(shortgame52)
    setShortgame53(shortgame53)
    setShortgame54(shortgame54)
    setShortgame55(shortgame55)

    setShortgame61(shortgame61)
    setShortgame62(shortgame62)
    setShortgame63(shortgame63)
    setShortgame64(shortgame64)
    setShortgame65(shortgame65)

    setShortgame71(shortgame71)
    setShortgame72(shortgame72)
    setShortgame73(shortgame73)
    setShortgame74(shortgame74)
    setShortgame75(shortgame75)

    setShortgame81(shortgame81)
    setShortgame82(shortgame82)
    setShortgame83(shortgame83)
    setShortgame84(shortgame84)
    setShortgame85(shortgame85)

    setPar3(par3)
    setPar4(par4)
    setPar5(par5)
  }

  useEffect(() => {
    algorithm(userRounds)
  }, [rounds, userRounds])

  const data = {
    labels: roundName,
    datasets: [
      {
        label: 'Score to Par',
        data: scores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const data2 = {
    labels: ['SG Putting', 'SG Short Game', 'SG Approach', "SG Tee"],
    datasets: [
      {
        data: [1, 1, 1, tee21.toFixed(2)],
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
          callback: function (value, index, values) {
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
      <Authnavbar page="dashboard" />
      <Newroundbutton />
      <div className="homepage-page">
        <div className="homepage-container">
          <h1>Good {time}, {firstName}</h1>
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
          <div>
          </div>
          {(userRounds.length === 0) ?
            <div className="noPrevContainer">
              <p className="noPrev">No previous rounds available</p>
              <p className="noPrev2">Add a new round by clicking the blue arrow at the bottom right</p>
            </div> :
            <div>
              <div className="homepage-grid-1">
                <div>
                  <h3>Score to Par</h3>
                  <h4>VS Par</h4>
                  <div className='homepage-bar-chart'>
                    <Bar data={data} />
                  </div>
                  <div className="space">
                  </div>
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
                      <Radar data={data2} options={options} />
                    </div>) : (
                    <span className="two-chart-table">
                      <table>
                        <tr>
                          <th></th>
                          <th>Rounds</th>
                          <th>PGA Average</th>
                          <th>Gap</th>
                        </tr>
                        <tr>
                          <td>Overall</td>
                          <td style={{ textAlign: "center" }}>___</td>
                          <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                          <td style={{ textAlign: "center" }}>___</td>
                        </tr>
                        <tr>
                          <td>Off the Tee</td>
                          <td style={{ textAlign: "center" }}>___</td>
                          <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                          <td style={{ textAlign: "center" }}>___</td>
                        </tr>
                        <tr>
                          <td>Approach</td>
                          <td style={{ textAlign: "center" }}>___</td>
                          <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                          <td style={{ textAlign: "center" }}>___</td>
                        </tr>
                        <tr>
                          <td>Short Game</td>
                          <td style={{ textAlign: "center" }}>___</td>
                          <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                          <td style={{ textAlign: "center" }}>___</td>
                        </tr>
                        <tr>
                          <td>Putting</td>
                          <td style={{ textAlign: "center" }}>___</td>
                          <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
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
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Putts Per Round</td>
                        <td style={{ textAlign: "center" }}>{putting11}</td>
                        <td style={{ textAlign: "center" }}>{28.96}</td>
                        <td style={{ textAlign: "center" }} className={(18 === 18) ? ((28.96 - putting11 > 0) ? "green" : "red") : ((14.48 - putting11 > 0) ? "green" : "red")}>{(18 === 18) ? (28.96 - putting11).toFixed(2) : (14.48 - putting11).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Putts Per GIR</td>
                        <td style={{ textAlign: "center" }}>{putting12.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>1.8</td>
                        <td style={{ textAlign: "center" }} className={(1.8 > putting12) ? "green" : (isNaN(putting12) || (1.8 === putting12) ? "" : "red")}>{(1.8 - putting12).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Total Distance Putts <br />Made per Round</td>
                        <td style={{ textAlign: "center" }}>{putting13} Feet</td>
                        <td style={{ textAlign: "center" }}>{((18 === 18) ? 72.8 : 72.8 / 2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(putting13 > ((18 === 18) ? 72.8 : 72.8 / 2)) ? "green" : ((putting13 === ((18 === 18) ? 72.8 : 72.8 / 2)) ? "" : "red")}>{(putting13 - ((18 === 18) ? 72.8 : 72.8 / 2)).toFixed(2)} Feet</td>
                      </tr>
                      <tr>
                        <td>One Putt %</td>
                        <td style={{ textAlign: "center" }}>{(putting14 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>38.89%</td>
                        <td style={{ textAlign: "center" }} className={((putting14.toFixed(4) - 0.3889) > 0) ? "green" : ((putting14.toFixed(4) - 0.3889) === 0) ? "" : "red"}>{((putting14.toFixed(4) - 0.3889) * 100).toFixed(2)}%</td>
                      </tr>
                      <tr>
                        <td>Threee Putt %</td>
                        <td style={{ textAlign: "center" }}>{(putting15 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>3.02%</td>
                        <td style={{ textAlign: "center" }} className={((0.0302 - putting15.toFixed(4)) > 0) ? "green" : ((0.0302 - putting15.toFixed(4)) === 0) ? "" : "red"}>{((0.0302 - putting15.toFixed(4)) * 100).toFixed(2)}%</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Strokes Gained Putting</h3>
                    <h4>From Distances VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>0-5 Feet</td>
                        <td style={{ textAlign: "center" }}>{putting21.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }} className={(putting21 > 0) ? "green" : (putting21 === 0) ? "" : "red"}>{putting21.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>5-10 Feet</td>
                        <td style={{ textAlign: "center" }}>{putting22.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }} className={(putting22 > 0) ? "green" : (putting22 === 0) ? "" : "red"}>{putting22.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>10-20 Feet</td>
                        <td style={{ textAlign: "center" }}>{putting23.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }} className={(putting23 > 0) ? "green" : (putting23 === 0) ? "" : "red"}>{putting23.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>20-50 Feet</td>
                        <td style={{ textAlign: "center" }}>{putting24.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }} className={(putting24 > 0) ? "green" : (putting24 === 0) ? "" : "red"}>{putting24.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>50+ Feet</td>
                        <td style={{ textAlign: "center" }}>{putting25.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0</td>
                        <td style={{ textAlign: "center" }} className={(putting25 > 0) ? "green" : (putting25 === 0) ? "" : "red"}>{putting25.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>% Made from each Distance</h3>
                    <h4>From Distances VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>0-5 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting31) ? 'N/A' : (putting31 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.88 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(isNaN(putting31) || putting31 === 0.88) ? "" : ((putting31 > 0.88) ? "green" : "red")}>{isNaN(putting31) ? 'N/A' : ((putting31 - 0.88) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>5-10 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting32) ? 'N/A' : (putting32 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.585 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(isNaN(putting32) || putting32 === 0.585) ? "" : ((putting32 > 0.585) ? "green" : "red")}>{isNaN(putting32) ? 'N/A' : ((putting32 - 0.585) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>10-20 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting33) ? 'N/A' : (putting33 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.275 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(isNaN(putting33) || putting33 === 0.275) ? "" : ((putting33 > 0.275) ? "green" : "red")}>{isNaN(putting33) ? 'N/A' : ((putting33 - 0.275) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>20-50 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting34) ? 'N/A' : (putting34 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.09 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(isNaN(putting34) || putting34 === 0.09) ? "" : ((putting34 > 0.09) ? "green" : "red")}>{isNaN(putting34) ? 'N/A' : ((putting34 - 0.09) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>50+ Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting35) ? 'N/A' : (putting35 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.02 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(isNaN(putting35) || putting35 === 0.02) ? "" : ((putting35 > 0.02) ? "green" : "red")}>{isNaN(putting35) ? 'N/A' : ((putting35 - 0.02) * 100).toFixed(2) + '%'}</td>
                      </tr>
                    </table>

                  </div>

                  <div>
                    <h3>Two putt % from each Distance</h3>
                    <h4>From Distances VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>0-5 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting41) ? 'N/A' : (putting41 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.12 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting41 < 0.12) ? "red" : (isNaN(putting41) || putting41 === 0.12) ? "" : "green"}>{isNaN(putting41) ? 'N/A' : ((putting41 - 0.12) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>5-10 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting42) ? 'N/A' : (putting42 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.4095 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting42 < 0.4095) ? "red" : (isNaN(putting42) || putting42 === 0.4095) ? "" : "green"}>{isNaN(putting42) ? 'N/A' : ((putting42 - 0.4095) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>10-20 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting43) ? 'N/A' : (putting43 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{((0.7115) * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting43 < 0.7115) ? "red" : (isNaN(putting43) || putting43 === 0.7115) ? "" : "green"}>{isNaN(putting43) ? 'N/A' : ((putting43 - 0.7115) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>20-50 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting44) ? 'N/A' : (putting44 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.815 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting44 < 0.815) ? "red" : (isNaN(putting44) || putting44 === 0.815) ? "" : "green"}>{isNaN(putting44) ? 'N/A' : ((putting44 - 0.815) * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>50+ Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting45) ? 'N/A' : (putting45 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.69 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting45 < 0.69) ? "red" : (isNaN(putting45) || putting45 === 0.69) ? "" : "green"}>{isNaN(putting45) ? 'N/A' : ((putting45 - 0.69) * 100).toFixed(2) + '%'}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Three putt % from each Distance</h3>
                    <h4>From Distances VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>0-5 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting51) ? 'N/A' : (putting51 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting51 > 0) ? "red" : ""}>{isNaN(putting51) ? 'N/A' : (-putting51 * 100).toFixed(2) + '%'}</td>
                      </tr>
                      <tr>
                        <td>5-10 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting52) ? 'N/A' : (putting52 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.0055 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting52 > 0.0055) ? "red" : (isNaN(putting52) || putting52 === 0.0055) ? "" : "green"}>{isNaN(putting52) ? "N/A" : ((0.0055 - putting52) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>10-20 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting53) ? 'N/A' : (putting53 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.0135 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting53 > 0.0135) ? "red" : (isNaN(putting53) || putting53 === 0.0135) ? "" : "green"}>{isNaN(putting53) ? "N/A" : ((0.0135 - putting53) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>20-50 Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting54) ? 'N/A' : (putting54 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.095 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting54 > 0.095) ? "red" : (isNaN(putting54) || putting54 === 0.095) ? "" : "green"}>{isNaN(putting54) ? "N/A" : ((0.095 - putting54) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>50+ Feet</td>
                        <td style={{ textAlign: "center" }}>{isNaN(putting55) ? 'N/A' : (putting55 * 100).toFixed(2) + '%'}</td>
                        <td style={{ textAlign: "center" }}>{(0.29 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(putting55 > 0.29) ? "red" : (isNaN(putting55) || putting55 === 0.29) ? "" : "green"}>{isNaN(putting55) ? "N/A" : ((0.29 - putting55) * 100).toFixed(2) + "%"}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
              {(thirdSelect === "tee") && (
                <div className="homepage-fourth-grid">
                  <div>
                    <h3>Basic Driving Statistics</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Fairways Hit %</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee11) ? "N/A" : (tee11 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5857 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={isNaN(tee11) ? "grey" : (tee11 - 0.5857 > 0 ? "green" : "red")}>
                          {isNaN(tee11) ? "N/A" : ((tee11 - 0.5857) * 100).toFixed(2) + "%"}
                        </td>
                      </tr>
                      <tr>
                        <td>Fairways Hit % (Par 4's)</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee12) ? "N/A" : (tee12 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5852 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={isNaN(tee12) ? "grey" : (tee12 - 0.5852 > 0 ? "green" : "red")}>
                          {isNaN(tee12) ? "N/A" : ((tee12 - 0.5852) * 100).toFixed(2) + "%"}
                        </td>
                      </tr>
                      <tr>
                        <td>Fairways Hit % (Par 5's)</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee13) ? "N/A" : (tee13 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5862 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={isNaN(tee13) ? "grey" : (tee13 - 0.5862 > 0 ? "green" : "red")}>
                          {isNaN(tee13) ? "N/A" : ((tee13 - 0.5862) * 100).toFixed(2) + "%"}
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Strokes Gained</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee21) ? "N/A" : tee21.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(tee21 === 0 ? "grey" : tee21 > 0 ? "green" : "red")}> {isNaN(tee21) ? "N/A" : tee21.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Strokes Gained (Par 4's)</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee22) ? "N/A" : tee22.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(tee22 === 0 ? "grey" : tee22 > 0 ? "green" : "red")}> {isNaN(tee22) ? "N/A" : tee22.toFixed(2)}</td>

                      </tr>
                      <tr>
                        <td>Strokes Gained (Par 5's)</td>
                        <td style={{ textAlign: "center" }}>{isNaN(tee23) ? "N/A" : tee23.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>{(0).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(tee23 === 0 ? "grey" : tee23 > 0 ? "green" : "red")}> {isNaN(tee23) ? "N/A" : tee23.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
              {(thirdSelect === "approach") && (
                <div className="homepage-fourth-grid">
                  <div>
                    <h3>Proximity to Hole (Fairway)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach11) ? 'N/A' : approach11 + ' Feet'}</td>
                        <td style={{ textAlign: "center" }}>{20.00} Feet</td>
                        <td style={{ textAlign: "center" }} className={((20 - approach11) > 0) ? "green" : ((isNaN(approach11) || approach11 === 20) ? "" : "red")}>{isNaN(approach11) ? 'N/A' : (20 - approach11).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach12) ? "N/A" : approach12 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{23.30} Feet</td>
                        <td style={{ textAlign: "center" }} className={((23.3 - approach12) > 0) ? "green" : ((isNaN(approach12) || approach12 === 23.3) ? "" : "red")}>{isNaN(approach12) ? "N/A" : (23.3 - approach12).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach13) ? "N/A" : approach13 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{28.55} Feet</td>
                        <td style={{ textAlign: "center" }} className={((28.55 - approach13) > 0) ? "green" : ((isNaN(approach13) || approach13 === 28.55) ? "" : "red")}>{isNaN(approach13) ? "N/A" : (28.55 - approach13).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach14) ? "N/A" : approach14 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{36.65} Feet</td>
                        <td style={{ textAlign: "center" }} className={((36.65 - approach14) > 0) ? "green" : ((isNaN(approach14) || approach14 === 36.65) ? "" : "red")}>{isNaN(approach14) ? "N/A" : (36.65 - approach14).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach15) ? "N/A" : approach15 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{49.90} Feet</td>
                        <td style={{ textAlign: "center" }} className={((49.90 - approach15) > 0) ? "green" : ((isNaN(approach15) || approach15 === 49.90) ? "" : "red")}>{isNaN(approach15) ? "N/A" : (49.90 - approach15).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach16) ? "N/A" : approach16 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{71.75} Feet</td>
                        <td style={{ textAlign: "center" }} className={((71.75 - approach16) > 0) ? "green" : ((isNaN(approach16) || approach16 === 71.75) ? "" : "red")}>{isNaN(approach16) ? "N/A" : (71.75 - approach16).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach17) ? "N/A" : approach17 + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{85.1} Feet</td>
                        <td style={{ textAlign: "center" }} className={((85.1 - approach17) > 0) ? "green" : ((isNaN(approach17) || approach17 === 85.1) ? "" : "red")}>{isNaN(approach17) ? "N/A" : (85.1 - approach17).toFixed(2) + " Feet"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Proximity to Hole (Rough)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{approach21} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{approach22} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{approach23} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{approach24} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{approach25} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{approach26} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{approach27} Feet</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{approach31} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{approach32} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{approach33} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{approach34} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{approach35} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{approach36} Feet</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{approach37} Feet</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach41) ? "N/A" : (approach41 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.8195 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach41 > 0.8195) ? "green" : ((approach41 === 0.8195 || isNaN(approach41)) ? "" : "red")}>{isNaN(approach41) ? "N/A" : ((approach41 - 0.8195) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach42) ? "N/A" : (approach42 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.7815 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach42 > 0.7815) ? "green" : ((approach42 === 0.7815 || isNaN(approach42)) ? "" : "red")}>{isNaN(approach42) ? "N/A" : ((approach42 - 0.7815) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach43) ? "N/A" : (approach43 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.714 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach43 > 0.714) ? "green" : ((approach43 === 0.714 || isNaN(approach43)) ? "" : "red")}>{isNaN(approach43) ? "N/A" : ((approach43 - 0.714) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach44) ? "N/A" : (approach44 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.602 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach44 > 0.602) ? "green" : ((approach44 === 0.602 || isNaN(approach44)) ? "" : "red")}>{isNaN(approach44) ? "N/A" : ((approach44 - 0.602) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach45) ? "N/A" : (approach45 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.439 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach45 > 0.439) ? "green" : ((approach45 === 0.439 || isNaN(approach45)) ? "" : "red")}>{isNaN(approach45) ? "N/A" : ((approach45 - 0.439) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach46) ? "N/A" : (approach46 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.2715 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach46 > 0.2715) ? "green" : ((approach46 === 0.2715 || isNaN(approach46)) ? "" : "red")}>{isNaN(approach46) ? "N/A" : ((approach46 - 0.2715) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{isNaN(approach47) ? "N/A" : (approach47 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.202 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(approach47 > 0.202) ? "green" : ((approach47 === 0.202 || isNaN(approach47)) ? "" : "red")}>{isNaN(approach47) ? "N/A" : ((approach47 - 0.202) * 100).toFixed(2) + "%"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>% on Green (Rough)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{(approach51 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{(approach52 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{(approach53 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{(approach54 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{(approach55 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{(approach56 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{(approach57 * 100).toFixed(2)}%</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{(approach61 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{(approach62 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{(approach63 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{(approach64 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{(approach65 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{(approach66 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{(approach67 * 100).toFixed(2)}%</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{approach71.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach71 > 0) ? "green" : ((approach71 === 0) ? "" : "red")}>{approach71.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{approach72.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach72 > 0) ? "green" : ((approach72 === 0) ? "" : "red")}>{approach72.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{approach73.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach73 > 0) ? "green" : ((approach73 === 0) ? "" : "red")}>{approach73.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{approach74.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach74 > 0) ? "green" : ((approach74 === 0) ? "" : "red")}>{approach74.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{approach75.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach75 > 0) ? "green" : ((approach75 === 0) ? "" : "red")}>{approach75.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{approach76.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach76 > 0) ? "green" : ((approach76 === 0) ? "" : "red")}>{approach76.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{approach77.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach77 > 0) ? "green" : ((approach77 === 0) ? "" : "red")}>{approach77.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Strokes Gained (Rough)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{approach81.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach81 > 0) ? "green" : ((approach81 === 0) ? "" : "red")}>{approach81.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{approach82.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach82 > 0) ? "green" : ((approach82 === 0) ? "" : "red")}>{approach82.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{approach83.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach83 > 0) ? "green" : ((approach83 === 0) ? "" : "red")}>{approach83.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{approach84.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach84 > 0) ? "green" : ((approach84 === 0) ? "" : "red")}>{approach84.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{approach85.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach85 > 0) ? "green" : ((approach85 === 0) ? "" : "red")}>{approach85.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{approach86.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach86 > 0) ? "green" : ((approach86 === 0) ? "" : "red")}>{approach86.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{approach87.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach87 > 0) ? "green" : ((approach87 === 0) ? "" : "red")}>{approach87.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Strokes Gained (Sand)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>100-125</td>
                        <td style={{ textAlign: "center" }}>{approach91.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach91 > 0) ? "N/A" : ((approach91 === 0) ? "" : "red")}>{approach91.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>125-150</td>
                        <td style={{ textAlign: "center" }}>{approach92.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach92 > 0) ? "N/A" : ((approach92 === 0) ? "" : "red")}>{approach92.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>150-175</td>
                        <td style={{ textAlign: "center" }}>{approach93.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach93 > 0) ? "N/A" : ((approach93 === 0) ? "" : "red")}>{approach93.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>175-200</td>
                        <td style={{ textAlign: "center" }}>{approach94.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach94 > 0) ? "N/A" : ((approach94 === 0) ? "" : "red")}>{approach94.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>200-225</td>
                        <td style={{ textAlign: "center" }}>{approach95.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach95 > 0) ? "N/A" : ((approach95 === 0) ? "" : "red")}>{approach95.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>225-250</td>
                        <td style={{ textAlign: "center" }}>{approach96.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach96 > 0) ? "N/A" : ((approach96 === 0) ? "" : "red")}>{approach96.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>250+</td>
                        <td style={{ textAlign: "center" }}>{approach97.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(approach97 > 0) ? "N/A" : ((approach97 === 0) ? "" : "red")}>{approach97.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
              {(thirdSelect === "short game") && (
                <div className="homepage-fourth-grid">
                  <div>
                    <h3>Scrambling %</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame11) ? "N/A" : (shortgame11 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame11 > 0.5849) ? "green" : ((isNaN(shortgame11) || shortgame11 === 0.5849) ? "" : "red")}>{isNaN(shortgame11) ? "N/A" : ((shortgame11 - 0.5849) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>10-20</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame12) ? "N/A" : (shortgame12 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame12 > 0.5849) ? "green" : ((isNaN(shortgame12) || shortgame12 === 0.5849) ? "" : "red")}>{isNaN(shortgame12) ? "N/A" : ((shortgame12 - 0.5849) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>20-30</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame13) ? "N/A" : (shortgame13 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame13 > 0.5849) ? "green" : ((isNaN(shortgame13) || shortgame13 === 0.5849) ? "" : "red")}>{isNaN(shortgame13) ? "N/A" : ((shortgame13 - 0.5849) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>30 +</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame14) ? "N/A" : (shortgame14 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.5849 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame14 > 0.5849) ? "green" : ((isNaN(shortgame14) || shortgame14 === 0.5849) ? "" : "red")}>{isNaN(shortgame14) ? "N/A" : ((shortgame14 - 0.5849) * 100).toFixed(2) + "%"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Sand Save %</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame21) ? "N/A" : (shortgame21 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame21 > 0.51) ? "green" : ((isNaN(shortgame21) || shortgame21 === 0.51) ? "" : "red")}>{isNaN(shortgame21) ? "N/A" : ((shortgame21 - 0.51) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>10-20</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame22) ? "N/A" : (shortgame22 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame22 > 0.51) ? "green" : ((isNaN(shortgame22) || shortgame22 === 0.51) ? "" : "red")}>{isNaN(shortgame22) ? "N/A" : ((shortgame22 - 0.51) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>20-30</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame23) ? "N/A" : (shortgame23 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame23 > 0.51) ? "green" : ((isNaN(shortgame23) || shortgame23 === 0.51) ? "" : "red")}>{isNaN(shortgame23) ? "N/A" : ((shortgame23 - 0.51) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>30 +</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame24) ? "N/A" : (shortgame24 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.51 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }} className={(shortgame24 > 0.51) ? "green" : ((isNaN(shortgame24) || shortgame24 === 0.51) ? "" : "red")}>{isNaN(shortgame24) ? "N/A" : ((shortgame24 - 0.51) * 100).toFixed(2) + "%"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Proximity to Hole (Fairway)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame31) ? "N/A" : shortgame31.toFixed(2) + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{(2.4).toFixed(2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(shortgame32 < 2.4) ? "green" : ((isNaN(shortgame31) || shortgame31 === 2.4) ? "" : "red")}>{isNaN(shortgame31) ? "N/A" : (2.4 - shortgame31).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame32) ? "N/A" : shortgame32.toFixed(2) + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{(7.25).toFixed(2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(shortgame32 < 7.25) ? "green" : ((isNaN(shortgame32) || shortgame32 === 7.25) ? "" : "red")}>{isNaN(shortgame32) ? "N/A" : (7.25 - shortgame32).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame33) ? "N/A" : shortgame33.toFixed(2) + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{(12.55).toFixed(2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(shortgame33 < 12.55) ? "green" : ((isNaN(shortgame33) || shortgame33 === 12.55) ? "" : "red")}>{isNaN(shortgame33) ? "N/A" : (12.55 - shortgame33).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame34) ? "N/A" : shortgame34.toFixed(2) + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{(16.55).toFixed(2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(shortgame34 < 16.55) ? "green" : ((isNaN(shortgame34) || shortgame34 === 16.55) ? "" : "red")}>{isNaN(shortgame34) ? "N/A" : (16.55 - shortgame34).toFixed(2) + " Feet"}</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{isNaN(shortgame35) ? "N/A" : shortgame35.toFixed(2) + " Feet"}</td>
                        <td style={{ textAlign: "center" }}>{(17.7).toFixed(2)} Feet</td>
                        <td style={{ textAlign: "center" }} className={(shortgame35 < 17.7) ? "green" : ((isNaN(shortgame35) || shortgame35 === 17.7) ? "" : "red")}>{isNaN(shortgame35) ? "N/A" : (17.7 - shortgame35).toFixed(2) + " Feet"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Proximity to Hole (Rough)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{shortgame41}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{shortgame42}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{shortgame43}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{shortgame44}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{shortgame45}</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{shortgame51}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{shortgame52}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{shortgame53}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{shortgame54}</td>
                        <td style={{ textAlign: "center" }}>___</td>
                        <td style={{ textAlign: "center" }}>___</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{shortgame55}</td>
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
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{shortgame61.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame61 > 0) ? "green" : ((shortgame61 === 0) ? "" : "red")}>{shortgame61.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{shortgame62.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame62 > 0) ? "green" : ((shortgame62 === 0) ? "" : "red")}>{shortgame62.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{shortgame63.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame63 > 0) ? "green" : ((shortgame63 === 0) ? "" : "red")}>{shortgame63.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{shortgame64.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame64 > 0) ? "green" : ((shortgame64 === 0) ? "" : "red")}>{shortgame64.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{shortgame65.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame65 > 0) ? "green" : ((shortgame65 === 0) ? "" : "red")}>{shortgame65.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Strokes Gained (Rough)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{shortgame71.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame71 > 0) ? "green" : ((shortgame71 === 0) ? "" : "red")}>{shortgame71.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{shortgame72.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame72 > 0) ? "green" : ((shortgame72 === 0) ? "" : "red")}>{shortgame72.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{shortgame73.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame73 > 0) ? "green" : ((shortgame73 === 0) ? "" : "red")}>{shortgame73.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{shortgame74.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame74 > 0) ? "green" : ((shortgame74 === 0) ? "" : "red")}>{shortgame74.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{shortgame75.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame75 > 0) ? "green" : ((shortgame75 === 0) ? "" : "red")}>{shortgame75.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Strokes Gained (Sand)</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>&lt; 10</td>
                        <td style={{ textAlign: "center" }}>{shortgame81.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame81 > 0) ? "green" : ((shortgame81 === 0) ? "" : "red")}>{shortgame81.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>10-25</td>
                        <td style={{ textAlign: "center" }}>{shortgame82.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame82 > 0) ? "green" : ((shortgame82 === 0) ? "" : "red")}>{shortgame82.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>25-50</td>
                        <td style={{ textAlign: "center" }}>{shortgame83.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame83 > 0) ? "green" : ((shortgame83 === 0) ? "" : "red")}>{shortgame83.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>50-75</td>
                        <td style={{ textAlign: "center" }}>{shortgame84.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame84 > 0) ? "green" : ((shortgame84 === 0) ? "" : "red")}>{shortgame84.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>75-100</td>
                        <td style={{ textAlign: "center" }}>{shortgame85.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>0.00</td>
                        <td style={{ textAlign: "center" }} className={(shortgame85 > 0) ? "green" : ((shortgame85 === 0) ? "" : "red")}>{shortgame85.toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
              {(thirdSelect === "scoring") && (
                <div className="homepage-fourth-grid">
                  <div>
                    <h3>GIR %</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Par 3</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring11) ? "N/A" : (scoring11 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(scoring11 > 0.6630) ? "green" : ((scoring11 === 0.6630 || isNaN(scoring11)) ? "" : "red")}>{isNaN(scoring11) ? "N/A" : ((scoring11 - 0.6630) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>Par 4</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring12) ? "N/A" : (scoring12 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(scoring12 > 0.6630) ? "green" : ((scoring12 === 0.6630 || isNaN(scoring12)) ? "" : "red")}>{isNaN(scoring12) ? "N/A" : ((scoring12 - 0.6630) * 100).toFixed(2) + "%"}</td>
                      </tr>
                      <tr>
                        <td>Par 5</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring13) ? "N/A" : (scoring13 * 100).toFixed(2) + "%"}</td>
                        <td style={{ textAlign: "center" }}>{(0.6630 * 100).toFixed(2)}%</td>
                        <td style={{ textAlign: "center" }} className={(scoring13 > 0.6630) ? "green" : ((scoring13 === 0.6630 || isNaN(scoring13)) ? "" : "red")}>{isNaN(scoring13) ? "N/A" : ((scoring13 - 0.6630) * 100).toFixed(2) + "%"}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Scoring Average</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Par 3</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring21) ? "N/A" : scoring21.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>3.06</td>
                        <td style={{ textAlign: "center" }} className={(scoring21 < 3.06) ? "green" : ((scoring21 === 3.06 || isNaN(scoring21)) ? "" : "red")}>{isNaN(scoring21) ? "N/A" : (3.06 - scoring21).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 4</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring22) ? "N/A" : scoring22.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>4.04</td>
                        <td style={{ textAlign: "center" }} className={(scoring22 < 4.04) ? "green" : ((scoring22 === 4.04 || isNaN(scoring22)) ? "" : "red")}>{isNaN(scoring22) ? "N/A" : (4.04 - scoring22).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 5</td>
                        <td style={{ textAlign: "center" }}>{isNaN(scoring23) ? "N/A" : scoring23.toFixed(2)}</td>
                        <td style={{ textAlign: "center" }}>4.64</td>
                        <td style={{ textAlign: "center" }} className={(scoring23 < 4.64) ? "green" : ((scoring23 === 4.64 || isNaN(scoring23)) ? "" : "red")}>{isNaN(scoring23) ? "N/A" : (4.64 - scoring23).toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Birdies or Better Per Round</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Par 3</td>
                        <td style={{ textAlign: "center" }}>{scoring31}</td>
                        <td style={{ textAlign: "center" }}>{((3.65 / 18) * par3).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring31 > ((3.65 / 18) * par3)) ? "green" : (((par3 === 0) || (scoring31 === ((3.65 / 18) * par3))) ? "" : "red")}>{(scoring31 - ((3.65 / 18) * par3)).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 4</td>
                        <td style={{ textAlign: "center" }}>{scoring32}</td>
                        <td style={{ textAlign: "center" }}>{((3.65 / 18) * par4).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring32 > ((3.65 / 18) * par4)) ? "green" : (((par4 === 0) || (scoring32 === ((3.65 / 18) * par4))) ? "" : "red")}>{(scoring32 - ((3.65 / 18) * par4)).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 5</td>
                        <td style={{ textAlign: "center" }}>{scoring33}</td>
                        <td style={{ textAlign: "center" }}>{((3.65 / 18) * par5).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring33 > ((3.65 / 18) * par5)) ? "green" : (((par5 === 0) || (scoring33 === ((3.65 / 18) * par5))) ? "" : "red")}>{(scoring33 - ((3.65 / 18) * par5)).toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Pars or Better Per Round</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Par 3</td>
                        <td style={{ textAlign: "center" }}>{scoring41}</td>
                        <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * par3).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring41 > ((1 - (2.66 / 18)) * par3)) ? "green" : ((par3 === 0) ? "" : "red")}>{(scoring41 - ((1 - (2.66 / 18)) * par3)).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 4</td>
                        <td style={{ textAlign: "center" }}>{scoring42}</td>
                        <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * par4).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring42 > ((1 - (2.66 / 18)) * par4)) ? "green" : ((par4 === 0) ? "" : "red")}>{(scoring42 - ((1 - (2.66 / 18)) * par4)).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 5</td>
                        <td style={{ textAlign: "center" }}>{scoring43}</td>
                        <td style={{ textAlign: "center" }}>{((1 - (2.66 / 18)) * par5).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring43 > ((1 - (2.66 / 18)) * par5)) ? "green" : ((par5 === 0) ? "" : "red")}>{(scoring41 - ((1 - (2.66 / 18)) * par3)).toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <h3>Bogeys or worse per round</h3>
                    <h4>VS PGA Tour</h4>
                    <table>
                      <tr>
                        <th></th>
                        <th>{rounds} Round Average</th>
                        <th>PGA Average</th>
                        <th>Gap</th>
                      </tr>
                      <tr>
                        <td>Par 3</td>
                        <td style={{ textAlign: "center" }}>{scoring51}</td>
                        <td style={{ textAlign: "center" }}>{((2.66 / 18) * par3).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring51 < ((2.66 / 18) * par3)) ? "green" : (((scoring51 === ((2.66 / 18) * par3)) || (par3 === 0)) ? "" : "red")}>{(((2.66 / 18) * par3) - scoring51).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 4</td>
                        <td style={{ textAlign: "center" }}>{scoring52}</td>
                        <td style={{ textAlign: "center" }}>{((2.66 / 18) * par4).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring52 < ((2.66 / 18) * par4)) ? "green" : (((scoring52 === ((2.66 / 18) * par4)) || (par4 === 0)) ? "" : "red")}>{(((2.66 / 18) * par4) - scoring52).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Par 5</td>
                        <td style={{ textAlign: "center" }}>{scoring53}</td>
                        <td style={{ textAlign: "center" }}>{((2.66 / 18) * par5).toFixed(2)}</td>
                        <td style={{ textAlign: "center" }} className={(scoring53 < ((2.66 / 18) * par5)) ? "green" : (((scoring53 === ((2.66 / 18) * par5)) || (par5 === 0)) ? "" : "red")}>{(((2.66 / 18) * par5) - scoring53).toFixed(2)}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}
            </div>}
        </div>
      </div>
    </>
  )
}