import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

export interface IMenuItemProps {
    name: string
}

export default function MenuItem(props: IMenuItemProps) {
    return (
        <Box display='inline-block'>
            <Text as='b' fontSize='xl'>{props.name}</Text>
        </Box>
    );
}
