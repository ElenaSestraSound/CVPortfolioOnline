import { Box, Flex, Heading } from '@chakra-ui/react';
import { SerializedStyles } from '@emotion/react';
import * as React from 'react';

export interface ISectionProps {
    css?: SerializedStyles,
    id?: string
    bg?: string
    children: React.ReactNode
}

export default function Section(props: ISectionProps) {
    return (
        <Box p={4} bg={props.bg} css={props.css} id={props.id}>
            <Flex margin='0 auto' maxW={1240}>
                {props.children}
            </Flex>
        </Box>
    );
}
