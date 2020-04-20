import React from 'react';
import TpLink from "../../components/TpLink/TpLink";
import NoBreak from "../../components/NoBreak/NoBreak";

import styles from "./Calc.module.scss";



interface Props { }

// the number of rolls per year, as input by the user. Change in state causes a redraw of the results
interface CalcState {
  rollsPerYear: number,
  rollsLeft: number,
  announce: string
};
class Calc extends React.Component<Props, Partial<CalcState>> {

  state: CalcState = {
    rollsPerYear: 100,
    rollsLeft: 12,
    announce: "Start me up ..."
  };

  // ToDo tpCalc doesn't work properly when loaded. Need to change tpCalc to work off inputs, then use in HandleChange() 

  // calculate how much toilet paper left and return as a string
  tpMath: () => string = () => {
    const weeksToGo: number = this.state.rollsLeft / (this.state.rollsPerYear / 52);
    const daysLeft: number = Math.floor(weeksToGo % 7);
    const weeksLeft: number = Math.floor(weeksToGo);
    console.log("Weeks " + weeksToGo + " Weeks left " + weeksLeft + " days " + daysLeft)
    let outString: string = "";
    if ( weeksLeft === 0) {
      if ( daysLeft === 0) {
        outString = "TPCRISIS NO TOILET PAPER";
      } 
      else if (daysLeft === 1) {
        outString = "OH NO! ONLY ONE DAY LEFT";
      } else {
        outString = "OH NO! ONLY " + daysLeft.toFixed(0) + " DAYS LEFT";
      }
    }
    else if ( weeksLeft === 1) {
      if (daysLeft === 0) {
        outString = "HELP, ONE WEEK LEFT";
      } 
      else if (daysLeft === 1) {
        outString = "OH NO! ONLY ONE WEEK, ONE DAY LEFT";
      }
      else {
        outString = "OH NO! ONLY ONE WEEK, " + daysLeft.toFixed(0) + " DAYS LEFT";
      }
    }
    else {
      outString = weeksLeft.toFixed(0) + " weeks, " + daysLeft.toFixed(0) + " days left";
    }
    return outString;
  }

  // componentDidMount() {
  //   this.tpMath();
  // }

  handleInputChange = (event: React.FormEvent<HTMLInputElement> ):void =>  {
    event.preventDefault();
    const {name, value} = event.target as HTMLInputElement;
    console.log("Change event " + name + " new value " + value);
    if( name === "rPerYear") {
      this.setState( {
        rollsPerYear: Number(value)
      })
    }
    else {
      this.setState({
        rollsLeft: Number(value)
      })
    }
  }

  render() {

    return (
      <div className={styles.calculatorBox + " container-sm"}>

        <div className="row mt-4 mb-4">
          <div className={styles.title + " col-12 col-md-7"}>
            Toilet paper calculator
          </div>
          <div className={styles.howLong + " col-12 col-md-5"}>
            How long before you run out of toilet paper ?
          </div>
        </div>
      
        <div className="row ">
          <div className= {styles.showBox + " col-12 col-md-4"}>
            <div>
              <div className={styles.show}>
                {this.state.announce}
              </div>
            </div>
          </div>

          <div className={styles.tpInputBox + " col-12 col-md-8"}>

            <div className={styles.rollBox}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="rPerYear"
                  type="number"
                  name="rPerYear"
                  value={this.state.rollsPerYear}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className={styles.rollBox}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="rLeft"
                  type="number"
                  name="rLeft"
                  value={this.state.rollsLeft}
                  onChange={this.handleInputChange}
                />
              </div>
              
            </div>
            <div>Test</div>
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
  }
};

export default Calc;

{/* <div onSubmit={this.handleSubmit} className={styles.tpInputBox + " col-12 col-md-8"}> */ }
