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
  const hostname = window.location.hostname;
  
  return (
    <div className={styles.page + " container-sm"}>

      <div className="row pt-4">
        <div className={styles.signBox + " col-3"}>
            <img src={hazard} alt="Hazard" className={`${styles.sign} ${styles.reflect}`}/>
          </div>

          <div className={styles.titleBox + " col-6"}>
            <div className={styles.title4}>
              404
            </div>
            <div className={styles.hazard}>
              Toilet Paper <NoBreak>Failure !!</NoBreak>
            </div> 
          </div>
          
          <div className={styles.signBox + " col-3"}>
              <img src={hazard} alt="Hazard" className={styles.sign}/>
          </div>
        
      </div>

      <div className="row pt-4 pb-4">
        <div className={styles.tpBox + " col-6 col-md-3"}>
          <img src={tp} alt="No Toilet paper left" />
        </div>

        <div className="col-12 col-md-6 d-none d-md-block">
          <div className={styles.lost}>
            That means you got lost trying to get to the {hostname}{location.pathname} page, how careless.
            Or maybe you got a virus
          </div>
          <br />
          <div className={styles.goHome}>
            <TpLink to="/Home">Click here to go to the home page</TpLink>
          </div>
        </div>

        <div className={styles.kittyBox + " col-6 col-md-3"}>
          <img src={kitty} alt="Cat shredding toilet roll" className={styles.kitty} />
        </div>
        
        <div className="col-12 col-md-6 pt-3 d-block d-md-none">
          <div className={styles.lost}>
            That means you got lost trying to get to the {hostname}{location.pathname} page, how careless
            Or maybe you got a virus
          </div>
          <div className={styles.goHome}>
            <TpLink to="/Home">Click here to go back to the home page</TpLink>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tp404;
