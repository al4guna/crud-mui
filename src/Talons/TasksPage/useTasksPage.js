import { useState, useEffect } from "react";
import {
    useParams,
    useHistory
} from "react-router-dom";
import { getParams } from "../../Utils/helpers";

export const useTasksPage = () => {
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const params = useParams();
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChangeReload = () => {
        setReload(!reload);
    }

    useEffect(() => {
        try {
            const idTask = getParams('task');
            if(idTask) {
                setOpen(true);
            }
        }catch (e) {
           console.log(e);
        }
    }, [params]);

    useEffect(() => {
        try {
            const idTask = getParams('task');
            if(idTask && !open) {
                history.push('/tasks');
            }
        }catch (e) {
            console.log(e);
        }
    }, [open, history])

    return {
        open,
        reload,
        handleOpen,
        handleClose,
        handleChangeReload
    }
}
