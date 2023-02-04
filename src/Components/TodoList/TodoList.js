import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../todoReducer";
import { useState } from "react";
import { update } from "../../todoReducer";
function TodoList() {
  //give  data provided by todoSelector from todoReducer
  const value = useSelector(todoSelector);
  const [todoText, setText] = useState();
  const [todoIndex, setIndex] = useState();

  //for update and delete
  const dispatch = useDispatch();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>To Do</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>

      {value.map((i, index) => (
        <tbody>
          <tr>
            <td className="taskheading">
              {todoIndex !== index && i}
              {todoIndex === index && (
                <input
                  type="text"
                  className="todoText form-control"
                  value={todoText}
                  onInput={(e) => {
                    setText(e.target.value);
                    setIndex(todoIndex);
                  }}
                />
              )}
            </td>
            <td>
              {todoIndex !== index && (
                <button
                  className="btn btn-warning update"
                  onClick={() => {
                    setText(i);
                    setIndex(index);
                  }}
                >
                  Update
                </button>
              )}
              {todoIndex === index && (
                <button
                  className="btn btn-success update"
                  onClick={() => {
                    dispatch(update({ text: todoText, index: todoIndex }));
                    // to hide textbox and input field
                    setText();
                    setIndex();
                  }}
                >
                  Save
                </button>
              )}
            </td>
            <td>
              <button className="btn btn-danger delete">Delete</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default TodoList;
