import styles from './home.module.css'
import Schedule from './schedule'
import Timeline from './timeline'
import { useEffect } from 'react';

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  return (
    <>
      <div>Home Page</div>
    </>
  );
}

export default Home;