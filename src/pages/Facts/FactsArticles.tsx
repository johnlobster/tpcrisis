import React from 'react';
import ReactDOM from 'react-dom';

import * as globalTypes  from "../../globals/globalTypes";


// list of articles. body can contain string literal or be read from another file
// prebuild script would convert markdown files into strings in a file that could be written into factsArticles
// note that images would have to be linked to. Might have to do /public/articleImages otherwise could be hard to
// refer to images
const factsArticles: globalTypes.Article[] = [
  {
    index: 0,
    title: "Test me out",
    tag: "t0",
    link: "Click on me",
    body : `
    <div>
      <h2>Hello<h2>
      <h2>From</h2>
      <h2>the test me out article</h2>
      <p>Aute est est consectetur consequat fugiat occaecat ex cupidatat commodo. Fugiat tempor ex Lorem sunt id officia do. Laboris anim id ad labore qui est elit anim ullamco laboris culpa. Lorem aliqua excepteur non laboris. Consequat amet pariatur non deserunt minim anim eu voluptate pariatur aliquip id qui. Laboris minim consequat labore velit aliquip. Id laboris quis eu duis deserunt dolor ullamco velit pariatur.</p>
    </div>
    `
  },
  {
    index: 1,
    title: "Hey what about me ?",
    tag: "t1",
    link: "Click on me for a different article",
    body: `
    <div>
      <h2>Goodbye<h2>
      <h2>From</h2>
      <h2>the test article</h2>
      <p>Reprehenderit nulla veniam aliquip do amet aliquip. Ullamco voluptate adipisicing excepteur anim culpa commodo ea in nostrud commodo est minim aute. Proident ipsum consectetur fugiat pariatur in veniam. Labore adipisicing velit sit exercitation cillum et excepteur. Voluptate nisi amet et ex elit cupidatat eiusmod aliquip minim elit. Reprehenderit reprehenderit Lorem sint adipisicing voluptate laboris sit.</p>
    </div>
    `
  }
];

export default factsArticles;


