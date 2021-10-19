import {useEffect, useRef, useCallback, useState} from 'react';
import axios from "axios";
import { url } from "../../../Utils/const";
import {getParams} from "../../../Utils/helpers";

export const useForm = props => {
    const {
        handleClose,
        handleChangeReload
    } = props;
    const inputTask = useRef(null);
    const inputDescription = useRef(null);
    const [status, setStatus] = useState('to-do');
    const [labels, setLabels] = useState([]);
    const [storyPoint, setStoryPoint] = useState('');
    const [item, setItem] = useState(null);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleLabels = (_, v) => {
        setLabels(v);
    }

    const handleStoryPoint = (e) => {
        setStoryPoint(e.target.value);
    }

    const parserData = useCallback(() => {
        const task = inputTask.current.value;
        const description = inputDescription.current.value;
        return {
            task,
            status,
            labels,
            storyPoint,
            description,
        }
    }, [status, labels, storyPoint]);

    const handleSubmit = useCallback(async () => {
        try {
            const data = parserData();
            await axios.post(`${url}/tasks`, {
                ...data
            });
            handleClose();
            handleChangeReload();
        }catch (e) {
           console.log(e);
        }
    }, [parserData, handleClose, handleChangeReload])

    const handleUpdate = useCallback(async () => {
        const data = parserData();
        const idTask = getParams('task');
        await axios.put(`${url}/tasks/${idTask}`, {
            ...data
        });
        handleClose();
        handleChangeReload();
    }, [parserData, handleClose, handleChangeReload])

    const handleDelete =  async () => {
        try {
            const idTask = getParams('task');
            if(idTask) {
                await axios.delete(`${url}/tasks/${idTask}`);
                handleClose();
                handleChangeReload();
            }
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const idTask = getParams('task');
                if(idTask) {
                    setItem(true);
                    const res = await axios.get(`${url}/tasks/${idTask}`);
                    setLabels(res.data.labels || []);
                    setStatus(res.data.status || "to-do");
                    setStoryPoint(res.data.storyPoint || []);
                    inputTask.current.value = res.data.task || "";
                    inputDescription.current.value = res.data.description || "";
                }
            }catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])


    return {
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
    }
}
