import img1 from './pics/img1.jpg'
import styles from './AboutUs.css'
import { useEffect } from 'react';
import AboutTed from '../../components/aboutus/AboutTed';
import Blogs from '../../components/aboutus/Blogs'
import Audience from '../../components/aboutus/OurAudience'
import Sponsors from '../../components/aboutus/sponsors'
const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

    return(
      <>
        <AboutTed/>
        <Blogs/>
        <Audience/>
      </>
      
    );
}
  
export default AboutUs;