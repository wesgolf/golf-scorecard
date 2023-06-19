import "../Styles/footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <h1>CourseIQ</h1>
            <div className="footer-grid">
                <div>
                    <h2>Pages</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Begin Now</h2>
                    <ul>
                        <li><a href="/register">Sign up</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
            <div className="lower-grid">
                <div>
                    <p>© 2023 CourseIQ, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}