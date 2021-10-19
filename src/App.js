import React from 'react';
import { useStyle } from './app.css';
import 'bootstrap-4-grid/css/grid.css';
import Routes from "./Components/Routes";
import { GlobalStyles } from '@mui/material';

function App() {
    const classes = useStyle();

    return (
        <div className={classes.app}>
            <GlobalStyles />
            <Routes/>
        </div>
    );
}

export default App;
