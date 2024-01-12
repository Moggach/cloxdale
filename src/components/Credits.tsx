import React from 'react';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import Link from 'next/link';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Credits = ({ credit }) => {
    return (
        <div id="credits">
            CREDITS
            <Swiper
            className="netflix-slider"
              modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={2.5}
                breakpoints={{
                    320: {
                        slidesPerView: 2.5,
                        spaceBetween:30
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 30
                    },
                    1025: {
                        slidesPerView: 4.5,
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
                                            <span key={child._key} style={child.marks.includes('strong') ? { fontWeight: 'bold' } : {}}>
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
    );
}

export default Credits;