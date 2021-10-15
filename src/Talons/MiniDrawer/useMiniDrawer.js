import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import React, { useState } from "react";

const DATA_MENU = [
    {
        label: 'Home',
        icon: <HomeIcon />,
        path: '/'
    },
    {
        label: 'Usuarios',
        icon: <PeopleIcon />,
        path: '/usuarios'
    },
    {
        label: 'Cerrar Sesión',
        icon: <PeopleIcon />,
        path: '/'
    }
];

export const useMiniDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return {
        open,
        data: DATA_MENU,
        handleDrawerOpen,
        handleDrawerClose,
    }
}
