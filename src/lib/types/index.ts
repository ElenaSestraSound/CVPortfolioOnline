import { StaticImageData } from "next/image"

export type NavMenuItem = {
    name: string,
    to: string
}

export type LinkItem = {
    name: string,
    to: string
}

export type TableContentDetail = {
    title: string,
    description?: string,
    place: string
    date: string
}
export type SkillDetails = {
    icon: any,
    value: number,
    name: string
}

export type ProjectDetails = {
    name: string,
    description: string,
    links: LinkItem[],
    image: StaticImageData,
    tecnologies: any[]
}

export type Section = {
    component: React.ForwardRefExoticComponent<React.LegacyRef<HTMLDivElement> & React.RefAttributes<unknown>>
}