import styles from './home.module.css'
import Schedule from './schedule'
import Timeline from './timeline'
const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <Schedule />
      <Timeline/>
    </>
  );
}

export default Home;