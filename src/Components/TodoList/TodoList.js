import "./TodoList.css";
import { useSelector } from "react-redux";
import { todoSelector } from "../../todoReducer";

function TodoList() {
  //give  data provided by todoSelector from todoReducer
  const value = useSelector(todoSelector);
  console.log(value);

  return (
    <ul className="list">
      {value.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
  );
}

export default TodoList;
