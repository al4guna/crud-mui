import {useState} from "react";
import axios from "axios";

export const useLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const sendData = async () => {
        try {
            const res = await axios.post('http://dev.nexttruck.draketechdev.ca:3600/api/login', {
                email,
                password
            });
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
