import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./TpNavMobile.module.scss";
import { tpNavList} from "./links";


// ToDo - something nicer than Menu + button. Hamburger
// ToDo - toilet paper theming of some kind. Drop shadow when open
const TpNavMobile: React.FunctionComponent = () => {
  return (
    <div className={styles.topBox + " container-sm"}>
      <div className="row">
        <div className="col-3">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Menu
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {tpNavList.map((item, index) => {
                return (
                  <Link
                    className="dropdown-item"
                    to={item[0]}
                    key={`key_${index}`}
                  >
                    {item[1]}
                  </Link>
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