import '../../Styles/navbarnew.css'

export default function Navbar() {
    return(
        <>
        <div className="navbargrid">
            <div>
                <h1><a href='/'>Course IQ</a></h1>
            </div>
            <div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/features'>Features</a></li>
                    {/*<li><a href='/usecases'>Use Cases</a></li>*/}
                    {/*<li><a href='/pricing'>Pricing</a></li>*/}
                    <li><a href='/blog'>Blog</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                </ul>
            </div>
            <div className='loginregistercontainer'>
                <ul>
                    <li className='click'><a href="/login">Login</a></li>
                    <li className='click reg' ><a href='/register'>Sign Up for Free</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}