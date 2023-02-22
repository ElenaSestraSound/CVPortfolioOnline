import * as React from 'react';
import EBLogo from '@/assets/logo/150/LogoWhite.svg'
import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from '@chakra-ui/react';
import NavMenu from '../DesignSystem/NavMenu';
import ExternalLinkBox from './ExternalLinkBox';
import { externalLinks } from './ExternalLinkBox/ExternalLinks';
import * as styles from './styles'

import NextLogo from '@/assets/tecnologies/#FFF/next.svg'
import ReduxLogo from '@/assets/tecnologies/#FFF/redux.svg'
import ChakraLogo from '@/assets/tecnologies/#FFF/chakra.svg'


export default function Footer() {
    return (
        <Box bg='brand.backgroundPrimary' p='40px' >
            <Flex css={styles.footer}>
                <Box display='inline-block'>
                    <EBLogo />
                </Box>
                <Spacer />
                <Box display='inline-block' css={styles.footerLinkBox}>
                    <NavMenu linkDisplay='block' />
                    <ExternalLinkBox items={externalLinks} />
                </Box>
                <Spacer />
                <Box display='inline-block' >
                    <Box >
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
                    <Text fontSize='lg' fontWeight={600} color='brand.textTerciary' p='5px'>Copyright © 2023 Elena Bañón </Text>
                </Box>
            </Flex>
        </Box >
    );
}
