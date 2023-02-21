import { Box, Heading } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import Project from './Project';
import { ProjectList } from './ProjectList';


export default function Projects() {
    return (
        <Box id='projects'>
            <Box bg='brand.backgroundPrimary' pt={100}>
                <Box margin='0 auto' maxW={1240} pb='20px' h={280} />
            </Box>
            <Box bg='brand.backgroundSecondary'>
                <Box margin='0 auto' maxW={1240} w='100%' css={styles.cardBox} h={380}>
                    <Heading as='h2' size='xl' color='brand.textTerciary' m='0 auto' mb='20px' w='fit-content'>Projects</Heading>
                    <Box w='fit-content' m='0 auto' >
                        {ProjectList.map(project => <Project project={project}></Project>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
