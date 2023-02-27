import * as React from 'react';
import PrimaryLink from '../Links/PrimaryLink';
import { NavMenuItems } from './NavMenuItems'

export interface INavMenuProps {
    linkDisplay?: string
}

export default function NavMenu({ linkDisplay = 'inline-block' }: INavMenuProps) {
    return (
        <nav>
            {NavMenuItems.map(item => <PrimaryLink key={item.id} to={item.id} isExternal={false} display={linkDisplay}>{item.name}</PrimaryLink>)}
        </nav>
    );
}
