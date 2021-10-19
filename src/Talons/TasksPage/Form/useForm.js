import {useRef, useCallback, useState} from 'react';
import axios from "axios";
import { url } from "../../../Utils/const";

export const useForm = () => {
    const inputTask = useRef(null);
    const inputDescription = useRef(null);
    const [status, setStatus] = useState('to-do');
    const [labels, setLabels] = useState([]);
    const [storyPoint, setStoryPoint] = useState('');

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
        }catch (e) {
           console.log(e);
        }

    }, [parserData])

    return {
        status,
        labels,
        storyPoint,
        inputTask,
        inputDescription,
        handleStatus,
        handleLabels,
        handleStoryPoint,
        handleSubmit
    }
}

// description: "Create GTM Module"
// labels: ['gtm']
// status: "to-do"
// storyPoint: "2"
// task: "GTM"
// _id: "616e894897069d03e848f10a"
