import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '~/components/Layout';
import { ScrollProvider } from '~/components/ScrollContext';
import { ThemeProvider, useTheme } from '~/components/ThemeContext';

function ScriptConsultantContent() {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
  const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';

  return (
    <div className="flex flex-col gap-20 font-karla text-base max-w-2xl">
      <Link href="/">&larr; Back to home</Link>

      <h1 className={`font-gogh text-lg p-3 w-content inline-block rounded-sm rotate-3 ${bgColor} ${textColor}`}>SCRIPT CONSULTANT</h1>

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
        <div className="basis-1/2 flex flex-col gap-6">
          <p>As well as writing and script-editing on shows, I also offer help as a script consultant.</p>
          <p>If you&rsquo;re looking for help to improve your script, if you want notes on your live standup show or if you&rsquo;re a production company looking for another pair of eyes on something, let&rsquo;s have a chat.</p>
        </div>
      </div>

      <p className="text-xl font-black">Who the hell are you and why should I pay you money to read my script?</p>
      <p>Ok, no need to be quite so aggressive.</p>
      <p>
        I have loads of experience of working with writers to make their
        scripts better: I script-edit sitcoms, sketch shows and panel
        shows for TV and radio. I have also worked on feature film
        scripts for production companies and collaborated with
        comedians on everything from TikToks to full Edinburgh shows.
      </p>
      <p>
        As a writer I have written narrative comedy and drama for TV
        and radio. In my time I have received brilliant, thoughtful,
        energising notes and I&rsquo;ve also received vague, confusing,
        torturous notes and I know exactly how hard it can be to
        understand and follow up on this kind of feedback.
      </p>
    </div>
  );
}

export default function ScriptConsultantPage() {
  return (
    <>
      <Head>
        <title>Script Consultant | Cameron Loxdale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <ScrollProvider>
          <Layout>
            <ScriptConsultantContent />
          </Layout>
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}
