import React, { useRef } from "react";
const Form = ({ setTodos }) => {
  const inputReference = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputReference.current.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: inputValue,
        id: self.crypto.randomUUID(),
        is_completed: false,
      },
    ]);
    inputReference.current.value = "";
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          ref={inputReference}
        />
      </label>
      <button>
        <span className="text-large">Submit</span>
      </button>
    </form>
  );
};

export default Form;
