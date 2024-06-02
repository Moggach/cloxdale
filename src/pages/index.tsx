import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from '~/lib/sanity.api'
import Layout from '~/components/Layout'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import type { heroSection } from '~/lib/sanity.queries'
import type { Credit } from '~/lib/sanity.queries'
import type { Contact } from '~/lib/sanity.queries'
import type { nonsense } from '~/lib/sanity.queries'
import type { searchItem } from '~/lib/sanity.queries'
import HeroSection from '~/components/HeroSection'
import Credits from '~/components/Credits'
import Contacts from '~/components/Contacts'
import Nonsense from '~/components/Nonsense'
import SearchHistory from '~/components/SearchHistory'
import { ScrollProvider } from '~/components/ScrollContext';
import { ThemeProvider } from '~/components/ThemeContext';
import Head from 'next/head';






export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    section: heroSection[]
    credits: Credit[]
    contacts: Contact[]
    nonsense: nonsense[]
    searchItem: searchItem[]
  }

> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const section = await client.fetch(`*[_type == "heroSection"]`)
  const credits = await client.fetch(`*[_type == "credit"]`)
  const contacts = await client.fetch(`*[_type == "contact"]`)
  const nonsense = await client.fetch(`*[_type == "nonsense"]`)
  const searchItem = await client.fetch(`*[_type == "searchItem"] | order(createdAt desc)`)


  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      section,
      credits,
      contacts,
      nonsense,
      searchItem

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const section = props.section
  const credits = props.credits
  const contacts = props.contacts
  const nonsense = props.nonsense
  const searchItem = props.searchItem




  return (
    <>
     <Head>
        <title>Cameron Loxdale</title>
      </Head>
      <ThemeProvider>
        <ScrollProvider>
          <Layout>
            <HeroSection section={section} />
            <Contacts contacts={contacts} />
            <Credits credit={credits} />
            <Nonsense nonsense={nonsense} />
            <SearchHistory />
          </Layout>
        </ScrollProvider>
      </ThemeProvider>

    </>

  )
}