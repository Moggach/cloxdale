import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from '~/lib/sanity.api'
import Layout from '~/components/Layout'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'
import type { heroSection } from '~/lib/sanity.queries'
import type { Credit } from '~/lib/sanity.queries'
import HeroSection from '~/components/HeroSection'
import Credits from '~/components/Credits'


export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    sections: heroSection[]
    credits: Credit[]


  }

> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const sections = await client.fetch(`*[_type == "HeroSection"]`)
  const credits = await client.fetch(`*[_type == "credit"]`)


  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      sections,
      credits

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const sections = props.sections
  const credits = props.credits


  return (
    <>
      <Layout>
        {sections.map((section) => (
          <HeroSection key={section._id} section={section} />
        ))}
        <Credits credit={credits} />


      </Layout>
    </>
  )
}