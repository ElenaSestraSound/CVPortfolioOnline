import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export interface IProgressCircleProps {
    name: string,
    value: number,
    children: React.ReactNode
}

export default function ProgressCircle({ children, value, name }: IProgressCircleProps) {
    return (
        <Box w={150} h={150} display='inline-block' mr={15} ml={15} mb={15}>
            <CircularProgressbarWithChildren
                value={value}
                styles={{
                    root: {},
                    path: {
                        stroke: `#FA8C0F`,
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.60turn)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: '#fff',
                        strokeLinecap: 'round'
                    },
                    text: {
                        fill: '#fff',
                        fontSize: '16px',
                    }
                }}
            >
                {children}
                <Text color='brand.textTerciary' fontSize='xs' p={1} fontWeight={600}>{name.toUpperCase()}</Text>
            </CircularProgressbarWithChildren>
        </Box >
    );
}
