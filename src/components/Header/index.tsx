import { Box, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import Section from '../DesignSystem/Section';
import NavMenu from '../DesignSystem/NavMenu';

export default function HeaderMenu() {
    return (
        <Section bg='brand.backgroundPrimary' css={styles.menuBar}>
            <Box css={styles.headerTitle}>
                <Heading as='h1' color='brand.textTerciary'>Elena Bañón</Heading>
            </Box>
            <Spacer css={styles.spacer} />
            <NavMenu />
        </Section>
    );
}
