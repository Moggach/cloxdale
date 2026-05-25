import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const TypewriterText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!isVisible) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [isVisible, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && isVisible && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 2,
    },
  },
};

const SearchHistory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const base = new Date();
    setTimestamps(
      searchItems.map((_, i) => {
        const d = new Date(base.getTime() + i * 2000);
        return d.toLocaleString();
      })
    );
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 500);
          return () => clearTimeout(timer);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, [containerRef]);

  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
  const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';
  
  const searchItems = [
    { text: 'Weird bumps on back' },
    { text: 'Bumps grown into small fingers?' },
    { text: 'Hand emerging from back webMD' },
    { text: 'Can a man grow a third hand?' },
    { text: 'Is that what backhand means?' },
    { text: 'Why is backhand just doing jazz hands?' },
    { text: 'Backhand has just passed a typing exam??' },
    { text: 'Solid gold glove, singular, next day delivery' },
    { text: 'How to change thumbprint recognition' },
    { text: 'Can a hand steal a man\'s identity?' },
    { text: 'Bank account saying it\'s empty' },
    { text: 'Backhand wearing several expensive rings over solid gold glove' }
  ];

  return (
    <div ref={containerRef} className="">
      <h2 className={`font-gogh text-lg mb-[30px] p-3 rounded-sm -rotate-3 inline-block ${bgColor} ${textColor}`}>CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY!</h2>
      <motion.ul
        className="flex flex-col gap-20"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
      >
        {searchItems.map((item, index) => (
          <motion.li
            variants={variants}
            key={index}
            onAnimationComplete={(def) => {
              if (def === 'visible') {
                setVisibleItems((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }
            }}
          >
           <div className='flex items-baseline gap-4'>
             <span className='font-mono text-sm opacity-60 shrink-0'>{timestamps[index]}</span>
             <span className='font-karla text-base'>
               <TypewriterText text={item.text} isVisible={!!visibleItems[index]} />
             </span>
           </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SearchHistory;
