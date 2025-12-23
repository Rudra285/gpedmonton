import { forwardRef } from 'react';
import './Diversity.css';


const Diversity = forwardRef<HTMLElement>((_, ref) => {
  return (
    <main className='diversity'>
        <h1>Diversity and Inclusion Policy</h1>
        <section ref={ref} className='purpose'>
            <h2>1. Purpose</h2>
            <p>
                Our organization is committed to fostering an environment that values diversity, promotes inclusion, and ensures equal opportunities for all individuals. We believe that embracing different perspectives, cultures, and backgrounds strengthens our community and aligns with our mission of holistic well-being.
            </p>
        </section>
        <section className='statement'>
            <h2>2. Policy Statement</h2>
            <p>
                We welcome and respect individuals of all races, ethnicities, religions, genders, sexual orientations, ages, abilities, and socio-economic backgrounds. Discrimination, harassment, or exclusion of any kind will not be tolerated.
            </p>
        </section>
        <section className='principles'>
            <h2>3. Key Principles</h2>
            <ul>
                <li><strong>Equal Opportunity :</strong> All programs, events, and activities are open to everyone without bias or prejudice.</li>
                <li><strong>Inclusive Practices :</strong> We actively create spaces where participants feel safe, respected, and valued.</li>
                <li><strong>Cultural Sensitivity :</strong> We honor diverse traditions and encourage intercultural dialogue while preserving our core values.</li>
                <li><strong>Accessibility :</strong> We strive to make our facilities and programs accessible to individuals with disabilities.</li>
                <li><strong>Continuous Improvement :</strong> We regularly review our practices to ensure they reflect our commitment to diversity and inclusion.</li>
            </ul>
        </section>
        <p className="footer-note">
            © {new Date().getFullYear()} Gayatri Pariwar Edmonton. All rights reserved. <br/>
            Designed & Developed by Rudra Patel.
        </p>
    </main>
  );
});

export default Diversity;