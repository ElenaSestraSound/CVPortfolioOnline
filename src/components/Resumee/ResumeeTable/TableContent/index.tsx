import { TableContentDetail } from '@/lib/types';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import TableContentDetailComponent from './TableContentDetail/TableContentDetail';

export interface ITableContentProps {
    details: TableContentDetail[]
}

export default function TableContent({ details }: ITableContentProps) {
    return (
        <Box p={5}>
            {details.map(item => <TableContentDetailComponent key={item.date} title={item.title} description={item.description} date={item.date} place={item.place} />)}
        </Box>
    );
}
