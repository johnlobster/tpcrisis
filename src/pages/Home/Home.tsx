import React from 'react';
import { Link } from 'react-router-dom';

// import TpLink from "../../components/TpLink/TpLink";
import hlink from "../../icons/icons8-linking-24.png";

import Calc from "./Calc";
import Jokes from "./Jokes";
import styles from "./Home.module.scss";

const Gap: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.gap}></div>
  );

}

const Home: React.FunctionComponent<{}> = () => {
  return( 
    <div>
      <div className={styles.page + " container-sm"}>
        <div className="row">
          <div className={styles.covid19 + " col-12"}>
            <br />
            <p className={styles.covidTitle}>
              The Coronavirus is real
          </p>
            <p>
              It's not a hoax. It has killed many people and will kill many more. Although this website is funny, the Coronavirus is not.
          </p>
            <p>
              <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
                Click here for information about the Coronavirus
            </Link>
            </p>
            <p>
              The toilet paper crisis is also real, which is much stranger. If Monty Python did a sketch about all the
              shelves being empty of toilet paper, we would laugh, but think that it was too far-fetched. Yet here we
              are, running low on bathroom supplies.
          </p>
            <p>
              This website is dedicated to the humorous and satirical side of our obsession with toilet paper during a
              pandemic. Partly because toilet humor has always been my specialty, partly for, well, other reasons.
          </p>
            <p>
              This page contains a toilet paper calculator, that works out how long you will be able to live in lock down
              without having to raid your neighbors' supplies. There are also some simple jokes about toilet paper
          </p>

            <div className={styles.covidLinkBox}>
              <p>
                Please click on the following links, or use the navigation menu to explore.
            </p>
              <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
                Information about the Coronavirus <img src={hlink} alt="Hyperlink" className={styles.hyperlink} /><br />
              </Link>
              <Gap />
              <Link to="#tpCalculator" role="button" aria-haspopup="true" aria-expanded="false">
                Toilet paper calculator, how close are we to the end of times ?<br />
              </Link>
              <Gap />
              <Link to="#tpJokes" role="button" aria-haspopup="true" aria-expanded="false">
                Toilet paper jokes, no guarantee of quality<br />
              </Link>
              <Gap />
              <Link to="/Alternatives" role="button" aria-haspopup="true" aria-expanded="false">
                Alternatives to toilet paper, you may need this<br />
              </Link>
              <Gap />
              <Link to="/Facts" role="button" aria-haspopup="true" aria-expanded="false">
                Interesting (or not) facts about toilet paper<br />
              </Link>
              <Gap />
              <Link to="/Insanity" role="button" aria-haspopup="true" aria-expanded="false">
                Crazy and funny things about toilet paper during pandemic<br />
              </Link>
              <Gap />
              <Link to="/Insanity" role="button" aria-haspopup="true" aria-expanded="false">
                Send new things about toilet paper or comments to this website<br />
              </Link>
              <Gap />
              <Link to="/About" role="button" aria-haspopup="true" aria-expanded="false">
                About this website and how to donate if you think throwing away money is a good idea<br />
              </Link>
              <Gap />
            </div>
          </div>
        </div>
      </div>

      <div id="tpCalculator">
        <Calc />
      </div>

      <div id="tpJokes">
        <Jokes />
      </div >

    </div>
    
  );
};

export default Home;