import React from "react";


export type JokeList = string[];

// ToDo make ScreenType string enum

export enum ScreenType { Mobile, Tablet, Desktop };

export type NavItem = [string, string];
export type NavList = NavItem[];

// info for articles
// index:  index number of article. This needs to be kept constant so that articles can move around, but anything seo created
//         will still be valid. Not sure whether really need this
// title:  Article title
// image:  Optional. Something to go with title that shows off article
// link:   Text to be used for links that point to this article
// tag:    id="" field for Article
// body:   string that can contain html. Will be inserted as innerHTML into article when instantiated on page

export type Article2 = {
  index: number,
  title: string,
  tag: string,
  image?: string | undefined,
  link: string,
  body: React.FunctionComponent
}
// making the body jsx allows easier input and stops us having to insert body string as html

export type Article = {
  index: number,
  title: string,
  tag: string,
  image?: string | undefined,
  link: string,
  body: string
}

export type ContributeReturn = {
  succeed: boolean, 
  responseString : string
}

// types used by comments in toilet roll calculator
export type RollsLeftInfo = {
  maxNumber: number,
  comment: string,
  colour: string
}
export type RollsLeftInfoList = RollsLeftInfo[];

export type PeopleInfo = {
  maxNumber: number,
  comment: string,
  colour: string
}
export type PeopleInfoList = PeopleInfo[];

export type PerYear = {
  maxNumber: number,
  comment: string,
  colour: string
}
export type PerYearList = PerYear[];


// might add htmlTitle - put into document.title for improved seo. All page strings, data should really be here


// not just types but some constants

// window sizing breakpoints in px (same as Bootstrap). Not all used in this app
export const windowXS: number = 576; // x small (less than)
export const windowMobile: number = 576; // small (greater than or equal)
export const windowTablet: number = 768; // medium
export const windowDesktop: number = 992; // large
export const windowXL: number = 1200; // x large
