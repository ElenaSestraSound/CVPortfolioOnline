import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import TableContent from './TableContent';
import { Jobs, Studies } from './TableContentData';
import TerciaryLink from '@/components/DesignSystem/Links/TerciaryLink';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function ResumeeTable() {
    return (
        <Box css={styles.resumeeTable} maxW='900px' margin='0 auto'>
            <Box backgroundColor='brand.backgroundTerciary' color='brand.textPrimary' borderRadius='30px'>
                <Tabs isFitted boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)' borderRadius='30px'>
                    <TabList mb='1em'>
                        <Tab
                            borderRadius='30px 0 0 0;'
                            _selected={{ 'color': 'brand.accent', 'borderColor': 'brand.accent' }}
                            _hover={{ 'color': 'brand.accent' }}
                        ><Text fontSize='lg' fontWeight={600}>Work History</Text></Tab>
                        <Tab
                            borderRadius='0 30px 0 0;'
                            _selected={{ 'color': 'brand.accent', 'borderColor': 'brand.accent' }}
                            _hover={{ 'color': 'brand.accent' }}
                        ><Text fontSize='lg' fontWeight={600}>Studies</Text> </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContent details={Jobs}></TableContent>
                        </TabPanel>
                        <TabPanel>
                            <TableContent details={Studies}></TableContent>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box ml='36px' mt='20px'>
                <TerciaryLink to=' /downloads/CV2023.pdf' isExternal={true}>Download CV Here<ChevronRightIcon /></TerciaryLink>
            </Box>
        </Box>
    );
}
