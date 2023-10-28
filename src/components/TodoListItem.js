import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import './TodoListItem.css';

const TodoListItem = ({ todo, removeTodo, toggleCheck }) => {
    const { id, checked, text } = todo;
    return (
        <>
            <div className="TodoListItem">
                <div className={ checked ? "checkBox checked" : "checkBox" } onClick={() => toggleCheck(id)}>
                    { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                    <div className="text">{ text }</div>
                </div>
                <div className="remove" onClick={() => removeTodo(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </>
    );
};
export default TodoListItem;
