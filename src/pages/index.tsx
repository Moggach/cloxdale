import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { readToken } from '~/lib/sanity.api'

import Layout from '~/components/Layout'



import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import type { Credit } from '~/lib/sanity.queries'


export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    credits: Credit[]
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const credits = await client.fetch(`*[_type == "credit"]`) // Add this line


  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      credits, 

    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
 ) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const credits = props.credits // Add this line
 
  return (
    <>
      <Layout>
      {credits.map((credit) => ( // Add these lines
        <div key={credit._id}>
          <h2>{credit.title}</h2>
          <p>{credit.excerpt}</p>
        </div>
      ))}
      </Layout>
    </>
  )
 }