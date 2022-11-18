import tailwind from "./tailwind.module.css";
import { parseStyle } from "@windboxes/core";



export default function styled(styles) {
  return parseStyle(styles, tailwind);
}
