import { RootState } from '@/store';
import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavMenu from '../NavMenu';
import { navigationActions } from '@/store/navigation-slice';

export default function DrawerMenu() {
    const dispatch = useDispatch()
    const isDrawerOpen = useSelector((state: RootState) => state.navigation.isDrawerOpen)
    const drawerCloseHandler = () => {
        dispatch(navigationActions.toggle())
    }
    return (
        <>
            <Drawer
                isOpen={isDrawerOpen}
                placement='top'
                onClose={drawerCloseHandler}
            >
                <DrawerOverlay onClick={drawerCloseHandler} zIndex='1300' />
                <DrawerContent bgColor='brand.backgroundPrimary' p='20px' pt='75px'>
                    <NavMenu linkDisplay='block' onLinkClick={drawerCloseHandler} />
                </DrawerContent>
            </Drawer>
        </>
    );
}
