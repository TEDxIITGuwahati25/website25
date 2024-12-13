import { NavLink, Link } from "react-router-dom"


/*import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";*/

// Icons Components
/*const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="home">
        <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
);

const AboutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">
        <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/>
    </svg>
);

const EventIcon = () => (
    <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <defs>
            <style>{`.cls-1{fill:#232323;}`}</style>
        </defs>
        <path className="cls-1" d="M7,1V3H5V1A1,1,0,0,1,7,1Z" />
        <path className="cls-1" d="M19,1V3H17V1a1,1,0,0,1,2,0Z" />
        <path className="cls-1" d="M20,3H19V5a1,1,0,0,1-2,0V3H7V5A1,1,0,0,1,5,5V3H4A3,3,0,0,0,1,6V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V6A3,3,0,0,0,20,3ZM7,19H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Zm0-5H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Zm6,5H11a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm0-5H11a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm6,5H17a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm0-5H17a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Zm0-5H5A1,1,0,0,1,5,7H19a1,1,0,0,1,0,2Z" />
    </svg>
);

const TeamIcon = () => (
    <svg id="team" width="24" height="24" viewBox="0 0 512 512">
        <path d="M425.3 324.8c-41.4-15.7-38.9-9.4-38.9-38.5 0-18.8 9.3-11.9 15.2-47.7 2.3-14.1 4.2-4.7 9.1-27.3 2.6-11.8-1.8-12.7-1.2-18.3.5-5.6 1-10.7 2-22.2 1.2-14.4-11.6-52-57.4-52s-58.6 37.6-57.4 52c.9 11.6 1.5 16.6 2 22.2.5 5.6-3.8 6.5-1.2 18.3 4.9 22.6 6.8 13.1 9.1 27.3 5.9 35.8 15.1 29 15.1 47.7 0 13.4 3.1 19-14.9 27.5 5.4 1.9 11.7 4.2 19.3 7.1 54.4 20.7 53.1 40.8 54.5 50.3 1 6.5 1.5 58.3 1.7 76.8H480s0-80.5-1.5-89.9c-1.1-7.4-11-17.2-53.2-33.3z" />
        <path d="M357 448s0-14.1-.2-30.4c-.2-18.6-.7-40-1.7-46.4-1.5-9.5-14.3-22.2-68.6-42.9-7.5-2.8-13.8-5.1-19.3-7.1-33.3-11.8-30.9-15.7-30.9-48 0-24.3 12-8.5 19.6-54.6 3-18.2 5.4-6.1 11.7-35.2 3.4-15.2-2.3-16.4-1.6-23.7.7-7.3 1.4-13.8 2.6-28.7 1.6-18.5-14.9-67.1-74.1-67.1-59.2 0-75.6 48.5-74.1 67.1 1.2 14.9 1.9 21.4 2.7 28.7.7 7.3-5 8.4-1.6 23.7 6.4 29.1 8.8 17 11.8 35.2 7.6 46.1 19.5 30.3 19.5 54.6 0 37.6 3.3 34.8-50.2 55.1C48.3 349 35.5 361.7 34 371.2c-2 12.1-2 76.8-2 76.8h325z" />
    </svg>
);

const TicketIcon = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M490.18,181.4l-44.13-44.13a20,20,0,0,0-27-1,30.81,30.81,0,0,1-41.68-1.6h0A30.81,30.81,0,0,1,375.77,93a20,20,0,0,0-1-27L330.6,21.82a19.91,19.91,0,0,0-28.13,0L232.12,92.16a39.87,39.87,0,0,0-9.57,15.5,7.71,7.71,0,0,1-4.83,4.83,39.78,39.78,0,0,0-15.5-9.57L138.16,44.3a19.91,19.91,0,0,0-28.13,0L32.18,132.23a20,20,0,0,0-1,27,30.79,30.79,0,0,1-1.6,41.68,30.81,30.81,0,0,1-41.68-1.6L21.82,181.4a20,20,0,0,0-27,1,40.1,40.1,0,0,0-41.35,41.35A149.4,149.4,0,0,0,43.35,441.3a149.59,149.59,0,0,0,274.6,64.2A151.57,151.57,0,0,0,448.9,400.4a40.1,40.1,0,0,0,41.35-41.35A40.07,40.07,0,0,0,490.18,181.4Z" />
    </svg>
);

const InstagramIcon = () => {
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" id="instagram">
  <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z"></path>
  <circle cx="9.6" cy="9.6" r="1.667"></circle>
  <path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path>
</svg>

};*/

