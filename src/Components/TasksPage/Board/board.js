import React from 'react';
import { useStyle } from './board.css';
import Item from "../Item";
import {Typography} from "@mui/material";
import { useBoard } from "../../../Talons/TasksPage/Board/useBoard";

const Board = props => {
    const classes = useStyle();
    const { reload } = props;
    const {
        todo,
        done,
        inProgress
    } = useBoard({reload});

    return (
        <div className={'row justify-content-around'}>
            <div className={['col-3', classes.list].join(' ')}>
                <div className={'row'}>
                    <div className={'col pt-4 text-center'}>
                        <Typography>To Do</Typography>
                    </div>
                </div>
                {
                    todo.map((e, k) => {
                        return (
                            <div className={'row'} key={k}>
                                <div className={'col'}>
                                    <Item {...e}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={['col-3', classes.list].join(' ')}>
                <div className={'row'}>
                    <div className={'col pt-4 text-center'}>
                        <Typography>In Progress</Typography>
                    </div>
                </div>
                {
                    inProgress.map((e, k) => {
                        return (
                            <div className={'row'} key={k}>
                                <div className={'col'}>
                                    <Item {...e} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={['col-3', classes.list].join(' ')}>
                <div className={'row'}>
                    <div className={'col pt-4 text-center'}>
                        <Typography>Done</Typography>
                    </div>
                </div>
                {
                    done.map((e, k) => {
                        return (
                            <div className={'row'} key={k}>
                                <div className={'col'}>
                                    <Item {...e} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Board;
