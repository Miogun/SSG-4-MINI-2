import React, {useState, useEffect} from "react";
import axios from 'axios';
import BoardTitle from "./BoardTitle";
import BoardView from "./BoardView";
import './BoardDetail.css'
const BoardDetail = () =>{
    // // 게시판상세정보
    // const [ boardDatas, setBoardDatas] = useState([{}]);
    // // 게시판 데이터 가져오기
    // useEffect(() => {
    //     axios.get('/boardDetail')
    //     .then(res => {
    //     setBoardDatas(res.data);
    //     }).catch(err => console.log(err));
    // }, []);
    // console.log('boardDatas : ', boardDatas);

    return(
        <>
            <h1>boardDetail page 입니다.</h1>
            <hr />
            <div className="BoardWrap">  
                <BoardTitle />
                <BoardView />
            </div>
        </>
    );
}
export default BoardDetail;