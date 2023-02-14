import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import * as React from 'react';
import MenuItem from './MenuItem';
import classes from './NaveMenu.module.css'

export interface INavMenuProps {
    items: string[]
}

export default function NavMenu(props: INavMenuProps) {
    return (
        <nav className={classes.nav}>
            {props.items.map(item => <MenuItem name={item} />)}
        </nav>
    );
}
