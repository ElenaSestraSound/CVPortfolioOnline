import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import DrawerMenu from '@/components/DesignSystem/DrawerMenu/DrawerMenu'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Resumee from '@/components/Resumee'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <DrawerMenu />
      <Main />
      <AboutMe />
      <Resumee />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}
