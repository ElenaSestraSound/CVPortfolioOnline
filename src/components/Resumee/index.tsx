import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import * as React from 'react';
import Section from '../DesignSystem/Section';
import ResumeeTable from './ResumeeTable';

export interface IResumeeProps {
}

export default function Resumee(props: IResumeeProps) {
    return (
        <Box id='resume'>
            <Box bg='brand.backgroundSecondary' pb='300px' pt='115px'>
                <Box margin='0 auto' maxW={1240} pb='20px'>
                    <Heading as='h2' size='xl' color='brand.textPrimary' w='100%' textAlign='center'>Resumee</Heading>
                </Box>
            </Box>
            <Box bg='brand.backgroundPrimary'>
                <Box margin='0 auto' maxW={1240} w='100%' padding='0 20px'>
                    <ResumeeTable />
                </Box>
            </Box>
        </Box>
    );
}
