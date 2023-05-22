import React from 'react'
import { useState } from 'react';

export default function Navbar(props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : '#3d3d3d',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',

  }
  const [mode, setMode] = useState('Change Mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3d3d3d';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (<>
    <nav className=" border-gray-200 dark:bg-black">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl ml-2 md:ml-32 font-semibold whitespace-nowrap dark:text-white">My Text</span>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-400 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <label className="relative mr-9 inline-flex items-center cursor-pointer">
                <input style={mystyle} onClick={toggleMode} type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-5 text-sm  font-medium text-gray-900 dark:text-gray-300">{mode}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}