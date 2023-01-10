import { parseStyle } from '@windboxes/core';
import tailwind from './tailwind.module.css';



export default function styled(styles: string | string[]) {
  return parseStyle(styles, tailwind);
}
