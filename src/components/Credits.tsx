import React from 'react';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { useScroll } from './ScrollContext';
import { useEffect, useRef } from 'react';

import Dots from './Dots'
import { useTheme } from './ThemeContext';

const Credits = ({ credit }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { registerSection } = useScroll();

    useEffect(() => {
        if (sectionRef.current) {
            registerSection("credits", sectionRef);
        }

    }, [registerSection]);

    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
    const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';


    return (
        <>
            <div ref={sectionRef} id="credits" className=''>
                <h2 className={`font-gogh text-lg p-3 w-content rounded-sm -rotate-3 inline-block ${textColor} ${bgColor}`}>STUFF I'VE WORKED ON</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5">
                    {credit.map((credit, index) => (
                        <div key={index} className="flex flex-col gap-3 group">
                            <Image
                                src={urlForImage(credit.image)?.width(600).height(400).url()}
                                height={400}
                                width={600}
                                alt=""
                            />
                            {credit.excerpt.map((block) => (
                                <div key={block._key}>
                                    {block.children.map((child) => (
                                        <span className="font-karla text-xs" key={child._key} style={child.marks.includes('strong') ? { fontWeight: 'bold' } : {}}>
                                            {child.text}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Dots />
        </>
    );
}

export default Credits;