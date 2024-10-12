import React, { useRef, useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <TodoItem key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>
          Looks like you have nothing in the List, Please add a few to see the
          List
        </p>
      )}
    </ol>
  );
};

const TodoItem = ({ item, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const compltedTask = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };
  const editTask = () => {
    setEditing(true);
  };
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left" onClick={compltedTask}>
        <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
          <circle
            cx="11.998"
            cy="11.998"
            fillRule="nonzero"
            r="9.998"
            stroke="#22C55E"
            strokeWidth="1"
          />
        </svg>
        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
      </button>
      <div className="todo_items_right">
        <button onClick={editTask}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
          </span>
        </button>
        <button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
          </span>
        </button>
      </div>
    </li>
  );
};
export default TodoList;
