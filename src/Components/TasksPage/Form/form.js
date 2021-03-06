import React from 'react';
import {
    Button,
    Select,
    MenuItem,
    TextField,
    FormControl, Typography, Autocomplete,
} from "@mui/material";
import { useStyle } from './form.css';
import Fab from "@mui/material/Fab";
import DeleteIcon from '@mui/icons-material/Delete';
import {useForm} from "../../../Talons/TasksPage/Form/useForm";

const Form = props => {
    const classes = useStyle();
    const {
        handleClose,
        handleChangeReload
    } = props;

    const {
        item,
        status,
        labels,
        storyPoint,
        inputTask,
        inputDescription,
        handleStatus,
        handleLabels,
        handleStoryPoint,
        handleSubmit,
        handleUpdate,
        handleDelete
    } = useForm({
        handleClose,
        handleChangeReload
    });

    return (
        <div className={classes.form}>
            <div className={'row justify-content-between'}>
                <div className={'col-12 col-lg-7'}>
                    <div className={'row my-4'}>
                        <div className={'col'}>
                            <div className={'row'}>
                                <Typography variantMapping={'p'}>Task</Typography>
                            </div>
                            <div className={'row'}>
                                <TextField
                                    required
                                    label=""
                                    type={'text'}
                                    className={'col'}
                                    placeholder={'task'}
                                    inputRef={inputTask}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'row my-4'}>
                        <div className={'col'}>
                            <div className={'row'}>
                                <Typography variantMapping={'p'}>Description</Typography>
                            </div>
                            <div className={'row'}>
                                <TextField
                                    required
                                    label=""
                                    multiline
                                    maxRows={4}
                                    className={'col'}
                                    inputRef={inputDescription}
                                    placeholder={'Description'}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={['col-12 col-lg-4 px-4 py-2', classes.formRight].join(' ')}>
                    <div className={'row my-4'}>
                        <div className={'col-5'}>
                            <Typography variantMapping={'p'}>Status</Typography>
                        </div>
                        <div className={'col-7'}>
                            <FormControl fullWidth>
                                <Select
                                    value={status}
                                    onChange={handleStatus}
                                >
                                    <MenuItem value={'to-do'}>To Do</MenuItem>
                                    <MenuItem value={'in-progress'}>In Progress</MenuItem>
                                    <MenuItem value={'done'}>Done</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={'row my-4'}>
                        <div className={'col-5'}>
                            <Typography variantMapping={'p'}>Story Point</Typography>
                        </div>
                        <div className={'col-7'}>
                            <TextField
                                required
                                label=""
                                type={'number'}
                                placeholder={'1'}
                                className={'col'}
                                value={storyPoint}
                                onChange={handleStoryPoint}
                            />
                        </div>
                    </div>
                    <div className={'row my-4'}>
                        <div className={'col-5'}>
                            <Typography variantMapping={'p'}>Labels</Typography>
                        </div>
                        <div className={'col-7'}>
                            <Autocomplete
                                multiple
                                freeSolo
                                value={labels}
                                options={[]}
                                onChange={handleLabels}
                                getOptionLabel={(opt) => opt ? opt : ""}
                                renderInput={(params) => (
                                    <TextField
                                        fullWidth
                                        {...params}
                                        variant="outlined"
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row justify-content-end'}>
                <div className={'col-5 col-md-2 mt-4'}>
                    <Button
                        onClick={handleClose}
                        className={'col'}
                        variant="outlined"
                    >
                        Cerrar
                    </Button>
                </div>
                <div className={'col-5 col-md-3 mt-4'}>
                    <Button
                        className={'col'}
                        variant="contained"
                        onClick={!item ? handleSubmit : handleUpdate}
                    >
                        {!item ? 'Create' : 'Update'}
                    </Button>
                </div>
            </div>
            { item &&
            <div className={classes.containerDelete}>
                <Fab
                    aria-label="delete"
                    onClick={handleDelete}
                    classes={{root: classes.buttonDelete}}
                >
                    <DeleteIcon />
                </Fab>
            </div>
            }

        </div>
    );
}

export default Form;
