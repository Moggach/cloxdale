import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScroll } from './ScrollContext';
import Dots from './Dots'
import { useTheme } from './ThemeContext';

const ScriptWork = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
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
                <div className="flex flex-col lg:flex-row gap-40">
                    <div className="basis-1/2 flex flex-col gap-2">
                        <div className="relative flex-1 min-h-[350px] overflow-hidden">
                            <Image
                                src="/headshot.jpg"
                                fill
                                alt="Cameron Loxdale"
                                className="rounded-md object-contain"
                                style={theme === 'dark'
                                    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
                                    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }}
                            />
                        </div>
                    </div>
                    <div className="basis-1/2 font-karla text-base flex flex-col gap-6 text-center">
                    <p>As well as writing and script-editing on shows, I also offer help as a script consultant.</p>
                    <p>If you&rsquo;re looking for help to improve your script, if you want notes on your live standup show or if you&rsquo;re a production company looking for another pair of eyes on something, let&rsquo;s have a chat.</p>
                    <p>More info here.</p>

                    </div>
                </div>
            </div>
            <Dots />
        </>
    );
};

export default ScriptWork;
