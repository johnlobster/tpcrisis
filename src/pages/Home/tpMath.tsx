// calculate how much toilet paper left and return as a string
// utility function for Calc module

export default function tpMath(rollsLeft: number, rollsPerYear: number, numPeople: number):string {
  const consumption: number = numPeople * (rollsPerYear / 52);
  const weeksLeft: number = Math.floor(rollsLeft / consumption);
  const daysLeft: number = Math.round(rollsLeft % consumption);
  console.log("People " + numPeople + " Weeks " + (rollsLeft / consumption) + " Weeks left " + weeksLeft + " days " + daysLeft)

  let outString: string = "";
  if (weeksLeft === 0) {
    if (daysLeft === 0) {
      outString = "TPCRISIS NO TOILET PAPER";
    }
    else if (daysLeft === 1) {
      outString = "OH NO! ONLY ONE DAY LEFT";
    } else {
      outString = "OH NO! ONLY " + daysLeft.toFixed(0) + " DAYS LEFT";
    }
  }
  else if (weeksLeft === 1) {
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
    if (daysLeft === 0) {
      outString = weeksLeft.toFixed(0) + " weeks left";
    }
    else if (daysLeft === 1) {
      outString = weeksLeft.toFixed(0) + " weeks, one day left";
    }
    else {
      outString = weeksLeft.toFixed(0) + " weeks, " + daysLeft.toFixed(0) + " days left";
    }
    
  }
  return outString;
}
