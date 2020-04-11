import React from 'react';
// import { Link } from 'react-router-dom';

import styles from "./Facts.module.scss";


const Facts: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        I am a Facts page
      </div>
    </div>
  );
}
export default Facts;
