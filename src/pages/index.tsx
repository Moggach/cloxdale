import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from '~/lib/sanity.api'
import Layout from '~/components/Layout'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import type { heroSection } from '~/lib/sanity.queries'
import type { Credit } from '~/lib/sanity.queries'
import type { searchItem } from '~/lib/sanity.queries'
import HeroSection from '~/components/HeroSection'
import Credits from '~/components/Credits'
import SearchHistory from '~/components/SearchHistory'
import ScrollToHash from '~/components/ScrollToHash';
import { ScrollProvider } from '~/components/ScrollContext';
import Head from 'next/head';






export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    section: heroSection[]
    credits: Credit[]
    searchItem: searchItem[]
  }

> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const section = await client.fetch(`*[_type == "heroSection"]`)
  const credits = await client.fetch(`*[_type == "credit"] | order(order asc)`)
  const searchItem = await client.fetch(`*[_type == "searchItem"] | order(createdAt desc)`)


  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      section,
      credits,
      searchItem

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const section = props.section
  const credits = props.credits
  const searchItem = props.searchItem




  return (
    <>
      <Head>
        <title>Cameron Loxdale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollProvider>
        <Layout>
          <HeroSection section={section} />
          <Credits credit={credits} />
          <SearchHistory />
          <ScrollToHash />
        </Layout>
      </ScrollProvider>

    </>

  )
}