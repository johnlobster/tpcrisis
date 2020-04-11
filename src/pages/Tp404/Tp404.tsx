import React from 'react';
// import { Link } from 'react-router-dom';

import styles from "./Tp404.module.scss";


const Tp404: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        I am a 404 page
      </div>
    </div>
  );
}
export default Tp404;
