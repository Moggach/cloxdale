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

      <div className="relative w-full min-h-[350px] overflow-hidden">
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
      <p>As well as writing and script-editing on shows, I also offer help as a script consultant.</p>
      <p>If you&rsquo;re looking for help to improve your script, if you want notes on your live standup show or if you&rsquo;re a production company looking for another pair of eyes on something, let&rsquo;s have a chat.</p>

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
      <p>
        I like to help the writer realise the best version of their idea.
        Looking at characters, dialogue and structure in a way that brings
        out what is already working well while clarifying anything that
        isn&rsquo;t quite there yet. All notes are offered as helpful
        suggestions and I try to offer practical example solutions to
        problems - if they inspire you to think of a better solution than
        I&rsquo;ve come up with, then that&rsquo;s the best kind of note.
      </p>
      <p>
        If I have one goal with notes it&rsquo;s to make the writer excited
        and motivated to get stuck into their next draft.
      </p>

      <p className="text-xl font-black">And you&rsquo;re doing all this out of the goodness of your heart?</p>
      <p>
        No, I will need a bit of money. I offer detailed written notes and
        also offer an additional chat on a zoom call if you want to discuss
        further. My standard rates are:
      </p>
      <ul className="flex flex-col gap-2 list-disc pl-5">
        <li>TV half hour script (up to 35 pages) - £99</li>
        <li>TV hour script (up to 65 pages) - £189</li>
        <li>Feature length film script (up to 120 pages) - £299</li>
        <li>Additional 60 minute zoom to discuss your script* - £50</li>
      </ul>
      <p className="text-sm italic">
        *note that this zoom can&rsquo;t be purchased individually as
        I&rsquo;ll have to read and make notes on the script before
        discussing it.
      </p>
      <p>
        If your project doesn&rsquo;t fall into these categories or
        you&rsquo;re looking for a different kind of consultancy, send me a
        message and we can discuss.
      </p>
      <p>
        I will invoice before reading the script so you know exactly what
        you are paying and once payment is received I will be able to send
        you feedback within seven working days. If you need feedback sooner
        than that because of a deadline, just let me know and I&rsquo;m sure
        we can make that happen.
      </p>
      <p>Get in touch via the google form if you&rsquo;re interested.</p>

      <p>I have worked with the following:</p>
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
