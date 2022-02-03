import classes from './Home.module.css';
import React, { createRef, useRef } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import WhySection from '../../components/InfoSection/WhySection';

const Home: React.FC = () => {
  const myRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <HeroSection myRef={myRef} />
      <AboutSection myRef={myRef} />
    </>
  );
};

export default Home;
