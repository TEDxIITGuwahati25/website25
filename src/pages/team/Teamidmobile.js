import styles from "./Team.module.css";
const Teamidmobile = (img,name,position) => {
    return (
        <div className={styles.Teamidmobile}>
            <img src={img}></img>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    );
}
 
export default Teamidmobile;