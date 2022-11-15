import tailwind from "./tailwind.module.css";
import { parseStyle } from "@windboxes/core";



export default function styled(styles: string | string[]) {
  return parseStyle(styles, tailwind);
}
