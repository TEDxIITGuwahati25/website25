import styles from "./navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";
import {NavLink} from "react-router-dom";
import { useState,useEffect,useRef} from "react";
const Navbarmobile = () => {
    const showActivePage = (isActive,color)=>{return {color: isActive?color:''}}
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
                <div className={styles.div1}><NavLink to="/" style={({isActive})=>showActivePage(isActive,'red')}>Home</NavLink></div>
                <div className={styles.div2}><NavLink to="/AboutUs" style={({isActive})=>showActivePage(isActive,'red')}>About Us</NavLink></div>
                <div className={styles.div3}><NavLink to="/Team" style={({isActive})=>showActivePage(isActive,'red')}>Team</NavLink></div>
                <div className={styles.div4}><NavLink to="/Events" style={({isActive})=>showActivePage(isActive,'red')}>Events</NavLink></div>
                <div className={styles.div5}><NavLink to="/ContactUs" style={({isActive})=>showActivePage(isActive,'red')}>Contact Us</NavLink></div>
                <div className={styles.div6}><NavLink to="/buyTickets" style={({isActive})=>showActivePage(isActive,'red')}>Book Now</NavLink></div>
                
            </div>}
        </div>
        
        </>
    );
}
 
export default Navbarmobile;