import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { urlForImage } from '~/lib/sanity.image'
import Dots from './Dots'
import { useTheme } from './ThemeContext'
import { useScroll } from './ScrollContext'


const HeroSection = ({ section }) => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScroll();

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('contacts', sectionRef);
    }
  }, [registerSection]);

  const shadowStyle = theme === 'dark'
    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };

  const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
  const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';

  return (
    <>
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-40 font-fira text-base ">
      <div className="basis-1/2">
        {section[0].body.map((block, blockIndex) => {
          return (
            <div key={block._key} style={{ margin: '10px 0', ...(blockIndex === 0 ? { marginBottom: '24px' } : {}) }}>
              {block.children.map((child, childIndex) => (
                <span key={child._key} className={blockIndex === 0 && childIndex === 0 ? 'text-xl font-semibold' : ''}>
                  {child.text}
                </span>
              ))}
            </div>
          );
        })}

        <div ref={sectionRef} id="contacts" className="mt-8 flex flex-col gap-5">
          <h2 className={`font-gogh text-lg p-3 w-content rounded-sm rotate-3 inline-block ${bgColor} ${textColor}`}>CONTACT ME</h2>
          <div className="flex flex-col gap-3 border-l-2 border-lightPrimary pl-4">
            <div className="font-fira text-base">You are well within your rights to <a className="text-lightPrimary underline underline-offset-4 decoration-lightPrimary/50 hover:decoration-lightPrimary transition-colors" href="mailto:cameronloxdale@yahoo.co.uk?subject=Let%27s%20talk%20turkey">contact me</a></div>
            <div className="font-fira text-base">Or you can go directly to my agent Georgia Kanner at Independent Talent on this <a className="text-lightPrimary underline underline-offset-4 decoration-lightPrimary/50 hover:decoration-lightPrimary transition-colors" href="mailto:georgiakanner@independenttalent.com">email</a></div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-2">
        <div className="relative flex-1 min-h-[300px] lg:min-h-[600px] overflow-hidden">
          <Image
            src={urlForImage(section[0].image).url()}
            fill
            alt=""
            className="rounded-md object-contain"
            style={shadowStyle}
          />
        </div>
      </div>
      </div>
<Dots/>
</>
  )
}

export default HeroSection