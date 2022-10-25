import React from 'react';
import type { GatsbyBrowser } from "gatsby";

import "./src/styles/global.css";
import { TailwindStyledProvider } from "@windboxes/core";
import twStyles from './src/styles/tailwind.module.css';



// Wraps every page in a component
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <TailwindStyledProvider tailwind={twStyles as any}>{element}</TailwindStyledProvider>
  );
};