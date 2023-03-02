import * as React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { NavMenuItems } from '../DesignSystem/NavMenu/NavMenuItems';
import FooterLinkBox from './FooterLinkBox';
import { externalLinks } from './FooterLinkBox/ExternalLinks';
import * as styles from './styles'

import EBLogo from '@/assets/logo/150/LogoWhite.svg'
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
                    <FooterLinkBox items={NavMenuItems} />
                    <FooterLinkBox items={externalLinks} isExternal />
                </Box>
                <Spacer />
                <Box display='inline-block' css={styles.tecnologiesBox}>
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
