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
import AdminEmployeeDetails from './components/AdminPage/AdminEmployeeDetails';
import AdminBanners from './components/AdminPage/AdminBanners';
import AdminDocuments from './components/AdminPage/AdminDocuments';
import AdminNews from './components/AdminPage/AdminNews';
import AdminThoughts from './components/AdminPage/AdminThoughts';

function MainPage() {
   return (
<>
<Router>
            <Routes>
                   <Route path='/EmployeeHomePage' element={<EmployeeHomePage />} />
                   <Route path='/AdminHomePage' element={<AdminHomePage />} />

                {/*EmployeeHome page*/}
                   <Route path='/home' element={<Home />} />
                   <Route path='/sites' element={<Sites/>} />
                   <Route path='/social' element={<Social />} />
                   <Route path='/employee' element={<People />} />
                   <Route path='/stories' element={<Stories />} />
                   <Route path='/documents' element={<Documents />} />
                   <Route path='/profile' element={<Profile />} />

                {/*AdminHome page*/}
                <Route path='/employeeDetails' element={<AdminEmployeeDetails />} />
                   <Route path='/adminBanners' element={<AdminBanners/>} />
                   <Route path='/adminNews' element={<AdminNews />} />
                   <Route path='/adminDocuments' element={<AdminDocuments />} />
                   <Route path='/thoughts' element={<AdminThoughts />} />
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