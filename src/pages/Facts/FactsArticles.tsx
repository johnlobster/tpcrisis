import React from "react";
import * as globalTypes  from "../../globals/globalTypes";

// import softness from "../../markdownish/FactsArticles/softness";
// import history from "../../markdownish/FactsArticles/history";


// list of articles. body can contain string literal or be read from another file
// prebuild script would convert markdown files into strings in a file that could be written into factsArticles
// note that images would have to be linked to. Might have to do /public/articleImages otherwise could be hard to
// refer to images

// History trial

const history: React.FunctionComponent = () => {
  return(
    <div>
      <p>This is a test paragraph</p>
      <h4>This is a test header</h4>
      <p>This is another paragraph</p>
      <p>More <strong>tags</strong>for fun</p>
    </div>
  );
}
// Note - body string is converted directly to html, not through jsx. So use class= instead of className=
const factsArticles: globalTypes.Article2[] = [
  
  
  {
    index: 0,
    title: "History of toilet paper",
    tag: "factsHistory",
    link: "The history of toilet paper, if you really have to know",
    body: history
  }
  
];

export default factsArticles;

// complete this article later
// {
//   index: 2,
//     title: "Other uses for Toilet Paper",
//       tag: "factsOtherUses",
//         link: "Things you can do with toilet paper, other than wiping your ...",
//           body: `
//     <div>
//       <p>
//         Halloween costume
//       </p>
//       <p>
//         TP a house
//       </p>
//       <p>
//         Football match
//       </p>
//     </div>
//     `
// }

// {
//   index: 0,
//     title: "History of toilet paper",
//       tag: "factsHistory",
//         link: "The history of toilet paper, if you really have to know",
//           body : history

// },

// {
//   index: 1,
//     title: "Strength, Softness and the Environment",
//       tag: "factsStrength",
//         link: "About strength, softness, and environment impact",
//           body: softness
// },