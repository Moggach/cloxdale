import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1.5,
    },
  },
};

const SearchHistory = ({ searchItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <div ref={containerRef}>
      <h2 className="font-gogh text-2xl mb-20">CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY!</h2>
      <motion.ul
        className="flex flex-col gap-20"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
      >
        {searchItem.map((item, index) => (
          <motion.li variants={variants} key={index}>
           <div className='font-karla text-base'>{item.text}</div> 
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SearchHistory;
