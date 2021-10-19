import React from 'react';
import { useStyle } from './app.css';
import 'bootstrap-4-grid/css/grid.css';
import Routes from "./Components/Routes";
import { GlobalStyles } from '@mui/material';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./redux/reducers/userReducer";

const initialState = {
    user: {},
    token: '',
    login: false
}

const store = createStore(
    userReducer,
    initialState,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        // eslint-disable-next-line
    }) || compose
);

function App() {
    const classes = useStyle();

    return (
        <div className={classes.app}>
            <Provider store={store}>
                <GlobalStyles />
                <Routes/>
            </Provider>

        </div>
    );
}

export default App;
