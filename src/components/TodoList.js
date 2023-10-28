import TodoListItem from "./TodoListItem";
import './TodoList.css';

const TodoList = ({todos, removeTodo, toggleCheck}) => {
    return (
        <>
            <div className="TodoList">
                {/* <TodoListItem />
                <TodoListItem />
                <TodoListItem /> */}
                {
                    todos.map(todo => <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleCheck={toggleCheck} />)
                }
            </div>
        </>
    );
};
export default TodoList;
