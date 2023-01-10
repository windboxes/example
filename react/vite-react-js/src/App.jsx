import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import styled from './windboxes';



const logoLayoutClasses = styled('mb-10 flex align-center justify-center');

const logoClasses = 'w-[7rem] h-[7rem] m-5';
const viteLogoClasses = styled(logoClasses + ' hover:drop-shadow-[0_0_2em_#646cffaa]');
const reactLogoClasses = styled(logoClasses + ' hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[logo-spin_infinite_20s_linear]');

const cardClasses = styled('p-10');
const buttonClasses = styled('m-5 p-2 rounded-md border-2 border-transparent hover:bg-gray-50 hover:border-gray-200 active:bg-gray-100 duration-100');

const readTheDocsClasses = styled('text-[#888] mt-5');



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className={logoLayoutClasses}>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={viteLogoClasses} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={reactLogoClasses} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={cardClasses}>
        <button
          className={buttonClasses}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={readTheDocsClasses}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
