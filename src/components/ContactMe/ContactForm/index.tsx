import * as React from 'react';
import { Box, FormControl, FormLabel, Heading, Input, Textarea, } from '@chakra-ui/react';

export interface IContactFormProps {
}

export default function ContactForm(props: IContactFormProps) {
    //Implement form functionality with hooks
    return (
        <FormControl color='brand.textTerciary'>
            <Box mb='15px'>
                <FormLabel>Your Name</FormLabel>
                <Input type='text' backgroundColor='brand.backgroundTerciary' />
            </Box>
            <Box mb='15px'>
                <FormLabel>Your Email</FormLabel>
                <Input type='email' backgroundColor='brand.backgroundTerciary' />
            </Box>
            <Box mb='15px'>
                <FormLabel>Your Message</FormLabel>
                <Textarea
                    // value={value}
                    // onChange={handleInputChange}
                    placeholder='Type your message here'
                    size='sm'
                    backgroundColor='brand.backgroundTerciary'
                />
            </Box>
        </FormControl>
    );
}
