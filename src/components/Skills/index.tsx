import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Heading, SimpleGrid, Spacer } from '@chakra-ui/react';
import * as React from 'react'; import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ProgressCircle from '../DesignSystem/ProgressCircle';
import Section from '../DesignSystem/Section';
import ReactLogo from '@/assets/tecnologies/react.svg'
import ReduxLogo from '@/assets/tecnologies/redux.svg'
import JSLogo from '@/assets/tecnologies/js.svg'
import TYSLogo from '@/assets/tecnologies/tys.svg'
import NextLogo from '@/assets/tecnologies/next.svg'
import CSSLogo from '@/assets/tecnologies/css3.svg'

export interface ISkillsProps {
}

export default function Skills(props: ISkillsProps) {
    return (
        <Section bg='brand.backgroundPrimary' id='skills'>
            <Box w='100%' maxW='700px' m='0 auto'>
                <Heading as='h2' size='xl' color='brand.textTerciary' w='100%' textAlign='center'>Skills</Heading>
                <Box p='40px'>
                    <Flex mb='30px'>
                        <ProgressCircle value={80}>
                            <ReactLogo />
                        </ProgressCircle>
                        <Spacer />
                        <ProgressCircle value={60}>
                            <ReduxLogo />
                        </ProgressCircle>
                        <Spacer />
                        <ProgressCircle value={90}>
                            <JSLogo />
                        </ProgressCircle>
                    </Flex>
                    <Flex>
                        <ProgressCircle value={70}>
                            <TYSLogo />
                        </ProgressCircle>
                        <Spacer />
                        <ProgressCircle value={60}>
                            <NextLogo />
                        </ProgressCircle>
                        <Spacer />
                        <ProgressCircle value={95}>
                            <CSSLogo />
                        </ProgressCircle>
                    </Flex>
                </Box>

            </Box>
        </Section>
    );
}
