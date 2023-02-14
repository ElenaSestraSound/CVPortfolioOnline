import { Box, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

export interface ISectionProps {
    title?: string,
    subtitle?: string,
    backgroundColor?: string
    children: React.ReactNode
}

export default function Section(props: ISectionProps) {
    return (
        <Box p={4} backgroundColor={props.backgroundColor}>
            <Flex margin='0 auto' maxW={1240}>
                {props.title && <Heading as='h2'>{props.title}</Heading>}
                {props.children}
            </Flex>
        </Box>
    );
}
