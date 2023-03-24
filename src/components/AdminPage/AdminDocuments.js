import React, { useState } from 'react';
import './AdminSidebarStyle.css';
import { Link } from 'react-router-dom';

function AdminDocuments() {
    const [show, setShow] = useState(false);

    return (
      <main className={show ? 'space-toggle' : null}>
        <header className={`header ${show ? 'space-toggle' : null}`}>
          <div className='header-toggle' onClick={() => setShow(!show)}>
            <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          </div>
        </header>
  
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <h1 className='nav-logo'>
                <i className={`fa-sharp fa-solid fa-user nav-logo-icon`}></i>
                <span className='nav-logo-name'>Admin Page</span>
              </h1>
  
              <div className='nav-list'>
                <Link to='/employeeDetails' className='nav-link'>
                  <i className='fa-sharp fa-solid fa-users nav-link-icon'></i>
                  <span className='nav-link-name'>Employee Details</span>
                </Link>
                <Link to='/adminBanners' className='nav-link'>
                  <i className='fa-sharp fa-solid fa-images nav-link-icon'></i>
                  <span className='nav-link-name'>Banners</span>
                </Link>
                <Link to='/adminNews' className='nav-link'>
                  <i className='fa-sharp fa-solid fa-newspaper nav-link-icon'></i>
                  <span className='nav-link-name'>News</span>
                </Link>
                <Link to='/adminDocuments' className='nav-link active-nav'>
                  <i className='fa-sharp fa-solid fa-file-pdf nav-link-icon'></i>
                  <span className='nav-link-name'>Documents</span>
                </Link>
                <Link to='/thoughts' className='nav-link'>
                  <i className='fa-sharp fa-solid fa-heart-circle-check nav-link-icon'></i>
                  <span className='nav-link-name'>Motivational<br /><br />Thoughts</span>
                </Link>
              </div>
            </div>
          </nav>
        </aside>
      </main>
    );
}

export default AdminDocuments