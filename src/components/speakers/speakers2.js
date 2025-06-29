import styles from "./speakers2.module.css";
import SpeakerModal from "./speakerModal";
import {useState} from "react";
import data from './speaker_data';

const Speakers2 = () => {
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
            <h1 className={styles.heading1}>Speakers</h1>
            <h2 className={styles.heading2}>Our upcoming event Speakers</h2>
            {modal && <SpeakerModal 
            func={togglemodal}
            name={speaker.name}
            about={speaker.about}
            image={speaker.image}
            description = {speaker.description}
            />}

           <div className={styles.gallery}>

               <div className={styles.gallerypanel}>
                    
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name: "Aleena", about: "educator", image: "./images/Meghana.png", description: data.Aleena})}}><img src="./images/Meghana.png" />
                    
                    </button>
                    <div className={styles.galleryname}>Name</div>
               </div>
               

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rajat Rathor", about:"Cop",image: "./images/Meghana.png",description:data.Rajat})}}><img src="./images/Meghana.png"></img></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Ilina Sinha", about:"Phd",image: "./images/Meghana.png",description:data.illina})}}><img src="./images/Meghana.png"  /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>
               
               <div className={styles.gallerypanel}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Capt Satendra Sangwan", about:"Phd",image: "./images/Meghana.png",description:data.sangwan})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>
            </div>


              <div className={styles.gallery2}>
              <div className={styles.gallerypanel2}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Rituparna Neog", about:"Phd",image: "./images/Meghana.png",description:data.Rituparna})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel2}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Asutosh Kashyap", about:"Phd",image: "./images/Meghana.png",description:data.Asutosh})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel2}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Sudhana Sankar", about:"Phd",image: "./images/Meghana.png",description:data.Sudhana})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>

               <div className={styles.gallerypanel2}>
                    <button className={styles.button} onClick={() =>{togglemodal() ; setSpeaker({name:"Mrinal Talukdar", about:"Phd",image: "./images/Meghana.png",description:data.Mrinal})}}><img src="images/Meghana.png" /></button>
                    <div className={styles.galleryname}>Name</div>
               </div>
              </div>
          
          {/* <div>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consectetur ab quaerat molestias temporibus minus amet voluptate doloremque atque quo voluptates sequi numquam illo sint doloribus praesentium accusamus cumque rerum est, quam adipisci reprehenderit. Est sint facere impedit quo asperiores quae minima reprehenderit quibusdam facilis, officiis molestias velit cumque omnis tempore minus nobis similique eaque molestiae! Repellat, voluptas minima? Quasi vel nihil neque, nemo odit adipisci est dignissimos placeat laboriosam reiciendis accusamus veritatis quos, quis cum officia, soluta veniam unde. Quos tenetur voluptate quas, eligendi eaque non ab aliquid autem amet delectus sapiente quasi repellat alias eius. Voluptate, officiis quos.</h1>
          </div> */}
        </div>
    );
}
 
export default Speakers2;