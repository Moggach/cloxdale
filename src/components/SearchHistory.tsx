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
    { text: 'Why is my search history appearing on my website' },
    { text: 'How to stop internet history appearing on website' },
    { text: 'Contact email for Bill Gates' },
    { text: 'Home address for Bill Gates' },
    { text: 'Bill Gates Cameo?' },
    { text: "Bill if you're reading this, what the hell is going on" },
  ],
  [
    { text: 'Forum for adult men who are bullied by teenagers at bus stops' },
    { text: 'How to get big arms' },
    { text: 'How to get big arms without exercise' },
    { text: 'Arms next day delivery' },
    { text: 'Arms (not weapons) next day delivery' },
    { text: 'Prosthetic biceps to fool mean teens' },
  ],
  [
    { text: 'Cameron Loxdale' },
    { text: 'Cameron Loxdale comedy' },
    { text: 'Cameron Loxdale hilarious' },
    { text: 'Is googling yourself bad for you?' },
    { text: 'Is googling yourself good for you?' },
    { text: 'Why is googling yourself SO good for you?' },
    { text: 'How many years will googling myself add to my life expectancy?' },
    { text: 'Will there be enough resources in the year 2190?' },
    { text: 'How to build a nuclear bunker' },
    { text: "How to stop my guards turning against me once money means nothing" },
  ],
  [
    { text: "What was the Dance Dance Revolution?" },
    { text: "Did they have other policies besides dancing?" },
    { text: "Dance Dance Revolution number of casualties" },
  ],
  [
    { text: "Is anyone from the 'Live Kenan and Kel studio audience' still alive?" },
    { text: "Is it a live studio audience if they're all dead now?" },
    { text: "Are we listening to the laughter of ghosts?" },
    { text: "Kel's Orange Soda UK delivery" },
  ],
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
  const hasPickedSet = useRef(false);

  useEffect(() => {
    if (hasPickedSet.current) return;
    hasPickedSet.current = true;
    setSearchItems(searchSets[Math.floor(Math.random() * searchSets.length)]);
  }, []);

  useEffect(() => {
    if (searchItems.length === 0) return;
    const base = new Date();
    setTimestamps(
      searchItems.map((_, i) => {
        const d = new Date(base.getTime() + i * 2000);
        return d.toLocaleString();
      })
    );
  }, [searchItems]);

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
      <h2 className={`font-gogh text-lg mb-[30px] p-3 rounded-sm rotate-3 inline-block ${bgColor} ${textColor}`}>CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY!</h2>
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
