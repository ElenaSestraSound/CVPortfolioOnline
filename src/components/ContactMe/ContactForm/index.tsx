import * as React from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Textarea, } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FormEvent } from 'react';
import useInput from '@/hooks/use-input';
import { validateEmail, validateText } from './validation';


export default function ContactForm() {
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        onChangeHandler: onNameChangeHandler,
        onBlurHandler: onNameBlurHandler,
        reset: nameReset
    } = useInput(validateText)

    const {
        value: messageValue,
        isValid: messageIsValid,
        hasError: messageHasError,
        onChangeHandler: onMessageChangeHandler,
        onBlurHandler: onMessageBlurHandler,
        reset: messageReset
    } = useInput(validateText)

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        onChangeHandler: onEmailChangeHandler,
        onBlurHandler: onEmailBlurHandler,
        reset: emailReset
    } = useInput(validateEmail)

    const formIsValid = nameIsValid && emailIsValid && messageIsValid

    const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formIsValid) {
            console.log('Sending form...')
        }
    }
    return (
        <form onSubmit={onSubmitFormHandler} >
            <FormControl color='brand.textTerciary' isRequired>
                <Box mb='15px'>
                    <FormLabel>Your Name</FormLabel>
                    <Input type='text'
                        backgroundColor='brand.backgroundTerciary'
                        color='brand.textPrimary'
                        value={nameValue}
                        isInvalid={nameHasError}
                        focusBorderColor={nameHasError ? 'red.500' : 'green.400'}
                        onBlur={onNameBlurHandler}
                        onChange={onNameChangeHandler} />
                </Box>
                <Box mb='15px'>
                    <FormLabel>Your Email</FormLabel>
                    <Input type='email'
                        backgroundColor='brand.backgroundTerciary'
                        color='brand.textPrimary'
                        value={emailValue}
                        isInvalid={emailHasError}
                        focusBorderColor={emailHasError ? 'red.500' : 'green.500'}
                        onBlur={onEmailBlurHandler}
                        onChange={onEmailChangeHandler} />
                </Box>
                <Box mb='15px'>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea
                        value={messageValue}
                        isInvalid={messageHasError}
                        focusBorderColor={messageHasError ? 'red.500' : 'green.400'}
                        onBlur={onMessageBlurHandler}
                        onChange={onMessageChangeHandler}
                        placeholder='Type your message here'
                        size='sm'
                        backgroundColor='brand.backgroundTerciary'
                        color='brand.textPrimary'
                    />
                </Box>
                <Box w='100%' textAlign='right'>
                    <Button rightIcon={<EmailIcon />}
                        _hover={{ 'color': 'brand.textPrimary', 'backgroundColor': 'brand.backgroundSecondary' }}
                        borderRadius='full'
                        bg='brand.accent'
                        color='brand.textTerciary'
                        type='submit'>
                        Send
                    </Button>
                </Box>
            </FormControl>
        </form>
    );
}
