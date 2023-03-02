import useViewport from '@/hooks/use-viewport';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Heading from '../DesignSystem/Heading';
import ResumeeTable from './ResumeeTable';
import * as styles from './styles'

const Resumee = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    return (
        <Box id='resumee' ref={ref}>
            <Box bg='brand.backgroundSecondary' pb='300px' pt='115px'>
                <Box margin='0 auto' maxW={1240} pb='20px'>
                    <Heading as='h2' size='xl' color='brand.textPrimary' textAlign='center' separatorColor='brand.textPrimary'>Resumee</Heading>
                </Box>
            </Box>
            <Box bg='brand.backgroundPrimary'>
                <Box margin='0 auto' maxW={1240} w='100%' padding='0 20px' css={styles.blackBakground}>
                    <ResumeeTable />
                </Box>
            </Box>
        </Box>
    );
}

export default Resumee
