import React from 'react'
import '../../../App.css'
import "../../NavbarStyle.css";
import Navbar from '../../Navbar';


import Sidebar from '../../Sidebar';
import Banners from './Banners';
import Date from './Date';
import Vision from './Vision';
import Mission from './Mission';
import Values from './Values';
import NewStarters from './NewStarters';
import News from './News';
import DocumentsHome from './DocumentsHome.js';
import Email from './Email';
import EmpDirectory from './EmpDirectory';

const Home = () => {
  return (
    <>
                <Navbar />
                <Sidebar />
                <Banners />
                <Date />
                <Vision />
                <Mission />
                <Values />
                <NewStarters />
                <News />
                <DocumentsHome />
                <Email />
                <EmpDirectory />
             
       
    </>
  )
}

export default Home