import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import EBLogo from '@/assets/logo/300/LogoWhite.svg'
import EBLogoSmall from '@/assets/logo/150/LogoWhite.svg'
import EBLogoOrange from '@/assets/logo/300/LogoOrange.svg'
import Section from '../DesignSystem/Section';
import { useEffect, useState } from 'react';

export default function Main() {
    // let Logo = EBLogo
    // if (typeof window !== 'undefined') {
    //     const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    //     useEffect(() => {
    //         if (windowSize > 800) {
    //             console.log("Window Size is greater than 800. Setting White logo")
    //             Logo = EBLogo
    //         } else {
    //             console.log("Window Size is smaller than 800. Setting Orange logo")
    //             Logo = EBLogoOrange
    //         }
    //     }, [windowSize])
    // }
    // console.log("Returning unicorns")
    return (
        <Section bg='brand.backgroundPrimary' id='home'>
            <Box css={styles.profile}>
                <Box css={styles.profileDetails}>
                    <Text fontSize='3xl' as='b' color='brand.textTerciary'>Hello, I'm <Text color='brand.accent'>Elena</Text></Text>
                    <br />
                    <Text fontSize='5xl' as='i' color='brand.textTerciary'>Full Stack developer</Text>
                    <Box>
                        <Button
                            _hover={{ 'color': 'brand.textPrimary', 'backgroundColor': 'brand.backgroundSecondary' }}
                            size={['sm', 'md', 'md', 'lg']}
                            bg='brand.buttonSecondary'
                            color='brand.textTerciary'
                            border='2px'
                            borderColor='brand.textTerciary'
                            as='a'
                            href='#Contact Me'
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button
                            _hover={{ 'color': 'brand.textPrimary', 'backgroundColor': 'brand.backgroundSecondary' }}
                            borderRadius='full'
                            bg='brand.accent'
                            color='brand.textTerciary'
                            size={['sm', 'md', 'md', 'lg']}>
                            Get CV
                        </Button>
                    </Box>
                </Box>
                <Box css={styles.profileLogo}>
                    <EBLogo />
                </Box>
            </Box>
        </Section >
    );
}
