import styles from "./Team.module.css";
const Teamiddesktop = (img,name,position) => {
    return (
        <div className={styles.Teamiddesktop}>
            <img src={img}></img>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    );
}
 
export default Teamiddesktop;