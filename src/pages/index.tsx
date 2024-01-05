import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from '~/lib/sanity.api'
import Layout from '~/components/Layout'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import type { heroSection } from '~/lib/sanity.queries'
import type { Credit } from '~/lib/sanity.queries'
import type { Contact } from '~/lib/sanity.queries'
import HeroSection from '~/components/HeroSection'
import Credits from '~/components/Credits'
import Contacts from '~/components/Contacts'



export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    section: heroSection[]
    credits: Credit[]
    contacts: Contact[]
  }

> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const section = await client.fetch(`*[_type == "heroSection"]`)
  const credits = await client.fetch(`*[_type == "credit"]`)
  const contacts = await client.fetch(`*[_type == "contact"]`)
  



  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      section,
      credits,
      contacts

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const section = props.section
  const credits = props.credits
  const contacts = props.contacts


  return (
    <>
      <Layout>
        <HeroSection section={section} />
        <Contacts contacts={contacts} />
        <Credits credit={credits} />



      </Layout>
    </>
  )
}