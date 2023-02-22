import { Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface ISecondaryLinkProps {
    to: string,
    isExternal: boolean,
    display?: string,
    children?: React.ReactNode
}

export default function SecondaryLink({ to, isExternal, display = 'block', children }: ISecondaryLinkProps) {
    const href = !isExternal ? `#${to}` : to
    return (
        <Link css={styles.link} display={display}
            _hover={{ 'color': 'brand.accent' }}
            _activeLink={{ 'color': 'brand.accent' }}
            fontWeight={600}
            fontSize='xl'
            color='brand.textPrimary'
            href={href}
            isExternal={isExternal}>
            {children}
        </Link>
    );
}
