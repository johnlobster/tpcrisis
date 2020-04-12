import React from 'react';
// import { Link } from 'react-router-dom';

import styles from "./Insanity.module.scss";


const Insanity: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        I am an insanity page
      </div>
    </div>
  );
}
export default Insanity;
