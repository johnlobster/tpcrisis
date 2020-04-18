import React from 'react';
import { Link } from 'react-router-dom';

import "../../globals/styles.scss";
import styles from "./TpHeader.module.scss";
import virus from "../../images/covid_19_1.png";
import roll from "../../images/tRoll2.png";

// bootstrap display class are used to make images and text appear in different orders

const TpHeader: React.FunctionComponent<{}> = () => {
  return (
    <div  className={styles.tpContainer + " container-sm"}>
      <div className="row">
        
        <div className="col-6 col-md-2 tpFlexCenterContents">
          <Link
            to="/Covid19"
            role="button" aria-haspopup="true" aria-expanded="false"> 
            <img className={`${styles.im} ${styles.imVirus}`} src={virus} alt="Nasty virus. Click to go to the covid 19 page"></img>                                                                                                                                                                          
          </Link>
        
        </div>

        <div className="col-6 col-md-2 d-flex d-md-none tpFlexCenterContents">
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
        
        <div className="col-6 col-md-2 d-none d-md-flex tpFlexCenterContents">
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