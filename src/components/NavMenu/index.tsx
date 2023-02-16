import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import * as React from 'react';
import MenuItem from './MenuItem';
import { NavMenuItems } from './NavMenuItems'


export default function NavMenu() {
    return (
        <nav>
            {NavMenuItems.map(item =>
                <MenuItem name={item.name} id={item.id} />)}
        </nav>
    );
}
