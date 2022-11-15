import { parseStyle } from '@windboxes/core';
import tailwind from './tailwind.module.css';



export default function windboxes(styles: string | string[]) {
  return parseStyle(styles, tailwind);
}
