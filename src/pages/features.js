import Navbar from "../components/unauthorized components/navbar";

import '../Styles/features.css'
import Footer from "./footer";

export default function Features() {
    return (
        <>
            <Navbar />
            <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/61f14daf472c7dd857f3df0c_circle%20bg.svg" className="features-circles" />
            <div className="features-hero">
                <h1>All Your Golf Needs and More on One Platform</h1>
                <p>CourseIQ offers you all the essential golf statistics and beyond</p>
                <div><a>Sign Up for Free</a></div>
            </div>
            <div className="features-grid-container">
                <div className="features-grid">
                    <div>
                        <h1>Friends and Social Features</h1>
                        <ul>
                            <li>Friend Connect: Allow users to connect with friends within the app, enabling them to follow and track each other's progress.</li>
                            <li>Leaderboards: Create leaderboards where users can compare their performance against friends or other golfers in various statistical categories.</li>
                            <li>Challenges and Competitions: Enable users to challenge their friends to friendly competitions, such as longest drive or closest to the pin contests.</li>
                            <li>Social Sharing: Integrate social media sharing functionality, allowing users to share their achievements, scores, and highlights with their social network.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/61e962651895f6803876eb46_Grid%20(1).svg" />
                    </div>
                </div>
                <div className="features-background">
                    <div className="features-grid">
                        <div>
                            <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/64029f454a209e6c223196ea_BvA.svg" />
                        </div>
                        <div>
                            <h1>Strokes Gained Analysis</h1>
                            <ul>
                                <li>Detailed Strokes Gained Breakdown: Provide a comprehensive breakdown of strokes gained for each aspect of the game, including off the tee, approach shots, short game, and putting.</li>
                                <li>Comparative Analysis: Compare a user's strokes gained performance against friends or other golfers in similar skill levels to identify areas of strength and weakness. </li>
                                <li>Trend Analysis: Display historical strokes gained data to track progress and identify improvements or areas that require more focus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="features-grid">
                    <div>
                        <h1>Advanced Golf Statistics</h1>
                        <ul>
                            <li>Scrambling Percentage: Track and display the percentage of times a user successfully gets up and down (makes par or better) after missing the green in regulation. This statistic showcases a player's ability to recover and save strokes around the green.</li>
                            <li>Proximity to Hole: Calculate and present the average distance of approach shots to the pin. This statistic provides insights into a player's accuracy and ability to get the ball close to the hole for scoring opportunities.</li>
                            <li>GIR Percentage by Club: Show the greens in regulation percentage for each club, allowing users to analyze their performance with different clubs and identify clubs that need improvement or adjustment.</li>
                            <li>Fairways Hit Percentage: Calculate and display the percentage of times a user hits the fairway off the tee. This statistic reflects a player's accuracy and consistency in finding the fairway, which can lead to better scoring opportunities.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/64029f454a209e6c223196ea_BvA.svg" />
                    </div>
                </div>
                <div className="features-background">
                    <div className="features-grid">
                        <div>
                            <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/63f7930f312c706636e40f4c_Group%20164.svg" />
                        </div>
                        <div>
                            <h1>Proximity Analysis</h1>
                            <ul>
                                <li>Proximity to Pin: Calculate and display the average proximity to the pin for approach shots, giving users an indication of their accuracy on approach shots.</li>
                                <li>Proximity Scatter Plot: Provide a scatter plot visualization showing the dispersion pattern of approach shots around the pin, allowing users to analyze their shot distribution.</li>
                                <li>Proximity Rankings: Compare a user's proximity to pin performance against friends or other golfers, highlighting their relative performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="features-grid">
                    <div>
                        <h1>Personalized Interactive Dashboard</h1>
                        <ul>
                            <li>Performance Overview: Provide an overview of the user's overall golf performance, including key statistics such as scoring average, handicap index, and recent trends in performance.</li>
                            <li>Score History: Present a history of the user's past rounds, allowing them to review scores, statistics, and other relevant details for each round played. Users can easily reference their previous performances and compare their progress.</li>
                            <li>Achievement and Milestone Tracking: Recognize and celebrate users' milestones and achievements, such as reaching a specific handicap milestone or accomplishing personal bests. Display badges or trophies to acknowledge their progress and encourage further engagement.</li>
                            <li>Social Integration: Integrate social features within the user dashboard, allowing users to connect with friends, share their achievements, and view their friends' activities and performances. This fosters a sense of community and friendly competition.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/61e962651895f6803876eb46_Grid%20(1).svg" />
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}