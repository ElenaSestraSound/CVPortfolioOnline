import { Link } from '@chakra-ui/react';
import * as React from 'react';
import PrimaryLink from '@/components/DesignSystem/PrimaryLink';
import { NavMenuItems } from '@/components/DesignSystem/NavMenu/NavMenuItems'

export default function FooterMenu() {
    return (
        <nav>
            {NavMenuItems.map(item => <PrimaryLink key={item.id} id={item.id} name={item.name} isExternal={false} display='block' />)}
        </nav>
    );
}