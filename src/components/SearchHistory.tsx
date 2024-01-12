import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1 },
};

const SearchHistory = ({ searchItem }) => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   const timer = setTimeout(() => {
     setIsVisible(true);
   }, 1000); // adjust delay as needed
   return () => clearTimeout(timer);
 }, []);

 return (
   <>
     <h3>
       CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY
     </h3>
     <motion.ul
       initial="hidden"
       animate={isVisible ? "visible" : "hidden"}
       variants={{
         visible: {
           transition: {
             delayChildren: 2,
             staggerChildren: 2,
           },
         },
       }}
     >
       {searchItem.map((item, index) => (
         <motion.li variants={variants} key={index}>
           {item.text}
         </motion.li>
       ))}
     </motion.ul>
   </>
 );
};

export default SearchHistory;
