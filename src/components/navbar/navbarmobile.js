import styles from "./navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";
import {Link} from "react-router-dom";
import { useState,useEffect,useRef} from "react";
const Navbarmobile = () => {
    const [menu,setMenu] = useState(false)
    const togglemenu =()=>{
        setMenu(!menu);
    }
    const menuRef= useRef();
    useEffect(()=>{
        const handleClick = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClick);

        return() =>{
            document.removeEventListener("mousedown", handleClick);
        }
    });
    return (
        <>
                <div className={styles.frustation} ref={menuRef}>
                    <div className={styles.navtop}><img src="./images/WhiteTextLogo.png"></img></div>
                    {menu ===true ? <TbXboxX className={styles.menubutton} onClick={togglemenu}/> : <CiMenuBurger className={styles.menubutton} onClick={togglemenu}/>}
                    {/* <button className={styles.menubutton} onClick={togglemenu}></button> */}
                </div> 

        <div className={menu ===true ? styles.navbarmobileopen : styles.navbarmobile} ref={menuRef} onClick={togglemenu}>
            {menu && <div className={styles.div}>
                <div className={styles.div1}><Link to="/">Home</Link></div>
                <div className={styles.div2}><Link to="/AboutUs">About</Link></div>
                <div className={styles.div3}><Link to="/Team">Team</Link></div>
                <div className={styles.div4}><Link to="/Events">Events</Link></div>
                <div className={styles.div5}><Link to="/ContactUs">Contact</Link></div>
                <div className={styles.div6}><Link to="/buyTickets">Book Now</Link></div>
                
            </div>}
        </div>
        
        </>
    );
}
 
export default Navbarmobile;