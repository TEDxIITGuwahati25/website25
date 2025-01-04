import styles from "./speakerModal.module.css";
import { RxCrossCircled } from "react-icons/rx";
const SpeakerModal = ({func ,name ,about ,image ,description}) => {
    return (
        <div className={styles.modal}>
            <div onClick={func} className={styles.overlay}></div>
             <div className={styles.modalcontent}>
                <h1 className={styles.name}>{name}</h1>
                <hr></hr>
                    <div className={styles.speaker}>
                        <img src={image} ></img>
                        <p>{description}</p>
                        <h2>{about}</h2>
                    </div>
                    
                <button className={styles.closemodal} onClick={func}>
                      <RxCrossCircled />CLOSE
              </button>
                   
           </div>
                   
        </div>
    );
}
 
export default SpeakerModal;