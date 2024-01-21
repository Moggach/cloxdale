
import Footer from '~/components/Footer'
import Header from '~/components/Header'

import Modal from '~/components/Modal';
import dynamic from 'next/dynamic';


const ConfettiExplosion = dynamic(() => import('react-confetti-explosion'), { ssr: false });
import React, { useState } from 'react';


export default function Layout({ children }) {

    const [isExploding, setIsExploding] = useState(true);
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <Header />
            <div className="flex justify-center">
                {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={2000} />}
                {showModal && <Modal onClose={handleCloseModal} />}
            </div>
            <main className="pt-4 px-4 mx:py-0 flex flex-col gap-60 md:gap-80">{children} </main>
            <Footer />

        </>
    )
}