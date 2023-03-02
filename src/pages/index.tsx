import Layout from '@/components/Layout'
import { navigationActions } from '@/store/navigation-slice';
import { SECTIONS } from '@/utils/CommonUtils'
import { useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { useDispatch } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const options = { threshold: 0.7 }
  const { inViewport } = useInViewport(ref, options);

  const dispatch = useDispatch()

  useEffect(() => {
    if (inViewport) {
      if (ref.current) {
        console.log(ref.current.id + " is in viewPort")
        dispatch(navigationActions.setActiveSection(ref.current.id))
      }
    }
  }, [inViewport, dispatch, ref])
  return (
    <Layout>
      {SECTIONS.map(section => <section.component key={uuid_v4()} ref={ref} />)}
    </Layout>
  )
}