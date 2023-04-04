import React from 'react'

function Navbar() {
  return (

    <nav className="bg-slate-800 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WikiCountries</span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

        </div>
      </div>
    </nav>

  )
}

export default Navbar