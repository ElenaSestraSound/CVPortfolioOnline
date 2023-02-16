import { ExternalLinkItem } from '@/lib/types';
import { Box, Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IExternalLinkBoxProps {
    items: ExternalLinkItem[]
}

export default function ExternalLinkBox({ items }: IExternalLinkBoxProps) {
    return (
        <Box>
            {items.map(item => <Link css={styles.menuItem}
                _hover={{ 'color': 'brand.accent' }}
                _activeLink={{ 'color': 'brand.accent' }}
                fontWeight={600}
                fontSize='xl'
                color='brand.darkText'
                href={item.url}>
                {item.name}
            </Link>)}
        </Box>
    );
}
