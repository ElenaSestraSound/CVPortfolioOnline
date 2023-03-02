import useViewport from '@/hooks/use-viewport';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Heading from '../DesignSystem/Heading';
import ProgressCircle from '../DesignSystem/ProgressCircle';
import Section from '../DesignSystem/Section';
import { SkillsDetails } from './Skills';

const Skills = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    return (
        <Section bg='brand.backgroundPrimary' id='skills' ref={ref}>
            <Box w='100%' maxW='700px' m='0 auto' pt={100}>
                <Heading as='h2' size='xl' color='brand.textTerciary' separatorColor='brand.textTerciary' textAlign='center' mb='30px'>Skills</Heading>
                <Box p='40px' textAlign='center'>
                    {SkillsDetails.map(skill => <ProgressCircle key={skill.name} value={skill.value} name={skill.name}>{skill.icon}</ProgressCircle>)}
                </Box>
            </Box>
        </Section>
    );
}

export default Skills
