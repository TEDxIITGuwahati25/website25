import pic1 from './pics/blog1.jpg'
import pic2 from './pics/blog2.jpg'
import pic3 from './pics/blog3.jpg'
import pic4 from './pics/blog4_1.jpg'
import pic5 from './pics/blog5.jpg'
import pic6 from './pics/blog6_1.jpg'
import styles from './sponsors.module.css'

const Sponsors = () => {
        return(
            <>
              <div className={styles.scroll_container}>
                <div className={styles.scroll_content}>
                    <div className={styles.slide}>
                        <img src={pic1}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic2}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic3}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic4}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic5}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic6}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic1}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic2}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic3}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic4}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic5}></img>
                    </div>
                    <div className={styles.slide}>
                        <img src={pic6}></img>
                    </div>
                </div>
              </div>
            </>
        );
};

export default Sponsors