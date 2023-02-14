import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/300/LogoMagnolia.svg'
import Section from '../Layout/Section';
import classes from './Main.module.css'

export default function Main() {
    return (
        <Section backgroundColor='red'>
            <Box className={classes.profile}>
                <Box className={classes['profile-details']}>
                    <Text fontSize='2xl' as='b'>Hello, I'm Elena</Text>
                    <br />
                    <Text fontSize='4xl' as='i'>Full Stack developer</Text>
                    <Box>
                        <Button
                            as='a'
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button borderRadius='full'>Get CV</Button>
                    </Box>
                </Box>
                <Box className={classes['profile-logo']}>
                    <EBLogo />
                </Box>
            </Box>
        </Section >
    );
}
