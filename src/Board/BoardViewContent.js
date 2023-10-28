import './BoardDetail.css'

import React, {useState, useEffect} from "react";
import axios from 'axios';

const BoardViewContent = () =>{
    const boardId = 1;
    // 게시판상세정보
    const [ boardDatas, setBoardDatas] = useState([{}]);
    // 게시판 데이터 가져오기

    // useEffect(() => {
    //     axios.get('/boardDetail')
    //     .then(res => {
    //     setBoardDatas(res.data.filter(d=>d.boardId == 1));
    //     }).catch(err => console.log(err));
    // }, []);

    useEffect((boardId) => {
        axios.get('/boardDetail?boardId=',boardId)
        .then(res => {

        console.log("===========================");
        console.log("res",res);
        setBoardDatas(res.data);
        console.log("res",res);
        setBoardDatas(res.data);
        }).catch(err => console.log(err));
    }, []);
    console.log('BoardViewContent- boardDatas : ', boardDatas);

    return(
        <div className="BoardViewContent">
            <div className="title">
                {boardDatas[0].title}   
            </div>
            <div className="info">
                <dl>
                    <dt>번호</dt>
                    <dd>{boardDatas[0].boardId}</dd>
                </dl>
                <dl>
                    <dt>글쓴이</dt>
                    <dd>{boardDatas[0].userId}</dd>
                </dl>
                <dl>
                    <dt>작성일</dt>
                    <dd>{boardDatas[0].updateAt}</dd>
                </dl>
                <dl>
                    <dt>지역</dt>
                    <dd>{boardDatas[0].location}</dd>
                </dl>
            </div>
            <textarea readOnly value={boardDatas[0].content}></textarea>
        </div>
    );
};
export default BoardViewContent;