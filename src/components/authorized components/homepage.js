import React, { useState, useEffect } from "react";
import Authnavbar from "./authnavbar";
import '../../Styles/homepage.css'


export default function Dashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    // get the current time
    const now = new Date();

    // set the name based on the time of day
    if (now.getHours() < 12) {
      setName("morning");
    } else if (now.getHours() < 18) {
      setName("afternoon");
    } else {
      setName("evening");
    }
  }, []);

  return (
    <>
      <Authnavbar />
      <div className="homepageheader">
        <h1>Good {name}, user</h1>
        <h2>Showing stats for the past _______</h2>
      </div>
    </>
  );
}
