import styles from "./Team.module.css";
const Teamidmobile = (img,name,position) => {
    return (
        <div className={styles.Teamidmobile}>
            <img src={img}></img>
            <div className={styles.imgTitleName}><p>{name}</p></div>
            <div className={styles.imgTitlePost}><p>{position}</p></div>
        </div>
    );
}
 
export default Teamidmobile;