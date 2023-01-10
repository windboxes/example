import { parseStyle } from '@windboxes/core';
import tailwind from './tailwind.module.css';



export default function styled(styles) {
  return parseStyle(styles, tailwind);
}
