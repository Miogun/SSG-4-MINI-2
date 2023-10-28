import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggedIn = false;   // 로그인되지 않은 상태라는 것을 가정

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <div>마이 페이지</div>
    );
};
export default MyPage;
