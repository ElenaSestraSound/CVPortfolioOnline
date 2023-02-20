import { Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface ITerciaryLinkProps {
    id: string,
    name: string,
    isExternal: boolean,
    display?: string,
    children?: React.ReactElement
}

export default function TerciaryLink({ id, name, isExternal, display = 'block', children }: ITerciaryLinkProps) {
    return (
        <Link css={styles.link} display={display}
            _hover={{ 'color': 'brand.accent' }}
            _activeLink={{ 'color': 'brand.accent' }}
            fontWeight={600}
            fontSize='xl'
            color='brand.textTerciary'
            href={`#${id}`}
            isExternal={isExternal}>
            {name}
            {children}
        </Link>
    );
}
