import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Nonsense = ({ nonsense }) => {

    return (
        <>
            <div id="nonsense">
                NONSENSE
                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    {nonsense.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <h3>{item.title}</h3>
                            {item.videoLink && (
                                <ReactPlayer url={item.videoLink} />
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
                                <p>{item.excerpt[0].children[0].text}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Nonsense;
