import { Box, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import Section from '../Layout/Section';
import NavMenu from '../NavMenu';

export default function HeaderMenu() {
    return (
        <Section bg='brand.darkBg' css={styles.menuBar}>
            <Box css={styles.headerTitle}>
                <Heading as='h1' color='brand.darkText'>Elena Bañón</Heading>
            </Box>
            <Spacer css={styles.spacer} />
            <NavMenu isRow={true} />
        </Section>
    );
}