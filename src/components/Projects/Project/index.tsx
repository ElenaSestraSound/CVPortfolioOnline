import { ProjectDetails } from '@/lib/types';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Box, Heading, Stack, Text, Flex, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import * as React from 'react';

export interface IProjectProps {
    project: ProjectDetails
}

export default function Project({ project }: IProjectProps) {
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
                        <Box display='inline-block'>
                            {icon}
                        </Box>)}
                </Box>
            </CardBody>
            <Divider color='brand.textPrimary' />
            <CardFooter>
                <Box m='0 auto'>
                    <Button
                        _hover={{ 'color': 'brand.textTerciary', 'backgroundColor': 'brand.accent' }}
                        borderRadius='full'
                        bg='brand.textTerciary'
                        as='a'
                        border='2px'
                        borderColor='brand.accent'
                        color='brand.accent'
                        href={project.links[0].url}
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
                        href={project.links[1].url}
                        borderRadius='full'
                        alignSelf='end'
                    >Check Code</Button>
                </Box>
            </CardFooter>
        </Card>
    );
}