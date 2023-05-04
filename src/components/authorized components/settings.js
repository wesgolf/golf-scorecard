import React, { useState } from "react";
import "../../Styles/settings.css"
import Authnavbar from "./authnavbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUser, faFileInvoice , faRightFromBracket , faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function Settings() {
    const [settingspage, setsettingspage] = useState("profile")

    function changetoprofile() {
        setsettingspage("profile")
    }
    function changetoaccount() {
        setsettingspage("account")
    }
    function changetobilling() {
        setsettingspage("billing")
    }

    return (
        <div className="gray">
            <Authnavbar />
            <div className="settingsgrid">
                <div>
                    <div className="settingsgrid1">
                        <ul>
                            <li className="click" onClick={changetoprofile}>Profile <FontAwesomeIcon icon={faAddressCard} className="right" /></li>
                            <li className="click" onClick={changetoaccount}>Account <FontAwesomeIcon icon={faUser} className="right" /></li>
                            <li className="click" onClick={changetobilling}>Billing <FontAwesomeIcon icon={faFileInvoice} className="right" /></li>
                        </ul>
                    </div>
                    <div className="logout">
                        <p>Logout <FontAwesomeIcon icon={faRightFromBracket} className="right"/></p>
                    </div>
                    <div className="logout">
                        <p>Delete Account <FontAwesomeIcon icon={faTrashCan} className="right"/></p>
                    </div>
                </div>


                {settingspage === "profile" ? (
                    <div className="settingsgrid2">

                    </div>
                ) : settingspage === "account" ? (
                    <div className="settingsgrid2">

                    </div>
                ) : (
                    <div className="settingsgrid2">

                    </div>
                )}
            </div>
        </div>
    )
}