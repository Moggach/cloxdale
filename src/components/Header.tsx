import React, { useState, useEffect, useRef } from 'react';
import SmoothScrollLink from './SmoothScrollLink';

const Navbar = () => {
  const [offset, setOffset] = useState(170); 
  const navbarRef = useRef(null);
  useEffect(() => {
    const updateOffset = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        setOffset(navbarHeight + 20); 
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    return () => window.removeEventListener('resize', updateOffset);
  }, []); 
  return (
    <nav
      ref={navbarRef} 
      className="z-10 bg-neonGreen sticky top-0 p-20 lg:px-60 flex gap-20 flex-col md:flex-row justify-between md:items-center mb-40 lg:mb-60"
    >
      <div className="flex gap-20 flex-col">
        <h1 className="font-gogh text-xl cursor-pointer hover:text-white">
          <SmoothScrollLink toTop={true}>CAMERON LOXDALE</SmoothScrollLink>
        </h1>
        <p className="font-gogh text-lg">Comedy Writer</p>
      </div>

      <ul className="flex flex-wrap font-gogh gap-x-[10px] uppercase text-lg">
        <li className='hover:text-white'>
          <SmoothScrollLink to="#contacts" offset={offset}>Contact</SmoothScrollLink>
        </li>
        <li className='hover:text-white'>
          <SmoothScrollLink to="#credits" offset={offset}>Credits</SmoothScrollLink>
        </li>
        <li className='hover:text-white'>
          <SmoothScrollLink to="#nonsense" offset={offset}>Nonsense</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;