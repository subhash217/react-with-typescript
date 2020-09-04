import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

interface IPerson{
  name:string;
  age:number;
  company:string;
}

var Person:IPerson={
  name:'subash',
  age:28,
  company:'Infosys'
}
const myContext= React.createContext(Person)
console.log(myContext)
function initialSetup(){
  return(
    <React.StrictMode>
    <App name='subash' age={28} />
  </React.StrictMode>
  )
}

render(initialSetup() , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
