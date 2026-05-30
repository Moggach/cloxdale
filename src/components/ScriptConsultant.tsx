import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { useScroll } from './ScrollContext';
import Dots from './Dots'
import { useTheme } from './ThemeContext';


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const ScriptWork= ({ scriptConsultant }) => {
    const sectionRef = useRef<HTMLDivElement>(null); // Create a ref for the section
    const { registerSection } = useScroll();

    useEffect(() => {
        if (sectionRef.current) {
            registerSection("script-consultant", sectionRef);
        }

    }, [registerSection]);
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
    const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';
  

    return (
        <>
            <div ref={sectionRef} id="script-consultant" className="flex flex-col gap-20">
                <h2 className={`font-gogh text-lg p-3 w-content inline-block rounded-sm rotate-3 ${bgColor} ${textColor}`}>SCRIPT CONSULTANT</h2>
                <div className="flex flex-col lg:flex-row gap-40 font-karla text-base">
                    <div className="basis-1/2">
                        <Image
                            src={urlForImage(scriptConsultant[0]?.image)?.url()}
                            width={300}
                            height={300}
                            layout="responsive"
                            alt=""
                        />
                    </div>
                    <div className="basis-1/2">
                        {scriptConsultant[0]?.body.map((block) => (
                            <div key={block._key} style={{ margin: '10px 0' }}>
                                {block.children.map((child) => (
                                    <span key={child._key}>
                                        {child.text}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dots />
        </>
    );
};

export default ScriptWork;
