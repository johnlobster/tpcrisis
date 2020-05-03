// comments/information about inputs to calculator
// e.g. do you wipe at all? for too little toilet paper

import * as globals from "../globals/globalTypes";

export const rollsLeftData: globals.RollsLeftInfoList = [
  {
    maxNumber: 0,
    comment: "Are you in debt to the toilet paper mafia ?",
    colour: "red",  
  },
  {
    maxNumber: 1,
    comment: "Time to panic",
    colour: "red",
  },
  {
    maxNumber: 2,
    comment: "Don't let anyone touch your last roll !!",
    colour: "red",
  },

  {
    maxNumber: 7,
    comment: "A six pack or less. I would start getting worried if I were you.",
    colour: "red",
  }, {
    maxNumber: 25,
    comment: "Should be good for a while",
    colour: "red",
  },
  {
    maxNumber: 40,
    comment: "Seems like you are well prepared ",
    colour: "green",
  },
  {
    maxNumber: 10000,
    comment: "You're a hoarder !! ",
    colour: "red",
  }

];

export const numberOfPeopleData: globals.PeopleInfoList = [
  {
    maxNumber: 1,
    comment: "What are you, a serial killer ?",
    colour: "red",
  },
  {
    maxNumber: 2,
    comment: "You must be lonely",
    colour: "orange",
  },
  {
    maxNumber: 3,
    comment: "Very cosy",
    colour: "green",
  },
  {
    maxNumber: 8,
    comment: "A good group of people",
    colour: "green",
  },
  {
    maxNumber: 20,
    comment: "That's a team, not a household",
    colour: "orange",
  },
  {
    maxNumber: 10000,
    comment: "What kind of place is this with so many people ? A secret cult ?",
    colour: "red",
  }

];

export const rollsPerYearData: globals.PerYearList = [
  {
    maxNumber: 0,
    comment: "Do you poop out toilet paper ?",
    colour: "red",
  },
  {
    maxNumber: 15,
    comment: "Do you even wipe ?",
    colour: "red",
  },
  {
    maxNumber: 40,
    comment: "I see you're trying to save money by using as little toilet paper as possible",
    colour: "green",
  },
  {
    maxNumber: 80,
    comment: "Not using too much toilet paper, very environmentally sound",
    colour: "green",
  },
  {
    maxNumber: 120,
    comment: "You seem very average",
    colour: "green",
  },
  {
    maxNumber: 150,
    comment: "You know, thats a lot of toilet paper",
    colour: "green",
  },
  {
    maxNumber: 200,
    comment: "I have a feeling that your drains get blocked up a lot",
    colour: "red",
  },
  {
    maxNumber: 10000,
    comment: "I think there's something wrong with your digestive system",
    colour: "red",
  }

];