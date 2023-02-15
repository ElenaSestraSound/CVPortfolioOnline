import { Box, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

export interface ISectionProps {
    class?: string,
    bg?: string
    children: React.ReactNode
}

export default function Section(props: ISectionProps) {
    return (
        <Box p={4} bg={props.bg} className={props.class}>
            <Flex margin='0 auto' maxW={1240}>
                {props.children}
            </Flex>
        </Box>
    );
}
