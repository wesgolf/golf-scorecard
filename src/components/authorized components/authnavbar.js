import '../../Styles/authnavbar.css'

export default function Authnavbar() {
    return (
        <div className="outer">
            <div className="authnavbar">
                <ul className="navlist1">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/previousrounds">Previous Rounds</a></li>
                    <li><a href="/friends">Friends</a></li>
                </ul>
                <a href="/settings">Settings</a>
            </div>
        </div>

    )
}