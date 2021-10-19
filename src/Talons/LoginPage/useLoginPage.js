import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../redux/action/userAction";

export const useLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const sendData = async () => {
        try {
            // const res = await axios.post('http://dev.nexttruck.draketechdev.ca:3600/api/login', {
            //     email,
            //     password
            // });
            dispatch(loginAction({
                user: {
                    name: "oscar"
                },
                login: true,
                token: 'token'
            }))
            history.push('/home')
        }catch (e){
            console.log(e);
        }
    }

    return {
        email,
        password,
        sendData,
        handleChangeEmail,
        handleChangePassword
    }
}
