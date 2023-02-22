import { Box, Flex, Heading, Spacer, Tag, TagLabel, Text } from '@chakra-ui/react';
import * as React from 'react';
import { TableContentDetail } from '@/lib/types';

export default function TableContentDetailComponent({ title, description, date, place }: TableContentDetail) {
    return (
        <Box p='10px' mb='20px'>
            <Flex>
                <Heading as='h3' size='md' mr='30px' mb='10px'>{title}</Heading>
                <Tag
                    h='min-content'
                    pt='4px'
                    pb='3px'
                    borderRadius='full'
                    size='sm'
                    variant='solid'
                    color='brand.textTerciary'
                    backgroundColor='brand.accent'
                    mb='10px'
                >
                    <TagLabel>{date}</TagLabel>
                </Tag>
            </Flex>
            <Heading as='h4' size='sm' color='brand.accent'>{place}</Heading>
            {description && <Text color='brand.textSecondary' >{description}</Text>}

        </Box>
    );
}
