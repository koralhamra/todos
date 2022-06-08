import React from "react";

interface Props {
  setInputText: (input: string) => void;
  todos: {
    id: number;
    completed: boolean;
    text: string;
  }[];
  setTodos: (
    todos: {
      id: number;
      completed: boolean;
      text: string;
    }[]
  ) => void;
  inputText: string;
}

const Form = (props: Props) => {
  const { setInputText, todos, setTodos, inputText } = props;

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = () => {
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Add your new todo"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};
export default Form;
