import React, { Suspense, lazy} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const HomePage = lazy(() => import("../HomePage/homePage"));
const TasksPage = lazy(() => import("../TasksPage/tasksPage"));
const LoginPage = lazy( () => import("../LoginPage/loginPage"));

const Routes = () => {
    return (
        <Suspense fallback={'loading ...'}>
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <TasksPage />
                    </Route>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                    <Route exact path={"/"}>
                        <LoginPage />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;
