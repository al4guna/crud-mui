import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    button: {
        right: '16px',
        bottom: '16px',
        position: 'absolute'
    },
    modal: {
        top: '50%',
        left: '50%',
        width: '85%',
        padding: '40px',
        borderRadius: '8px',
        position: 'absolute',
        backgroundColor: '#fff',
        transform: 'translate(-50%, -50%)',
    }
});
