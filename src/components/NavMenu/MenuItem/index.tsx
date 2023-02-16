import { NavMenuItem } from '@/lib/types';
import { Box, Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IMenuItemProps {
    item: NavMenuItem
}

export default function MenuItem({ name, id }: NavMenuItem) {
    return (
        <Box css={styles.menuItem}>
            <Link
                _hover={{ 'color': 'brand.accent' }}
                _activeLink={{ 'color': 'brand.accent' }}
                fontWeight={600}
                fontSize='xl'
                color='brand.darkText'
                href={`#${id}`}>
                {name}
            </Link>
        </Box>
    );
}
