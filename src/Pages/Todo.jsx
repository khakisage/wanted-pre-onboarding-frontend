/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import instance from "../\bAPI/api";
import AddTodo from "../Components/AddTodo";
import Todolist from "../Components/Todolist";
export default function Todo() {
  const [todo, setTodo] = useState(undefined);

  const handleEdit = (id, title, isCompleted) => {
    instance
      .put(`/todos/${id}`, {
        todo: title,
        isCompleted: isCompleted,
      })
      .then((res) => {
        console.log(res);
        setTodo(
          todo.map((todo) => {
            if (todo.id === id) {
              todo.todo = title;
              todo.isCompleted = isCompleted;
            }
            return todo;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    instance
      .delete(`/todos/${id}`)
      .then((res) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("JWT");
    if (token) {
      instance.get("/todos").then((res) => {
        setTodo(res.data);
      });
    }
  }, []);

  const todoFormStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "80vh",
    margin: "0",
    padding: "0",
  });

  return (
    <>
      <form css={todoFormStyle}>
        <AddTodo todo={todo} setTodo={setTodo} />
        <Todolist
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </form>
    </>
  );
}
