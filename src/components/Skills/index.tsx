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
import { SkillsDetails } from './Skills';

export interface ISkillsProps {
}

export default function Skills(props: ISkillsProps) {
    return (
        <Section bg='brand.backgroundPrimary' id='skills'>
            <Box w='100%' maxW='700px' m='0 auto'>
                <Heading as='h2' size='xl' color='brand.textTerciary' w='100%' textAlign='center'>Skills</Heading>
                <Box p='40px' textAlign='center'>
                    {SkillsDetails.map(skill => <ProgressCircle value={skill.value} name={skill.name}>{skill.icon}</ProgressCircle>)}
                </Box>
            </Box>
        </Section>
    );
}
