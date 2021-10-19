import React from 'react';
import { useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const Authorization = props => {
    const state = useSelector(state => state)
    const history = useHistory();
    const location = useLocation();

    if(location.pathname !== "/" && !state.login) {
        history.push("/");
    }
    if(location.pathname === "/" && state.login){
        history.push("/")
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default Authorization;
