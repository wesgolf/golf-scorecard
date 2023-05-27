import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Navigate } from 'react-router-dom';

import { useState } from 'react';

import "../../Styles/newroundbutton.css";

    

export default function Newroundbutton() {

    const [newpage, setnewpage] = useState(false)
    function navigate() {
        setnewpage(true)
    }

    if (newpage) {
        return <Navigate to="/newround" />;
    }

    return(
        <div>
            <FontAwesomeIcon icon={faPlus} className="newroundbutton" onClick={navigate}/>
        </div>
    )
}