import React from 'react';
import { useScroll } from './ScrollContext'; 

interface SmoothScrollLinkProps {
  to?: string;
  children: React.ReactNode;
  offset?: number;
  duration?: number;
  toTop?: boolean; 
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to = "",
  children,
  offset = 0,
  duration = 500,
  toTop = false,
}) => {
  const { getSectionRef } = useScroll(); 

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (toTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetRef = getSectionRef(to);
      if (targetRef && targetRef.current) {
        const targetOffset = targetRef.current.offsetTop - offset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return <a href={toTop ? "#" : `#${to}`} onClick={handleClick}>{children}</a>;
};

export default SmoothScrollLink;
