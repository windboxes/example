import './style.css'
import tailwind from './tailwind.module.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { parseStyleToString } from '@windboxes/core';



const FlexStyles = parseStyleToString('text-3xl flex items-center', tailwind);
const HelloWorldClasses = parseStyleToString('text-3xl font-bold underline', tailwind);



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="${FlexStyles}">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <h1 class="${HelloWorldClasses}">
      Hello world!
    </h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
