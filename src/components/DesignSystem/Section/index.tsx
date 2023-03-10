import { Box, Flex } from '@chakra-ui/react';
import { SerializedStyles } from '@emotion/react';
import * as React from 'react';

export interface ISectionProps {
    css?: SerializedStyles,
    id?: string
    bg?: string
    children: React.ReactNode
}

const Section = React.forwardRef((props: ISectionProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <Box p={4} bg={props.bg} css={props.css} id={props.id} ref={ref}>
            <Flex margin='0 auto' maxW={1240}>
                {props.children}
            </Flex>
        </Box>
    );
})

Section.displayName = 'Section'
export default Section