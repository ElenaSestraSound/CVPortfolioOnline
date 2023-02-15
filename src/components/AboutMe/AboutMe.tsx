import { Heading, Text, Box, Flex, Center } from '@chakra-ui/react';
import * as React from 'react';
import Section from '../Layout/Section';
import classes from './AboutMe.module.css'
import Image from 'next/image';
import pic from '@/assets/rocketEmail.png'


export default function AboutMe() {
    return (
        <Section bg='brand.lightBg' id='About Me'>
            <Flex className={classes['aboutme-container']}>
                <Box className={classes['details-box']}>
                    <Heading as='h2' size='xl' color='brand.lightText1'>
                        A little bit about me
                    </Heading>
                    <Text fontSize='2xl' fontWeight={600} color='brand.lightText2'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Proin pulvinar, arcu eget sollicitudin auctor,
                        neque orci pellentesque tortor, eget euismod libero ipsum sit amet eros.
                        Aliquam elementum, ex quis faucibus finibus, nunc nibh consectetur mi,
                        sed blandit nulla dolor nec arcu. Aenean purus nunc, ornare ut sapien sed,
                        accumsan gravida dolor. Duis eleifend placerat magna ut feugiat. Nulla ac lorem dolor.
                        Cras lacinia sit amet est ut accumsan. Pellentesque est augue, consequat non tortor porttitor,
                        pellentesque rhoncus justo. Curabitur quis gravida lectus, et convallis lectus.
                        Donec et tincidunt felis, a malesuada augue. Nulla velit mauris,
                        ultricies ut tempor et, semper ac lacus. Sed congue turpis vel ipsum tempor,
                        eget ornare quam imperdiet. Phasellus consequat mi eu dignissim fermentum.
                        Nullam non lacus blandit, luctus lorem et, ornare risus.
                    </Text>
                </Box>
                <Center className={classes['image-box']}>
                    <Image
                        src={pic}
                        alt="Picture of the author"
                    />
                </Center>
            </Flex>

        </Section>
    );
}
