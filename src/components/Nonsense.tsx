import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Nonsense = ({ nonsense }) => {
    console.log(nonsense);

    return (
        <>
            <div id="nonsense">
                NONSENSE
                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    {nonsense.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <h3>{item.title}</h3>
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
