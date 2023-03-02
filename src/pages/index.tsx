import Layout from '@/components/Layout'
import { SECTIONS } from '@/utils/CommonUtils'
import { useRef } from 'react'

export default function Home() {
  return (
    <Layout>
      {SECTIONS.map(section => <section.component />)}
    </Layout>
  )
}