import useViewport from '@/hooks/use-viewport';
import { Box, Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import Heading from '../DesignSystem/Heading';
import ProgressCircle from '../DesignSystem/ProgressCircle';
import Section from '../DesignSystem/Section';
import { BackendSkillsDetails, FrontendSkillsDetails } from './Skills';
import { icon, skills } from './styles';

const Skills = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  useViewport(ref);
  return (
    <Section bg='brand.backgroundPrimary' id='skills' ref={ref}>
      <Box w='100%' maxW='700px' m='0 auto' pt='150px'>
        <Heading as='h2' size='xl' color='brand.textTerciary' separatorColor='brand.textTerciary' textAlign='center' mb='30px'>Skills</Heading>
        <Flex css={skills} p='40px' justifyContent='space-between'>
          <Box>
            {FrontendSkillsDetails.map(skill => <Flex alignItems='center' mb={5}>
              <Box css={icon} mr={2}>{skill.icon}</Box>
              <Text color='brand.textTerciary' fontSize={['xs', 'md']} p={1} fontWeight={600}>{skill.name.toUpperCase()}</Text>
            </Flex>)}
          </Box>
          <Box>
            {BackendSkillsDetails.map(skill => <Flex alignItems='center' mb={5}>
              <Box css={icon} mr={2}>{skill.icon}</Box>
              <Text color='brand.textTerciary' fontSize={['xs', 'md']} p={1} fontWeight={600}>{skill.name.toUpperCase()}</Text>
            </Flex>)}
          </Box>
        </Flex>
      </Box>
    </Section>
  );
};

export default Skills;
