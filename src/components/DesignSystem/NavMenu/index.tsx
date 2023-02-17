import { Link } from '@chakra-ui/react';
import * as React from 'react';
import PrimaryLink from '../PrimaryLink';
import { NavMenuItems } from './NavMenuItems'

export default function NavMenu() {
    return (
        <nav>
            {NavMenuItems.map(item => <PrimaryLink key={item.id} id={item.id} name={item.name} isExternal={false} display='inline-block' />)}
        </nav>
    );
}
