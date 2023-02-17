import { Link } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface ISecondaryLinkProps {
    id: string,
    name: string,
    isExternal: boolean,
    display?: string,
    children?: React.ReactElement
}

export default function SecondaryLink({ id, name, isExternal, display = 'block', children }: ISecondaryLinkProps) {
    return (
        <Link css={styles.link} display={display}
            _hover={{ 'color': 'brand.accent' }}
            _activeLink={{ 'color': 'brand.accent' }}
            fontWeight={600}
            fontSize='xl'
            color='brand.textPrimary'
            href={`#${id}`}
            isExternal={isExternal}>
            {name}
            {children}
        </Link>
    );
}
