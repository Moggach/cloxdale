import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const TypewriterText = ({ text, isVisible, onComplete }: { text: string; isVisible: boolean; onComplete: () => void }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!isVisible) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 80);
    return () => clearInterval(interval);
  }, [isVisible, text, onComplete]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && isVisible && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const searchSets = [
  [
    { text: 'Weird bumps on back' },
    { text: 'Bumps grown into small fingers?' },
    { text: 'Hand emerging from back webMD' },
    { text: 'Can a man grow a third hand?' },
    { text: 'Is that what backhand means?' },
    { text: 'Why is backhand just doing jazz hands?' },
    { text: 'Backhand has just passed a typing exam??' },
    { text: 'Solid gold glove, singular, next day delivery' },
    { text: 'How to change thumbprint recognition' },
    { text: "Can a hand steal a man's identity?" },
    { text: "Bank account saying it's empty" },
    { text: 'Backhand wearing several expensive rings over solid gold glove' }
  ],
  [
    { text: 'How to tell if your shadow is following you' },
    { text: 'Is it normal for shadow to be ahead of you' },
    { text: 'Shadow arrived home before me??' },
    { text: 'Shadow signed for a parcel' },
    { text: 'Can a shadow open a bank account' },
    { text: 'Shadow has better credit score than me' },
    { text: 'Shadow bought a flat in zone 2' },
    { text: 'How to evict a shadow' },
    { text: 'Shadow contesting eviction notice?' },
    { text: 'Shadow won the eviction case' },
    { text: 'Renting a room from your own shadow legality' },
    { text: 'Shadow has started subletting to other shadows' }
  ],
  [
    { text: 'New way to cook eggs.' },
    { text: 'New way to cook eggs, not boiled or fried.' },
    { text: 'Secret new way to cook eggs.' },
    { text: 'Egg in air fryer?' },
    { text: 'New airfryer that takes whole egg.' },
    { text: 'Is it good to eat raw egg?' },
    { text: 'Does heimlich manoeuvre remove egg' }
  ],
  [
    { text: 'Is Wallace from Wallace and Gromit religious' },
    { text: 'Is Wallace god-fearing?' },
    { text: 'Name of Wallace\'s clay dog' },
    { text: 'Is Gromit an allegory to the watchful eye of Christ?' }
  ]
];

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const SearchHistory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [timestamps, setTimestamps] = useState<string[]>([]);
  const [searchItems, setSearchItems] = useState<{ text: string }[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setSearchItems(searchSets[Math.floor(Math.random() * searchSets.length)]);
  }, []);

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
            setCurrentIndex(0);
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

  const handleTypeComplete = useCallback(() => {
    setCurrentIndex((c) => c + 1);
  }, []);

  return (
    <div ref={containerRef} className="">
      <h2 className={`font-gogh text-lg mb-[30px] p-3 rounded-sm -rotate-3 inline-block ${bgColor} ${textColor}`}>CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY!</h2>
      <ul className="flex flex-col gap-20">
        {searchItems.map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate={index <= currentIndex ? 'visible' : 'hidden'}
            variants={variants}
          >
           <div className='flex items-baseline gap-4'>
             <span className='font-mono text-sm opacity-60 shrink-0'>{timestamps[index]}</span>
             <span className='font-karla text-base'>
               <TypewriterText
                 text={item.text}
                 isVisible={index === currentIndex}
                 onComplete={handleTypeComplete}
               />
             </span>
           </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
