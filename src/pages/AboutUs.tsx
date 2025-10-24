import React, { forwardRef } from 'react';
import about from '../images/slide_6.png';
// import './Intro.css';

const AboutUs = forwardRef<HTMLElement>((props, ref) => {
  return (
    <main>
        <section
            ref={ref}
            style={{
                backgroundImage: `url(${about})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column", // stack top & center
                justifyContent: "space-between", // push top and center apart
                color: "white",
                alignItems: "center",
                // padding: "2rem",
            }}
        >
            <div id="mantra" className="fade-in">
                <h2>Who are we?</h2>
            </div>
        </section>
        <section
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
            }}
        >
            <h1>About Gayatri Pariwar</h1>
            <p>
                Gayatri Pariwar is a living model of a futuristic society, being guided by principles of human unity and equality. It's a modern adoption of the age old wisdom of Vedic Rishis, who practiced and propagated the philosophy of Vasudhaiva Kutumbakam (Entire world is a family). Founded by saint, reformer, writer, philosopher, spiritual guide and visionary Yug Rishi Pandit Shriram Sharma Acharya, this mission has emerged as a mass movement for Transformation of Era. 
            </p>
        </section>
        <section
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
            }}
        >
            <h1>Gayatri Pariwar - Mission and Vision</h1>
            <p>
                Gayatri Pariwar, Edmonton is inspired by All World Gayatri Pariwar (AWGP), which is a world-wide family of people who follow the principles of Gayatri, The symbol of righteous knowledge, pure intelligence & selfless service.
AWGP is a large organization devoted to thought transformation movement, dissemination of scientific spirituality, and social and cultural reformation and elevation of the whole world with collective participation of awakened souls.
            </p>
            <ul>
				<li><strong>Vision    : </strong>Heaven on Earth.
				</li>
				<li><strong>Mission   : </strong>Awakening Divinity in Human Being.
				</li>
				<li><strong>Ethics    : </strong>Global Family (Vasudhaiv Kutumbakam) & Oneness (Atmavat Sarv Bhuteshu)
				</li>
				<li><strong>Values    : </strong>Transform Ourselves the World will Transforms, Reform Ourselves the World will Reform (Hum Badlenge Yug Badlega, Hum Sudhrenge Yug Sudhrega)
				</li>
			</ul>
        </section>
        <section
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
            }}
        >
            <h1>AWGP Highlights</h1>
            <p>
                Gayatri Pariwar, Edmonton is inspired by All World Gayatri Pariwar (AWGP), which is a world-wide family of people who follow the principles of Gayatri, The symbol of righteous knowledge, pure intelligence & selfless service.
AWGP is a large organization devoted to thought transformation movement, dissemination of scientific spirituality, and social and cultural reformation and elevation of the whole world with collective participation of awakened souls.
            </p>
            <ul>
				<li><strong>Vision    : </strong>Heaven on Earth.
				</li>
				<li><strong>Mission   : </strong>Awakening Divinity in Human Being.
				</li>
				<li><strong>Ethics    : </strong>Global Family (Vasudhaiv Kutumbakam) & Oneness (Atmavat Sarv Bhuteshu)
				</li>
				<li><strong>Values    : </strong>Transform Ourselves the World will Transforms, Reform Ourselves the World will Reform (Hum Badlenge Yug Badlega, Hum Sudhrenge Yug Sudhrega)
				</li>
			</ul>
        </section>
        <section
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
            }}
        >
            <h1>Pragyakunj</h1>
        </section>
    </main>
  );
});

export default AboutUs;