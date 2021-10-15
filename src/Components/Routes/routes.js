import React, { Suspense, lazy} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const LoginPage = lazy( () => import("../LoginPage/loginPage"));

const Routes = () => {
    return (
        <Suspense fallback={'loading ...'}>
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <LoginPage />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;
