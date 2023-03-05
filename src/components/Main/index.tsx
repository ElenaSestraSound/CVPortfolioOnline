import { Box, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import EBLogo from '@/assets/logo/300/LogoWhite.svg'
import Section from '../DesignSystem/Section';
import useViewport from '@/hooks/use-viewport';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png'

const Main = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    useViewport(ref)
    return (
        <Section bg='brand.backgroundPrimary' id='home' ref={ref}>
            <Box css={styles.profile}>
                <Box css={styles.profileDetails}>
                    <Text fontSize='3xl' as='b' color='brand.textTerciary'>Hello, I'm <Text color='brand.accent'>Elena</Text></Text>
                    <br />
                    <TypeAnimation sequence={[
                        'Full Stack developer 💪', 1500,
                        'React Geek 🤓', 1500,
                        'Tech blogger 💻', 1500,
                        '🎮 🤘 🏋️ 🎸 📹', 1500,
                    ]}
                        wrapper='p'
                        repeat={Infinity}
                    />
                    <Box>
                        <Button
                            _hover={{ 'color': 'brand.textPrimary', 'backgroundColor': 'brand.backgroundSecondary' }}
                            size={['md', 'lg']}
                            bg='brand.buttonSecondary'
                            color='brand.textTerciary'
                            border='2px'
                            borderColor='brand.textTerciary'
                            as='a'
                            href='#contact-me'
                            borderRadius='full'
                            mr={5}
                        >Hire Me</Button>
                        <Button
                            _hover={{ 'color': 'brand.textPrimary', 'backgroundColor': 'brand.backgroundSecondary' }}
                            borderRadius='full'
                            bg='brand.accent'
                            color='brand.textTerciary'
                            size={['md', 'lg']}>
                            Get CV
                        </Button>
                    </Box>
                </Box>
                <Box css={styles.profileLogo}>
                    <Image src={logo} alt={''} />
                </Box>
            </Box>
        </Section >
    );
}

export default Main