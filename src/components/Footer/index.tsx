import * as React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { NavMenuItems } from '../DesignSystem/NavMenu/NavMenuItems';
import FooterLinkBox from './FooterLinkBox';
import { externalLinks } from './FooterLinkBox/ExternalLinks';
import * as styles from './styles';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import { logos } from '@/utils/CommonUtils/logos';

export default function Footer () {
  return (
    <Box bg='brand.backgroundPrimary' p='40px' >
      <Flex css={styles.footer} maxW='1240px' m='0 auto' p='5px'>
        <Box display='inline-block' maxW='200px' m='0 auto'>
          <Image src={logo} alt={''} />
        </Box>
        <Spacer />
        <Box display='inline-block' css={styles.footerLinkBox}>
          <FooterLinkBox items={NavMenuItems} />
          <FooterLinkBox items={externalLinks} isExternal />
        </Box>
        <Spacer />
        <Box display='inline-block' css={styles.tecnologiesBox}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              {logos.Next}
            </Box>
            <Box>
              {logos.Redux}
            </Box>
            <Box>
              {logos.ChakraUi}
            </Box>
          </Flex>
          <Text fontSize='lg' fontWeight={600} color='brand.textTerciary' p='5px'>Copyright © 2023 Elena Bañón </Text>
        </Box>
      </Flex>
    </Box >
  );
}
