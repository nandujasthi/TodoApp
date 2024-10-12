import React from "react";

const TODOHero = ({ todo_completed, total_todos }) => {
  return (
    <section className="todohero_section">
      <div className="">
        <p className="text_large">Task Info</p>
      </div>
      <div>
        {todo_completed}/{total_todos}
      </div>
    </section>
  );
};

export default TODOHero;
