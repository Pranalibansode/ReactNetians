import React from 'react'
import { NavLink } from 'react-router-dom'
import "./EmailStyle.css";

function Email() {
  return (
    <div>
    <p className="text-email">E-mails</p>
         <div className="Email">
              <NavLink to="/email">
              <input type="button" value="View All" className="email-btn"/>
              </NavLink>
         </div>

    </div>
  )
}

export default Email