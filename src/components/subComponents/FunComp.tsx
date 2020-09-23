import React, { useState, useEffect, useContext, useReducer } from "react";
import { myContext } from "../../index";
import { counterContext } from "../../header";

export function FunComp() {
  const [selectBox, setSelectBox] = useState<string>("");

  const handleChange = (event: any) => {
    setSelectBox(event.target.value);
  };
  function renderHandle(result: any) {
    if (result === "") {
      return <div></div>;
    } else if (result === "TodoWithUseReducer") {
      return <TodoWithUseReducer />;
    } else {
      return <CounterWithUseReducer />;
    }
  }

  return (
    <div>
      <label>Select useReducer Examples:</label>
      <select value={selectBox} onChange={handleChange}>
        <option value="">--select--</option>
        <option value="TodoWithUseReducer">Todo With UseReducer</option>
        <option value="CounterWithUseReducer">Counter With UseReducer</option>
      </select>
      {renderHandle(selectBox)}
    </div>
  );
}

// Todo with useReducer
type initState = {
  todos: string[];
};

type Actions = { type: "TODO-ADD"; inputValue: string };

const defaultState: initState = {
  todos: [],
};
function todoReducer(state: initState, action: Actions): initState {
  switch (action.type) {
    case "TODO-ADD":
      return {
        ...state,
        todos: [...state.todos, action.inputValue],
      };

    default:
      return state;
  }
}
const TodoWithUseReducer: React.FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const contextValue = useContext(myContext);
  const counterValue = useContext(counterContext);
  const [list, dispatch] = useReducer(todoReducer, defaultState);

  useEffect(() => {
    console.log("TodoWithUseReducer Mounted..!!"); // effects

    return () => {
      console.log("TodoWithUseReducer unMounted..!!");
    };
  }, []);

  function handleChange(e: any) {
    setName(e.target.value);
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    const inputValue = name;
    dispatch({ type: "TODO-ADD", inputValue });
  };
  return (
    <div>
      <b>Todo App with UseReducer</b>
      <div>
        <form onSubmit={(e) => submitHandler(e)}>
          <label>Todo:</label>
          <input type="text" value={name} onChange={(e) => handleChange(e)} />
          <button>Add</button>
          <button onClick={() => setName("")}>Clear</button>
        </form>
      </div>
      <div>
        <ul>
          {list.todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Counter With useReducer
type State = {
  count: number;
};

type Action = { type: "ADD" } | { type: "DEC" };

const initialValue: State = {
  count: 0,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    case "DEC":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const CounterWithUseReducer: React.FunctionComponent = () => {
  const [result, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    console.log("CounterWithUseReducer Mounted..!!"); // effects like api calls DOM Updation

    return () => {
      console.log("CounterWithUseReducer unMounted..!!");
    };
  }, []);

  return (
    <div>
      <b>Counter With useReducer</b>
      <p>Count value:{result.count}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};
