import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TODOitem from "./TODOitem";

const TODO = () => {
  const [todoList, settodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newtodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    settodoList((prev) => [...prev, newtodo]);
    inputRef.current.value = "";
  };

  const deletetodo = (id) => {
    settodoList((prvtodo) => {
      return prvtodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    settodoList((prvtodo) => {
      return prvtodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-[#adb5bd] flex w-11/12 max-w-md place-self-center flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-9" src={todo_icon} alt="todo icon" />

        <h1 className="text-3xl font-bold relative group hover:text-[#212529]">
  To-Do-List
  <span className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full bg-[#9d0208] transition-all duration-500"></span>
</h1>

      </div>

      <div className="bg-gray-200 rounded-full my-7 flex items-center ">
        <input
          ref={inputRef}
          className="bg-transparent flex-1 outline-none h-14 py-2 pl-6 placeholder:text-slate-900 text-xl font-bold"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-[#ffa200] h-14 w-32 text-white text-lg font-medium cursor-pointer hover:not-focus:bg-[#ff9500]"
        >
          ADD +
        </button>
      </div>

      <div>
        {todoList.map((item) => (
          <TODOitem
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            toggle={toggle}
            deleteTodo={deletetodo} // Pass delete function down
          />
        ))}
      </div>
    </div>
  );
};

export default TODO;
