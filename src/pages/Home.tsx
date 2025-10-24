import React, { forwardRef } from 'react';
import welcome from '../images/slide_1.png';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './Home.css';

// const Home: React.FC = () => {
//   return (
//     <div>
//         <div className="load-container">
//             <img src={slide} alt="Welcome to Gayatri Pariwar Edmonton" />
//         </div>
//         <main>
//             <section>

//                 {/* Put other home page content here */}
//             </section>
//         </main>
//     </div>
//   );
// };

const Home = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref} style={{ backgroundImage: `url(${welcome})` }} className='landing-zone'>
        <div id="mantra" className="fade-in">
            <h3>ॐ भूर्भुवः स्व: तत्सवितुर्वरेण्यं | भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥</h3>
            <h3>Om Bhur Bhuvah Svah Tat Savitur Varenyam | Bhargo Devasya Dhimahi Dhiyoyo Nah Prachodayat ||</h3>
        </div>
        <div id="welcome-text" className="fade-in">
            <h2> Welcome to</h2>
            <h1> All World Gayatri Pariwar Edmonton</h1>
        </div>
        <div>
          <ul>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/events" className="nav-link">Events</Link></li>
            <li><Link to="/photos" className="nav-link">Photo Gallery</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li> 
            <li><Link to="/resources" className="nav-link">Resources</Link></li> {/* Page about books, recordings */}
            <li><HashLink smooth to="/#support-us" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="support-link">Support Us</HashLink></li>
          </ul>
        </div>
    </section>
  );
});

export default Home;


{/* <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper"
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={src} alt={`Slide ${idx}`} className="slide-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> */}