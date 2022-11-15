import tailwind from './tailwind.module.css';
import { parseStyle } from '@windboxes/core';



export default function windboxes(styles) {
  return parseStyle(styles, tailwind);
}
