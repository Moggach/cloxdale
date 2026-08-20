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
    { text: "Is anyone from the 'Live Kenan and Kel studio audience' still alive?" },
    { text: "Is it a live studio audience if they're all dead now?" },
    { text: "Are we listening to the laughter of ghosts?" },
  ],
  [
    { text: 'how to play duck duck goose' },
    { text: 'best duck duck goose strategy' },
    { text: 'how to stop being goosed ever' },
    { text: 'duck duck goose blackbelt requirements' },
    { text: '14 week DDG retreat' },
    { text: 'competitive DDG swansea' },
    { text: 'are performance enhancing drugs allowed in DDG' },
    { text: 'dark web' },
    { text: 'industrial strength steroids' },
  ],
  [
    { text: 'penis enlargement pill for a friend' },
    { text: 'should erection last 72 hours for a friend' },
    { text: 'opposite of viagra for a friend' },
    { text: 'guillotine same day delivery' },
  ],
  [
    { text: 'card game Happy Families' },
    { text: 'online Happy Families' },
    { text: 'online Happy Families High Stakes' },
    { text: 'empty natwest account' },
    { text: 'natwest customer support' },
    { text: 'how to play happy families' },
  ],
  [
    { text: 'did the black eyed peas ever find where the love was in the end?' },
  ],
  [
    { text: 'change takeaway delivery driver' },
    { text: 'takeaway without weird driver' },
    { text: 'takeaway driver moustache eating prawn crackers then pays me' },
    { text: 'same takeaway driver 4 times 80 years old crop top' },
    { text: "'mmmm that's good crackers' shouted through keyhole" },
    { text: 'driver arriving despite no order made' },
  ],
  [
    { text: 'neighbour keeping big horse in flat' },
    { text: 'neighbour keeping big horse in flat 4th floor' },
    { text: 'neighbour riding big horse on stairs' },
    { text: 'Rightmove' },
  ],
  [
    { text: 'how to be more assertive but no worries if not' },
  ],
  [
    { text: "why can't goofy take mask off Disneyland" },
    { text: 'does mask contain goofy soul' },
    { text: 'are we all wearing masks' },
    { text: 'are we all goofy' },
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
        const d = new Date(base.getTime() + i * 3000);
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
             <span className='font-fira text-base'>
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
