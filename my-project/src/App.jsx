import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import PicReact from "../src/assets/picreact.png"
function App() {

  return (
    <>
 <Nav />
        <div className='landing'>
          <div className='land-l'>
             <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">This is My React Skills Training Web</h1>
          </div>
          <div className='land-r'>
            <img src={PicReact} alt="" />
          </div>
        </div>
    </>
  )
}

export default App
