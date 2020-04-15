import React from 'react';
import styles from "./Contribute.module.scss";


const Contribute: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className="col-12">
          <h1>I am the Contribute page</h1>
        </div>
      </div>
    </div>
  );
}

export default Contribute;