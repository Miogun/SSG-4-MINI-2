import { useState } from "react";


function State_Logout() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const [backgroundColor, setBackgroundColor] = useState('white');


    const handlerClickEnter = () => setMessage('회원가입');
    const handlerClickLeave = () => setMessage('로그인');


    return (
        <>
            <p>{message}</p>


            <button onClick={handlerClickEnter}>회원가입</button>
            <button onClick={handlerClickLeave}>로그인</button>

        </>
    );
}
export default State_Logout;