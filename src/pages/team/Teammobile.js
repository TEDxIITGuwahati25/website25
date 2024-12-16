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
              {Teamidmobile("images/Pranati_Tandon4.png","Pranati Tandon","Licensee","https://www.linkedin.com/in/pranati-tandon-a002b127a/")}
              {Teamidmobile("images/Devesh_Kamble.png","Devesh Kamble","Co-Licensee & Marketing Head","https://www.linkedin.com/in/devesh-kamble")}
              {Teamidmobile("images/Tanvi.png","Tanvi Doshi","Content Head","https://www.linkedin.com/in/tanvi-doshi-ba951b28b")}
              {Teamidmobile("images/Shubham2.png","Shubham Yadav","Content Core","https://www.linkedin.com/in/yadvshubham/")}
              {Teamidmobile("images/Meghana.png","Meghana Nelapati","WebOps Head","https://www.linkedin.com/in/meghana-nelapati-556b21261/")}
              {Teamidmobile("images/Dharani.png","Dharani Lunavath","Creatives Head","https://www.linkedin.com/in/dharani-lunavath-609b40233/")}
              {Teamidmobile("images/Navya2.png","Navya","Creatives Core","https://www.linkedin.com/in/navya-posham-530a58257/")}
              {Teamidmobile("images/Atharva3.png","Atharva Sant","Events Head","https://www.linkedin.com/in/atharva-sant-b88511295/")}
              {Teamidmobile("images/Naman2.png","Naman Sharma","Events Core","https://www.linkedin.com/in/naman-sharma-57734199/")}
              {Teamidmobile("images/Japleen2.png","Japleen Kaur","Speakers Head","https://www.linkedin.com/in/japleen-kaur-b10377260/")}
              {Teamidmobile("images/Anaswara2.png","Anaswara","Speaker Core","https://www.linkedin.com/in/anaswara-p-c-b99355141/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}
              {Teamidmobile("images/Divya2.png","Divya Sahiti","PR & Media Head","https://www.linkedin.com/in/divya-sahiti-yerramsetti-499a0924b/")}
              {Teamidmobile("images/Ayush2.png","Ayush Agarwal","PR & Media Core","https://www.linkedin.com/in/aayush-agarwal-iitg/")}
            </div>
        </div>
    );
}
 
export default Teammobile;