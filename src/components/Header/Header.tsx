import { Box, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
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
        <Section bg='brand.darkBg' class={classes['menu-bar']}>
            <Box className={classes['header-title']}>
                <Heading as='h1' color='brand.darkText'>ELENA BAÑÓN</Heading>
            </Box>
            <Spacer />
            <NavMenu items={menuItems} />
        </Section>
    );
}
