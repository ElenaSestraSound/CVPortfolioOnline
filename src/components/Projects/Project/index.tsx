import { ProjectDetails } from '@/lib/types';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Box, Heading, Stack, Text, Flex, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import * as React from 'react';
import { v4 as uuid_v4 } from 'uuid'

export interface IProjectProps {
    project: ProjectDetails,
    disabledButton?: boolean
}

export default function Project({ project, disabledButton }: IProjectProps) {
    return (
        <Card maxW='xs' variant='elevated' display='inline-block' ml={15} mr={15}>
            <CardBody>
                <Image src={project.image} alt=''></Image>
                <Stack mt='6' spacing='3' h={120} >
                    <Heading as='h2' size='md' color='brand.textPrimary'>{project.name}</Heading>
                    <Text fontSize='md' fontWeight={600} color='brand.textSecondary'>{project.description}</Text>

                </Stack>
                <Box m='0 auto' w='fit-content'>
                    {project.tecnologies.map(icon =>
                        <Box key={uuid_v4()} display='inline-block'>
                            {icon}
                        </Box>)}
                </Box>
            </CardBody>
            <Divider color='brand.textPrimary' />
            <CardFooter>
                <Box m='0 auto'>
                    <Button
                        isDisabled={disabledButton}
                        _hover={{ 'color': 'brand.textTerciary', 'backgroundColor': 'brand.accent' }}
                        borderRadius='full'
                        bg='brand.textTerciary'
                        border='2px'
                        borderColor='brand.accent'
                        color='brand.accent'
                        as='a'
                        href={project.links[0].to}
                        target='_blank'
                        size={['md']}
                        mr="30px">
                        Check Site
                    </Button>
                    <Button
                        _hover={{ 'color': 'brand.textTerciary', 'backgroundColor': 'brand.backgroundPrimary' }}
                        size={['md']}
                        bg='brand.textTerciary'
                        color='brand.textPrimary'
                        border='2px'
                        borderColor='brand.textPrimary'
                        as='a'
                        href={project.links[1].to}
                        target='_blank'
                        borderRadius='full'
                        alignSelf='end'
                    >Check Code</Button>
                </Box>
            </CardFooter>
        </Card>
    );
}
