import { Box, Link } from '@chakra-ui/react';
import * as React from 'react';

export interface IMenuItemProps {
    name: string
}

export default function MenuItem(props: IMenuItemProps) {
    return (
        <Box display='inline-block'>
            <Link fontWeight={600} fontSize='xl' color='brand.darkText' href={`#${props.name}`}>{props.name}</Link>
        </Box>
    );
}
