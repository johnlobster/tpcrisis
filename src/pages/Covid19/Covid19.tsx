import React from 'react';
// import { Link } from 'react-router-dom';

import styles from "./Covid19.module.scss";


const Covid19: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="col-12">
        I am a Covid19 page
      </div>
    </div>
  );
}
export default Covid19;
