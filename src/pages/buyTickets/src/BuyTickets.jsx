import React from 'react';
import ArcadeTicket from './components/ArcadeTicket';
import ExclusiveBenefits from './components/ExclusiveBenefits';
import './BuyTickets.css';


function BuyTickets() {
  const handleBook = () => {
    alert('Booking functionality will be implemented here!');
  };

  return (
    <div className="app-container">
      {/* <Navbar /> */}
      
      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title">Buy Tickets</h1>
          {/* <p className="hero-description">
            Buy Tickets
          </p> */}
        </div>

        <div className="content-grid">
          <div className="ticket-container">
            <div className="ticket-wrapper">
              <ArcadeTicket
                type="student"
                date="Feb 9, 2025"
                time="9:00 AM"
                onBook={handleBook}
                className="ticket student-ticket"
              />
              <ArcadeTicket
                type="general"
                date="Feb 9, 2025"
                time="9:00 AM"
                onBook={handleBook}
                className="ticket general-ticket"
              />
            </div>
          </div>
          <div className="benefits-container">
            <ExclusiveBenefits />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuyTickets;
