import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import * as React from 'react';
import Section from '../DesignSystem/Section';
import ContactForm from './ContactForm';

export interface IContactMeProps {
}

export default function ContactMe(props: IContactMeProps) {
    return (
        <Section id='contact-me' bg='brand.backgroundSecondary'>
            <Box w='100%'>
                <Heading as='h2' size='xl' color='brand.textPrimary' textAlign='center' > Contact Me</Heading>
                <Box maxW={700} m='0 auto' backgroundColor='brand.backgroundPrimary' borderRadius='30px' p='30px'>
                    <ContactForm />
                </Box>
            </Box>
        </Section>
    );
}
