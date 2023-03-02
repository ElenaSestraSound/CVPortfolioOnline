import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Resumee from '@/components/Resumee'
import Skills from '@/components/Skills'
import { Section } from '@/lib/types'

export const SECTIONS: Section[] = [
    { component: Main },
    { component: AboutMe },
    { component: Resumee },
    { component: Skills },
    { component: Projects },
    { component: ContactMe },
]