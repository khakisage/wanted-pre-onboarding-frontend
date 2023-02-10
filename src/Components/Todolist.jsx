/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Loading from "../Pages/Loading";
import Button from "./Button";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";
export default function Todolist({ todo, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleEdits = (id, isComplete) => {
    if (edit === id) {
      return;
    }
    setValue(todo.find((item) => item.id === id).todo);
    setEdit(id);
    setChecked(isComplete);
  };

  const handleChecked = (id) => {
    setChecked(!checked);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    handleEdit(edit, value, checked);
    setChecked(undefined);
    setEdit(undefined);
    setValue("");
  };

  if (!todo) {
    return <Loading />;
  }

  if (todo && todo.length === 0) {
    return <div>할 일이 없습니다.</div>;
  }

  const todoStyle = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50px",
    margin: "5px",
    padding: "5px",
  });

  return (
    <>
      {todo.map((todo) => {
        return (
          <li>
            <label
              css={todoStyle}
              key={todo.id}
              onClick={() => {
                handleEdits(todo.id, todo.isCompleted);
              }}
            >
              {edit && edit === todo.id ? (
                <div>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChecked}
                  />
                  <input
                    type="text"
                    data-testid="new-todo-input"
                    defaultValue={todo.todo}
                    onChange={onChange}
                  />
                  <Button onClick={handleSubmit}>수정</Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEdit(undefined);
                    }}
                  >
                    취소
                  </Button>
                </div>
              ) : (
                <>
                  {todo.isCompleted ? (
                    <MdOutlineCheckBox size="25" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank size="25" />
                  )}
                  <div>{todo.todo}</div>
                  <div>
                    <RiEditBoxLine size="25" />
                    <RiDeleteBin5Line
                      size="25"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(todo.id);
                      }}
                    />
                  </div>
                </>
              )}
            </label>
          </li>
        );
      })}
    </>
  );
}
