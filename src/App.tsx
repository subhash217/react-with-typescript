import * as React from 'react';
import './App.css';
import {Header} from './header';

interface Props{
  name:string,
  age:number
}

const App:React.FunctionComponent<Props>=props=> {

  function click(){
    console.log('clicked...!!')
  }
  return (
    <div className="App">
      {props.name}
      {props.age}
      <Header heading='Counter' click={click}/>
    </div>
  );
}

export default App;
