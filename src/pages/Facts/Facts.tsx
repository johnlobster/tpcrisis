import React from 'react';
import ReactDOM from 'react-dom';

import TpArticle from "../../components/TpArticle/TpArticle";
import factsArticles from "./FactsArticles";

import styles from "./Facts.module.scss";

const t1 = "Hello from <strong>dom</strong> rendering";

// { factsArticles[0].component }
const taggy:string = "t1again";

const taggers:string[] = ["t1again", "t2thistime", "t3"];

const tfn: () => void = ()=> {
  taggers.forEach( (v,i) => {
    const x: HTMLElement | null = document.getElementById(v);
    if (x) {
      x.innerHTML = `<div><h2>Another stupid test number ${i}</h2></div>`;
    }
  })
  
  

}

// {
//   document.getElementById("t1again") ? (
//     document.getElementById("t1again").innerHTML = "<div><h2>Another stupid test</h2></div>"
//   ) : (
//     <div></div>
//   )
// }

const Facts: React.FunctionComponent = () => {

  React.useEffect(tfn,[]);

  // render() {
    return (
      <div className={styles.page + " container-sm"}>
        <h3>I don't deserve to be here</h3>
        <TpArticle sampleText="Hello there">
          <div>
            <h1>I am a child</h1>
            <p>String substitution{t1}</p>
            
            <div id="t1again">
            </div>
            <div id="t2thistime">
            </div>
            <div id="t3">
            </div>
            <p>OMG</p>

            
          </div>
        </TpArticle>
      </div>
    );

  
}
// const Facts: React.FunctionComponent<{}> = () => {
//   return (
//     <div className={styles.page + " container-sm"}>
//       <div className="col-12">
//         <h1>I am a Facts page</h1>
//       </div>
//       <p>I am {factsArticles[0].title}</p>
//       <TpArticle sampleText="Hello there">
//         <div>
//           <h1>I am a child</h1>
//           <p>String substitution{t1}</p>
          
//           <br />
//           <br />

//         </div>
//       </TpArticle>
//     </div>
//   );
// }
export default Facts;
