import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { useScroll } from './ScrollContext';
import Dots from './Dots'
import { useTheme } from './ThemeContext';


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Nonsense = ({ nonsense }) => {
    const sectionRef = useRef<HTMLDivElement>(null); // Create a ref for the section
    const { registerSection } = useScroll();

    useEffect(() => {
        if (sectionRef.current) {
            registerSection("nonsense", sectionRef);
        }

    }, [registerSection]);
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
    const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';
  

    return (
        <>
            <div ref={sectionRef} id="nonsense" className="flex flex-col gap-20 ">
                <h2 className={`font-gogh text-lg p-3 w-content inline-block rounded-sm rotate-3 ${bgColor} ${textColor}`}>NONSENSE</h2>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:gap-20 items-stretch font-gfs  text-base">
                    {nonsense.map((item, index) => (
                        <div key={index} className="flex flex-col gap-20">
                            <h3 className='text-lg'>{item.title}</h3>
                            {item.videoLink && (
                                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                                    <ReactPlayer
                                        url={item.videoLink}
                                        width="100%"
                                        height="100%"
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    />
                                </div>
                            )}

                            {item.image && (
                                <Image
                                    className=""
                                    src={urlForImage(item.image).width(500).height(300).url()}
                                    height={300}
                                    width={500}
                                    alt=""
                                />
                            )}
                            {item.excerpt && (
                                <p className="">{item.excerpt[0].children[0].text}</p>
                            )}
                        </div>

                    ))}
                </div>
            </div>
            <Dots />
        </>
    );
};

export default Nonsense;
