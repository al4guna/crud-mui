import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    item: {
        height: "100px",
        cursor: "pointer",
        margin: "10px 5px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        overflow: "hidden",

        '&:hover': {
            backgroundColor: '#e5e5e5'
        }
    },
    content: {
        textAlign: "center"
    },
    text: {
        color: "#282828"
    }
});
