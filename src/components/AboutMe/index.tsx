import { Heading, Text, Box, Flex, Center, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import * as React from 'react';
import * as styles from './styles'
import Section from '../Layout/Section';
import Image from 'next/image';
import pic from '@/assets/rocketEmail.png'
import SecondaryLink from '../DesignSystem/SecondaryLink';


export default function AboutMe() {
    return (
        <Section bg='brand.lightBg' id='about-me'>
            <Flex css={styles.aboutMeContainer}>
                <Box css={styles.detailsBox}>
                    <Heading as='h2' size='xl' color='brand.lightText1'>
                        A little bit about me
                    </Heading>
                    <Text fontSize='2xl' fontWeight={600} color='brand.lightText2'>
                        I started my codding journey back in 2013 with Java and Android and since then I've never stopped.
                    </Text>
                    <br />
                    <Text fontSize='2xl' fontWeight={600} color='brand.lightText2'>
                        Even though I studied to be a mobile developer I ended up working in frontend at an online newspaper as my first developer job.
                        I mastered SCSS and had a pretty deep dive into JavaScript.
                    </Text>
                    <br />
                    <Text fontSize='2xl' fontWeight={600} color='brand.lightText2'>
                        Now I'm a TypeScript enthusiast building React applications and looking forward to keep learning and making creative works.
                    </Text>
                    <br />
                    <SecondaryLink id='projects' name='Checkout my React projects here' isExternal={false} ><ChevronRightIcon /></SecondaryLink>
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
