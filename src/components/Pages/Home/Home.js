import React from 'react'
import '../../../App.css'
import "../../NavbarStyle.css";
import Navbar from '../../Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sites from './Sites';
import People from '../Poeple';
import Social from '../Social';
import Stories from '../Stories';
import Documents from '../Documents';
import Profile from '../Profile';
import Sidebar from '../../Sidebar';

const Home = () => {
  return (
    <>
        <Router>
                <Navbar />
                <Sidebar />
              <div className="pages">
                <Routes>
                   <Route path='/' element={Home} />
                   <Route path='/sites' element={Sites} />
                   <Route path='/social' element={Social} />
                   <Route path='/employee' element={People} />
                   <Route path='/stories' element={Stories} />
                   <Route path='/documents' element={Documents} />
                   <Route path='/profile' element={Profile} />
                </Routes>
              </div>
        </Router>
    </>
  )
}

export default Home