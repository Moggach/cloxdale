import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
 const [isSticky, setSticky] = useState(false);
 const navbarRef = React.createRef();

 useEffect(() => {
  const handleScroll = () => {
    if (navbarRef.current) {
      setSticky(window.pageYOffset >= navbarRef.current.offsetTop);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
 }, []); // Empty dependency array means this effect runs once on mount

 return (
  <nav
    ref={navbarRef}
    className="z-10 bg-gray-100 h-[100px] sticky top-0 p-4 flex flex-col md:flex-row justify-between md:items-center "
  >
      <div> <div className="text-lg font-bold">CAMERON LOXDALE</div>
      <p>Comedy Writer</p>
      </div>
   
    <ul className="flex space-x-4">
      <li><Link href="#contact"><span className="">Contact</span></Link></li>
      <li><Link href="#credits"><span className="">Credits</span></Link></li>
      <li><Link href="#nonsense"><span className="">Nonsense</span></Link></li>
    </ul>
  </nav>
 );
};

export default Navbar;
