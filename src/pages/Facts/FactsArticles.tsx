import * as globalTypes  from "../../globals/globalTypes";

import softness from "../../markdownish/FactsArticles/softness";
import history from "../../markdownish/FactsArticles/history";


// list of articles. body is jsx component. Could add option for other formats or strings, etc. but no real need
// prebuild script would convert markdown files into strings in a file that could be written into factsArticles
// note that images would have to be linked to. Might have to do /public/articleImages otherwise could be hard to
// refer to images

const factsArticles: globalTypes.Article[] = [
  
  
  {
    index: 0,
    title: "History of toilet paper",
    tag: "factsHistory",
    link: "The history of toilet paper, if you really have to know",
    body: history
  },
  {
    index: 1,
    title: "Strength, Softness and the Environment",
    tag: "factsStrength",
    link: "About strength, softness, and environment impact",
    body: softness
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
