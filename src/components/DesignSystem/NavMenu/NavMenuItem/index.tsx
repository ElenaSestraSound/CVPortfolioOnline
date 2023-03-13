import { RootState } from '@/store';
import { Link } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css'

import { useSelector } from 'react-redux';

export interface INavMenuItemProps {
    onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
    to: string,
    display?: string,
    children: React.ReactNode,
}

export default function NavMenuItem({ to, children, display, onLinkClick }: INavMenuItemProps) {
    const [className, setClassName] = useState('')
    const activeSection = useSelector((state: RootState) => state.navigation.activeSection)

    useEffect(() => {
        if (to === activeSection) {
            setClassName(styles.active)
        } else {
            setClassName('')
        }
    }, [activeSection, to, className])

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onLinkClick) {
            e.preventDefault()
            onLinkClick(e)
            setTimeout(() => {
                let section = document.getElementById(to)
                section?.scrollIntoView()
            }, 120)
        }
    }

    return (
        <Link mr='5px' p='5px' display={display} className={className} onClick={onClickHandler}
            fontWeight={600}
            fontSize='xl'
            color='brand.textTerciary'
            href={`#${to}`}
        >
            {children}
        </Link>
    );
}