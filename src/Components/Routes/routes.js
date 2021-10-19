import React, { Suspense, lazy} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Authorization from "../Authorization";

const HomePage = lazy(() => import("../HomePage/homePage"));
const TasksPage = lazy(() => import("../TasksPage/tasksPage"));
const LoginPage = lazy( () => import("../LoginPage/loginPage"));

const Routes = () => {
    return (
        <Suspense fallback={'loading ...'}>
            <Router>
                <Switch>
                    <Authorization>
                        <Route exact path={"/"}>
                            <LoginPage />
                        </Route>
                        <Route exact path={"/home"}>
                            <HomePage />
                        </Route>
                        <Route exact path={"/tasks"}>
                            <TasksPage />
                        </Route>
                    </Authorization>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;
