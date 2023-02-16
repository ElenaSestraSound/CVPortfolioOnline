import { Link } from '@chakra-ui/react';
import * as React from 'react';
import { NavMenuItems } from './NavMenuItems'
import * as styles from './styles'

export interface INavMenuProps {
    isRow?: Boolean
}

export default function NavMenu({ isRow }: INavMenuProps) {
    const display = isRow ? { 'display': 'inline-block' } : { 'display': 'block' }
    return (
        <nav>
            {NavMenuItems.map(item =>
                <Link css={styles.menuItem} style={display}
                    _hover={{ 'color': 'brand.accent' }}
                    _activeLink={{ 'color': 'brand.accent' }}
                    fontWeight={600}
                    fontSize='xl'
                    color='brand.darkText'
                    href={`#${item.id}`}>
                    {item.name}
                </Link>)}
        </nav>
    );
}
