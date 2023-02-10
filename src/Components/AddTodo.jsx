import { useState } from "react";
import instance from "../\bAPI/api";

export default function AddTodo({ setTodo }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      instance
        .post("/todos", {
          todo: value,
        })
        .then((res) => {
          setValue("");
          setTodo((prev) => [...prev, res.data]);
        });
    } else {
      alert("할일을 입력하세요");
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <h2>Todo</h2>
      <div>
        <input
          data-testid="new-todo-input"
          onChange={onChange}
          value={value}
          placeholder="할일을 추가하세요"
          onKeyUp={handleKeyUp}
        />
        <button data-testid="new-todo-add-button" onClick={handleSubmit}>
          추가
        </button>
      </div>
    </>
  );
}
