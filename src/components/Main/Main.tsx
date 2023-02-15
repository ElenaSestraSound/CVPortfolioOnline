import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/300/LogoMagnolia.svg'
import Section from '../Layout/Section';
import classes from './Main.module.css'

export default function Main() {
    return (
        <Section bg='brand.darkBg' id='Home'>
            <Box className={classes.profile}>
                <Box className={classes['profile-details']}>
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
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button borderRadius='full' bg='brand.accent' color='brand.darkText' size='lg'>Get CV</Button>
                    </Box>
                </Box>
                <Box className={classes['profile-logo']}>
                    <EBLogo />
                </Box>
            </Box>
        </Section >
    );
}
