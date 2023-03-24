import React from 'react'
import { NavLink} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminHomePage from "./components/AdminPage/AdminHomePage";
import EmployeeHomePage from "./components/EmployeePage/EmployeeHomePage";
import Home from './components/Pages/Home/Home';
import Sites from './components/Pages/Home/Sites';
import People from './components/Pages/People';
import Social from './components/Pages/Social';
import Stories from './components/Pages/Stories';
import Documents from './components/Pages/Documents';
import Profile from './components/Pages/Profile';
function MainPage() {
   return (
<>
<Router>
            <Routes>
                   <Route path='/EmployeeHomePage' element={<EmployeeHomePage />} />
                   <Route path='/AdminHomePage' element={<AdminHomePage />} />

                   <Route path='/home' element={<Home />} />
                   <Route path='/sites' element={<Sites/>} />
                   <Route path='/social' element={<Social />} />
                   <Route path='/employee' element={<People />} />
                   <Route path='/stories' element={<Stories />} />
                   <Route path='/documents' element={<Documents />} />
                   <Route path='/profile' element={<Profile />} />
            </Routes>
    <div>
            <NavLink to='/EmployeeHomePage'>
                    <button style={{color:"white", background:"#091351", padding:"5px 10px 5px 10px", marginLeft: 600, borderRadius:5, border:"none", height:30}}>
                    Employee Page
                    </button>
            </NavLink>

           <NavLink to='/AdminHomePage'>
                    <button
                    style={{color:"white", background:"#091351", padding:"5px 10px 5px 10px", marginLeft: 100, borderRadius:5, border:"none", height:30}}>
                    Admin Page
                    </button>
           </NavLink>
    </div>
</Router>
</>
  );
}

export default MainPage;