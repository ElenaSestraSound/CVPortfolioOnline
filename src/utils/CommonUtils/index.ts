import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Resumee from '@/components/Resumee'
import Skills from '@/components/Skills'
import { Section } from '@/lib/types'

export const SECTIONS: Section[] = [
    {
        section_id: 'home',
        component: Main
    },
    {
        section_id: 'about-me',
        component: AboutMe
    },
    {
        section_id: 'resumee',
        component: Resumee
    },
    {
        section_id: 'skills',
        component: Skills
    },
    {
        section_id: 'projects',
        component: Projects
    },
    {
        section_id: 'contact-me',
        component: ContactMe
    },
]

export const GET_SCREEN_INDEX = (section_id: string) => {
    if (!section_id) return -1
    for (let i = 0; SECTIONS.length; i++) {
        if (SECTIONS[i].section_id == section_id) return i
    }
    return -1
}