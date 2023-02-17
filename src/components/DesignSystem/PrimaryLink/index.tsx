import { Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IPrimaryLinkProps {
    id: string,
    name: string,
    isExternal: boolean,
    display?: string
}

export default function PrimaryLink({ id, name, isExternal, display = 'block' }: IPrimaryLinkProps) {
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
        </Link>
    );
}
