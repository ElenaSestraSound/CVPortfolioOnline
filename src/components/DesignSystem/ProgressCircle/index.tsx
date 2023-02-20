import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export interface IProgressCircleProps {
    value: number
    children: React.ReactNode
}

export default function ProgressCircle({ children, value }: IProgressCircleProps) {
    return (
        <Box w={150} h={150} display='inline-block' mr={15} ml={15} mb={30}>
            <CircularProgressbarWithChildren
                value={value}
                styles={{
                    // Customize the root svg element
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
            </CircularProgressbarWithChildren>
        </Box>
    );
}