import React, { useEffect, useState } from 'react'; // Import useEffect and useState from React
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track if the sidebar is open
  const [isMobile, setIsMobile] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
    <div>
      {/* Hamburger Menu */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <div className={`hamburger-bar hamburger-bar-1 ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-bar hamburger-bar-2 ${isSidebarOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-bar hamburger-bar-3 ${isSidebarOpen ? 'open' : ''}`}></div>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a
          className={`sidebar-link ${activeLink === '/' ? 'active' : 'inactive'}`}
          href="/"
          onClick={() => handleLinkClick('/')}
        >
          <div className="slider">
            <div className="icon">
              {/* Home Icon */}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="icon"
                height="1em"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div className="text">Home</div>
          </div>
        </a>

        <a
          className={`sidebar-link ${activeLink === '/about' ? 'active' : 'inactive'}`}
          href="/about"
          onClick={() => handleLinkClick('/about')}
        >
          <div className="slider">
            <div className="icon">
              {/* About Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon"
                height="1em"
                width="1em"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" />
                <line x1="12" y1="12" x2="12" y2="16" />
              </svg>



            </div>
            <div className="text">About</div>
          </div>
        </a>

        <a
          className={`sidebar-link ${activeLink === '/team' ? 'active' : 'inactive'}`}
          href="/team"
          onClick={() => handleLinkClick('/team')}
        >
          <div className="slider">
            <div className="icon">
              {/* Team Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon"
                height="1em"
                width="1em"
              >
                <circle cx="9" cy="7" r="4" />
                <circle cx="15" cy="7" r="4" />
                <path d="M5 14c0-2 2-3 4-3s4 1 4 3" />
                <path d="M11 14c0-2 2-3 4-3s4 1 4 3" />
              </svg>

            </div>
            <div className="text">Team</div>
          </div>
        </a>

        <a
          className={`sidebar-link ${activeLink === '/events' ? 'active' : 'inactive'}`}
          href="/events"
          onClick={() => handleLinkClick('/events')}
        >
          <div className="slider">
            <div className="icon">
              {/* Events Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon"
                height="1em"
                width="1em"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="8" y1="4" x2="8" y2="20" />
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="16" y1="4" x2="16" y2="20" />
              </svg>

            </div>
            <div className="text">Events</div>
          </div>
        </a>

        <a
          className={`sidebar-link ${activeLink === '/tickets' ? 'active' : 'inactive'}buy-tickets`}
          href="/tickets"
          onClick={() => handleLinkClick('/tickets')}
        >
          <div className="slider">
            <div className="icon">
              {/*Ticket Icon */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="red"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon"
  height="1em"
  width="1em"
>
  
  <circle cx="12" cy="12" r="10" fill="#ff7f50" stroke="none" />

  
  <rect x="5" y="7" width="14" height="10" rx="2" fill="red" stroke="none"/>
  
  
  <circle cx="5.5" cy="9" r="0.5" fill="#ff7f50" />
  <circle cx="5.5" cy="11" r="0.5" fill="#ff7f50" />
  <circle cx="5.5" cy="13" r="0.5" fill="#ff7f50" />
  <circle cx="5.5" cy="15" r="0.5" fill="#ff7f50" />

  <circle cx="18.5" cy="9" r="0.5" fill="#ff7f50" />
  <circle cx="18.5" cy="11" r="0.5" fill="#ff7f50" />
  <circle cx="18.5" cy="13" r="0.5" fill="#ff7f50" />
  <circle cx="18.5" cy="15" r="0.5" fill="#ff7f50" />

  
  <path d="M5 11h14" stroke="#fff" stroke-width="1" />
  <path d="M5 13h14" stroke="#fff" stroke-width="1" />
</svg>




            </div>
            <div className="text">Buy Tickets</div>
          </div>
        </a>
        <a
          className={`sidebar-link ${activeLink === '/contact' ? 'active' : 'inactive'}`}
          href="/contact"
          onClick={() => handleLinkClick('/contact')}
        >
          <div className="slider">
            <div className="icon">
              {/*Contact Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon"
                height="1em"
                width="1em"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                <path d="M17 5l-5 5" />
                <path d="M19 9l-5 5" />
                <path d="M14 14l-5 5" />
                <path d="M9 19l-4-4" />
              </svg>


            </div>
            <div className="text">Contact </div>
          </div>
        </a>
        <a
          className={`sidebar-link ${activeLink === '/instagram' ? 'active' : 'inactive'}`}
          href="/instagram"
          onClick={() => handleLinkClick('/instagram')}
        >
          <div className="slider">
            <div className="icon">
              {/*Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="icon"
                height="1em"
                width="1em"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
              </svg>

            </div>
            <div className="text">Instagram</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
