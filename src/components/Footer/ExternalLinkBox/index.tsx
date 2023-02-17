import PrimaryLink from '@/components/DesignSystem/PrimaryLink';
import { ExternalLinkItem } from '@/lib/types';
import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IExternalLinkBoxProps {
    items: ExternalLinkItem[]
}

export default function ExternalLinkBox({ items }: IExternalLinkBoxProps) {
    return (
        <UnorderedList>
            {items.map(item =>
                <ListItem listStyleType='none' key={item.name}>
                    <PrimaryLink id={item.url} name={item.name} isExternal={true} />
                </ListItem>)}
        </UnorderedList>
    );
}
