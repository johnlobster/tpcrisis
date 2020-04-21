import React from 'react';

import TpArticle from "../../components/TpArticle/TpArticle";

import styles from "./Facts.module.scss";


const Facts: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        <h1>I am a Facts page</h1>
      </div>
      <TpArticle sampleText="Hello there">
        <div>
          <h1>I am a child</h1>
        </div>
      </TpArticle>
    </div>
  );
}
export default Facts;
