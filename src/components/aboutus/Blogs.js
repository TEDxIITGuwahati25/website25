import p1 from './pics/img.jpg';
import styles from "./Blogs.css";

const Blogs = () => {
     return(
          <>
              <div className="maintitle">
                 <p>Our recent blogs</p>
              </div>
              <div className='blogs'>
                    
                    <div className='blog'>
                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>
                    </div>
                    
                    <div className='blog'> 
                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>
                    </div>
                    
                    <div className='blog'>

                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>

                    </div>
                    
                    
                    <div className='blog'>

                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>
                    </div>
                    
                    <div className='blog'> 

                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>

                    </div>
                    
                    <div className='blog'>

                         <img src={p1} className='p1'></img>
                         <h2 className='title'>Blog title</h2>
                         <p className='blogInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in maiores impedit dolor perspiciatis, minus officiis quia fugiat, ea id assumenda. Saepe tempore minima perferendis voluptas voluptatibus laboriosam temporibus debitis.</p>

                    </div>
                    
              </div>
          </>
     );
};
     
export default Blogs;