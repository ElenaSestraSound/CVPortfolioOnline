import { Box } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IHeadingSeparatorProps {
    bgColor: string
}

export default function HeadingSeparator({ bgColor }: IHeadingSeparatorProps) {
    return (
        <Box css={styles.headingSeparator} >
            <Box css={styles.separatorLine} bgColor={bgColor}>
                <Box css={styles.separatorBlob}>
                    <div></div>
                </Box>
            </Box>
        </Box>
    );
}
