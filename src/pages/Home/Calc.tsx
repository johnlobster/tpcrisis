import React from 'react';
import TpLink from "../../components/TpLink/TpLink";
import NoBreak from "../../components/NoBreak/NoBreak";

import styles from "./Calc.module.scss";
import tpMath from "./tpMath";

import * as tpData from "../../markdownish/calculatorComments";

interface Props { }

interface CalcState {
  rollsPerYear: number,
  rollsLeft: number,
  numPeople: number,
  numPeopleString: string,
  rollsLeftString: string,
  rollsPerYearString: string
};
class Calc extends React.Component<Props, Partial<CalcState>> {

  // The comments are a list of elements - here I hard code comments for initial values
  state: CalcState = {
    rollsPerYear: 100,
    rollsLeft: 12,
    numPeople: 2,
    numPeopleString: tpData.numberOfPeopleData[2].comment,
    rollsLeftString: tpData.rollsLeftData[4].comment,
    rollsPerYearString: tpData.rollsPerYearData[5].comment
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement> ):void =>  {
    event.preventDefault();
    // To do change something so user can enter '-'
    const {name, value} = event.target as HTMLInputElement; // target properties are strings
    if( name === "rPerYear") {
      // negative values allowed so sarcastic remarks can be made. Check no divide by zero
      if( Number(value) >= -1 ) { 
        this.setState({
          rollsPerYear: Number(value)
        });
        for (let i: number = 0; i < tpData.rollsPerYearData.length; i++) {
          if (Number(value) < tpData.rollsPerYearData[i].maxNumber) {
            this.setState({ rollsPerYearString: tpData.rollsPerYearData[i].comment });
            break;
          }
        }
      }
    }
    else if( name === "nPeople") {
      if (Number(value) >= -1) { 
        this.setState({
          numPeople: Number(value)
        });
        for (let i: number = 0; i < tpData.numberOfPeopleData.length; i++) {
          if (Number(value) < tpData.numberOfPeopleData[i].maxNumber) {
            this.setState({ numPeopleString: tpData.numberOfPeopleData[i].comment });
            break;
          }
        }
      }
    } 
    else {
      if (Number(value) >= -1) { 
        this.setState({
          rollsLeft: Number(value)
        });
        for (let i: number = 0; i < tpData.rollsLeftData.length; i++) {
          if (Number(value) < tpData.rollsLeftData[i].maxNumber) {
          this.setState({ rollsLeftString: tpData.rollsLeftData[i].comment });
          break;
        }
      }
      }
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
                {tpMath(this.state.rollsLeft, this.state.rollsPerYear, this.state.numPeople)}
              </div>
            </div>
          </div>

          <div className={styles.tpInputBox + " col-12 col-md-8"}>
            <div className="row">

              <div className="col-6">
                <div className={styles.rollBox}>
                  <div className="form-group">
                    <label htmlFor="rLeft">Rolls left</label>
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
              </div>

              <div className="col-6">
                <div className={styles.tpCommentBox}>
                  {this.state.rollsLeftString}
                </div>
              </div>

            </div>
            
            <div className="row">
              <div className="col-6">
                <div className={styles.rollBox}>
                  <div className="form-group">
                    <label htmlFor="nPeople">Number of people</label>
                    <input
                    className="form-control"
                    id="nPeople"
                    type="number"
                    name="nPeople"
                    value={this.state.numPeople}
                    onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className={styles.tpCommentBox}>
                  {this.state.numPeopleString}
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-6">
                <div className={styles.rollBox}>
                  <div className="form-group">
                    <label htmlFor="rPerYear">Number of rolls per year</label>
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
              </div>

              <div className="col-6">
                <div className={styles.tpCommentBox}>
                  {this.state.rollsPerYearString}
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <h4>How many toilet rolls do I use in a <NoBreak>year ?</NoBreak></h4>
            <p>
              I did extensive research on this topic (Google and Bing), and found a huge variation in numbers
            </p>
            <p>
              Between <strong>50 and 150</strong> rolls per year. I have used 100 as the starting point in the calculator, 
              you can adjust up or down. That's two rolls a week per person. The 100 number is from a plumber's website. They
              know more about what gets flushed down toilets than most people.
            </p>
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

