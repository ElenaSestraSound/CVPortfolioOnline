import { ProjectDetails } from "@/lib/types";
import portfolioImg from '@/assets/Projects/portfolio.png'
import foodappImg from '@/assets/Projects/foodapp.png'
import blogImg from '@/assets/Projects/blog.png'
import { logosBlack as logos } from "@/utils/CommonUtils/logos";

export const ProjectList: ProjectDetails[] = [
    {
        name: 'Portfolio CV online',
        description: 'This is my portfolio and CV website, where I have fetured my resumee and projects.',
        links:
            [{ name: 'Portfolio CV url', to: '#' },
            { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/CVPortfolioOnline' }],
        image: portfolioImg,
        tecnologies: [logos.Next, logos.TypeScript, logos.ChakraUi]
    },
    {
        name: 'Order Food App',
        description: 'A React single page demo application to order food.',
        links:
            [{ name: 'Order Food App url', to: 'https://order-food-app-mu.vercel.app/' },
            { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/order-food-app' }],
        image: foodappImg,
        tecnologies: [logos.React, logos.TypeScript, logos.ChakraUi]
    },
    {
        name: 'Personal Blog',
        description: 'This is my personal blog page where I write about coding. It is still work in progress.',
        links:
            [{ name: 'Personal Blog url', to: 'https://elenabao-blog.vercel.app/' },
            { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/elenabao-blog' }],
        image: blogImg,
        tecnologies: [logos.Next, logos.TypeScript, logos.ChakraUi]
    },
]