import React from 'react';
import TpLink from "../../components/TpLink/TpLink";
import NoBreak from "../../components/NoBreak/NoBreak";

import styles from "./Calc.module.scss";

const Calc: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.calculatorBox + " container-sm"}>

      <div className="row mt-4">
        <div className={styles.title + " col-12 col-md-7"}>
          Toilet paper calculator
        </div>
        <div className={styles.howLong + "col-12 col-md-5"}>
          How long before you run out of toilet paper ?
        </div>
      </div>
    
      <div className="row">
        <div className="col-12">
          The calculator
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h5>How many toilet rolls do I use in a <NoBreak>year ?</NoBreak></h5>
          <p>
            I did extensive research on this topic (Google and Bing), and found a huge variation in numbers
          </p>
          <p>Between <strong>50 and 150</strong> rolls per year. I have used 100 as the starting point in the calculator, you can adjust up or down</p>
          <p>
            Of course, these numbers were quoted without analysis of how long the toilet roll was, how thick the sheets were and so on,
            really not very scientific at all.
            I'm sure that there is a big variation due to nationality. Probably a big difference between men and women, 
            but I'm not going to go there.
          </p>
          <p>
            So there isn't really a clear answer, unless you are prepared to measure for a year, like 
            <TpLink to="https://joshmadison.com/2007/05/09/toilet-paper-usage-analysis/">Josh Madison</TpLink>.
            Click on his name to see his analysis. You could count how many sheets you use each trip, multiply by the number of trips
            per day and then multiply by the number of days in a year, but I think that is taking the whole thing far too seriously.
          </p>
          <p>
            So go with your gut.
          </p>
          

        </div>
      </div>

    </div>
  );
};

export default Calc;