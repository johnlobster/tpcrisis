import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./TpHeader.module.scss";
import virus from "../../images/covid_19_1.png";
import roll from "../../images/tRoll2.png";

// bootstrap display class are used to make images and text appear in different orders

const TpHeader: React.FunctionComponent<{}> = () => {
  return (
    <div  className={styles.tpContainer + " container-sm"}>
      <div className="row">
        
        <div className={styles.imBox + " col-6 col-md-2"}>
          <Link
            to="/Covid19"
            role="button" aria-haspopup="true" aria-expanded="false"> 
            <img className={`${styles.im} ${styles.imVirus}`} src={virus} alt="Nasty virus"></img>                                                                                                                                                                          
          </Link>
        
        </div>

        <div className={styles.imBox + " col-6 col-md-2 d-block d-md-none"}>
          <Link
          to="/Home"
          role="button" aria-haspopup="true" aria-expanded="false">
            <img className={`${styles.im}  ${styles.imTP}`} src={roll} alt="Toilet paper"></img>
          </Link>
        </div>

        <div className={styles.title + " col-12 col-md-8"}>
          <Link
            to="/Home"
            role="button" aria-haspopup="true" aria-expanded="false">
              Toilet Paper Crisis
          </Link>
        </div>
        
        <div className={styles.imBox + " col-6 col-md-2 d-none d-md-block"}>
          <Link
            to="/Home"
            role="button" aria-haspopup="true" aria-expanded="false">
            <img className={`${styles.im}  ${styles.imTP}`} src={roll} alt="Toilet paper"></img>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default TpHeader;