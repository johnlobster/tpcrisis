import React from 'react';
import { Link } from 'react-router-dom';

import * as global from "../../globals/globalTypes";

import styles from "./TpNav.module.scss";
import { tpNavList} from "./links";

interface Props {
  cScreen: global.ScreenType
}


const TpNav: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div>
        <h2>
          {(props.cScreen === global.ScreenType.Mobile) ? (
        "Mobile"
      ) : (
        "Desktop"
        )}
        </h2>
      </div> 
      <div className={(props.cScreen === global.ScreenType.Mobile) ? (
          styles.mobileMenu
        ) : (
          styles.desktopMenu
        )}>
          <div className="container-sm">
            <div className="row">
              <div className="col-4">
                <Link to="/Facts">Temporary link</Link>
                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MENU
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                </Link>
              </div>
            </div>
          </div>
        

      </div>
        

    </div>
  );
}

export default TpNav;