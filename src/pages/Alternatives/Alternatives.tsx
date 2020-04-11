import React from 'react';
// import { Link } from 'react-router-dom';

import styles from "./Alternatives.module.scss";


const Alternatives: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        I am an Alternative  page
      </div>
    </div>
  );
}
export default Alternatives;
