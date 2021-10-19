import {useEffect, useState} from "react";
import axios from "axios";
import { url } from "../../../Utils/const";

export const useBoard = props => {
    const { reload } = props;
    const [todo, setTodo] = useState([]);
    const [done, setDone] = useState([]);
    const [inProgress, setInProgress] = useState([]);

    const setListTodo = (data) => {
        const listD = data.filter((e) => e.status === 'done') || [];
        const listT = data.filter((e) => e.status === 'to-do') || [];
        const listI = data.filter((e) => e.status === 'in-progress') || [];
        setTodo(listT);
        setDone(listD);
        setInProgress(listI);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(`${url}/tasks`);
                setListTodo(data.data)
            }catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [reload]);

    return {
        todo,
        done,
        inProgress
    }
}
