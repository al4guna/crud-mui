import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../redux/action/userAction";


const DATA_MENU = [
    {
        label: 'Home',
        icon: <HomeIcon />,
        path: '/home'
    },
    {
        label: 'Tareas',
        icon: <TaskIcon />,
        path: '/tasks'
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
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleRediref = (url) => {
        if(url !== "/") {
            history.push(url);
        }else {
            dispatch(logoutAction());
        }
    }

    return {
        open,
        data: DATA_MENU,
        handleRediref,
        handleDrawerOpen,
        handleDrawerClose,
    }
}
