import Layout from '@/components/Layout'
import { SECTIONS } from '@/utils/CommonUtils'

export default function Home() {
  return (
    <Layout>
      {SECTIONS.map(section => <section.component />)}
    </Layout>
  )
}