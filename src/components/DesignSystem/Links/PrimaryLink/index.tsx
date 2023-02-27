import { Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IPrimaryLinkProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    to: string,
    isExternal: boolean,
    display?: string,
    children: React.ReactNode
}

export default function PrimaryLink({ to, children, isExternal, display = 'block', onClick }: IPrimaryLinkProps) {
    const href = !isExternal ? `#${to}` : to
    return (
        <Link css={styles.link} display={display}
            _hover={{ 'color': 'brand.accent' }}
            _activeLink={{ 'color': 'brand.accent' }}
            fontWeight={600}
            fontSize='xl'
            color='brand.textTerciary'
            href={href}
            onClick={onClick}
            isExternal={isExternal}>
            {children}
        </Link>
    );
}
