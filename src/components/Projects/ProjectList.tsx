import { ProjectDetails } from "@/lib/types";
import portfolioImg from '@/assets/Projects/portfolio.png'
import foodappImg from '@/assets/Projects/foodapp.png'
import NextLogo from '@/assets/tecnologies/#070707/next.svg'
import TypeLogo from '@/assets/tecnologies/#070707/tys.svg'
import ChakraLogo from '@/assets/tecnologies/#070707/chakra.svg'
import ReactLogo from '@/assets/tecnologies/#070707/react.svg'

export const ProjectList: ProjectDetails[] = [
    {
        name: 'Portfolio CV online',
        description: 'This is my portfolio and CV website, where I have fetured my resumee and projects.',
        links:
            [{ name: 'Portfolio CV url', to: '#' },
            { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/CVPortfolioOnline' }],
        image: portfolioImg,
        tecnologies: [<NextLogo />, <TypeLogo />, <ChakraLogo />]
    },
    {
        name: 'Order Food App',
        description: 'A React single page demo application to order food.',
        links:
            [{ name: 'Order Food App url', to: 'https://order-food-app-mu.vercel.app/' },
            { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/order-food-app' }],
        image: foodappImg,
        tecnologies: [<ReactLogo />, <TypeLogo />, <ChakraLogo />]
    },
    // {
    //     name: 'Personal Blog',
    //     description: 'This is my personal blog page where I write about coding.',
    //     links:
    //         [{ name: 'Personal Blog url', url: '#' },
    //         { name: 'GitHub Repository', url: '#' }],
    //     image: portfolioImg,
    //     tecnologies: [<NextLogo />, <TypeLogo />, <CSSLogo />]
    // },
]