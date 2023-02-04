import { useState } from "react";
import { add } from "../../todoReducer";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        className="form-control"
        onInput={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button
        className="btn btn-success float-end mt-2"
        onClick={(e) => {
          e.preventDefault();
          dispatch(add(value));
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
