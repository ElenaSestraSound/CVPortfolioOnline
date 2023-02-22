import { Box, Heading as HeadingChakra, ResponsiveValue } from '@chakra-ui/react';
import * as React from 'react';
import HeadingSeparator from './HeadingSeparator';

export interface IHeadingProps {
    as?: any | undefined,
    size?: string,
    color?: string,
    textAlign?: any,
    mb?: string
    separatorColor: string,
    children: React.ReactNode
}

export default function Heading({
    as,
    size,
    color,
    textAlign = 'right',
    mb,
    separatorColor,
    children }: IHeadingProps) {
    return (
        <Box mb={mb}>
            <HeadingChakra mb='20px' as={as} size={size} color={color} textAlign={textAlign} >{children}</HeadingChakra>
            <Box w='fit-content' m='0 auto'>
                <HeadingSeparator bgColor={separatorColor} />
            </Box>
        </Box>
    );
}
