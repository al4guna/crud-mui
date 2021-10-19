import { useHistory } from "react-router-dom";

export const useItem = props => {
    const { _id } = props;
    const history = useHistory();

    const handleOpen = () => {
        history.push(`/tasks/?task=${_id}`);
    }

    return {
        handleOpen
    }
}
