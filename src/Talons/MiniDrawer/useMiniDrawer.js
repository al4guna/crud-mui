import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DATA_MENU = [
    {
        label: 'Home',
        icon: <HomeIcon />,
        path: '/home'
    },
    {
        label: 'Tareas',
        icon: <TaskIcon />,
        path: '/tareas'
    },
    {
        label: 'Cerrar Sesión',
        icon: <PeopleIcon />,
        path: '/'
    }
];

export const useMiniDrawer = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleRediref = (url) => {
        history.push(url);
    }


    return {
        open,
        data: DATA_MENU,
        handleRediref,
        handleDrawerOpen,
        handleDrawerClose,
    }
}
