import { useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');


    return (
        <>
            <div>
                <h1>테스트</h1>
                <img src="c:\프로젝트 ver 0.1\project-app\src\picture\main.jpg" width="100%"/>
  
            </div>
            {/* {
                detail === 'true' && <h2>상세 내용입니다.</h2>
            } */}
        </>
    );
};
export default About;
