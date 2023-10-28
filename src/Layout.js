import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import Login from "./Login";
import Say from './state/Say';

import State_Login from "./state/State_Login";  
import State_Logout from "./state/State_Logout";


const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goInfo = () => navigate('./SignUp');
    const goMain = () => navigate('./Main');
    return (
        <>
        <div>
            <header style={{ backgroundColor: 'white', padding: 16, fontSize: 20, textAlign: "center" }}>
                <h1>한걸음 대여소</h1>
            </header>

        </div>
        
        <div>
            <button onClick={goMain}>메인화면</button>
            <button onClick={Login}>로그인</button>
            <button onClick={goInfo}>회원가입</button>
            {/* <Say></Say> */}
            <State_Login></State_Login>
            <State_Logout></State_Logout>
              
    
        </div>
            
            <div>
                
                <header style={{ backgroundColor: 'lightgray', padding: 16, fontSize: 24 }}>
                    <ul>
                        {/* <li><Link to="/main">Main</Link></li> */} 
                        <li><Link to="/">공지사항</Link></li>
                        <li>
                            <NavLink to={({isActive}) => isActive ? "/state/State_Logout" : "/state/State_Login"}>소개</NavLink>
                        </li>
                        <li><Link to="/todo">할일</Link></li>
                        <li><Link to="/info">게시판</Link></li>
                        <li><Link to="/profiles">대여</Link></li>
                        <li><Link to="/Board/BoardDetail">게시판2</Link></li>
                        <li><Link to="/comment/Comment">방명록</Link></li>
                    </ul> 
                    <button onClick={goBack}>이전 페이지로 이동</button>
                    <button onClick={goInfo}>정보 페이지로 이동</button>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};
export default Layout;
