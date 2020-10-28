import Head from 'next/head'
import Container from '../../components/container'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsWithSlug } from '../../lib/api'
import Link from 'next/link'


export default function Index({ allPosts: { edges }, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Time Well Wasted</title>
        </Head>
        <Container>
        <Header />
          <Intro />
          {edges.map(({ node }) => (
              <h1>
                  <Link as={`/posts/${node.slug}`} href="/posts/[slug]">
                    <a
                        className="hover:underline"
                        dangerouslySetInnerHTML={{ __html: node.title }}
                    ></a>
                </Link>
                  </h1>
        ))}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsWithSlug(preview)
  return {
    props: { allPosts, preview },
  }
}
