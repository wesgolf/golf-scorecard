import React, {useState} from 'react'
import '../Styles/mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBolt, faTrophy, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/unauthorized components/navbar.js';
import Login from '../components/unauthorized components/login.js'
import Register from '../components/unauthorized components/register';


export default function Mainpage() {


    return (
        <div className='mainpage'>
            {/* Background */}
            <Navbar />
            <div className='background'></div>
            {/* Hero Section */}
            <div className='herosection'>
                <h1>CourseIQ</h1>
                <h2>Making Golf Stat Tracking Fun</h2>
                <a href='#section2'>Start your Journey to better golf now</a>
            </div>
            <div className='section2' id="section2">
                <h3>What sets us apart?</h3>

                <div className='herogrid'>
                    <div className='herogridcomponent'>
                        <h4>Precision Practice</h4>
                        <FontAwesomeIcon icon={faBullseye} className="icon" />
                        <p>Maximize your time on the course with CourseIQ's tailored insights. Our intelligent analysis pinpoints the exact areas you need to focus on to improve your game.</p>
                    </div>
                    <div className='herogridcomponent'>
                        <h4>Effortless Shot Input</h4>
                        <FontAwesomeIcon icon={faBolt} className="icon" />
                        <p>Say goodbye to tedious data entry. CourseIQ's intuitive shot tracking system makes inputting your stats a breeze, giving you more time to focus on your game.</p>
                    </div>
                    <div className='herogridcomponent'>
                        <h4>Friendly Competition</h4>
                        <FontAwesomeIcon icon={faTrophy} className="icon" />
                        <p>Take your game to the next level by competing with friends on the CourseIQ app. Compare your stats and challenge each other to improve your skills.</p>
                    </div>
                    <div className='herogridcomponent'>
                        <h4>Personalized Insights</h4>
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                        <p >Get a unique perspective on your game with CourseIQ's custom analysis. Our data-driven reports provide you with actionable feedback to enhance your strengths and target your weaknesses.</p>
                    </div>

                </div>

            </div>
            <div>
                <h3>What golfers are saying about CourseIQ:</h3>
                <div className='grid2'>
                    <div className='div1'>
                        <img src='https://golfhabits.com/wp-content/uploads/2019/10/stats2-e1571111964749.jpg' />
                    </div>
                    <div className='div2'>
                        <p className='bigger1'>"</p>
                        <p>I've been using CourseIQ for a few months now and it has been a great addition to my golf game. The shot tracking system is so easy to use and the personalized insights have really helped me identify areas where I need to focus on. I've also enjoyed competing with my friends on the app, it adds a fun and competitive element to our rounds. I highly recommend CourseIQ to anyone looking to improve their golf game.</p>
                        <p className='bold'>- Sarah T., CourseIQ User</p>
                        <p>"</p>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )

}
