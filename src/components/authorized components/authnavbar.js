import React, { useState } from "react"
import '../../Styles/authnavbar.css'

export default function Authnavbar() {
    const [listDisplay, setListDisplay] = useState(false)
    return (
        <div className="outer">
            <div className="authnavbar">
                <ul className="navlist1">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Previous Rounds</li>
                    <li>Friends</li>
                </ul>
                <a href="/settings">Settings</a>
            </div>
        </div>

    )
}