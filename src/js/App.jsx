import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="main">
            <div className="row">
                <div className="main-vertical side side-masked-border">
                    <div className="column">
                        <div className="side-name-container">
                            <div className="side-name-textbox">
                                <h1 className="side-name-text side-name-text-lower">A<span className="side-name-text-colored">P</span></h1>
                            </div>
                        </div>
                        
                        <ul>
                            <li className="side-menu-item"><a>home</a></li>
                            <li className="side-menu-item"><a>about me</a></li>
                            <li className="side-menu-item"><a>fun stuff</a></li>
                        </ul>
                        
                        <p className='side-copyright'><span className="copyright-symbol">©</span> 2024 Anna Pawlukiewicz </p>
                    </div>
                </div>
                <div className="main-vertical main-side-right">
                    <div className="horizontal-container">
                        <p>Oops! Nothing is here yet. The website is still being built!</p>
                    </div>
                </div>
            </div>
        </div>
      
      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count + 10}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
