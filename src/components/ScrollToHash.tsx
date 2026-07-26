import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useScroll, SCROLL_OFFSET } from './ScrollContext';

export default function ScrollToHash() {
  const router = useRouter();
  const { getSectionRef } = useScroll();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const targetRef = getSectionRef(hash);
    if (targetRef && targetRef.current) {
      const targetOffset = targetRef.current.offsetTop - SCROLL_OFFSET;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }, [router.asPath, getSectionRef]);

  return null;
}
