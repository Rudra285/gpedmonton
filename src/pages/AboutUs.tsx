import React, { forwardRef } from 'react';
import './AboutUs.css';
import brochure from '../assets/tri-fold_brochure_pragyakunj.pdf'

const AboutUs = forwardRef<HTMLElement>((props, ref) => {
  return (
    <main className='about-us'>
        <section ref={ref} className='pariwar'>
            <h1>About Gayatri Pariwar</h1>
            <p>
                Gayatri Pariwar is a living model of a futuristic society, being guided by principles of human unity and equality. It's a modern adoption of the age old wisdom of Vedic Rishis, who practiced and propagated the philosophy of Vasudhaiva Kutumbakam (Entire world is a family). Founded by saint, reformer, writer, philosopher, spiritual guide and visionary Yug Rishi Pandit Shriram Sharma Acharya, this mission has emerged as a mass movement for Transformation of Era. 
            </p>
        </section>
        <section className='mission'>
            <h1>Gayatri Pariwar - Mission and Vision</h1>
            <p>
                Gayatri Pariwar, Edmonton is inspired by All World Gayatri Pariwar (AWGP), which is a world-wide family of people who follow the principles of Gayatri, the symbol of righteous knowledge, pure intelligence & selfless service.  <br/>
AWGP is a large organization devoted to thought transformation movement, dissemination of scientific spirituality, and social and cultural reformation and elevation of the whole world with collective participation of awakened souls.
            </p>
            <ul>
				<li><strong>Vision    : </strong>Heaven on Earth.</li>
				<li><strong>Mission   : </strong>Awakening Divinity in Human Being.</li>
				<li><strong>Ethics    : </strong>Global Family (Vasudhaiv Kutumbakam) & Oneness (Atmavat Sarv Bhuteshu)</li>
				<li><strong>Values    : </strong>Transform Ourselves the World will Transforms, Reform Ourselves the World will Reform (Hum Badlenge Yug Badlega, Hum Sudhrenge Yug Sudhrega)</li>
			</ul>
        </section>
        <section className='awgp'>
            <h1>AWGP Highlights</h1>
            <ul>
                <li>More than 4000 centers all over India and Abroad</li>
                <li>A following in access of 100 million</li>
                <li>Nearly 20 million persons initiated into spiritual practices</li>
                <li>Restoration of rights of women and other under privileged groups of the society</li>
                <li>Foundation of Dev Sanskriti Vishwa Vidyalaya (University based on scientific spirituality).</li>
            </ul>
            <p><strong>Gayatri Pariwar, Edmonton performs regularly the following rituals for its followers:</strong></p>
            <ul>
                <li>Gayatri Havan Yagya</li>
                <li>Gayatri Deep Yagya</li>
                <li>Grih Pravesh</li>
                <li>Punsavan Sanskar</li>
                <li>Vidya Arambh</li>
                <li>Satyanarayan Katha</li>
                <li>Any other Hindu rituals on demand</li>
            </ul>
        </section>
        <section className='pragyakunj'>
            <h1>Pragyakunj</h1>
            <a href={brochure} target="_blank" rel="noopener noreferrer" className='brochure'>Download our Brochure</a>
        </section>
    </main>
  );
});

export default AboutUs;