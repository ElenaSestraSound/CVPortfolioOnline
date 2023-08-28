import { Heading, Text, Box, Flex, Center } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import * as React from 'react';
import * as styles from './styles';
import Section from '../DesignSystem/Section';
import Image from 'next/image';
import pic from '@/assets/rocketEmail.png';
import SecondaryLink from '../DesignSystem/Links/SecondaryLink';
import useViewport from '@/hooks/use-viewport';


const AboutMe = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  useViewport(ref);
  return (
    <Section bg='brand.backgroundSecondary' id='about-me' ref={ref}>
      <Flex css={styles.aboutMeContainer}>
        <Box css={styles.detailsBox}>
          <Heading as='h2' size='xl' color='brand.textPrimary'>
            A little bit about me
          </Heading>
          <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
            I am a web developer with experience working in various digital newspapers and magazines as a frontend developer.
            While I enjoyed my work, I often found myself feeling stuck using the same old technologies repeatedly.
            I realized that I needed to level up my knowledge to keep up with the ever-evolving digital landscape.
          </Text>
          <br />
          <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
            Now, I'm a full-stack developer that specializes in developing modern web applications using Nextjs, React, and Typescript, with knowledge
            on the backend side with Node and Express.
            I'm also passionate about sharing my knowledge with others, which is why I have started writing a blog about coding to help others solve the same problems I faced.
            By keeping up with the latest technologies and sharing my experiences, I believe I can make a positive impact on the coding community.
          </Text>
          <br />
          <Text fontSize='2xl' fontWeight={600} color='brand.textSecondary'>
            In addition to my passion for coding, I have a deep love for audiovisuals and creating content.
            I've studied music production and video editing, which has given me a unique perspective on creating engaging and high-quality content.
            I believe that by combining my technical knowledge and creative skills, I can create innovative and effective solutions for my clients.
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
};

export default AboutMe;