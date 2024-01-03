import React from 'react';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Credits = ({ credit }) => {
    return (
        <div id="credits">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
            >
                {credit.map((credit, index) => (
                    <SwiperSlide key={index}>
                        <Link href={credit.externalLink}>
                            <div className="flex flex-col gap-3">
                                <h3>{credit.title}</h3>
                                <Image
                                    className=""
                                    src={urlForImage(credit.image).width(500).height(300).url()}
                                    height={300}
                                    width={500}
                                    alt=""
                                />
                                <p>{credit.excerpt}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default Credits;
