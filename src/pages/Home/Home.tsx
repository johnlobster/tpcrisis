import React from 'react';
import { Link } from 'react-router-dom';

import TpLink from "../../components/TpLink/TpLink";

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
              It's not a hoax, it's not a lie. It is very infectious, has killed many people around the world and will kill many more. Although this 
              website is funny, the Coronavirus is not.
            </p>
            <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
                Click here for information about the Coronavirus
            </Link>
            <Gap />
            <p>
              The toilet paper crisis is also real, which is much stranger. If Monty Python did a sketch about all the
              shelves being empty of toilet paper, we would laugh, but think that it was too far-fetched. Yet here we
              are, running low on bathroom supplies. Click below for some essential tools
            </p>
            <TpLink scroll={true} to="#tpCalculator">
              Toilet paper calculator, how long before raiding neighbors' supplies ?
            </TpLink>
            <Gap />
            <TpLink scroll={true} to="#tpJokes">
              Toilet paper jokes, no guarantee of quality or softness<br />
            </TpLink>
            <Gap />
            <p>
              This website is dedicated to the humorous and satirical side of our obsession with toilet paper during a
              pandemic. Partly because toilet humor has always been my specialty, partly for, well, other reasons.
            </p>

            <div className={styles.covidLinkBox}>
              <p>
                Please click on the following links, or use the navigation menu to explore.
              </p>
              <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
                Information about the Coronavirus<br />
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