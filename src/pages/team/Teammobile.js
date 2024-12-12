import Teamidmobile from "./Teamidmobile";
import styles from "./Team.module.css";
const Teammobile = () => {
    return (
        <div className={styles.Teammobile}>
            <h1>Meet Our Core Team</h1>
            <h4>The Core team here at TEDxIITGuwahati is made up of a diverse bunch of awesome humans!</h4>
            <p>We are driven by passion and curiosity. We are inspired by ideas. And we want
               to leave the world better than we found it. In our day lives you can find us
               working in design, computer science, chemistry, biology, finance, NGOs, arts,
               business, psycology, health and everything in between. We work year round to
               bring TEDxIITGuwahati and all of our activities to life.
            </p>
            <div>
              {Teamidmobile("images/Pranati_Tandon4.png","Pranati Tandon","Licensee")}
              {Teamidmobile("images/Devesh_Kamble.png","Devesh Kamble","Co-Licensee & Marketing Head")}
              {Teamidmobile("images/Tanvi.png","Tanvi Doshi","Content Head")}
              {Teamidmobile("images/Shubham2.png","Shubham Yadav","Content Core")}
              {Teamidmobile("images/Meghana.png","Meghana Nelapati","WebOps Head")}
              {Teamidmobile("images/Dharani.png","Dharani Lunavath","Creatives Head")}
              {Teamidmobile("images/Navya2.png","Navya","Creatives Core")}
              {Teamidmobile("images/Atharva3.png","Atharva Sant","Events Head")}
              {Teamidmobile("images/Naman2.png","Naman Sharma","Events Core")}
              {Teamidmobile("images/Japleen2.png","Japleen Kaur","Speakers Head")}
              {Teamidmobile("images/Anaswara2.png","Anaswara","Speaker Core")}
              {Teamidmobile("images/Divya2.png","Divya Sahiti","PR & Media Head")}
              {Teamidmobile("images/Ayush2.png","Ayush Agarwal","PR & Media Core")}
            </div>
        </div>
    );
}
 
export default Teammobile;