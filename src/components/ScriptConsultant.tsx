import { useEffect, useRef } from 'react';
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
                    <div className="basis-1/2">
                        {/* image goes here */}
                    </div>
                    <div className="basis-1/2 font-karla text-base flex flex-col gap-6">
                    <p>As well as writing and script-editing on shows, I also offer help as a script consultant (read scripts and make notes for hard cash.)</p>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-gogh text-md">FAQ</h3>
                        <p><strong>Who the hell are you and why should I pay you money to read my script?</strong></p>
                        <p>Honestly, I respect this question so much and it&apos;s what I think whenever I see this kind of thing being offered. There are some absolute cowboys out there.</p>
                        <p>I have a wide variety of experience: I script edit on sitcoms, sketch shows and panel shows for TV and radio.</p>
                        <p>I have written TV drama and comedy. I know what it feels like to get good notes and bad notes.</p>
                        <p>I have also read feature film scripts for a production company.</p>
                        <p>I specialise in reading sitcom scripts but can also help with other genres and forms - send me an email if you&apos;re interested and we can fit it around your needs and your brain.</p>
                        <p>If I have one goal with notes it&apos;s to make the writer excited to write the next draft.</p>
                        <p>I write comedy songs and sketches with Christy Coysh on TikTok.</p>
                        <p>I write scripts myself, some have been good some have been bad and I&apos;m starting to learn the difference.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p>I&apos;m currently working as a script editor across a few shows:</p>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li><strong>Such Brave Girls</strong> — BAFTA winning sitcom written by Kat Sadler</li>
                            <li><strong>What Just Happened</strong> — Award winning TV and radio panel show</li>
                            <li><strong>Carbon Lifeforms</strong> — Jon Long&apos;s Radio 4 comedy show helping us save the planet</li>
                            <li><strong>DMs Are Open</strong> — Radio 4&apos;s flagship sketch show for brand new writers</li>
                        </ul>
                        <p>I&apos;ve done stuff basically.</p>
                    </div>

                    <p>If you&apos;re reading this because you&apos;re curious but don&apos;t really write scripts and instead are more of a standup and you want notes on your show - you can <a href="#" className="underline text-lightPrimary">hit me up here</a>.</p>
                </div>
                </div>
                <div className="font-karla text-sm italic border border-current rounded p-4 max-w-xl">
                    Hmm... it seems you&apos;re trying to scroll on this website without hiring Cameron to work with you? Did you mean to do that? This has never happened before. Several industry bigwigs are looking at this page right now, we recommend booking him while you still can.
                </div>
            </div>
            <Dots />
        </>
    );
};

export default ScriptWork;
