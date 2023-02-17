import { Link } from '@chakra-ui/react';
import * as React from 'react';
import PrimaryLink from '../PrimaryLink';
import { NavMenuItems } from './NavMenuItems'

export interface INavMenuProps {
    linkDisplay?: string
}

export default function NavMenu({ linkDisplay = 'inline-block' }: INavMenuProps) {
    return (
        <nav>
            {NavMenuItems.map(item => <PrimaryLink key={item.id} id={item.id} name={item.name} isExternal={false} display={linkDisplay} />)}
        </nav>
    );
}
