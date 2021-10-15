import React from 'react';
import {TextField, Button, Typography} from "@mui/material";
import { useLoginPage } from "../../Talons/LoginPage/useLoginPage";

const LoginPage = () => {
    const {
        email,
        password,
        sendData,
        handleChangeEmail,
        handleChangePassword
    } = useLoginPage();

    return (
        <div className={'min-vh-100 d-flex justify-content-center align-items-center'}>
            <div className={'container'}>
                <div className={'row justify-content-center'}>
                    <div className={'col col-sm-9'}>
                        <div className={'row justify-content-center my-3'}>
                            <div className={'col-12 col-md-8 col-lg-6'}>
                                <Typography>Inicio de sesión</Typography>
                            </div>
                        </div>
                        <div className={'row justify-content-center my-3'}>
                            <div className={'col-12 col-md-8 col-lg-6'}>
                                <TextField
                                    required
                                    label="Email"
                                    value={email}
                                    className={'col'}
                                    onChange={handleChangeEmail}
                                />
                            </div>
                        </div>
                        <div className={'row justify-content-center my-3'}>
                            <div className={'col-12 col-md-8 col-lg-6'}>
                                <TextField
                                    required
                                    type="password"
                                    label="Password"
                                    value={password}
                                    className={'col'}
                                    onChange={handleChangePassword}
                                />
                            </div>
                        </div>
                        <div className={'row justify-content-center my-3'}>
                            <div className={'col-12 col-md-8 col-lg-6'}>
                                <Button
                                    className={'col'}
                                    variant="contained"
                                    onClick={sendData}
                                >
                                    Iniciar Sesión
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
