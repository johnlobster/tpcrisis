import React from 'react';

import TpLink from "../TpLink/TpLink";
import NoBreak from "../NoBreak/NoBreak";
import styles from "./TpFooter.module.scss";
import cookie from "../../images/cookie.gif";



const TpFooter: React.FunctionComponent<{}> = () => {
  return (
    <div  className = {styles.tpContainer + " container-sm" } >
      <div className="row pt-2">
        <div className={styles.cookieBox + " col-12 col-md-4 tpFlexCenterContents"}>
          <img src={cookie} alt="No cookies here" className={styles.cookie}/>
        </div>
        <div className={styles.noCookiesBox + " col-12 col-md-8"}>
          <p className={styles.footerTitle}>
              This website serves no <NoBreak>cookies !!</NoBreak>
          </p>
          <p>
            This website collects no data and uses no cookies or other similar technologies. There is no advertising,
            so no secret cookies, tracking, 0 pixel ads, or anything like that. Not even Facebook and Google will know that 
            you are here. I hope that doesn't make you feel lonely.
            <br />
            <br />
            <TpLink to="/About">
              Click here to find out more about the lack of cookies
            </TpLink>
          </p>
            
          
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-md-6">
          <div>
            Have the best toilet paper joke on the planet ? 
            <br />
            Know something cool ? 
          </div>
          <TpLink to ="/Contribute">
            Click here to send me some great stuff
          </TpLink>
          <br />
          <TpLink to="/About">
            Click here to find out more about this website
          </TpLink>
        </div>

        <div className="col-12 col-md-6">
            
          {/* <TpLink to="/About">
            Click here to make a donation
          </TpLink> */}
        </div>

      </div>

      <div className="row pb-2 pt-2">
        <div className={styles.copyright + " col-12"}>
          <TpLink to="/About">
            © 2020 John Webster MIT licence
          </TpLink>
        </div>
      </div>

    </div>
  );
};

export default TpFooter;

// ToDo add coin gif or something similar to the donate box. Probably whole thing should be clickable

// ToDo add donation link etc.

