import React from 'react';
import Fab from '@mui/material/Fab';
import MiniDrawer from "../MiniDrawer";
import AddIcon from '@mui/icons-material/Add';
import { useStyle } from './tasksPage.css';
import { Box, Modal } from "@mui/material";
import Form from "./Form";
import Board from "./Board";
import { useTasksPage } from "../../Talons/TasksPage/useTasksPage";

const TasksPage = () => {
    const classes = useStyle();
    const {
        open,
        reload,
        handleOpen,
        handleClose,
        handleChangeReload
    } = useTasksPage();

    return (
        <div>
            <MiniDrawer>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <Board
                            reload={reload}
                        />
                    </div>
                </div>
            </MiniDrawer>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box  className={classes.modal}>
                        <Form
                            handleClose={handleClose}
                            handleChangeReload={handleChangeReload}
                        />
                    </Box>
                </Modal>
            </div>
            <div className={classes.button}>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={handleOpen}
                >
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}

export default TasksPage;
