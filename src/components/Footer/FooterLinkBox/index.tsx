import PrimaryLink from '@/components/DesignSystem/Links/PrimaryLink';
import { LinkItem, NavMenuItem } from '@/lib/types';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import * as React from 'react';

export interface IFooterLinkBoxProps {
    items: LinkItem[] | NavMenuItem[]
    isExternal?: boolean
}

export default function FooterLinkBox({ items, isExternal = false }: IFooterLinkBoxProps) {
    return (
        <UnorderedList>
            {items.map(item =>
                <ListItem listStyleType='none' key={item.name}>
                    <PrimaryLink to={item.to} isExternal={isExternal}>{item.name}</PrimaryLink>
                </ListItem>)}
        </UnorderedList>
    );
}
