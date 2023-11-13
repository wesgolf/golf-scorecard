import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Navbar from "../components/unauthorized components/navbar"
import "../Styles/contact.css"
import Footer from "./footer"

export default function Contact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [text, setText] = useState("")

    const [errors, setErrors] = useState({})

    function handleSubmit(event) {
        event.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
        const newErrors = {};
        if (firstName.length < 1) {
            newErrors.firstName = "Please enter a valid first name"
        }
        if (lastName.length < 1) {
            newErrors.lastName = "Please enter a valid last name"
        }
        if (email.length < 1 || !emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email"
        }
        if (phoneNumber.length < 1 ||  !phoneNumber.match(phoneNumberRegex)) {
            newErrors.phoneNumber = "Please enter a valid phone number"
        }
        if (text.length < 1) {
            newErrors.text = "Please enter a valid message"
        }
        setErrors(newErrors)
    }


    return (
        <>
            <Navbar />
            <div className="contact-background">
                <div className="contact-buffer">

                </div>
                <div className="contact-grid">
                    <div className="contact-center">
                        <h1>Experience Golf Statistics like never before with CourseIQ</h1>
                        <h2>Contact us now if you have any questions at all, and our team will get back to you shortly</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="fa-contact"/>Get detailed insights into your golf game</li>
                            <li><FontAwesomeIcon icon={faCheck} className="fa-contact"/>Compete with friends</li>
                            <li><FontAwesomeIcon icon={faCheck} className="fa-contact"/>Learn how to improve your performance on the course</li>
                            <li><FontAwesomeIcon icon={faCheck} className="fa-contact"/>Discover the power of data-driven golf strategy</li>
                        </ul>
                    </div>
                    <div className="contact-form-container">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="contact-form-grid">
                                <div>
                                    <label>First Name</label><br />
                                    <input onChange={(event) => setFirstName(event.target.value)}  className={(errors.firstName) ? "error-box" : ""}/> <br />
                                    <div className="error-contact">{errors.firstName}</div>
                                    <label>Email</label> <br />
                                    <input onChange={(event) => setEmail(event.target.value)}  className={(errors.email) ? "error-box" : ""}/>
                                    <div className="error-contact">{errors.email}</div>
                                </div>
                                <div>
                                    <label>Last Name</label> <br />
                                    <input onChange={(event) => setLastName(event.target.value)}  className={(errors.lastName) ? "error-box" : ""}/> <br />
                                    <div className="error-contact">{errors.lastName}</div>
                                    <label>Phone Number</label> <br />
                                    <input onChange={(event) => setPhoneNumber(event.target.value)}  className={(errors.phoneNumber) ? "error-box" : ""}/>
                                    <div className="error-contact" style={{marginLeft: "10%"}}>{errors.phoneNumber}</div>
                                </div>
                            </div>
                            <label style={{marginLeft: "5%"}}>How can we help?</label>
                            <textarea onChange={(event) => setText(event.target.value)}  className={(errors.text) ? "error-box" : ""}/> <br />
                            <div className="error1">{errors.text}</div>
                            <button type="submit" >Submit</button>
                        </form>
                        <p>By submitting this form I confirm that I have read the privacy policy and agree to the processing of my personal data by CourseIQ for the stated purposes. In case of consent, I can revoke my consent to this processing at any time.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}