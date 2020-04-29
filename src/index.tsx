import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import * as serviceWorker from './serviceWorker';

console.log("before react render");
const booty: HTMLElement | null = document.getElementById("bootstrapStylesheet");
const reactCss: HTMLElement | null = document.getElementById("reactStylesheet");
// could probably getElementByTag link and run through them, identifying "main\."
console.log("hack hack hack");
console.log(booty);
console.log(reactCss);

if( booty) {
  booty.setAttribute("media", "all");
}
if( reactCss) {
  reactCss.setAttribute("media", "all");
}
console.log("End hack");
console.log();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
