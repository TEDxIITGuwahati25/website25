import styles from "./speakers.module.css";
import SpeakerModal from "./speakerModal";
import {useState} from "react";
import data from './speaker_data';

const Speakers = () => {
    const [modal,setModal] = useState(false)
    const [speaker,setSpeaker] = useState(null)    
    const togglemodal =() =>{
        setModal(!modal);
    }
    const openModal =({name, about, description, image}) =>{
       setSpeaker({name, about, description, image});
    }

    return (
        <div className={styles.speakers}>
            <h1>Speakers</h1>
            <h2>Our upcoming event Speakers</h2>
            {modal && <SpeakerModal 
            func={togglemodal}
            name={speaker.name}
            about={speaker.about}
            image={speaker.image}
            description = {speaker.description}
            />}

           <div className={styles.gallery}>

               <div className={styles.gallerypanel}>
                    
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name: "Aleena", about: "educator", image: "images/Meghana_Nelapati.jpg", description: data.Aleena})}}><img src="images/Meghana_Nelapati.jpg" />
                    
                    </button>
                    <div className={styles.galleryname}>Name</div>
               </div>
               

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rajat Rathor", about:"Cop",image:"images/Meghana_Nelapati.jpg",description:data.Rajat})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Ilina Sinha", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.illina})}}><img src="images/Meghana_Nelapati.jpg"  /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Capt Satendra Sangwan", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.sangwan})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>


               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rituparna Neog", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.Rituparna})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Asutosh Kashyap", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.Asutosh})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Sudhana Sankar", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.Sudhana})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Mrinal Talukdar", about:"Phd",image:"images/Meghana_Nelapati.jpg",description:data.Mrinal})}}><img src="images/Meghana_Nelapati.jpg" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>
          </div>
        </div>
    );
}
 
export default Speakers;