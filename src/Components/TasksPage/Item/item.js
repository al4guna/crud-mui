import React from 'react';
import { useStyle } from './item.css';
import { useItem } from "../../../Talons/TasksPage/Item/useItem";

const Item = props => {
    const classes = useStyle();
    const { _id, task } = props;
    const { handleOpen } = useItem({_id});


    return(
        <div className={classes.item} onClick={handleOpen}>
            <div className={classes.content}>
                <p className={classes.text}>{task}</p>
            </div>
        </div>
    )
}

export default Item;
