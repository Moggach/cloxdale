import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '~/components/Layout';
import { ScrollProvider } from '~/components/ScrollContext';
import { useTheme } from '~/components/ThemeContext';

function InstagramContent() {
  const { theme } = useTheme();

  const imageShadow = theme === 'dark'
    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };

  return (
    <div className="flex flex-col gap-20 font-fira text-base max-w-2xl lg:max-w-6xl">
      <Link href="/">&larr; Back to home</Link>

      <p>I don&rsquo;t have Instagram because I&rsquo;m better than you.</p>

      <Image
        src="/logos/war_and_peace.jpg"
        width={4284}
        height={5712}
        alt="Cameron Loxdale thoughtfully reading War and Peace instead of scrolling Instagram"
        className="w-full h-auto rounded-md max-w-sm"
        style={imageShadow}
      />
    </div>
  );
}

export default function InstagramPage() {
  return (
    <>
      <Head>
        <title>Instagram | Cameron Loxdale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollProvider>
        <Layout>
          <InstagramContent />
        </Layout>
      </ScrollProvider>
    </>
  );
}
