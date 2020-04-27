import React from 'react';
import { useLocation } from "react-router-dom";

import TpLink from '../../components/TpLink/TpLink';
import NoBreak from '../../components/NoBreak/NoBreak';
import tp from "../../images/empty-toilet-paper.jpg";
import hazard from "../../images/hazard.png";
import kitty from "../../images/tpCat.gif";

import styles from "./Tp404.module.scss";

const Tp404: React.FunctionComponent<{}> = () => {
  const location = useLocation();
  return (
    <div className={styles.page + " container-sm"}>

      <div className="row pt-4">
          <div className="col-4 col-md-3">
            <img src={hazard} alt="Hazard" className={`${styles.sign} ${styles.reflect}`}/>
          </div>

          <div className="col-8 col-md-6">
            <div className={styles.title4}>
              404
            </div>
            <div className={styles.hazard}>
              Toilet Paper <NoBreak>Failure !!</NoBreak>
            </div> 
          </div>
          
          <div className={styles.sign + " col-6 col-md-3 d-none d-md-block"}>
              <img src={hazard} alt="Hazard" className={styles.sign}/>
          </div>
        
      </div>

      <div className="row pt-4">
        <div className={styles.tp + " col-12 col-md-4"}>
          <img src={tp} alt="No paper left" />
        </div>
        <div className="col-12 col-md-8">
          <div className={styles.lost}>
            That means you got lost trying to get to the {location.pathname} page, how careless
              </div>
          <div className={styles.goHome}>
            <TpLink to="home">Click here to go back to the home page</TpLink>
          </div>
        </div>
      </div>
      
      <div className="row pt-4 pb-4">
        <div className={styles.cats + " col-12"}>
            <img src={kitty} alt="Cat shredding toilet roll" className={styles.kitty} />
        </div>
      </div>

    </div>
  );
}

export default Tp404;
