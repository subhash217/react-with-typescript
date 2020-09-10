import * as React from "react";

interface IProps {
  heading: string;
  click: () => void;
}

interface State {
  count: number;
}

export const counterContext = React.createContext(0);
export const Header: React.FC<IProps> = (props) => {
  const [count, setCount] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const myRef = React.useRef<HTMLDivElement | null>(null);
  const newRef = React.useRef<HTMLParagraphElement>(null);

  console.log(myRef, newRef);
  const add = () => {
    setCount(count + 1);
  };

  const rem = () => {
    setCount(count - 1);
  };

  function userChange(e: any) {
    setName(e.target.value);
  }
  return (
    <div>
      <counterContext.Provider value={count}>
        <h1>{props.heading}</h1>
        <p>{count}</p>
        <button onClick={add}>Add</button>
        <button onClick={rem}>Rem</button>
        <input
          type="text"
          value={name}
          onChange={(event) => userChange(event)}
        />
        <div onClick={props.click} ref={myRef}>
          click
        </div>
        <p ref={newRef}>subash</p>
      </counterContext.Provider>
    </div>
  );
};
