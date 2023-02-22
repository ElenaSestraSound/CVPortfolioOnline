import * as React from 'react';
import EBLogo from '@/assets/logo/150/LogoWhite.svg'
import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from '@chakra-ui/react';
import NavMenu from '../DesignSystem/NavMenu';
import ExternalLinkBox from './ExternalLinkBox';
import { externalLinks } from './ExternalLinkBox/ExternalLinks';

import NextLogo from '@/assets/tecnologies/#FFF/next.svg'
import ReduxLogo from '@/assets/tecnologies/#FFF/redux.svg'
import ChakraLogo from '@/assets/tecnologies/#FFF/chakra.svg'

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <Box bg='brand.backgroundPrimary' p='40px'>
            <Grid
                margin='0 auto'
                maxW={1240}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Center h='100%'>
                        <EBLogo />
                    </Center>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <NavMenu linkDisplay='block' />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} >
                    <ExternalLinkBox items={externalLinks} />
                </GridItem>
                <GridItem colSpan={2} rowSpan={2} display='flex' flexDirection='column' textAlign='center'>
                    <Box>
                        <Box display='inline-block' mr='10px'>
                            <NextLogo />
                        </Box>
                        <Box display='inline-block' ml='10px' mr='10px'>
                            <ReduxLogo />
                        </Box>
                        <Box display='inline-block' ml='10px'>
                            <ChakraLogo />
                        </Box>
                    </Box>
                    <Spacer />
                    <Text fontSize='lg' fontWeight={600} color='brand.textTerciary' p='5px'>Copyright © 2023 Elena Bañón </Text>
                </GridItem>
            </Grid >
        </Box >
    );
}
