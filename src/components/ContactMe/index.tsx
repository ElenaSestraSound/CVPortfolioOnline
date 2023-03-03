import useViewport from '@/hooks/use-viewport';
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Heading from '../DesignSystem/Heading';
import Section from '../DesignSystem/Section';
import ContactForm from './ContactForm';

const ContactMe = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    return (
        <Section id='contact-me' bg='brand.backgroundSecondary' ref={ref}>
            <Box w='100%' pt='150px' pb='150px'>
                <Heading as='h2' size='xl' color='brand.textPrimary' textAlign='center' mb='30px' separatorColor='brand.textPrimary'>Contact Me</Heading>
                <Box maxW={700} m='0 auto' backgroundColor='brand.backgroundPrimary' borderRadius='30px' p='30px'>
                    <ContactForm />
                </Box>
            </Box>
        </Section>
    );
}

export default ContactMe