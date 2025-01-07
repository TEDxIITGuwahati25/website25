import animationVideo from '../../animation/preloader.mp4';
import styles from './Preloader.module.css';

const Preloader = ({ onVideoEnd }) => {
    return (
        <div className={styles.preloader}>
            <video
                className="preloader-video"
                autoPlay
                muted
                onEnded={onVideoEnd} // Call the function when the video ends
            >
                <source src={animationVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video> 
        </div>
    );
  }
  
  export default Preloader;