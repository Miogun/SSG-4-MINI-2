import './BoardDetail.css'
import BoardViewButtons from './BoardViewButtons';
import BoardViewContent from './BoardViewContent';

const BoardView = () =>{
    return(
        <div className="BoardViewWrap">
            <BoardViewContent />
            <BoardViewButtons />
        </div>
    );
};
export default BoardView;