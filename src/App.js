import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Mainpage from './pages/mainpage.js';
import Login from './components/unauthorized components/login.js';
import Register from './components/unauthorized components/register.js';
import Homepage from './components/authorized components/homepage.js';
import Newround from './components/authorized components/newround.js';
import Navbar from './components/unauthorized components/navbar.js';
import { useState } from 'react';
import Settings from './components/authorized components/settings.js';
import Friends from './components/authorized components/friends.js';
import Previousrounds from './components/authorized components/previousrounds.js';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
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
