import React from 'react';
import TpLink from '../TpLink/TpLink';

import styles from "./TpNavMobile.module.scss";
import { tpNavList} from "./links";

import hamburger from "../../images/hamburgerWhite.png";


// ToDo - something nicer than Menu + button. Hamburger
// ToDo - toilet paper theming of some kind. Drop shadow when open

// See also notes in Desktop
const TpNavMobile: React.FunctionComponent = () => {
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