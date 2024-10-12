"use client";
import Image from "next/image";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

export default function Home() {
  // console.log(self.crypto.randomUUID(), "unique id");
  const [todos, setTodos] = useState([]);
  const todo_completed = todos?.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos?.length;
  return (
    <div>
      <Header />
      <TODOHero todo_completed={todo_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
