import styles from "./Team.module.css";
import { FaLinkedin } from "react-icons/fa6";

const Teamidmobile = (img,name,position,linkedin) => {
    return (
        <div className={styles.Teamidmobile}>

            <div className={styles.linkedin}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon}/>
            <img src={img}></img>
            </a>
            </div>
            
            <div className={styles.imgTitleName}><p>{name}</p></div>
            <div className={styles.imgTitlePost}><p>{position}</p></div>
        </div>
    );
}
 
export default Teamidmobile;