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
                <h2 className={`font-gogh text-lg p-3 w-content rounded-sm -rotate-3 inline-block ${textColor} ${bgColor}`}>STUFF I&apos;VE WORKED ON</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5">
                    {credit.map((credit, index) => {
                        const shadowStyle = theme === 'dark'
                            ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
                            : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };
                        const content = (
                            <>
                                <div className="relative h-32 md:h-48 w-full overflow-hidden">
                                    <Image
                                        src={urlForImage(credit.image)?.width(600).url()}
                                        fill
                                        alt=""
                                        className={`object-contain transition-transform duration-200 ${credit.externalLink ? 'group-hover:scale-105' : ''}`}
                                    />
                                </div>
                                {credit.excerpt.map((block) => (
                                    <div key={block._key}>
                                        {block.children.map((child) => (
                                            <span className="font-fira text-md" key={child._key} style={child.marks.includes('strong') ? { fontWeight: 'bold' } : {}}>
                                                {child.text}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </>
                        );

                        if (credit.externalLink) {
                            return (
                                <a
                                    key={index}
                                    href={credit.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col gap-3 group"
                                    style={shadowStyle}
                                >
                                    {content}
                                </a>
                            );
                        }

                        return (
                            <div key={index} className="flex flex-col gap-3 group" style={shadowStyle}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Dots />
        </>
    );
}

export default Credits;