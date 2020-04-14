import React from 'react';

import TpLink from "../TpLink/TpLink";
import styles from "./TpFooter.module.scss";
import cookie from "../../images/cookie.gif";

const NoBreak: React.FunctionComponent<{}> = (props) => {
  return (
    <span className={styles.noBreak}>{props.children}</span>
  );

}

const TpFooter: React.FunctionComponent<{}> = () => {
  return (
    <div  className = {styles.tpContainer + " container-sm" } >
      <div className="row pt-2">
        <div className={styles.cookieBox + " col-12 col-md-5"}>
          <img src={cookie} alt="No cookies here" className={styles.cookie}/>
        </div>
        <div className={styles.noCookiesBox + " col-12 col-md-7"}>
          <p className={styles.footerTitle}>
              This website serves no <NoBreak>cookies !!</NoBreak>
          </p>
          <p>
            This website collects no data and uses no cookies or other similar technologies. There is no advertising,
            so no secret cookies, tracking, 0 pixel ads, or anything like that. Not even Facebook and Google will know that 
            you are here. I hope that doesn't make you feel lonely.
            <br />
            <TpLink to="/About">
              Click here to find out more about cookies
            </TpLink>
          </p>
          
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p>Send new stuff about toilet paper</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p>About link and donations go here</p>
        </div>
      
      </div>
      <div className="row pb-2">
        <div className={styles.copyright + " col-12"}>
          <TpLink to="/about">
            © 2020 John Webster MIT licence
          </TpLink>
        </div>
      </div>
    </div>
  );
};

export default TpFooter;

