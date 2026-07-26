import React from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const isHome = router.pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (toTop) {
      if (isHome) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        router.push('/');
      }
      return;
    }

    if (isHome) {
      const targetRef = getSectionRef(to);
      if (targetRef && targetRef.current) {
        const targetOffset = targetRef.current.offsetTop - offset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    } else {
      router.push(`/#${to}`);
    }
  };

  const href = toTop
    ? (isHome ? '#' : '/')
    : (isHome ? `#${to}` : `/#${to}`);

  return <a href={href} onClick={handleClick}>{children}</a>;
};

export default SmoothScrollLink;
