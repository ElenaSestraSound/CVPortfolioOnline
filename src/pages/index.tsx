import Layout from '@/components/Layout'
import { SECTIONS } from '@/utils/CommonUtils'
import Head from 'next/head';
import { v4 as uuid_v4 } from 'uuid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elena&apos;s Online Portfolio</title>
        <meta property='description' content='Checkout my online portfolio and contact me' key='desc' />
        <meta property='og:title' content="Elena's Online Portfolio" />
        <meta property='og:description' content='Checkout my online portfolio and contact me' />
        <meta property='og:image' content='/portfolio.png' />
      </Head>
      <Layout>
        {SECTIONS.map(section => <section.component key={uuid_v4()} />)}
      </Layout>
    </>
  )
}