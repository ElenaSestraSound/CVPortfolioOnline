
import { Box, Text, Heading } from '@chakra-ui/react';
import * as React from 'react';

export interface IBlogProps {
}

export default function Blog(props: IBlogProps) {
    return (
        <Box mt='100px' textAlign='center'>
            <Heading>Under construction</Heading>
            <Text fontSize='xl' color='brand.textPrimary'> Coming soon...</Text>
        </Box>
    );
}
