import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Heading from '@/components/DesignSystem/Heading';
import * as styles from './styles'
import Project from './Project';
import { ProjectList } from './ProjectList';
import useViewport from '@/hooks/use-viewport';


const Projects = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    let isThisProject = false
    return (
        <Box id='projects' ref={ref}>
            <Box bg='brand.backgroundPrimary' pt='170px'>
                <Box margin='0 auto' maxW={1240} pb='20px' h={280} />
            </Box>
            <Box bg='brand.backgroundSecondary'>
                <Box margin='0 auto' maxW={1240} w='100%' css={styles.cardBox} h={380}>
                    <Heading as='h2' size='xl' color='brand.textTerciary' separatorColor='brand.textTerciary' textAlign='center' mb='30px' >Projects</Heading>
                    <Box w='fit-content' m='0 auto' css={styles.card}>
                        {ProjectList.map(project => {
                            isThisProject = project.name === ProjectList[0].name ? true : false
                            return <Project key={project.name} project={project} disabledButton={isThisProject}></Project>
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects
