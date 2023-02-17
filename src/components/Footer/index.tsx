import * as React from 'react';
import { colors } from '@/pages/_app';
import EBLogo from '@/assets/logo/150/LogoWhite.svg'
import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from '@chakra-ui/react';
import NavMenu from '../DesignSystem/NavMenu';
import ExternalLinkBox from './ExternalLinkBox';
import { externalLinks } from './ExternalLinkBox/ExternalLinks';
sdfsdf

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <Box bg={colors.brand.darkBg} p='40px'>
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
                    <Box >
                        Icons Icons
                    </Box>
                    <Spacer />
                    <Text fontSize='lg' fontWeight={600} color={colors.brand.darkText} p='5px'>Copyright © 2023 Elena Bañón </Text>
                </GridItem>
            </Grid >
        </Box >
    );
}
