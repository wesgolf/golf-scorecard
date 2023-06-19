import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Mainpage from './pages/mainpage.js';
import Login from './pages/loginpage.js'
import Register from './pages/registerpage.js';
import Homepage from './components/authorized components/homepage.js';
import Newround from './components/authorized components/newround.js';
import Navbar from './components/unauthorized components/navbar.js';
import { useState } from 'react';
import Settings from './components/authorized components/settings.js';
import Friends from './components/authorized components/friends.js';
import Previousrounds from './components/authorized components/previousrounds.js';
import Features from './pages/features.js';
import Pricing from './pages/pricing.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/features" element={<Features />} />
          {/*<Route path='/pricing' element={<Pricing />} /> */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />




          <Route path='/dashboard' element={<Homepage />} />
          <Route path='/newround' element={<Newround />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/previousrounds' element={<Previousrounds/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
