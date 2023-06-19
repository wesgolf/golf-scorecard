import { faClock, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Navbar from '../components/unauthorized components/navbar';
import '../Styles/mainpagenew.css';
import Footer from './footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mainpage() {
  const [titleHelp, setTitleHelp] = useState('Improve your golf game');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [partTwo, setPartTwo] = useState(0)

  const help = [
    'Improve your golf game',
    'Compete with friends',
    'Track your progress',
    'Master Course Management',
    'Achieve your goal handicap',
  ];

  const titles = ["Percision Practice", "Effortless Shot Input", "Personalized Insights", "Friendly Competition"]
  const paragraphs = ["Unleash your golf practice's potential with a cutting-edge stat tracking app. Harness strokes gained analysis to gain insights into your performance, identify improvement areas, and maximize your progress. Take targeted action and elevate your game to new heights of excellence.",
    "Effortlessly record and analyze each shot without manual data entry. Our app simplifies the input process, letting you focus on your game while capturing valuable data. Spend more time perfecting your shots with hassle-free shot input.",
    "Unleash your golf potential with personalized insights. Our app provides tailored analysis and recommendations based on your performance data. Benefit from advanced algorithms that reveal your strengths, weaknesses, and areas for improvement. Elevate your practice and achieve better on-course results with personalized insights.",
    "Fuel your competitive drive with our app's friendly competition feature. Join exhilarating challenges, compare performance with fellow golfers, and foster camaraderie. Compete with friends, teammates, or others, track progress on leaderboards, and celebrate victories together. Embrace the thrill of friendly competition to elevate your golf game to new heights."]
  const images = [
    "https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/646a2a794df1a31225ab84e5_Templates%20(1).png",
    "https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/6461f8d359b0c9fe0cb9e999_Templates%20(8).png",
    "https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/6461f8d34bc9d89c2d3756cd_Templates%20(9).png",
    "https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/6461f8d372fa898a553cfcee_Templates%20(10).png"
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % help.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTitleHelp(help[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    AOS.init({
      // Customize AOS configuration options here (if needed)
    });
  }, []);

  return (
    <>

      <Navbar />
      <div className="hero-section">
        <div className='hero-section-left'>
          <h2>The modern way to <span key={titleHelp} className="fade-in-animation">{titleHelp}</span></h2>
          <p style={{ fontSize: '20px' }}>Stop spending worthless hours practicing on your own and analyse the exact problems with our tool. With our innovative algorithms and processes, we will be able to show you exactly how you can optimize your practice time so that you can improve your golf game the fastest.</p>
          <a className='herobutton'>Sign Up for Free</a>

        </div>
        <div>
          <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/646df0ef933b939f7e8e497e_Homepage%20Hero%20Screenshot.png" className='hero-photo' />
        </div>
        <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/645b63702e6d6f2fd1f92f05_bottom-cut%20(1).png" className='angle' />
      </div>
      <div className='sub-section'>
        <div>
          <h3>Why use CourseIQ?</h3>
          <h4>There are so many other options out there, so, why us?</h4>
          <div className='button-container'>
            <p onClick={() => setPartTwo(0)} className={partTwo === 0 ? "sub-selected" : ""}>Percision Practice</p>
            <p onClick={() => setPartTwo(1)} className={partTwo === 1 ? "sub-selected" : ""}>Effortless Shot Input</p>
            <p onClick={() => setPartTwo(2)} className={partTwo === 2 ? "sub-selected" : ""}>Personalized Insights</p>
            <p onClick={() => setPartTwo(3)} className={partTwo === 3 ? "sub-selected" : ""}>Friendly Competition</p>
          </div>
        </div>
        <div className='sub-container'>
          <div className='sub-grid'>
            <div>
              <h2>{titles[partTwo]}</h2>
              <p>{paragraphs[partTwo]}</p>
            </div>
            <div>
              <img src={images[partTwo]} />
            </div>
          </div>
        </div>
      </div>
      <div className='sub-sub'>
        <FontAwesomeIcon icon={faPenToSquare} className="fa-sub" />
        <h3>Get a Detailed Analysis in less than 5 minunites.</h3>
        <h4>Unlock Your Potential with Detailed Analysis</h4>
      </div>
      <div className='sub-2'>
        <div>
          <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/646df49138aed276c96f5da5_Data.png" />
        </div>
        <div>
          <div className='line-top'>

          </div>
          <div className='circle'>

          </div>
        </div>
        <div className='text-container-1' data-aos="fade-left">
          <h5>1. Enter Round Informatation</h5>
          <h6>Enter general data from your round, including course and date</h6>
          <p><FontAwesomeIcon icon={faClock} /> 0.5 Minuites</p>
        </div>

        <div className='text-container-1 left-align' data-aos="fade-right">
          <h5>2. Enter Shot Level Information</h5>
          <h6>Enter each of your shots into our intutive system</h6>
          <p><FontAwesomeIcon icon={faClock} /> 3 Minuites</p>
        </div>
        <div >
          <div className='line'>

          </div>
          <div className='circle'>

          </div>
        </div>
        <div>
          <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/645a52af264caf661bec8a83_Templates.png" />
        </div>
        <div>
          <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/645a52af12b67c376e4ec47d_Templates%20(2).png" />
        </div>
        <div>
          <div className='line-bottom'>

          </div>
          <div className='circle'>

          </div>
        </div>
        <div className='text-container-1' data-aos="fade-left">
          <h5>3. Review and Confirm Data</h5>
          <h6>Take a moment to review the data that you entered is correct</h6>
          <p><FontAwesomeIcon icon={faClock} /> 1 Minuite</p>
        </div>
      </div>
      <div className='reviews-hero'>
        <h3>Can't take our word for it?</h3>
        <h4>See what our users have to say for themselves</h4>
      </div>
      <div className='reviews'>
        {/* First Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620d569f007942bb31e0de7c_2fjfB5K4_400x400.jpeg' />
            </div>
            <div>
              <h2>Ben Sehl</h2>
              <h3>@benjaminsehl</h3>
            </div>
            <div>
              <h4>18 Sep</h4>
            </div>
          </div>
          <p>This golf stat tracking app is a hole-in-one for golf enthusiasts. It seamlessly captures and presents comprehensive data, helping players analyze their performance and improve their game with ease.</p>
        </div>
        {/* Second Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620a79fdba6d094410b82e36_YhuBDlxu_400x400.jpeg' />
            </div>
            <div>
              <h2>Kieran McHugh</h2>
              <h3>@kieranmch</h3>
            </div>
            <div>
              <h4>9 Aug</h4>
            </div>
          </div>
          <p>This golf stat tracking app is a game-changer for golfers of all levels. With its intuitive interface and robust features, it provides in-depth analysis and personalized insights, making it an essential tool for anyone serious about enhancing their skills on the course.</p>
        </div>
        {/* Third Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620d59f8439bcf21130d6a9d_XBVpLgf-_400x400.jpeg' />
            </div>
            <div>
              <h2>Tyler Tringas</h2>
              <h3>@tytring</h3>
            </div>
            <div>
              <h4>24 Aug</h4>
            </div>
          </div>
          <p>This golf stat tracking app takes your game to new heights. With its sleek design and comprehensive features, it simplifies the process of recording and analyzing your rounds, providing valuable data and trends that help you fine-tune your strategy and reach your full potential on the fairway.</p>
        </div>
        {/* Fourth Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620d5048fb3be6332c51f467_75e17ZHX_400x400.jpeg' />
            </div>
            <div>
              <h2>Colin Plamondon</h2>
              <h3>@colinplamon</h3>
            </div>
            <div>
              <h4>25 Jan</h4>
            </div>
          </div>
          <p>This golf stat tracking app takes your game to new heights. With its sleek design and comprehensive features, it simplifies the process of recording and analyzing your rounds, providing valuable data and trends that help you fine-tune your strategy and reach your full potential on the fairway.</p>
        </div>
        {/* Fifth Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620d5854624fddb9802ae910_dDMKej74_400x400.jpeg' />
            </div>
            <div>
              <h2>Matt Mazzeo</h2>
              <h3>@mazzeo</h3>
            </div>
            <div>
              <h4>8 Jan</h4>
            </div>
          </div>
          <p>If you're serious about improving your golf game, look no further than this exceptional stat tracking app. From detailed shot tracking to insightful performance analysis, it offers a comprehensive toolkit for players of all levels, helping you identify strengths, weaknesses, and areas for growth, ultimately leading to lower scores and a more enjoyable time on the course.</p>
        </div>
        {/* Sixth Review */}
        <div className='review'>
          <div className='review-grid'>
            <div>
              <img src='https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/620d58f0c1a96097f76bc8f7_PAcQCoYn_400x400.jpeg' />
            </div>
            <div>
              <h2>Matt Evans</h2>
              <h3>@makermattevans</h3>
            </div>
            <div>
              <h4>24 Aug</h4>
            </div>
          </div>
          <p>This golf stat tracking app is a true game-changer for golfers. With its user-friendly interface and advanced features, it seamlessly captures every aspect of your game, providing comprehensive insights and personalized recommendations to elevate your performance. Whether you're a seasoned pro or a beginner, this app is a must-have companion on your journey to mastering the greens.</p>
        </div>


      </div>
      <div className='gradient'>

      </div>
      <div className='sub-sub-hero'>
        <div className='sub-sub-hero-grid'>
          <div style={{margin: "auto 0"}}>
            <h2>So why wait?</h2>
            <h3>Join CourseIQ now</h3>
            <a href='/register' className='herobutton'>Join Now</a>
          </div>
          <div>
            <img src='https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/645e059634b72b00b38824eb_Frame%2093%20(1).png' />

          </div>
        </div>
      </div>
      <div className='gradient-down'>

      </div>
      <Footer />
      <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/6465349097939d13b0e42645_Grid%20(1).png" className='circles' />
      <img src="https://assets-global.website-files.com/61e8494b1e8e024a7113bd50/646534922057ac5aa138057d_Frame%202714%20(1).png" className='circles1' />
    </>
  );
}
