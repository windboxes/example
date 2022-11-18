import { parseStyle } from '@windboxes/core';
import tailwind from './tailwind.module.css';



interface CSSModules {
  [key: string]: string;
}



export default function styled(styles: string | string[]) {
  return parseStyle(styles, tailwind as CSSModules);
}
