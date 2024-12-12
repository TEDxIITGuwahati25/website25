import Teamiddesktop from "./Teamiddesktop";
import styles from "./Team.module.css"
const Teamdesktop = () => {
    return (
        <div className={styles.Teamdesktop}>
            <h1>Meet Our Core Team</h1>
            <h4>The Core team here at TEDxIITGuwahati is made up of a diverse bunch of awesome humans!</h4>
            <p>We are driven by passion and curiosity. We are inspired by ideas. And we want to leave the world better than we found it. In our day
               lives you can find us working in design, computer science, chemistry, biology, finance, NGOs, arts, business, psycology, health and 
               everything in between. We work year round to bring TEDxIITGuwahati and all of our activities to life.</p>
            <div className={styles.Teamdesktopdetails}>
              {Teamiddesktop("images/Pranati_Tandon4.png","Pranati Tandon","Licensee")}
              {Teamiddesktop("images/Devesh_Kamble.png","Devesh Kamble","Co-Licensee & Marketing Head")}
              {Teamiddesktop("images/Tanvi.png","Tanvi Doshi","Content Head")}
              {Teamiddesktop("images/Shubham2.png","Shubham Yadav","Content Core")}
              {Teamiddesktop("images/Meghana.png","Meghana Nelapati","WebOps Head")}
              {Teamiddesktop("images/Dharani.png","Dharani Lunavath","Creatives Head")}
              {Teamiddesktop("images/Navya2.png","Navya","Creatives Core")}
              {Teamiddesktop("images/Atharva3.png","Atharva Sant","Events Head")}
              {Teamiddesktop("images/Naman2.png","Naman Sharma","Events Core")}
              {Teamiddesktop("images/Japleen2.png","Japleen Kaur","Speakers Head")}
              {Teamiddesktop("images/Anaswara2.png","Anaswara","Speaker Core")}
              {Teamiddesktop("images/Divya2.png","Divya Sahiti","PR & Media Head")}
              {Teamiddesktop("images/Ayush2.png","Ayush Agarwal","PR & Media Core")}
            </div>
        </div>
    );
}
 
export default Teamdesktop;