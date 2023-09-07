import { ProjectDetails } from "@/lib/types";
import portfolioImg from '@/assets/Projects/portfolio.png';
import foodappImg from '@/assets/Projects/foodapp.png';
import blogImg from '@/assets/Projects/blog.png';
import linkApp from '@/assets/Projects/linkapp.png';
import comboBreakdown from '@/assets/Projects/comboBreakdown.png';
import { logos } from "@/utils/CommonUtils/logos";

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
    name: 'LinkApp',
    description: 'A web app that showcases social media links for users in one place.',
    links:
      [{ name: 'LinkApp url', to: '#' },
      { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/LinkApp' }],
    image: linkApp,
    tecnologies: [logos.Next, logos.Tailwind, logos.Mongo]
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
  {
    name: 'Combo Breakdown',
    description: 'Street Fighter 6 characters stats companion app for players.',
    links:
      [{ name: 'Combo Breakdown url', to: 'https://combo-breakdown.vercel.app/' },
      { name: 'GitHub Repository', to: 'https://github.com/ElenaSestraSound/ComboBreakdown' }],
    image: comboBreakdown,
    tecnologies: [logos.Next, logos.Express, logos.Mongo]
  },
];