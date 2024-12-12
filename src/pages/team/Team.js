import Teamdesktop from "./Teamdesktop";
import Teammobile from "./Teammobile";
import {useState, useEffect} from "react";
import styles from "./Team.module.css";

const Team = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 570);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 570);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.Team}>
      {isSmallScreen ? <Teammobile /> : <Teamdesktop />}
    </div>
  );
}
 
export default Team;