import Navbar from "../components/unauthorized components/navbar";

import "../Styles/pricing.css"
import Footer from "./footer";

export default function Pricing() {
    return (
        <>
        <Navbar />
            <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/61f14daf472c7dd857f3df0c_circle%20bg.svg" className="features-circles" />
            <div className="features-hero">
                <h1>All Your Golf Needs and More on One Platform</h1>
                <p>CourseIQ offers you all the essential golf statistics and beyond</p>
                <div><a>Sign Up for Free</a></div>
            </div>
            <div>
                <div>
                    <h1>Free</h1>
                    <h4>Ideal for players that are just getting the feel for CourseIQ and looking for basic golf statistics.</h4>
                    <a>Sign Up for Free</a>
                    <h5>Included:</h5>
                    <ul>
                        <li>Basic golf Statistics</li>
                        <li>Performance Overview</li>
                    </ul>
                </div>
                <div>
                    <h1>Full</h1>
                    <h2>$5</h2> <h3>per month</h3>
                    <h4>Ideal for any golfer looking to maximize their golf game and connect with friends</h4>
                    <a>Try for Free</a>
                    <h5>Everything in Free, plus:</h5>
                    <ul>
                        <li>Advanced Stat Tracking</li>
                        <li>Strokes Gained Analysis</li>
                        <li>Advanced </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}