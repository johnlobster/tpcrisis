import React from 'react';
import { Link } from 'react-router-dom';

import Calc from "./Calc";
import Jokes from "./Jokes";
import styles from "./Home.module.scss";

const Gap: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.gap}></div>
  );

}

const Home: React.FunctionComponent<{}> = (props) => {
  return( 
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className={styles.covid19 + " col-12"}>
          <br />
          <p className={styles.covidTitle}>
            The Coronavirus is real
          </p>
          <p>
            It has killed many people and will kill many more. Although this website is funny, the Coronavirus is not.
          </p>
          <p>
            <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
              Click here for more information about the Coronavirus
            </Link>
          </p>
          <p>
            The toilet paper crisis is also real, which is much stranger. If Monty Python did a sketch about all the
            shelves being empty of toilet paper, we would laugh, but think that it was too far-fetched. Yet here we
            are, running low on bathroom supplies
          </p>
          <p>
            This website is dedicated to the humorous and satirical side of our obsession with toilet paper during a 
            pandemic, partly because toilet humor has always been my specialty. I know that some may find some objectionable words on 
            this site, but I'm afraid that that is always the result of discussing bodily functions 
          </p>
          <p>
            This page contains a toilet paper calculator, that works out how long you will be able to live in lock down
            without having to raid your neighbors' supplies. There are also some simple jokes about toilet paper
          </p>
          <p>
            Please click on the following links, or use the navigation menu to explore. 
          </p>
          <div>
            <Link to="/Covid19" role="button" aria-haspopup="true" aria-expanded="false">
              Click here for more information about the Coronavirus<br/>
            </Link>
            <Gap />
            <Link to="/Alternatives" role="button" aria-haspopup="true" aria-expanded="false">
              Click here to find some alternatives to toilet paper, you may need this<br/>
            </Link>
            <Gap />
          </div>
        </div>
      </div>
      <Calc />
      <Jokes />
    </div>
  );
};

export default Home;