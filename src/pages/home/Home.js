import styles from './home.module.css'
import Schedule from './schedule'
import Timeline from './timeline'
import { useEffect } from 'react';
import Title
 from '../../components/home/Title';
const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  return (
    <>
      <div><Title/></div>
    </>
  );
}

export default Home;