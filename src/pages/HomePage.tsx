import React, { useEffect } from 'react';
import Home from './Home';
import Intro from './Intro';
import { useOutletContext, useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { loadRef, introRef } = useOutletContext<{ loadRef: React.RefObject<HTMLElement>, introRef: React.RefObject<HTMLElement> }>();
  const location = useLocation();

  useEffect(() => {
  if (location.hash === '#support-us') {
    const el = document.getElementById('support');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}, [location.hash]);
    
  return (
    <>
      <Home ref={loadRef} />
      <Intro ref={introRef} />
    </>
  );
};

export default HomePage;