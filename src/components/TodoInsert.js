import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { useState } from 'react';

const TodoInsert = ({ insertTodo }) => {	
    const [value, setValue] = useState('');
    const handlerChange = e => setValue(e.target.value);

    const handlerSubmit = e => {
        e.preventDefault();			
        insertTodo(value);
        setValue('');
    };
    return (
        <>
            <form className="TodoInsert" onSubmit={handlerSubmit}>
                <input type="text" placeholder="할일을 입력하세요." value={value} onChange={handlerChange} />
                <button type="submit"><MdAdd /></button>
            </form>
        </>
    );
};
export default TodoInsert;
