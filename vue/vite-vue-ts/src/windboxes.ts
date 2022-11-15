import tailwind from './tailwind.module.css';
import { parseStyle } from '@windboxes/core';



export default function windboxes(styles: string | string[]) {
  return parseStyle(styles, tailwind);
}
