import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";
import { useReducer, useState } from "react";

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];
//     case "REMOVE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const [state, localDispatch] = useReducer(todoReducer, []);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <div className="form-wrapper">
        <input
        className="input"
          type="text"
          placeholder="Enter a text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
