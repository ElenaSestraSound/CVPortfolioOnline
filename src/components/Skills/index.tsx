import { Box, Flex, Grid, Heading, SimpleGrid, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import ProgressCircle from '../DesignSystem/ProgressCircle';
import Section from '../DesignSystem/Section';
import { SkillsDetails } from './Skills';

export interface ISkillsProps {
}

export default function Skills(props: ISkillsProps) {
    return (
        <Section bg='brand.backgroundPrimary' id='skills'>
            <Box w='100%' maxW='700px' m='0 auto' pt={100}>
                <Heading as='h2' size='xl' color='brand.textTerciary' w='100%' textAlign='center'>Skills</Heading>
                <Box p='40px' textAlign='center'>
                    {SkillsDetails.map(skill => <ProgressCircle value={skill.value} name={skill.name}>{skill.icon}</ProgressCircle>)}
                </Box>
            </Box>
        </Section>
    );
}
