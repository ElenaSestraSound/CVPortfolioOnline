import { StaticImageData } from "next/image"

export type NavMenuItem = {
    name: string,
    id: string
}

export type ExternalLinkItem = {
    name: string,
    url: string
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
    links: ExternalLinkItem[],
    image: StaticImageData,
    tecnologies: any[]
}