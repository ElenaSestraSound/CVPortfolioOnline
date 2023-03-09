import Layout from '@/components/Layout'
import { navigationActions } from '@/store/navigation-slice';
import { SECTIONS } from '@/utils/CommonUtils'
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { useDispatch } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid'

export default function Home() {
  // const ref = useRef<HTMLDivElement>(null)
  // const options = { threshold: 0.7 }
  // const { inViewport } = useInViewport(ref, options);

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (inViewport) {
  //     if (ref.current) {
  //       console.log(ref.current.id + " is in viewPort")
  //       dispatch(navigationActions.setActiveSection(ref.current.id))
  //     }
  //   }
  // }, [inViewport, dispatch, ref])
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