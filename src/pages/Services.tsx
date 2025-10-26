import React, { forwardRef } from 'react';
import './Services.css';
import { HashLink } from "react-router-hash-link";
import samagri_english from '../assets/yagya_samagri_list_e.pdf';
import samagri_gujarati from '../assets/images/yagya_samagri_list_g.png';
import yagya_logo from '../assets/images/yagya_logo.png';
import deep_logo from '../assets/images/deep_logo.png';
import katha_logo from '../assets/images/katha_logo.png';
import griha_logo from '../assets/images/griha_logo.png';
import vivah_logo from '../assets/images/vivah_logo.png';

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <main className='services-root'>
        <section ref={ref} className='services-intro'>
            <h1>Our Services</h1>
            <p>
                Ancient Indian culture has advised sanskars to be performed during the sixteen principal events of life, so as to move closer to Supreme Power. We offer following sanskars/Puja to the community.
            </p>
            <ul>
                <li><HashLink smooth to="/services/#havan-yagya" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="services-link">Gayatri Havan Yagya</HashLink></li>
                <li><HashLink smooth to="/services/#deep-yagya" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="services-link">Gayatri Deep Yagya</HashLink></li>
                <li><HashLink smooth to="/services/#katha" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="services-link">Satyanarayan Katha</HashLink></li>
                <li><HashLink smooth to="/services/#griha" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="services-link">Griha Pravesh</HashLink></li>
                <li><HashLink smooth to="/services/#vivah" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="services-link">Vivah Sansakaar</HashLink></li>
                <li><HashLink smooth to="/#support-us" className="services-link"
                    scroll={() => {
                        const isMobile = window.innerWidth <= 850;
                        const el = document.getElementById(isMobile ? "pooja" : "support-us");
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    Other rituals on demand
                </HashLink></li>
            </ul>
        </section>
        <section ref={ref} className='havan-yagya' id="havan-yagya">
            <div>
                <img src={yagya_logo} alt="Havan Yagya Logo" className='service-logo'/>
                <h2>Gayatri Havan Yagya</h2>
            </div>
            <p>
                All activities in the limitless expansion of the universe are said to have generated from a grand eternal Yajna(Yagya).
            </p>
            <p>
                Atharva Veda (9.15.14) describes Yagya as: Ayam Yajna Vishvasya Bhuvanasya Nabheehia implying Yagya as the fundamental process of manifestation of nature. 
            </p>
            <p>
                In physical terms, Yagya (homam, havan or agnihotra) is a process of herbal sacrifices in holy fire aimed at the finest utilization of the subtle properties of sacrificed matter with the help of the thermal energy of fire and the sound energy of the mantras. Modern scientific research has also shown significant therapeutic applications of Yagya and also affirmed its potential in purification of environment.
            </p>
            <p>
                Literally speaking, Yagya means - selfless sacrifice for noble purposes. Sacrificing ego, selfishness and material attachments and adopting rational thinking, humane compassion and dedicated creativity for the welfare of all - is indeed the best Yagya which should be performed by all human beings. The philosophy of Yagya teaches a way of living in the society in harmony, a living style to promote and protect higher humane values in the society - which is indeed the basis of the ideal human culture.
            </p>
            <div className='havan-list'>
                <a href={samagri_english} target="_blank" rel="noopener noreferrer">List of Yagya/Pooja items - English</a>
                <a href={samagri_gujarati} target="_blank" rel="noopener noreferrer">List of Yagya/Pooja items - Gujarati</a>
            </div>
            <li className='request'><HashLink smooth to="/#support-us" className="request-link"
                scroll={() => {
                    const isMobile = window.innerWidth <= 850;
                    const el = document.getElementById(isMobile ? "pooja" : "support-us");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
            >
                Request for Havan Yagya
            </HashLink></li>
        </section>
        <section ref={ref} className='deep-yagya' id="deep-yagya">
            <div>
                <img src={deep_logo} alt="Deep Yagya Logo" className='service-logo'/>
                <h2>Gayatri Deep Yagya</h2>
            </div>
            <p>
                In view of the ever-increasing growth of the yug nirman mission, Rev. Gurudev Pt. Shriram Sharma Acharya introduced Deepa Yagya as effective means to convey the knowledge of Yagya with inspiring impact on the masses.
            </p>
            <p>
                This was indeed a revolutionary development with significant practical relevance in the present circumstances of human life, when many people do not have the time, resources, faith and ability to perform kundiya Yagya or havans.
            </p>
            <p>
                The deepak play the role of Yagya kundas here; the process of agnihotra works automatically with the ignition of incense sticks (agarbatti) made up of havan samagri. Deepa Yagyas add sacred light in the congregations and gathering for mass-education, social awareness and thought-illumination campaigns of the mission that have mobilized at a grand scale since 1988.
            </p>
            <p>
                The Deepa Yagyas also became popular among all sections of the society as part of celebrating the samskaras of janma diwasa (birthday), vivaha diwasa (wedding anniversary), etc in holy atmosphere at negligible cost and without elaborate arrangements.
            </p>
            <p>
                Despite the easy mode of performance and minimal rituals, the inspirations imbibed in the mantras and method of Deep Yagyas carry excellent impact in reaching the teachings and light of Yagya at people’s heart and influencing the subtle domains of thought and sentiments.
            </p>
            <li className='request'><HashLink smooth to="/#support-us" className="request-link"
                scroll={() => {
                    const isMobile = window.innerWidth <= 850;
                    const el = document.getElementById(isMobile ? "pooja" : "support-us");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
            >
                Request for Deep Yagya
            </HashLink></li>
        </section>
        <section ref={ref} className='katha' id="katha">
            <div>
                <img src={katha_logo} alt="Katha Logo" className='service-logo'/>
                <h2>Satyanarayan Katha</h2>
            </div>
            <p>
                The Satyanarayana Katha is an ancient story telling event that emphasizes importance of satya (truth) and path of righteous options. It is a ritual performed by devotees on any major occasion like marriage, house warming ceremony etc. It can also be performed on any day for any reason. It finds first mention in Skanda Purana. 
            </p>
            <p>
                The Satyanarayana Puja is usually done on the Full Moon (Purnima) day of every month or any day you wish to do it. It is also done on special occasions and during times of achievements as an offering of gratitude to the Lord Vishnu. In addition, it is said that a devotional performance of this puja will bear children to couples trying to start a family.
            </p>
            <p>
                The puja starts by a prayer to Lord Ganesha, to remove all obstacles that may occur as a result of incorrectly performing the puja. This is done by chanting all the names of Lord Ganesha and offering prasad.
            </p>
            <p>
                The rest of the puja consists of worship to Satyanarayana, an extremely benevolent form of Lord Vishnu. First a purification is performed to the place where the deity is placed. After placing the deity in the correct position, Satyanaraya swami is worshipped. Names of Satyanarayana are chanted along with offering of a variety of prasad (including a mixture of milk, honey, ghee/butter, yogurt, sugar) and flower petals.
            </p>
            <p>
                Another requirement of the puja is that the story of the puja be heard among all those observing and partaking in the puja.
            </p>
            <li className='request'><HashLink smooth to="/#support-us" className="request-link"
                scroll={() => {
                    const isMobile = window.innerWidth <= 850;
                    const el = document.getElementById(isMobile ? "pooja" : "support-us");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
            >
                Request for Satyanarayan Katha
            </HashLink></li>
        </section>
        <section ref={ref} className='griha' id="griha">
            <div>
                <img src={griha_logo} alt="Griha Pravesh Logo" className='service-logo'/>
                <h2>Griha Pravesha</h2>
            </div>
            <p>
                It is commonly believed that when you believe in Supreme Power, you got to recognize the existence of unwanted elements. Most often these elements are considered to be evil, who usually can wreck havoc on life and property. The main aim of a griha pravesh or griha shanti puja is to purify your surrounding and home from the evil effects of spirits.
            </p>
            <p>
                A house is regarded as one of the most precious belongings for an individual. Often it becomes an object of other's jealousy which is considered bad for the overall peace of the house. When the host seeks the blessings of Lord Ganesha, he also ensures that Ganesha would safeguard his property from all types of evils and their intensions.
            </p>
            <li className='request'><HashLink smooth to="/#support-us" className="request-link"
                scroll={() => {
                    const isMobile = window.innerWidth <= 850;
                    const el = document.getElementById(isMobile ? "pooja" : "support-us");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
            >
                Request for Griha Pravesh
            </HashLink></li>
        </section>
        <section ref={ref} className='vivah' id="vivah">
            <div>
                <img src={vivah_logo} alt="Havan Yagya Logo" className='service-logo'/>
                <h2>Vivah (Hindu-Wedding) Sanskaar</h2>
            </div>
            <p>
                The true objective of a Vivah (wedding) is that two individuals seek the blessings of Supreme Power to lead a compatible and happy married life! For this, it is absolutely essential to perform the ritual of marriage as per the scriptures.
            </p>
            <span><strong>Vivah is a Sacred union of two souls - An entry into the dignified family life.</strong></span>
            <h3>Importance of Vivah</h3>
            <p>
                Hindu Dharma has prescribed four Purusharthas, that is Dharma (Righteousness), artha (Material gain), kama (Desire) and Moksha (Final Liberation). The purpose of the vivah sanskar (Wedding ceremony) is to fulﬁll the Purushartha of 'kama' and then gradually advance towards 'Moksha'.
            </p>
            <p>
                Vivah-sanskar enhances the saatvikta (Purity) in the gross and subtle bodies of both, the bride and the groom, and more than fulﬁlment of desires, it helps in merging with each other at the psychological level and spiritual level.
            </p>
            <p>
                When this sanskar is performed according to scriptures, it has a number of rituals and recitation of mantras. Every ritual contributes towards enhancing the saatvikta in the gross (physical) and subtle bodies (mind, intellect and ego) of the bride and the groom: That is why, more than fulﬁlment of desires, it helps in their merging at the psychological level and the spiritual level and providing an opportunity to obtain the grace and blessings of Deities.
            </p>
            <h3>Benefits</h3>
            <ul>
                <li className='vivah-points'><strong>A husband accepts a 'dharma-patni' : </strong>Since Dharma permits accepting of a patni (Wife), after getting married as mentioned in the scriptures, the wife is referred to as 'dharma-patni'.</li>
                <li className='vivah-points'><strong>Greater awareness about responsibilities than rights : </strong>Vivah takes place by performing saatvik sanskar, the husband and wife become introverted. Hence, they look upon each other not only at the physical level, but also at the psychological level. They are concerned about each other and behave with understanding and love towards each other. In fact, they are more aware about their responsibilities than their rights.</li>
                <li className='vivah-points'><strong>Saatvik offsprings born: </strong>When a wedding is performed with a saatvik sanskar, the offspring is saatvik from birth itself.</li>
                <li className='vivah-points'><strong>Family health is maintained and the children are inspired to lead a life abiding by Dharma: </strong>An ideal lifestyle of the parents and celebration of various festivals and observance of vrats (fasts) and family traditions, helps maintain the health of the family. The children too derive inspiration to lead a life abiding by Dharma.</li>
            </ul>
            <li className='request'><HashLink smooth to="/#support-us" className="request-link"
                scroll={() => {
                    const isMobile = window.innerWidth <= 850;
                    const el = document.getElementById(isMobile ? "pooja" : "support-us");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
            >
                Request for Vivah Sanskaar
            </HashLink></li>
        </section>
    </main>
  );
});

export default Services;