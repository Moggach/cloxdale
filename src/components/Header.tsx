import React, { useState, useEffect, useRef } from 'react';
import SmoothScrollLink from './SmoothScrollLink';

const Navbar = () => {
  const [offset, setOffset] = useState(170);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
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

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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

      <div className="flex  font-gogh  uppercase text-lg relative">
        <ul className="flex gap-x-[10px] flex-wrap">
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
        <div onClick={toggleDropdown} className="cursor-pointer ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0)" fill="#000000">
              <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Light</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dark</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Too dark</a>
            </div>
          )}
        </div>
      </div>


    </nav>
  );
};

export default Navbar;