import React from 'react';
import { useLocation } from "react-router-dom";
import TpLink from '../TpLink/TpLink';

import styles from "./TpNavMobile.module.scss";
import { tpNavList} from "./links";

import tpIcon from "../../images/tRollIcon.png";
import hamburger from "../../images/hamburgerWhite.png";


// ToDo - something nicer than Menu + button. Hamburger
// ToDo - toilet paper theming of some kind. Drop shadow when open

// See also notes in Desktop
const TpNavMobile: React.FunctionComponent = () => {
  const location = useLocation();
  const locationRegExp = new RegExp(`\\${location.pathname}`, "i");
  return (
    <div className={styles.topBox + " container-sm"}>
      <div className="row">
        <div className="col-3">
          <div className="dropdown">
            <button className={"btn my-btn-primary dropdown-toggle " + styles.menuButton} type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <span className={styles.menuContentBox}>
                <img className={styles.hamburger} src={hamburger} alt="Menu hamburger, press for dropdown menu" />
                Menu
              </span>
            </button>
            <div className={styles.dropdownBox + " dropdown-menu"} aria-labelledby="dropdownMenuButton">
              {tpNavList.map((item, index) => {
                return (
                  <div className={styles.stripey}>
                    <TpLink
                      className={styles.dropItem + " dropdown-item"}
                      to={item[0]}
                      key={"navM_" + index.toString()}
                    >
                      {locationRegExp.test(item[0]) &&
                        <img
                          src={tpIcon}
                          alt="small icon of toilet paper roll"
                          className={styles.iconStyle} />}
                      {item[1]}
                    </TpLink>
                  </div>
                  
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
              
  );
}

export default TpNavMobile;