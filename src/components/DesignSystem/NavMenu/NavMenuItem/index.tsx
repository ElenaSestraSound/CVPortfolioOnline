import { RootState } from '@/store';
import { navigationActions } from '@/store/navigation-slice';
import { Link } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css'

import { useDispatch, useSelector } from 'react-redux';

export interface INavMenuItemProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    to: string,
    display?: string,
    children: React.ReactNode,
}

export default function NavMenuItem({ to, children, display }: INavMenuItemProps) {
    const [className, setClassName] = useState('')
    const activeSection = useSelector((state: RootState) => state.navigation.activeSection)
    const dispatch = useDispatch()

    useEffect(() => {
        if (to === activeSection) {
            setClassName(styles.active)
        } else {
            setClassName('')
        }
    }, [activeSection, to, className])

    const navItemOnClickHandler = () => {
        dispatch(navigationActions.setActiveSection(to))
    }

    return (
        <Link mr='5px' p='5px' display={display} className={className}
            onClick={navItemOnClickHandler}
            fontWeight={600}
            fontSize='xl'
            color='brand.textTerciary'
            href={`#${to}`}>
            {children}
        </Link>
    );
}