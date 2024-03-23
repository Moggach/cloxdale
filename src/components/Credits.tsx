import React from 'react';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { useScroll } from './ScrollContext';
import { useEffect, useRef } from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
                <h2 className={`font-gogh text-lg p-3 w-content rounded-sm -rotate-3 inline-block ${textColor} ${bgColor}`}>CREDITS</h2>
                <Swiper
                    className="credits-slider"
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1.5}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 3.5,
                            spaceBetween: 30
                        }
                    }}
                >
                    {credit.map((credit, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    className=""
                                    src={urlForImage(credit.image).width(600).height(400).url()}
                                    height={400}
                                    width={600}
                                    alt=""
                                />
                                {credit.excerpt.map((block) => (
                                    <div className="excerpt" key={block._key} style={{ margin: '10px 0' }}>
                                        {block.children.map((child) => (
                                            <span className="font-gfs  text-sm" key={child._key} style={child.marks.includes('strong') ? { fontWeight: 'bold' } : {}}>
                                                {child.text}
                                            </span>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Dots />
        </>
    );
}

export default Credits;