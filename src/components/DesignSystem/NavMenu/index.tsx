import * as React from 'react';
import PrimaryLink from '../Links/PrimaryLink';
import NavMenuItem from './NavMenuItem';
import { NavMenuItems } from './NavMenuItems'

export interface INavMenuProps {
    linkDisplay?: string
    onLinkClick?: React.MouseEventHandler
}

export default function NavMenu({ linkDisplay = 'inline-block', onLinkClick }: INavMenuProps) {
    return (
        <nav>
            {NavMenuItems.map(item => <NavMenuItem
                key={item.to}
                to={item.to}
                display={linkDisplay}
                onLinkClick={onLinkClick}>{item.name}
            </NavMenuItem>)}
        </nav>
    );
}
