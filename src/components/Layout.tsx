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
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  const handleCloseBanner = () => { 
    setShowBanner(false);
  };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(headerRef.current);
    return () => observer.disconnect();
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
        {isExploding && (
          <div style={{ position: 'fixed', top: '50%', left: '50%', zIndex: 50 }}>
            <ConfettiExplosion force={0.8} duration={3000} particleCount={500} width={5000} />
          </div>
        )}
        {showBanner && <Banner onClose={handleCloseBanner} headerHeight={headerHeight} />}
        <main className={`px-20 flex flex-col gap-60 md:gap-80 pb-60 pt-40 lg:pt-60 ${mainClass}`}>{children}</main>
      </div>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-lightPrimary shadow-lg transition-opacity duration-300"
        style={{ opacity: headerVisible ? 0 : 1, pointerEvents: headerVisible ? 'none' : 'auto' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
