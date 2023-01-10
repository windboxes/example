import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {
  logoLayoutClasses,
  viteLogoClasses,
  reactLogoClasses,
  titleClasses,
  cardClasses,
  buttonClasses,
  readTheDocsClasses,
} from './app.styled';



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
      <h1 className={titleClasses}>Vite + React</h1>
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
