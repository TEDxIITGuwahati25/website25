import { NavLink, Link } from "react-router-dom"

import React, { useEffect, useState } from 'react'; // Import useEffect and useState from React
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track if the sidebar is open
  const [isMobile, setIsMobile] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023); // Mobile view: width <= 1023px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sidebarr">
      {/* Hamburger Menu */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <div className={`hamburger-bar hamburger-bar-1 ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-bar hamburger-bar-2 ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-bar hamburger-bar-3 ${isSidebarOpen ? 'open' : ''}`}></div>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : 'inactive'}`}
        >
          <div className="slider">
            <div className="icon">
              {/* Home Icon */}
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="icon" height="1em" width="1em"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <div className="text">Home</div>
          </div>
        </NavLink>

        <NavLink
          to="/AboutUs"
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : 'inactive'}`}
        >
          <div className="slider">
            <div className="icon">
              {/* About Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon" height="1em" width="1em"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="8" /><line x1="12" y1="12" x2="12" y2="16" /></svg>
            </div>
            <div className="text">About</div>
          </div>
        </NavLink>

        <NavLink
          className={`sidebar-link ${activeLink === '/team' ? 'active' : 'inactive'}`}
          to="/Team"
        >
          <div className="slider">
            <div className="icon">
              {/* Team Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em"><circle cx="9" cy="7" r="4" /><circle cx="15" cy="7" r="4" /><path d="M5 14c0-2 2-3 4-3s4 1 4 3" /><path d="M11 14c0-2 2-3 4-3s4 1 4 3" /></svg>
            </div>
            <div className="text">Team</div>
          </div>
        </NavLink>

        <NavLink
          className={`sidebar-link ${activeLink === '/events' ? 'active' : 'inactive'}`}
          to="/Events"
        >
          <div className="slider">
            <div className="icon">
              {/* Events Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor"strokeWidth="2"viewBox="0 0 24 24"strokeLinecap="round"strokeLinejoin="round"class="icon"height="1em"width="1em"><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="8" x2="21" y2="8" /><line x1="8" y1="4" x2="8" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="16" y1="4" x2="16" y2="20" /></svg>
            </div>
            <div className="text">Events</div>
          </div>
        </NavLink>

        <NavLink
          className={`sidebar-link ${activeLink === '/tickets' ? 'active' : 'inactive'}buy-tickets`}
          to="/BuyTickets"
        >
          <div className="slider">
            <div className="icon">
              {/*Ticket Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em"><circle cx="12" cy="12" r="10" fill="#ff7f50" stroke="none" /><rect x="5" y="7" width="14" height="10" rx="2" fill="red" stroke="none"/><circle cx="5.5" cy="9" r="0.5" fill="#ff7f50" /><circle cx="5.5" cy="11" r="0.5" fill="#ff7f50" /><circle cx="5.5" cy="13" r="0.5" fill="#ff7f50" /><circle cx="5.5" cy="15" r="0.5" fill="#ff7f50" /><circle cx="18.5" cy="9" r="0.5" fill="#ff7f50" /><circle cx="18.5" cy="11" r="0.5" fill="#ff7f50" /><circle cx="18.5" cy="13" r="0.5" fill="#ff7f50" /><circle cx="18.5" cy="15" r="0.5" fill="#ff7f50" /><path d="M5 11h14" stroke="#fff" stroke-width="1" /><path d="M5 13h14" stroke="#fff" stroke-width="1" /></svg>
            </div>
            <div className="text">Buy Tickets</div>
          </div>
        </NavLink>

        <NavLink
          className={`sidebar-link ${activeLink === '/contact' ? 'active' : 'inactive'}`}
          to="/ContactUs"
        >
          <div className="slider">
            <div className="icon">
              {/*Contact Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em"><path d="M15 3h4a2 2 0 0 1 2 2v4" /><path d="M17 5l-5 5" /><path d="M19 9l-5 5" /><path d="M14 14l-5 5" /><path d="M9 19l-4-4" /></svg>
            </div>
            <div className="text">Contact </div>
          </div>
        </NavLink>

        <a
          className={`sidebar-link ${activeLink === '/instagram' ? 'active' : 'inactive'}`}
          href="https://www.instagram.com/tedxiitguwahati/"
        >
          <div className="slider">
            <div className="icon">
              {/*Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="16.5" y1="7.5" x2="16.5" y2="7.5" /></svg>
            </div>
            <div className="text">Instagram</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
