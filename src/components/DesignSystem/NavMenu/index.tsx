import * as React from 'react';
import PrimaryLink from '../Links/PrimaryLink';
import NavMenuItem from './NavMenuItem';
import { NavMenuItems } from './NavMenuItems'

export interface INavMenuProps {
    linkDisplay?: string
    onClick?: React.MouseEventHandler
}

export default function NavMenu({ linkDisplay = 'inline-block', onClick }: INavMenuProps) {
    return (
        <nav>
            {NavMenuItems.map(item => <NavMenuItem
                key={item.to}
                to={item.to}
                display={linkDisplay}
                onClick={onClick}>{item.name}
            </NavMenuItem>)}
        </nav>
    );
}
