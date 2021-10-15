import './App.css';
import 'bootstrap-4-grid/css/grid.css';
import Routes from "./Components/Routes";
import { GlobalStyles } from '@mui/material';

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes/>
        </>
    );
}

export default App;
