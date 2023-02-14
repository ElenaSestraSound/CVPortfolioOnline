import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/75/LogoMagnolia.svg'
import NavMenu from '../NavMenu/NavMenu';
import classes from './Header.module.css'

const menuItems = [
    "Home",
    "About Me",
    "Resume",
    "Projects",
    "Contact Me"
]

export default function HeaderMenu() {
    return (
        <Box p={4}>
            <Flex margin='0 auto' maxW={1240}>
                <Box className={classes['header-title']}>
                    <span>
                        <EBLogo />
                    </span>
                    <Heading as='h1'>ELENA BAÑÓN</Heading>
                </Box>
                <Spacer />
                <NavMenu items={menuItems} />
            </Flex>
        </Box>
    );
}
