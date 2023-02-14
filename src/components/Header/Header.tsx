import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/75/LogoMagnolia.svg'
import NavMenu from '../NavMenu/NavMenu';
import classes from './Header.module.css'
import Section from '../Layout/Section';

const menuItems = [
    "Home",
    "About Me",
    "Resume",
    "Projects",
    "Contact Me"
]

export default function HeaderMenu() {
    return (
        <Section>
            <Box className={classes['header-title']}>
                <Heading as='h1'>ELENA BAÑÓN</Heading>
            </Box>
            <Spacer />
            <NavMenu items={menuItems} />
        </Section>
    );
}
