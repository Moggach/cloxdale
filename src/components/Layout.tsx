import React, { useState, useRef, useEffect } from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import dynamic from 'next/dynamic';
import { useTheme } from '~/components/ThemeContext';
import Banner from '~/components/Banner'; 

const ConfettiExplosion = dynamic(() => import('react-confetti-explosion'), { ssr: false });

export default function Layout({ children }) {
  const [isExploding, setIsExploding] = useState(true);
  const [showBanner, setShowBanner] = useState(true); 
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  const handleCloseBanner = () => { 
    setShowBanner(false);
  };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const { theme } = useTheme();
  let mainClass;
  if (theme === 'dark') {
    mainClass = 'bg-darkSecondary text-lightText';
  } else if (theme === 'tooDark') {
    mainClass = 'bg-tooDark';
  } else {
    mainClass = 'bg-lightBackground text-darkText';
  }

  return (
    <>
      <Header ref={headerRef} />
      <div className={`${mainClass}`}>
        {isExploding && <ConfettiExplosion className="z-50" force={0.8} duration={3000} particleCount={500} width={5000} />}
        {showBanner && <Banner onClose={handleCloseBanner} headerHeight={headerHeight} />}
        <main className={`px-20 flex flex-col gap-60 md:gap-80 pb-60 pt-40 lg:pt-60 ${mainClass}`}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
