import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react';
import EducationIcon from '@/assets/Resumee/education.svg'
import * as React from 'react';
import * as styles from './styles'
import TableContent from './TableContent';
import { Jobs } from './Jobs';

export default function ResumeeTable() {
    return (
        <Box backgroundColor='brand.backgroundSecondary' color='brand.textPrimary' borderRadius='30px' css={styles.resumeeTable} maxW='900px' margin='0 auto'>
            <Tabs isFitted>
                <TabList mb='1em'>
                    <Tab
                        borderRadius='30px 0 0 0;'
                        _selected={{ 'color': 'brand.accent', 'borderColor': 'brand.accent' }}
                        _hover={{ 'color': 'brand.accent' }}
                    ><Text fontSize='2xl' fontWeight={600}>Work History</Text></Tab>
                    <Tab
                        borderRadius='0 30px 0 0;'
                        _selected={{ 'color': 'brand.accent', 'borderColor': 'brand.accent' }}
                        _hover={{ 'color': 'brand.accent' }}
                    ><Text fontSize='2xl' fontWeight={600}>Studies</Text> </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TableContent details={Jobs}></TableContent>
                    </TabPanel>
                    <TabPanel>
                        <TableContent details={Jobs}></TableContent>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
