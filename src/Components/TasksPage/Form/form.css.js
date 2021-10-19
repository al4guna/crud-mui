import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    form: {
        position: "relative"
    },
    formRight: {
        borderRadius: "8px",
        border: "0.5px solid #e9e9e9"
    },
    containerDelete: {
        top: '-70px',
        left: "50%",
        position: "absolute",
        transform: "translateX(-50%)",
    },
    buttonDelete: {
        backgroundColor: "#fbdddd!important"
    }
});
