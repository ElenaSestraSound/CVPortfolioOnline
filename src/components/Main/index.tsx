import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import EBLogo from '@/assets/logo/300/LogoMagnolia.svg'
import Section from '../Layout/Section';

export default function Main() {
    return (
        <Section bg='brand.darkBg' id='home'>
            <Box css={styles.profile}>
                <Box css={styles.profileDetails}>
                    <Text fontSize='3xl' as='b' color='brand.darkText'>Hello, I'm <Text color='brand.accent'>Elena</Text></Text>
                    <br />
                    <Text fontSize='5xl' as='i' color='brand.darkText'>Full Stack developer</Text>
                    <Box>
                        <Button
                            size='lg'
                            bg='brand.buttonSecondary'
                            color='brand.darkText'
                            border='2px'
                            borderColor='brand.darkText'
                            as='a'
                            href='#Contact Me'
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button borderRadius='full' bg='brand.accent' color='brand.darkText' size='lg'>Get CV</Button>
                    </Box>
                </Box>
                <Box css={styles.profileLogo}>
                    <EBLogo />
                </Box>
            </Box>
        </Section >
    );
}
