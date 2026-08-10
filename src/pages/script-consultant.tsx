import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '~/components/Layout';
import { ScrollProvider } from '~/components/ScrollContext';
import { ThemeProvider, useTheme } from '~/components/ThemeContext';

const HERO_IMAGE = {
  src: '/IMG_8280.jpeg',
  width: 4032,
  height: 3024,
  alt: 'Cameron Loxdale',
  caption: 'Me giving reassuring notes to a despondent writer',
};

const CONTENT_IMAGES = [
  {
    src: '/fnl.png',
    width: 750,
    height: 1334,
    alt: '',
    caption: "Me on the set of Channel 4's Friday Night Live. (The one from 2022 not the 80s, I’m very young.)",
  },
  {
    src: '/bafta.jpg',
    width: 3024,
    height: 4032,
    alt: '',
    caption: 'Me with TV’s Kat Sadler and her bloody BAFTA',
  },
];

const ALL_IMAGES = [HERO_IMAGE, ...CONTENT_IMAGES];

const LOGOS = [
  { src: '/logos/BBC Studios Comedy logo.png', alt: 'BBC Studios Comedy', width: 225, height: 225 },
  { src: '/logos/VAL logo.jpg', alt: 'Various Artists Limited', width: 711, height: 319 },
  { src: '/logos/Little Wander logo.jpg', alt: 'Little Wander', width: 1201, height: 676 },
  { src: '/logos/NOHO Logo.png', alt: 'NOHO Film and Television', width: 318, height: 159 },
  { src: '/logos/R&B-Logo.jpg', alt: 'Red and Black films', width: 906, height: 500 },
  { src: '/logos/BBC RADIO WALES.png', alt: 'BBC Radio Wales', width: 600, height: 600 },

];

function ContentImage({ src, width, height, alt = '', className = '', style = undefined }) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`w-full h-auto rounded-md shrink-0 ${className}`}
      style={style}
    />
  );
}

function Figure({ image, className = '', style = undefined }) {
  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      <ContentImage {...image} style={style} />
      {image.caption && (
        <figcaption className="text-sm lg:text-base italic text-center">{image.caption}</figcaption>
      )}
    </figure>
  );
}

function LogoImage({ src, alt }) {
  return (
    <div className="relative h-32 sm:h-44 lg:h-56 w-full">
      <Image src={encodeURI(src)} alt={alt} fill className="object-contain" />
    </div>
  );
}

function ScriptConsultantContent() {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';
  const textColor = theme === 'dark' ? 'text-darkText' : 'text-lightText';

  const intro = [
    <p key="p1">As well as writing and script-editing on shows, I also offer help as a script consultant.</p>,
    <p key="p2">If you&rsquo;re looking for help to improve your script, if you want notes on your live standup show or if you&rsquo;re a production company looking for another pair of eyes on something, let&rsquo;s have a chat.</p>,
    <p key="p15">
      Get in touch via the{' '}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeEhLMvQ0SyAhpLVk_rzo8qSHcUItvvpOGGYTeqWn6NehFsVA/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        google form
      </a>
      .
    </p>,
  ];

  const sections = [
    {
      heading: <p key="p3" className="text-xl font-black">Who the hell are you and why should I pay you money to read my script?</p>,
      text: [
        <p key="p4">Ok, no need to be quite so aggressive.</p>,
        <p key="p5">
          I have loads of experience of working with writers to make their
          scripts better: I script-edit sitcoms, sketch shows and panel
          shows for TV and radio. I have also worked on feature film
          scripts for production companies and collaborated with
          comedians on everything from TikToks to full Edinburgh shows.
        </p>,
        <p key="p6">
          As a writer I have written narrative comedy and drama for TV
          and radio. In my time I have received brilliant, thoughtful,
          energising notes and I&rsquo;ve also received vague, confusing,
          torturous notes and I know exactly how hard it can be to
          understand and follow up on this kind of feedback.
        </p>,
        <p key="p7">
          I like to help the writer realise the best version of their idea.
          Looking at characters, dialogue and structure in a way that brings
          out what is already working well while clarifying anything that
          isn&rsquo;t quite there yet. All notes are offered as helpful
          suggestions and I try to offer practical example solutions to
          problems - if they inspire you to think of a better solution than
          I&rsquo;ve come up with, then that&rsquo;s the best kind of note.
        </p>,
        <p key="p8">
          If I have one goal with notes it&rsquo;s to make the writer excited
          and motivated to get stuck into their next draft.
        </p>,
      ],
      image: CONTENT_IMAGES[0],
    },
    {
      heading: <p key="p9" className="text-xl font-black">And you&rsquo;re doing all this out of the goodness of your heart?</p>,
      text: [
        <p key="p10">
          No, I will need a bit of money. I offer detailed written notes and
          also offer an additional chat on a zoom call if you want to discuss
          further. My standard rates are:
        </p>,
        <ul key="p11" className="flex flex-col gap-2 list-disc pl-5">
          <li>TV half hour script (up to 35 pages) - £99</li>
          <li>TV hour script (up to 65 pages) - £189</li>
          <li>Feature length film script (up to 120 pages) - £299</li>
          <li>Additional 60 minute zoom to discuss your script* - £50</li>
        </ul>,
        <p key="p12" className="text-sm italic">
          *note that this zoom can&rsquo;t be purchased individually as
          I&rsquo;ll have to read and make notes on the script before
          discussing it.
        </p>,
        <p key="p13">
          If your project doesn&rsquo;t fall into these categories or
          you&rsquo;re looking for a different kind of consultancy, send me a
          message and we can discuss.
        </p>,
        <p key="p14">
          I will invoice before reading the script so you know exactly what
          you are paying and once payment is received I will be able to send
          you feedback within seven working days. If you need feedback sooner
          than that because of a deadline, just let me know and I&rsquo;m sure
          we can make that happen.
        </p>,
      ],
      image: CONTENT_IMAGES[1],
    },
  ];

  const outro = 'I have worked with the following:';

  const imageShadow = theme === 'dark'
    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };

  return (
    <div className="flex flex-col gap-20 font-karla text-base max-w-2xl lg:max-w-6xl">
      <Link href="/">&larr; Back to home</Link>

      <h1 className={`font-gogh text-lg p-3 w-content inline-block rounded-sm rotate-3 ${bgColor} ${textColor}`}>SCRIPT CONSULTANT</h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-40">
        <div className="flex flex-col gap-20">
          {intro}
          <Figure image={HERO_IMAGE} className="lg:hidden" style={imageShadow} />
          {sections.map((section, index) => (
            <Fragment key={index}>
              {section.heading}
              {section.text}
              <Figure image={section.image} className="lg:hidden" style={imageShadow} />
            </Fragment>
          ))}
          <p className="mt-4 lg:hidden">{outro}</p>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:justify-between lg:gap-10">
          {ALL_IMAGES.map((image, index) => (
            <Figure key={index} image={image} style={imageShadow} />
          ))}
        </div>
      </div>

      <p className="hidden lg:block">{outro}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-center">
        {LOGOS.map((logo) => (
          <LogoImage key={logo.src} src={logo.src} alt={logo.alt} />
        ))}
      </div>
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
