import { Box, Flex, Image } from '@chakra-ui/react';
import * as React from 'react';
import EBLogo from '@/assets/logo/logo.svg'

export interface IHeaderMenuProps {
}
export default function HeaderMenu(props: IHeaderMenuProps) {
    return (
        <Flex>
            <Box>
                <EBLogo />
            </Box>
        </Flex>
    );
}
