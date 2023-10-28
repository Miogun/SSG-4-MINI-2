import { useParams } from "react-router-dom";

// 사용자 정보
const userData = {
    mrgo: {
        name: '고길동', 
        desc: '둘리를 싫어하는 자'
    }, 
    mrhong: {
        name: '홍길동', 
        desc: '호부호형을 원하는 자'
    }
};

// 파라미터로 전달된 userid와 일치하는 사용자 정보를 출력
const Profile = () => {                         // /profile/mrgo 형식으로 접근한 경우
    const params = useParams();                 // { userid: "mrgo" } 형식으로 전달
    const profile = userData[params.userid];    // { name: '고길동', desc: '둘리...' }
    return (
        <>
            {
                profile ? (
                    <div>
                        <p>이름: {profile.name}</p>
                        <p>설명: {profile.desc}</p>
                    </div>
                ) : (
                    <div>일치하는 사용자가 없습니다.</div>
                )
            }
        </>
    );
};
export default Profile;
