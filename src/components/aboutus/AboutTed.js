import React, { useState } from "react";
import "./AboutTed.css"; // Import the CSS file

const AboutTed = () => {
  // State to manage the displayed content
  const [content, setContent] = useState("TED, founded in 1984, is a global community dedicated to sharing \"ideas worth spreading.\" Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue.");

  return (
    <div className="container">
      <div className="button-container">
        <button className="tab-button" onClick={() => setContent("TED, founded in 1984, is a global community dedicated to sharing \"ideas worth spreading.\" Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue.")}>About TED</button>
        <button className="tab-button" onClick={() => setContent("Since 1984, TED has been a global platform for \"ideas worth spreading,\" uniting people from all disciplines and cultures to foster understanding. Owned by a nonprofit foundation, TED believes in the power of ideas to transform lives and the world. Its TEDx program empowers communities to host local TED-like events, sparking conversation and connection.")}>About TEDx</button>
        <button className="tab-button" onClick={() => setContent("TEDxIITGuwahati, launched in 2016, is an annual event organized by IIT Guwahati students. Run by passionate volunteers, it offers a TED-like experience, fostering dialogue and collaboration through engaging talks and interactive sessions for the IIT Guwahati and wider Indian communities.")}>About TEDxIITGuwahati</button>
      </div>
      <div className="box">
        {content}
      </div>
    </div>
  );
};

export default AboutTed;
