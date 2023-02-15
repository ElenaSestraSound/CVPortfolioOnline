import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/300/LogoMagnolia.svg'
import Section from '../Layout/Section';
import classes from './Main.module.css'

export default function Main() {
    return (
        <Section bg='brand.darkBg'>
            <Box className={classes.profile}>
                <Box className={classes['profile-details']}>
                    <Text fontSize='2xl' as='b' color='brand.darkText'>Hello, I'm <Text color='brand.accent'>Elena</Text></Text>
                    <br />
                    <Text fontSize='4xl' as='i' color='brand.darkText'>Full Stack developer</Text>
                    <Box>
                        <Button
                            bg='brand.buttonSecondary'
                            color='brand.darkText'
                            border='2px'
                            borderColor='brand.darkText'
                            as='a'
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button borderRadius='full' bg='brand.accent' color='brand.darkText'>Get CV</Button>
                    </Box>
                </Box>
                <Box className={classes['profile-logo']}>
                    <EBLogo />
                </Box>
            </Box>
        </Section >
    );
}
