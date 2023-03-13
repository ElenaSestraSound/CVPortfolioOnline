import { Heading, Text, Box, Flex, Center } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import * as React from 'react';
import * as styles from './styles'
import Section from '../DesignSystem/Section';
import Image from 'next/image';
import pic from '@/assets/rocketEmail.png'
import SecondaryLink from '../DesignSystem/Links/SecondaryLink';
import useViewport from '@/hooks/use-viewport';


const AboutMe = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    return (
        <Section bg='brand.backgroundSecondary' id='about-me' ref={ref}>
            <Flex css={styles.aboutMeContainer}>
                <Box css={styles.detailsBox}>
                    <Heading as='h2' size='xl' color='brand.textPrimary'>
                        A little bit about me
                    </Heading>
                    <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
                        I started my codding journey back in 2013 with Java and Android and since then I&apos;ve never stopped.
                    </Text>
                    <br />
                    <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
                        Even though I studied to be a mobile developer I ended up working in frontend at an online newspaper as my first developer job.
                        I mastered SCSS and had a pretty deep dive into JavaScript.
                    </Text>
                    <br />
                    <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
                        Now I&apos;m a TypeScript enthusiast building React applications and diving into fullstack development, looking forward to keep learning and making creative stuff.
                    </Text>
                    <br />
                    <SecondaryLink to='projects' isExternal={false} > Checkout my React projects here<ChevronRightIcon /></SecondaryLink>
                </Box>
                <Center css={styles.imageBox}>
                    <Image
                        src={pic}
                        alt="Picture of the author"
                    />
                </Center>
            </Flex>
        </Section>
    );
}

export default AboutMe