import { Box, Heading, IconButton, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import Section from '../DesignSystem/Section';
import NavMenu from '../DesignSystem/NavMenu';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux'
import { navigationActions } from '@/store/navigation-slice';

export default function HeaderMenu() {
    const dispatch = useDispatch()
    const hamburguerOnClickHandler = () => {
        dispatch(navigationActions.toggle())
    }
    return (
        <Section bg='brand.backgroundPrimary' css={styles.menuBar}>
            <Box css={styles.headerTitle}>
                <Heading as='h1' color='brand.textTerciary'>Elena Bañón</Heading>
            </Box>
            <Spacer />
            <NavMenu />
            <IconButton
                _hover={{ 'color': 'brand.textTerciary', ' backgroundColor': 'brand.backgroundPrimary' }}
                color='brand.textTerciary'
                bgColor='brand.backgroundPrimary'
                border='1px'
                aria-label='Open DrawerMenu'
                icon={<HamburgerIcon />}
                onClick={hamburguerOnClickHandler} />
        </Section>
    );
}
