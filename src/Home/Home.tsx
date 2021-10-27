import classes from './Home.module.css';
import React, { createRef, useRef } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhySection from './WhySection';

const Home: React.FC = () => {
  const myRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <HeroSection myRef={myRef} />
      <AboutSection myRef={myRef} />
      <WhySection />
    </>
  );
};

export default Home;
