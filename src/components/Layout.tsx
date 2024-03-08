import React, { useState } from 'react';
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Modal from '~/components/Modal';
import dynamic from 'next/dynamic';
import { useTheme } from '~/components/ThemeContext'; 


const ConfettiExplosion = dynamic(() => import('react-confetti-explosion'), { ssr: false });


export default function Layout({ children }) {
    const [isExploding, setIsExploding] = useState(true);
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const { theme } = useTheme();
    let mainClass;
    if (theme === 'dark') {
        mainClass = 'bg-darkSecondary text-lightText';
    } else if (theme === 'tooDark') {
        mainClass = 'bg-tooDark';
    } else {
        mainClass = 'bg-lightBackground text-darkText';
    }

    return (
        <>

                {showModal && <div className="overlay"></div>}
                <Header />
                <div className={`${mainClass}`}>
                <div className={`flex justify-center w-3/4 md:w-auto ${showModal ? 'modal' : ''}`}>
                    {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={2000} />}
                    {showModal && <Modal onClose={handleCloseModal} />}
                </div>
                <main className={`px-20 flex flex-col gap-60 md:gap-80 pb-60 pt-40 lg:pt-60 ${mainClass}`}>{children}</main>
                </div>
                <Footer />

        </>
    )
}
