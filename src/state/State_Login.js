import { useState } from "react";


function State_Login() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const [backgroundColor, setBackgroundColor] = useState('white');


    const handlerClickEnter = () => setMessage('로그아웃');
    const handlerClickLeave = () => setMessage('회원탈퇴');


    return (
        <>
            <p>{message}</p>


            <button onClick={handlerClickEnter}>로그아웃</button>
            <button onClick={handlerClickLeave}>회원탈퇴</button>

        </>
    );
}
export default State_Login;