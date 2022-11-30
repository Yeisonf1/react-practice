import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Solo from './dev-pro';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elementOneRoot = <h1>Hola primer elemento del root por fuera
   del modo estricto</h1>
   const elementTwo = <h1>COntiene segundo parametro</h1>
root.render(

  elementOneRoot

);



 // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
