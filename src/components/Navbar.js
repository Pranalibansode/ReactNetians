import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./NavbarStyle.css";

import Grid from "@mui/material/Grid";
import NotificationsIcon from '@mui/icons-material/Notifications';
import WindowIcon from '@mui/icons-material/Window';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import SearchBar from './SearchBar';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
  <>
    <nav className="navbar">
    
    <SearchBar />
    <Grid container className="grid">
           <Grid item className="grid-item"><NotificationsIcon /></Grid>
           <Grid item className="grid-item"><WindowIcon /></Grid>
           <Grid item className="grid-item"><SettingsIcon /></Grid>
           <Grid item className="grid-item"><LogoutIcon /></Grid>
    </Grid>

       <div className="nav-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <NavLink to="/home" activeClassName="active" className="nav-links" onClick={handleClick}>
                         HOME
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/sites" activeClassName="active"  className="nav-links" onClick={handleClick}>
                         SITES
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/social" activeClassName="active"  className="nav-links" onClick={handleClick}>
                         SOCIAL
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/employee" activeClassName="active"  className="nav-links" onClick={handleClick}>
                         POEPLE
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/stories" activeClassName="active"  className="nav-links" onClick={handleClick}>
                         STORIES
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/documents" activeClassName="active"  className="nav-links" onClick={handleClick}>
                         DOCUMENT
                        </NavLink>
                     </li>
                     
                </ul>

                <NavLink to="/profile" className="nav-icon2" onClick={handleClick}>
                              <i className="fas fa-user-circle fa-2x"></i>
               </NavLink>

                <div className="nav-icon1" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
      </div>
      
    </nav>
  </>
  )
}

export default Navbar
