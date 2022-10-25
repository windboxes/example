type CSSModuleClasses = { readonly [key: string]: string }

// declare module '*.css' {
//   const content: { [className: string]: string };
//   export default content;
// }

declare module '*.module.css' {
  const classes: CSSModuleClasses
  export default classes
}

declare module '*.css' {
  const css: string
  export default css
}