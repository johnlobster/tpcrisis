import React from 'react';

import TpArticle from "../../components/TpArticle/TpArticle";
import alternativesArticles from "./alternativesArticles";

import styles from "./Alternatives.module.scss";

// ToDo - add this into useEffect as anonymous function
// ToDo - move into TpArticle
const tfn: () => void = () => {
  alternativesArticles.forEach((article) => {
    const x: HTMLElement | null = document.getElementById(article.tag);
    if (x) {
      x.innerHTML = article.body;
    }
  });
}


const Alternatives: React.FunctionComponent<{}> = () => {

  React.useEffect(tfn, []);

  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className={styles.pageTitle + " col-12"}>
          Don't despair, when we run out of toilet paper, there are still options
        </div>
      </div>

      <div className="row">
        <div className=" col-12">
          <div className={styles.warning}>
            Public service announcement !!
          </div>
          <p className={styles.warningText}>
            Toilet paper is intended to be flushed away. Other things, not so much. Plumbers are very very busy 
            during this pandemic. Keep your pipes clean.
          </p>
        </div>
      </div>
        
      <div id="emergencyTp" className="row">
        <div className=" col-12">
          <div className={styles.emergencyTitle}>
            Free Emergency Toilet Paper
          </div>
          <p>
            We know that things can get desperate, so click below to print free toilet paper
          </p>
          <div>
            Link to print pdf of emergency toilet paper
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className=" col-12">
          <h4>List of articles</h4>
          <ul>
            {alternativesArticles.map((article) => {
              return (
                <li key={article.index}>
                  {article.link}
                </li>
              )
            }
            )}
          </ul>
        </div>
        <br />
      </div>

      {alternativesArticles.map((article) => {
        return (
          <TpArticle key={article.index} articleObj={article}>
            <div id={article.tag}>
            </div>
          </TpArticle>
        );
      })
      }

    </div>
  );
}
export default Alternatives;
