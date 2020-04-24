import React from 'react';
import ReactDOM from 'react-dom';

export type JokeList = string[];

// ToDo make ScreenType string enum

export enum ScreenType { Mobile, Tablet, Desktop };

export type NavItem = [string, string];
export type NavList = NavItem[];

export type Article = {
  index: number,
  title: string,
  tag: string,
  image?: string | undefined,
  link: string,
  component: HTMLElement
}
// not just types but some constants

// window sizing breakpoints in px (same as Bootstrap). Not all used in this app
export const windowXS: number = 576; // x small (less than)
export const windowMobile: number = 576; // small (greater than or equal)
export const windowTablet: number = 768; // medium
export const windowDesktop: number = 992; // large
export const windowXL: number = 1200; // x large
