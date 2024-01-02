import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { readToken } from '~/lib/sanity.api'
import Layout from '~/components/Layout'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import type { Credit } from '~/lib/sanity.queries'
import type { heroSection } from '~/lib/sanity.queries'
import HeroSection from '~/components/HeroSection'


import { urlForImage } from '~/lib/sanity.image'


export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    credits: Credit[]
    sections: heroSection[]
    posts: Post[]
  }

> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const credits = await client.fetch(`*[_type == "credit"]`)
  const sections = await client.fetch(`*[_type == "HeroSection"]`)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      credits,
      sections

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const credits = props.credits 
  const sections = props.sections 

  return (
    <>
    <Layout>
       {sections.map((section) => (
         <HeroSection key={section._id} section={section} />
       ))}
     </Layout>
    </>
  )
}