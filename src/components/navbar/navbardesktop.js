import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

const Navbardesktop = () => {
    return (
        <div className={styles.navbardesktop}>
                    <div className={styles.img}><img src="./images/WhiteTextLogo.png"></img></div>
                    <div className={styles.div1}><Link to="/">Home</Link></div>
                    <div className={styles.div2}><Link to="/AboutUs">About</Link></div>
                    <div className={styles.div3}><Link to="/Team">Team</Link></div>
                    <div className={styles.div4}><Link to="/Events">Events</Link></div>
                    
                    <div className={styles.div6}><Link to="/ContactUs">Contact</Link></div>
                    <div className={styles.div7}><a href="https://www.instagram.com/tedxiitguwahati/"><img src="images/Instalogo.png"></img></a></div>
                    <div className={styles.div5}><Link to="/buyTickets"><div className={styles.booknow}>Book Now</div></Link></div>
                    




                    
         </div>
    );
}
 
export default Navbardesktop;