import PrimaryLink from '@/components/DesignSystem/Links/PrimaryLink';
import { ExternalLinkItem } from '@/lib/types';
import { ListItem, UnorderedList } from '@chakra-ui/react';
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
                    <PrimaryLink to={item.url} isExternal={true}>{item.name}</PrimaryLink>
                </ListItem>)}
        </UnorderedList>
    );
}
