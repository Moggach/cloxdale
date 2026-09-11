import Head from 'next/head';
import Image from 'next/image';
import Layout from '~/components/Layout';
import { ScrollProvider } from '~/components/ScrollContext';
import { useTheme } from '~/components/ThemeContext';

function InstagramContent() {
  const { theme } = useTheme();

  const imageShadow = theme === 'dark'
    ? { filter: 'drop-shadow(0 4px 6px rgba(255,255,255,0.15))' }
    : { filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' };

  return (
    <div className="flex flex-col gap-20 font-fira text-base max-w-3xl lg:max-w-6xl">
      <div className="max-w-3xl lg:max-w-6xl mx-auto flex flex-col gap-6">
        <p className="text-xl font-semibold">
          Cameron Loxdale does not have Instagram because he is better than you.
        </p>
        <Image
          src="/logos/war_and_peace.jpg"
          width={4284}
          height={5712}
          alt="Cameron Loxdale thoughtfully reading War and Peace instead of scrolling Instagram"
          className="w-full h-auto rounded-md"
          style={imageShadow}
        />
      </div>
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
